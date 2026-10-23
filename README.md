# WorldEdit Converter

3D Model & Schematic WorldEdit Command Studio for MultiCraft and Minetest.

## Supported Formats

- **Minecraft Schematics**: `.schem` (Sponge v2 / v3) and `.nbt` (Structure NBT)
- **Minetest / MultiCraft WorldEdit**: `.we`
- **3D Mesh Models**: `.obj` (+ `.mtl` materials) and `.stl`

## How to Use in MultiCraft / Minetest

1. Open **WorldEdit Converter** and upload your `.schem`, `.nbt`, `.we`, `.obj`, or `.stl` file.
2. Adjust max command lines per part, build scale, or 3D voxel resolution as needed.
3. Click **Generate WorldEdit Commands**.
4. Copy the generated commands (or download `.txt`) and paste them into a Command Block in your world.
5. Select 1 block at your target origin using `//1` and `//2`, then execute the Command Block.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Hosting on GitHub Pages

This repository supports **both** GitHub Pages deployment methods out of the box:

### Option A: Deploy Directly from Branch (Zero Config)
1. Push this repository to GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment -> Source**, select **Deploy from a branch**.
4. Choose your branch (`main` or `master`) and `/ (root)`, then click **Save**.
   (`index.html`, `.nojekyll`, `assets/`, and `js/` are all at the root with relative paths.)

### Option B: Deploy via GitHub Actions
1. Push this repository to GitHub.
2. Go to **Settings -> Pages**.
3. Under **Build and deployment -> Source**, select **GitHub Actions**.
4. The included workflow (`.github/workflows/deploy-pages.yml`) runs `npm ci && npm run build` and deploys `./dist` automatically.

---

Built by **Kyranzo**
