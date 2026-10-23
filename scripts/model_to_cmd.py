import trimesh
import numpy as np
import os

def load_3d_model(file_path):
    """Load a 3D model file and return a trimesh mesh."""
    try:
        mesh = trimesh.load(file_path)
        
        # Check if the loaded object is a Scene (contains multiple meshes)
        if isinstance(mesh, trimesh.Scene):
            print("Scene detected, combining into a single mesh...")
            # Combine all geometries in the scene into a single mesh
            mesh = mesh.dump(concatenate=True)
            
        return mesh
    except Exception as e:
        print(f"Error loading model: {e}")
        return None

def voxelize_mesh(mesh, resolution):
    """Convert the mesh into voxels at the specified resolution."""
    voxels = mesh.voxelized(pitch=resolution)
    return voxels

def generate_build_commands(voxels, scale=1):
    """Generate building commands from voxel data."""
    # Use sparse_indices to get integer coordinates of occupied voxels
    # This prevents floating point issues where multiple points map to the same block
    indices = voxels.sparse_indices
    commands = []
    current_pos = [0, 0, 0]
    
    # Sort points by z, then y, then x for optimal building
    # indices are already integers, so this sorting is stable and correct
    sorted_indices = sorted(indices, key=lambda p: (p[1], p[2], p[0]))
    
    for point in sorted_indices:
        # Calculate shifts needed with scaling
        shifts = []
        for i, (curr, target) in enumerate(zip(current_pos, point)):
            # Apply scaling to the movement
            scaled_target = target * scale
            scaled_curr = curr * scale
            diff = int(scaled_target - scaled_curr)
            if diff != 0:
                axis = ['x', 'y', 'z'][i]
                shifts.append(f"/shift {axis} {diff}")
                current_pos[i] = target
        
        # Add shifts and place block
        commands.extend(shifts)
        commands.append("/s default:stone")
    
    return commands

def save_commands(commands, output_file):
    """Save the generated commands to one or multiple files if exceeding 30,000 lines."""
    MAX_LINES = 20000
    
    # Split into multiple files if needed
    if len(commands) > MAX_LINES:
        base_name, ext = os.path.splitext(output_file)
        num_files = (len(commands) + MAX_LINES - 1) // MAX_LINES
        
        for i in range(num_files):
            start_idx = i * MAX_LINES
            end_idx = min((i + 1) * MAX_LINES, len(commands))
            current_file = f"{base_name}_part{i+1}{ext}"
         
            with open(current_file, 'w') as f:
                for cmd in commands[start_idx:end_idx]:
                    f.write(cmd + '\n')
            print(f"Part {i+1} saved to: {current_file}")
    else:
        # Single file if under limit
        with open(output_file, 'w') as f:
            for cmd in commands:
                f.write(cmd + '\n')
        print(f"Commands saved to: {output_file}")

def main():
    # Get input from user
    model_path = input("Enter 3D model file path: ")
    resolution = float(input("Enter voxel resolution (smaller = finer detail): "))
    scale = int(input("Enter scale multiplier (1 = 1x, 2 = 2x, etc.): "))
    filename = input("Enter output filename (leave blank for model_name.txt): ")
    
    # Determine output filename
    if not filename:
        base_name = os.path.splitext(os.path.basename(model_path))[0]
        filename = f"{base_name}.txt"
    
    # Create output path in script's directory
    script_dir = os.path.dirname(os.path.abspath(__file__))
    output_file = os.path.join(script_dir, filename)
    print(f"Output path: {output_file}")
    
    # Load and process the model
    mesh = load_3d_model(model_path)
    if mesh is None:
        return
    
    # Convert to voxels
    print("Voxelizing 3D model...")
    voxels = voxelize_mesh(mesh, resolution)
    
    # Generate commands
    print("Generating WorldEdit commands...")
    commands = generate_build_commands(voxels, scale=scale)
    
    # Save commands
    save_commands(commands, output_file)
    print(f"Total commands: {len(commands)}")

if __name__ == "__main__":
    main()