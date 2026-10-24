        // ========== Block Mapping ==========
        const BLOCK_MAPPING = {
            // === Basic Blocks ===
            "minecraft:air": null, // Skip air blocks
            "minecraft:stone": "default:stone",
            "minecraft:granite": "default:stone",
            "minecraft:polished_granite": "default:stone",
            "minecraft:diorite": "default:stone",
            "minecraft:polished_diorite": "default:stone",
            "minecraft:andesite": "default:stone",
            "minecraft:polished_andesite": "default:stone",
            "minecraft:grass_block": "default:dirt_with_grass",
            "minecraft:grass": "default:dirt_with_grass",
            "minecraft:dirt": "default:dirt",
            "minecraft:coarse_dirt": "default:dirt",
            "minecraft:podzol": "default:dirt",
            "minecraft:cobblestone": "default:cobble",

            // === Wood Planks ===
            "minecraft:planks": "default:wood",
            "minecraft:oak_planks": "default:wood",
            "minecraft:spruce_planks": "default:pine_wood",
            "minecraft:birch_planks": "default:birch_wood",
            "minecraft:jungle_planks": "default:junglewood",
            "minecraft:acacia_planks": "default:acacia_wood",
            "minecraft:dark_oak_planks": "default:wood",

            // === Logs ===
            "minecraft:log": "default:tree",
            "minecraft:oak_log": "default:tree",
            "minecraft:spruce_log": "default:pine_tree",
            "minecraft:birch_log": "default:birch_tree",
            "minecraft:jungle_log": "default:jungletree",
            "minecraft:acacia_log": "default:acacia_tree",
            "minecraft:dark_oak_log": "default:tree",

            // === Leaves ===
            "minecraft:leaves": "default:leaves",
            "minecraft:oak_leaves": "default:leaves",
            "minecraft:spruce_leaves": "default:pine_needles",
            "minecraft:birch_leaves": "default:birch_leaves",
            "minecraft:jungle_leaves": "default:jungleleaves",
            "minecraft:acacia_leaves": "default:acacia_leaves",
            "minecraft:dark_oak_leaves": "default:leaves",
            "minecraft:leaves2": "default:acacia_leaves",

            // === Sand & Gravel ===
            "minecraft:sand": "default:sand",
            "minecraft:red_sand": "default:redsand",
            "minecraft:gravel": "default:gravel",
            "minecraft:sandstone": "default:sandstone",
            "minecraft:chiseled_sandstone": "default:sandstonecarved",
            "minecraft:smooth_sandstone": "default:sandstonesmooth",
            "minecraft:red_sandstone": "default:redsandstone",

            // === Ores ===
            "minecraft:gold_ore": "default:stone_with_gold",
            "minecraft:iron_ore": "default:stone_with_iron",
            "minecraft:coal_ore": "default:stone_with_coal",
            "minecraft:diamond_ore": "default:stone_with_diamond",
            "minecraft:emerald_ore": "default:stone_with_emerald",
            "minecraft:lapis_ore": "default:stone_with_bluestone",
            "minecraft:redstone_ore": "default:stone_with_bluestone",
            "minecraft:copper_ore": "default:stone_with_copper",
            "minecraft:quartz_ore": "default:quartz_ore",

            // === Mineral Blocks ===
            "minecraft:gold_block": "default:goldblock",
            "minecraft:iron_block": "default:steelblock",
            "minecraft:diamond_block": "default:diamondblock",
            "minecraft:emerald_block": "default:emeraldblock",
            "minecraft:lapis_block": "default:stone",
            "minecraft:coal_block": "default:coalblock",
            "minecraft:copper_block": "default:copperblock",
            "minecraft:quartz_block": "default:quartz_block",
            "minecraft:chiseled_quartz_block": "default:quartz_chiseled",
            "minecraft:quartz_pillar": "default:quartz_pillar",

            // === Bricks & Stonework ===
            "minecraft:brick_block": "default:brick",
            "minecraft:bricks": "default:brick",
            "minecraft:stonebrick": "default:stonebrick",
            "minecraft:stone_bricks": "default:stonebrick",
            "minecraft:mossy_stone_bricks": "default:stonebrickmossy",
            "minecraft:cracked_stone_bricks": "default:stonebrickcracked",
            "minecraft:chiseled_stone_bricks": "default:stonebrickcarved",
            "minecraft:mossy_cobblestone": "default:mossycobble",
            "minecraft:nether_brick": "default:brick",

            // === Glass ===
            "minecraft:glass": "default:glass",
            "minecraft:glass_pane": "default:glass",
            "minecraft:stained_glass": "default:glass",
            "minecraft:white_stained_glass": "default:glass_white",
            "minecraft:orange_stained_glass": "default:glass_orange",
            "minecraft:magenta_stained_glass": "default:glass_magenta",
            "minecraft:light_blue_stained_glass": "default:glass_cyan",
            "minecraft:yellow_stained_glass": "default:glass_yellow",
            "minecraft:lime_stained_glass": "default:glass_green",
            "minecraft:pink_stained_glass": "default:glass_pink",
            "minecraft:gray_stained_glass": "default:glass_grey",
            "minecraft:light_gray_stained_glass": "default:glass_grey",
            "minecraft:cyan_stained_glass": "default:glass_cyan",
            "minecraft:purple_stained_glass": "default:glass_violet",
            "minecraft:blue_stained_glass": "default:glass_blue",
            "minecraft:brown_stained_glass": "default:glass_brown",
            "minecraft:green_stained_glass": "default:glass_dark_green",
            "minecraft:red_stained_glass": "default:glass_red",
            "minecraft:black_stained_glass": "default:glass_black",

            // === Wool ===
            "minecraft:wool": "wool:white",
            "minecraft:white_wool": "wool:white",
            "minecraft:orange_wool": "wool:orange",
            "minecraft:magenta_wool": "wool:magenta",
            "minecraft:light_blue_wool": "wool:cyan",
            "minecraft:yellow_wool": "wool:yellow",
            "minecraft:lime_wool": "wool:green",
            "minecraft:pink_wool": "wool:pink",
            "minecraft:gray_wool": "wool:grey",
            "minecraft:light_gray_wool": "wool:grey",
            "minecraft:cyan_wool": "wool:cyan",
            "minecraft:purple_wool": "wool:violet",
            "minecraft:blue_wool": "wool:blue",
            "minecraft:brown_wool": "wool:brown",
            "minecraft:green_wool": "wool:dark_green",
            "minecraft:red_wool": "wool:red",
            "minecraft:black_wool": "wool:black",

            // === Terracotta ===
            "minecraft:hardened_clay": "default:hardened_clay",
            "minecraft:terracotta": "default:hardened_clay",
            "minecraft:white_terracotta": "hardened_clay:white",
            "minecraft:orange_terracotta": "hardened_clay:orange",
            "minecraft:magenta_terracotta": "hardened_clay:magenta",
            "minecraft:light_blue_terracotta": "hardened_clay:cyan",
            "minecraft:yellow_terracotta": "hardened_clay:yellow",
            "minecraft:lime_terracotta": "hardened_clay:green",
            "minecraft:pink_terracotta": "hardened_clay:pink",
            "minecraft:gray_terracotta": "hardened_clay:grey",
            "minecraft:light_gray_terracotta": "hardened_clay:grey",
            "minecraft:cyan_terracotta": "hardened_clay:cyan",
            "minecraft:purple_terracotta": "hardened_clay:violet",
            "minecraft:blue_terracotta": "hardened_clay:blue",
            "minecraft:brown_terracotta": "hardened_clay:brown",
            "minecraft:green_terracotta": "hardened_clay:dark_green",
            "minecraft:red_terracotta": "hardened_clay:red",
            "minecraft:black_terracotta": "hardened_clay:black",
            "minecraft:stained_hardened_clay": "default:hardened_clay",

            // === Concrete ===
            "minecraft:concrete": "concrete:concrete",
            "minecraft:white_concrete": "concrete:concrete_white",
            "minecraft:orange_concrete": "concrete:concrete_orange",
            "minecraft:magenta_concrete": "concrete:concrete_magenta",
            "minecraft:light_blue_concrete": "concrete:concrete_cyan",
            "minecraft:yellow_concrete": "concrete:concrete_yellow",
            "minecraft:lime_concrete": "concrete:concrete_green",
            "minecraft:pink_concrete": "concrete:concrete_pink",
            "minecraft:gray_concrete": "concrete:concrete_grey",
            "minecraft:light_gray_concrete": "concrete:concrete_grey",
            "minecraft:cyan_concrete": "concrete:concrete_cyan",
            "minecraft:purple_concrete": "concrete:concrete_violet",
            "minecraft:blue_concrete": "concrete:concrete_blue",
            "minecraft:brown_concrete": "concrete:concrete_brown",
            "minecraft:green_concrete": "concrete:concrete_dark_green",
            "minecraft:red_concrete": "concrete:concrete_red",
            "minecraft:black_concrete": "concrete:concrete_black",

            // === Misc Blocks ===
            "minecraft:bedrock": "default:stone",
            "minecraft:sponge": "sponge:sponge",
            "minecraft:obsidian": "default:obsidian",
            "minecraft:glowstone": "default:glowstone",
            "minecraft:ice": "default:ice",
            "minecraft:packed_ice": "default:packedice",
            "minecraft:snow": "default:snowblock",
            "minecraft:snow_block": "default:snowblock",
            "minecraft:snow_layer": "default:snowblock",
            "minecraft:clay": "default:clay",
            "minecraft:cactus": "default:cactus",
            "minecraft:bookshelf": "shelf:bookshelf",
            "minecraft:slime": "bluestone_stickyblocks:slimeblock",
            "minecraft:slime_block": "bluestone_stickyblocks:slimeblock",
            "minecraft:melon": "farming_plants:watermelon_fruit",
            "minecraft:melon_block": "farming_plants:watermelon_fruit",
            "minecraft:pumpkin": "farming_plants:pumpkin_fruit",
            "minecraft:hay_block": "farming:straw",

            // === Functional Blocks ===
            "minecraft:chest": "default:chest",
            "minecraft:crafting_table": "workbench:workbench",
            "minecraft:furnace": "default:furnace",
            "minecraft:lit_furnace": "default:furnace",

            // === Stairs (Base Mapping) ===
            "minecraft:oak_stairs": "stairs:stair_default_wood",
            "minecraft:spruce_stairs": "stairs:stair_default_pine_wood",
            "minecraft:birch_stairs": "stairs:stair_default_birch_wood",
            "minecraft:jungle_stairs": "stairs:stair_default_junglewood",
            "minecraft:acacia_stairs": "stairs:stair_default_acacia_wood",
            "minecraft:dark_oak_stairs": "stairs:stair_default_wood",
            "minecraft:stone_stairs": "stairs:stair_default_cobble",
            "minecraft:cobblestone_stairs": "stairs:stair_default_cobble",
            "minecraft:brick_stairs": "stairs:stair_default_brick",
            "minecraft:stone_brick_stairs": "stairs:stair_default_stonebrick",
            "minecraft:sandstone_stairs": "stairs:stair_default_sandstone",
            "minecraft:quartz_stairs": "stairs:stair_default_quartz_block",

            // === Slabs (Base Mapping) ===
            "minecraft:stone_slab": "stairs:slab_default_stone",
            "minecraft:oak_slab": "stairs:slab_default_wood",
            "minecraft:spruce_slab": "stairs:slab_default_pine_wood",
            "minecraft:birch_slab": "stairs:slab_default_birch_wood",
            "minecraft:jungle_slab": "stairs:slab_default_junglewood",
            "minecraft:acacia_slab": "stairs:slab_default_acacia_wood",
            "minecraft:dark_oak_slab": "stairs:slab_default_wood",
            "minecraft:brick_slab": "stairs:slab_default_brick",
            "minecraft:stone_brick_slab": "stairs:slab_default_stonebrick",
            "minecraft:sandstone_slab": "stairs:slab_default_sandstone",
            "minecraft:quartz_slab": "stairs:slab_default_quartz_block",

            // === Torches & Lighting ===
            "minecraft:torch": "default:torch",
            "minecraft:wall_torch": "default:torch",
            "minecraft:lantern": "lanterns:lantern_off",
            "minecraft:soul_lantern": "lanterns:lantern_off",
            "minecraft:redstone_lamp": "default:glowstone",
            "minecraft:lit_redstone_lamp": "default:glowstone",

            // === Ladders ===
            "minecraft:ladder": "default:ladder_wood",

            // === Fences ===
            "minecraft:fence": "default:fence_wood",
            "minecraft:oak_fence": "default:fence_wood",
            "minecraft:spruce_fence": "default:fence_pine_wood",
            "minecraft:birch_fence": "default:fence_birch_wood",
            "minecraft:jungle_fence": "default:fence_jungle_wood",
            "minecraft:acacia_fence": "default:fence_acacia_wood",
            "minecraft:dark_oak_fence": "default:fence_wood",
            "minecraft:nether_brick_fence": "default:fence_wood",

            // === Fence Gates ===
            "minecraft:fence_gate": "doors:gate_wood",
            "minecraft:oak_fence_gate": "doors:gate_wood",
            "minecraft:spruce_fence_gate": "doors:gate_pine_wood",
            "minecraft:birch_fence_gate": "doors:gate_birch_wood",
            "minecraft:jungle_fence_gate": "doors:gate_jungle_wood",
            "minecraft:acacia_fence_gate": "doors:gate_acacia_wood",
            "minecraft:dark_oak_fence_gate": "doors:gate_wood",

            // === Doors ===
            "minecraft:wooden_door": "doors:door_wood",
            "minecraft:oak_door": "doors:door_wood",
            "minecraft:spruce_door": "doors:door_pine_wood",
            "minecraft:birch_door": "doors:door_birch_wood",
            "minecraft:jungle_door": "doors:door_jungle_wood",
            "minecraft:acacia_door": "doors:door_acacia_wood",
            "minecraft:dark_oak_door": "doors:door_wood",
            "minecraft:iron_door": "doors:door_steel",

            // === Trapdoors ===
            "minecraft:trapdoor": "doors:trapdoor",
            "minecraft:oak_trapdoor": "doors:trapdoor",
            "minecraft:spruce_trapdoor": "doors:trapdoor_pine_wood",
            "minecraft:birch_trapdoor": "doors:trapdoor_birch_wood",
            "minecraft:jungle_trapdoor": "doors:trapdoor_jungle_wood",
            "minecraft:acacia_trapdoor": "doors:trapdoor_acacia_wood",
            "minecraft:dark_oak_trapdoor": "doors:trapdoor",
            "minecraft:iron_trapdoor": "doors:trapdoor_steel",

            // === Beds ===
            "minecraft:bed": "beds:bed_red",
            "minecraft:white_bed": "beds:bed_white",
            "minecraft:orange_bed": "beds:bed_orange",
            "minecraft:magenta_bed": "beds:bed_magenta",
            "minecraft:light_blue_bed": "beds:bed_cyan",
            "minecraft:yellow_bed": "beds:bed_yellow",
            "minecraft:lime_bed": "beds:bed_green",
            "minecraft:pink_bed": "beds:bed_pink",
            "minecraft:gray_bed": "beds:bed_grey",
            "minecraft:light_gray_bed": "beds:bed_grey",
            "minecraft:cyan_bed": "beds:bed_cyan",
            "minecraft:purple_bed": "beds:bed_violet",
            "minecraft:blue_bed": "beds:bed_blue",
            "minecraft:brown_bed": "beds:bed_brown",
            "minecraft:green_bed": "beds:bed_dark_green",
            "minecraft:red_bed": "beds:bed_red",
            "minecraft:black_bed": "beds:bed_black",

            // === Rails ===
            "minecraft:rail": "carts:rail",
            "minecraft:golden_rail": "carts:rail",
            "minecraft:powered_rail": "carts:rail",
            "minecraft:detector_rail": "carts:rail",
            "minecraft:activator_rail": "carts:rail",

            // === TNT ===
            "minecraft:tnt": "tnt:tnt",

            // === Panes & Bars ===
            "minecraft:stained_glass_pane": "xpanes:pane_flat",
            "minecraft:iron_bars": "xpanes:bar_flat",

            // === Cobwebs ===
            "minecraft:web": "mobs_monsters:cobweb",
            "minecraft:cobweb": "mobs_monsters:cobweb",

            // === Coral Blocks ===
            "minecraft:tube_coral_block": "ocean:coral_blue_tubular_block",
            "minecraft:brain_coral_block": "ocean:coral_pink_acropora_block",
            "minecraft:bubble_coral_block": "ocean:coral_yellow_fiery_block",
            "minecraft:fire_coral_block": "ocean:coral_red_rubrum_block",
            "minecraft:horn_coral_block": "ocean:coral_yellow_fiery_block",

            // === Signs ===
            "minecraft:standing_sign": "signs:sign",
            "minecraft:wall_sign": "signs:sign",
            "minecraft:oak_sign": "signs:sign",
            "minecraft:spruce_sign": "signs:sign_pine_wood",
            "minecraft:birch_sign": "signs:sign_birch_wood",
            "minecraft:jungle_sign": "signs:sign_junglewood",
            "minecraft:acacia_sign": "signs:sign_acacia_wood",
            "minecraft:dark_oak_sign": "signs:sign",

            // === Additional Blocks ===
            "minecraft:bamboo": "water_plants:bamboo",
            "minecraft:lily_pad": "swamp_biome:waterlily",
            "minecraft:waterlily": "swamp_biome:waterlily",
            "minecraft:jack_o_lantern": "farming_plants:pumpkin_fruit",
            "minecraft:lit_pumpkin": "farming_plants:pumpkin_fruit",
            "minecraft:carved_pumpkin": "farming_plants:pumpkin_fruit",
            "minecraft:jukebox": "default:chest",
            "minecraft:enchanting_table": "x_enchanting:table",
            "minecraft:brewing_stand": "brewing:stand",
            "minecraft:armor_stand": "3d_armor_stand:armor_stand",
            "minecraft:flower_pot": "flowerpot:pot",
            "minecraft:painting": "painting:painting",
            "minecraft:item_frame": "itemframes:frame",
        };

        // ========== NBT Parser ==========
        class NBTReader {
            constructor(buffer) {
                this.view = new DataView(buffer);
                this.offset = 0;
            }
            readByte() { return this.view.getInt8(this.offset++); }
            readShort() { const v = this.view.getInt16(this.offset, false); this.offset += 2; return v; }
            readInt() { const v = this.view.getInt32(this.offset, false); this.offset += 4; return v; }
            readLong() {
                const h = this.view.getInt32(this.offset, false);
                const l = this.view.getUint32(this.offset + 4, false);
                this.offset += 8;
                return BigInt(h) * BigInt(0x100000000) + BigInt(l);
            }
            readFloat() { const v = this.view.getFloat32(this.offset, false); this.offset += 4; return v; }
            readDouble() { const v = this.view.getFloat64(this.offset, false); this.offset += 8; return v; }
            readString() {
                const len = this.view.getUint16(this.offset, false);
                this.offset += 2;
                const bytes = new Uint8Array(this.view.buffer, this.offset, len);
                this.offset += len;
                return new TextDecoder('utf-8').decode(bytes);
            }
            readByteArray() {
                const len = this.readInt();
                const arr = new Int8Array(this.view.buffer, this.offset, len);
                this.offset += len;
                return Array.from(arr);
            }
            readIntArray() {
                const len = this.readInt();
                const arr = [];
                for (let i = 0; i < len; i++) arr.push(this.readInt());
                return arr;
            }
            readLongArray() {
                const len = this.readInt();
                const arr = [];
                for (let i = 0; i < len; i++) arr.push(this.readLong());
                return arr;
            }
            readList() {
                const type = this.readByte();
                const len = this.readInt();
                const list = [];
                for (let i = 0; i < len; i++) list.push(this.readTag(type));
                return list;
            }
            readCompound() {
                const compound = {};
                while (true) {
                    const type = this.readByte();
                    if (type === 0) break;
                    const name = this.readString();
                    compound[name] = this.readTag(type);
                }
                return compound;
            }
            readTag(type) {
                switch (type) {
                    case 0: return null;
                    case 1: return this.readByte();
                    case 2: return this.readShort();
                    case 3: return this.readInt();
                    case 4: return this.readLong();
                    case 5: return this.readFloat();
                    case 6: return this.readDouble();
                    case 7: return this.readByteArray();
                    case 8: return this.readString();
                    case 9: return this.readList();
                    case 10: return this.readCompound();
                    case 11: return this.readIntArray();
                    case 12: return this.readLongArray();
                    default: throw new Error(`Unknown tag: ${type}`);
                }
            }
            parse() {
                const type = this.readByte();
                if (type !== 10) throw new Error('Invalid root');
                this.readString();
                return this.readCompound();
            }
        }

        // ========== State ==========
        let currentBlocks = [];
        let current3DVoxels = [];
        let unknownBlocks = {};
        let userMappings = {};
        let currentFileName = '';
        let is3DModel = false;
        let isWorldEdit = false;
        let userResolutionLocked = false;
        let currentGeometry = null;
        let customConvertEnabled = false;
        let customConvertEntries = [];

        // ========== DOM ==========
        const dropZone = document.getElementById('dropZone');
        const fileInput = document.getElementById('fileInput');
        const unknownList = document.getElementById('unknownList');
        const convertBtn = document.getElementById('convertBtn');
        const downloadArea = document.getElementById('downloadArea');
        const logPanel = document.getElementById('logPanel');
        const resolutionInput = document.getElementById('resolution');
        const settings3D = document.getElementById('settings3D');
        const settingsNBT = document.getElementById('settingsNBT');
        const colorModeSelect = document.getElementById('colorMode');
        const blockIdGroup = document.getElementById('blockIdGroup');
        const customConvertCheckbox = document.getElementById('customConvertEnabled');
        const customConvertList = document.getElementById('customConvertList');
        const customConvertAddBtn = document.getElementById('customConvertAddBtn');
        const customConvertHint = document.getElementById('customConvertHint');
        const unknownBlocksSection = document.getElementById('unknownBlocksSection');

        // Track if the user manually edited the resolution so we don't overwrite it on the next file
        resolutionInput.addEventListener('input', () => { userResolutionLocked = true; });

        // Toggle block ID input visibility when color mode changes
        colorModeSelect.addEventListener('change', () => {
            blockIdGroup.classList.toggle('visible', colorModeSelect.value === 'single');
        });

        // Toggle settings sections visibility
        function updateSettingsVisibility() {
            if (is3DModel) {
                settings3D.classList.add('visible');
                settingsNBT.classList.remove('visible');
            } else {
                settings3D.classList.remove('visible');
                settingsNBT.classList.add('visible');
                unknownBlocksSection.classList.toggle('is-hidden', Object.keys(unknownBlocks).length === 0);
            }
            if (typeof syncResolutionReadout === 'function') syncResolutionReadout();
        }

        // backward compat
        function update3DSettingsVisibility() {
            updateSettingsVisibility();
        }


        // ========== Utils & Selection/Copy Protection ==========
        let allowProgrammaticCopy = false;

        function isEditableInputTarget(target) {
            const el = target && target.nodeType === 1 ? target : (target ? target.parentElement : null);
            return Boolean(el && el.closest('input[type="text"], input[type="number"], #importTextarea'));
        }

        // Prevent left-click hold text selection and manual copying; copying works exclusively via Copy buttons
        document.addEventListener('selectstart', (e) => {
            if (allowProgrammaticCopy) return;
            if (isEditableInputTarget(e.target)) return;
            e.preventDefault();
        });

        document.addEventListener('copy', (e) => {
            if (!allowProgrammaticCopy) {
                e.preventDefault();
            }
        });

        document.addEventListener('cut', (e) => {
            if (!isEditableInputTarget(e.target)) {
                e.preventDefault();
            }
        });

        document.addEventListener('dragstart', (e) => {
            const el = e.target && e.target.nodeType === 1 ? e.target : null;
            if (!el || !el.closest('#dropZone')) {
                e.preventDefault();
            }
        });

        async function copyTextToClipboard(text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    await navigator.clipboard.writeText(text);
                    return true;
                } catch (_) {
                    // Fallback below for iframe permissions
                }
            }
            allowProgrammaticCopy = true;
            try {
                const ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.className = 'sr-clipboard-fallback';
                ta.style.userSelect = 'text';
                ta.style.webkitUserSelect = 'text';
                document.body.appendChild(ta);
                ta.focus({ preventScroll: true });
                ta.select();
                ta.setSelectionRange(0, text.length);
                const ok = document.execCommand('copy');
                document.body.removeChild(ta);
                if (!ok) throw new Error('Clipboard access unavailable');
                return true;
            } finally {
                allowProgrammaticCopy = false;
            }
        }

        function log(msg, type = '') {
            const entry = document.createElement('div');
            entry.className = `log-entry ${type}`;
            entry.textContent = msg;
            logPanel.appendChild(entry);
            logPanel.scrollTop = logPanel.scrollHeight;
            if (type === 'error') {
                const notice = document.getElementById('studioNotice');
                if (notice) {
                    notice.textContent = msg;
                    notice.classList.remove('is-hidden');
                }
            }
        }

        function updateStatus(key, value) {
            const el = document.getElementById(key);
            if (!el) return;
            if (key === 'fileName') {
                el.textContent = value;
                const statusBarEl = document.getElementById('statusBar');
                if (statusBarEl) statusBarEl.classList.remove('is-hidden');
                const sumFile = document.getElementById('summaryFileName');
                if (sumFile) sumFile.textContent = value;
                const notice = document.getElementById('studioNotice');
                if (notice) notice.classList.add('is-hidden');
            } else if (key === 'blockCount') {
                const formatted = typeof value === 'number' ? `${value.toLocaleString()} ${is3DModel ? 'voxels' : 'blocks'}` : value;
                el.textContent = formatted;
                const sumBlocks = document.getElementById('summaryBlockCount');
                if (sumBlocks) sumBlocks.textContent = formatted;
            } else if (key === 'commandCount') {
                const formatted = typeof value === 'number' ? `${value.toLocaleString()} commands` : value;
                el.textContent = formatted;
                const progSec = document.getElementById('progressSection');
                if (progSec) progSec.classList.remove('is-hidden');
            } else {
                el.textContent = value;
            }
        }

        function setProgress(pct) {
            const progSec = document.getElementById('progressSection');
            if (progSec && pct > 0) progSec.classList.remove('is-hidden');
            const fill = document.getElementById('progressFill');
            if (fill) fill.style.width = `${pct}%`;
        }

        function parseBlockState(name) {
            if (!name.includes('[')) return [name, {}];
            const base = name.split('[')[0];
            const statesStr = name.split('[')[1].replace(']', '');
            const states = {};
            for (const pair of statesStr.split(',')) {
                if (pair.includes('=')) {
                    const [k, v] = pair.split('=');
                    states[k.trim()] = v.trim();
                }
            }
            return [base, states];
        }

        function isStair(name) { return name.toLowerCase().includes('stairs'); }
        function isSlab(name) { return name.toLowerCase().includes('slab'); }
        function isTrapdoor(name) { return name.toLowerCase().includes('trapdoor'); }
        function isDoor(name) { return name.toLowerCase().includes('_door') && !name.toLowerCase().includes('trapdoor'); }
        function isLadder(name) { return name.toLowerCase().includes('ladder'); }
        function isFenceGate(name) { return name.toLowerCase().includes('fence_gate'); }
        function isButton(name) { return name.toLowerCase().includes('button'); }
        function isLever(name) { return name.toLowerCase().includes('lever'); }
        function isSign(name) { return name.toLowerCase().includes('sign'); }
        function isChest(name) { return name.toLowerCase().includes('chest'); }
        function isFurnace(name) { return name.toLowerCase().includes('furnace'); }

        function getParam2Stairs(states) {
            const map = { north: 2, south: 0, east: 1, west: 3 };
            let p = map[states.facing] || 0;
            if (states.half === 'top') p += 20;
            return p;
        }

        function getParam2Slab(states) {
            if (states.type === 'top') return 20;
            if (states.type === 'double') return -1;
            return 0;
        }

        // Trapdoor: facing + half + open
        function getParam2Trapdoor(states) {
            const facingMap = { north: 2, south: 0, east: 1, west: 3 };
            let p = facingMap[states.facing] || 0;
            if (states.open === 'true') p += 4;
            if (states.half === 'top') p += 20;
            return p;
        }

        // Door: facing + hinge + half
        function getParam2Door(states) {
            const facingMap = { north: 2, south: 0, east: 3, west: 1 };
            let p = facingMap[states.facing] || 0;
            if (states.hinge === 'right') p = (p + 2) % 4;
            return p;
        }

        // Ladder: facing
        function getParam2Ladder(states) {
            const facingMap = { north: 5, south: 4, east: 2, west: 3 };
            return facingMap[states.facing] || 2;
        }

        // Fence gate: facing
        function getParam2FenceGate(states) {
            const facingMap = { north: 2, south: 0, east: 1, west: 3 };
            let p = facingMap[states.facing] || 0;
            if (states.open === 'true') p += 4;
            return p;
        }

        // Button: facing + face
        function getParam2Button(states) {
            if (states.face === 'ceiling') return 0;
            if (states.face === 'floor') return 5;
            const facingMap = { north: 4, south: 3, east: 2, west: 1 };
            return facingMap[states.facing] || 3;
        }

        // Lever: facing + face
        function getParam2Lever(states) {
            if (states.face === 'ceiling') return 0;
            if (states.face === 'floor') return 5;
            const facingMap = { north: 4, south: 3, east: 2, west: 1 };
            return facingMap[states.facing] || 3;
        }

        // Facing blocks (chest, furnace, etc.): facing
        function getParam2Facing(states) {
            const facingMap = { north: 0, south: 2, east: 3, west: 1 };
            return facingMap[states.facing] || 0;
        }

        function getMulticraftBlock(mcName) {
            let [base, states] = parseBlockState(mcName.toLowerCase());
            if (!base.startsWith('minecraft:')) base = 'minecraft:' + base;

            let param2 = 0;
            if (isStair(base)) param2 = getParam2Stairs(states);
            else if (isSlab(base)) param2 = getParam2Slab(states);
            else if (isTrapdoor(base)) param2 = getParam2Trapdoor(states);
            else if (isDoor(base)) param2 = getParam2Door(states);
            else if (isLadder(base)) param2 = getParam2Ladder(states);
            else if (isFenceGate(base)) param2 = getParam2FenceGate(states);
            else if (isButton(base)) param2 = getParam2Button(states);
            else if (isLever(base)) param2 = getParam2Lever(states);
            else if (isChest(base) || isFurnace(base)) param2 = getParam2Facing(states);

            if (userMappings[base] !== undefined) {
                if (userMappings[base] === null) return [null, 0];
                return [userMappings[base], param2];
            }
            if (BLOCK_MAPPING[base] !== undefined) {
                if (BLOCK_MAPPING[base] === null) return [null, 0];
                return [BLOCK_MAPPING[base], param2];
            }
            return [base.replace('minecraft:', 'default:'), param2];
        }

        // ========== Autocomplete ==========
        function setupAutocomplete(input) {
            const wrapper = input.parentElement;
            const list = wrapper.querySelector('.autocomplete-list');

            input.addEventListener('input', () => {
                const val = input.value.toLowerCase();
                if (val.length < 1) {
                    list.classList.remove('visible');
                    return;
                }

                const matches = allItems.filter(item =>
                    item.id.toLowerCase().includes(val) ||
                    item.name.toLowerCase().includes(val)
                ).slice(0, 10);

                if (matches.length === 0) {
                    list.classList.remove('visible');
                    return;
                }

                list.innerHTML = matches.map(item => `
                <div class="autocomplete-item" data-id="${item.id}">
                    <div class="item-id">${item.id}</div>
                    <div class="item-name">${item.name}</div>
                </div>
            `).join('');

                list.classList.add('visible');
            });

            list.addEventListener('click', (e) => {
                const item = e.target.closest('.autocomplete-item');
                if (item) {
                    input.value = item.dataset.id;
                    list.classList.remove('visible');
                }
            });

            input.addEventListener('blur', () => {
                setTimeout(() => list.classList.remove('visible'), 200);
            });
        }

        // ========== NBT Load ==========
        function loadNBT(data) {
            const nbt = new NBTReader(data.buffer).parse();
            if (!nbt.palette || !nbt.blocks) throw new Error('Invalid NBT');

            const blocks = [];
            for (const b of nbt.blocks) {
                const state = b.state;
                if (state < nbt.palette.length) {
                    const name = nbt.palette[state].Name;
                    if (name && name !== 'minecraft:air' && name !== 'air') {
                        blocks.push([Number(b.pos[0]), Number(b.pos[1]), Number(b.pos[2]), name]);
                    }
                }
            }
            return blocks;
        }

        // ========== Sponge Schematic (.schem) Load ==========
        function loadSchem(data) {
            const nbt = new NBTReader(data.buffer).parse();

            // Determine schematic version and get the correct data source
            // v3: data is nested under "Schematic" tag with Blocks.Data and Blocks.Palette
            // v2: data is at root level with BlockData and Palette
            let schematic = nbt;
            let version = 2;

            // Check for v3 format (nested under Schematic tag)
            if (nbt.Schematic) {
                schematic = nbt.Schematic;
                version = schematic.Version || 3;
                log(`Sponge Schematic v${version} format detected`, 'info');
            } else if (nbt.Version) {
                version = nbt.Version;
                log(`Sponge Schematic v${version} format detected`, 'info');
            }

            // Sponge Schematic fields
            const width = schematic.Width;
            const height = schematic.Height;
            const length = schematic.Length;

            // v3 uses Blocks.Palette and Blocks.Data, v2 uses Palette and BlockData
            let palette, blockData;
            if (version >= 3 && schematic.Blocks) {
                palette = schematic.Blocks.Palette;
                blockData = schematic.Blocks.Data;
                log('v3 format: Using Blocks.Palette and Blocks.Data', 'info');
            } else {
                palette = schematic.Palette;
                blockData = schematic.BlockData;
            }

            if (width === undefined || height === undefined || length === undefined) {
                // Debug: show what fields are available
                const availableFields = Object.keys(schematic).join(', ');
                log(`Available fields: ${availableFields}`, 'warning');
                throw new Error('Invalid .schem file format: Missing dimension fields (Width/Height/Length)');
            }

            if (!palette) {
                throw new Error('Invalid .schem file format: Missing Palette');
            }

            if (!blockData) {
                throw new Error('Invalid .schem file format: Missing BlockData');
            }

            log(`Size: ${width}x${height}x${length}`, 'info');

            // Invert palette: ID -> Name
            const idToName = {};
            let maxId = 0;
            for (const [name, id] of Object.entries(palette)) {
                idToName[id] = name;
                if (id > maxId) maxId = id;
            }

            const blocks = [];
            let offset = 0;
            const totalBlocks = width * height * length;

            for (let i = 0; i < totalBlocks; i++) {
                // Read VarInt from blockData
                let value = 0;
                let shift = 0;
                while (true) {
                    if (offset >= blockData.length) break;
                    const byte = blockData[offset++];
                    value |= (byte & 0x7F) << shift;
                    shift += 7;
                    if ((byte & 0x80) === 0) break;
                }

                const blockId = value;
                const name = idToName[blockId];

                if (name && name !== 'minecraft:air' && name !== 'air' && !name.endsWith(':air')) {
                    // v2: Index = (y * Length + z) * Width + x (YZX order)
                    // v3: Index = x + z * Width + y * Width * Length (XZY order)
                    let x, y, z;
                    if (version >= 3) {
                        // v3 XZY order
                        x = i % width;
                        z = Math.floor(i / width) % length;
                        y = Math.floor(i / (width * length));
                    } else {
                        // v2 YZX order
                        y = Math.floor(i / (width * length));
                        const rem = i % (width * length);
                        z = Math.floor(rem / width);
                        x = rem % width;
                    }

                    blocks.push([x, y, z, name]);
                }
            }

            log(`Loaded ${blocks.length} blocks`, 'success');
            return blocks;
        }

        // ========== WorldEdit (.we) Load ==========
        function loadWorldEdit(text) {
            // WorldEdit format: "5:return {{["z"] = 0, ["y"] = 0, ["name"] = "block:id", ["x"] = 0}, ...}"
            const blocks = [];

            // Strip version prefix and "return" to extract Lua table body
            const match = text.match(/^\d+:return\s*\{(.*)\}\s*$/s);
            if (!match) {
                throw new Error('Invalid WorldEdit format');
            }

            const tableContent = match[1];

            // Extract individual block entries
            // Pattern: {["z"] = 0, ["param2"] = 8, ["y"] = 0, ["param1"] = 15, ["name"] = "...", ["x"] = 0}
            let depth = 0;
            let start = -1;
            const entries = [];

            for (let i = 0; i < tableContent.length; i++) {
                const ch = tableContent[i];
                if (ch === '{') {
                    if (depth === 0) start = i;
                    depth++;
                } else if (ch === '}') {
                    depth--;
                    if (depth === 0 && start !== -1) {
                        entries.push(tableContent.substring(start + 1, i));
                        start = -1;
                    }
                }
            }

            for (const entry of entries) {
                // Extract coordinates and block fields
                const xMatch = entry.match(/\["x"\]\s*=\s*(-?\d+)/);
                const yMatch = entry.match(/\["y"\]\s*=\s*(-?\d+)/);
                const zMatch = entry.match(/\["z"\]\s*=\s*(-?\d+)/);
                const nameMatch = entry.match(/\["name"\]\s*=\s*"([^"]+)"/);

                if (xMatch && yMatch && zMatch && nameMatch) {
                    const x = parseInt(xMatch[1]);
                    const y = parseInt(yMatch[1]);
                    const z = parseInt(zMatch[1]);
                    const name = nameMatch[1];

                    // Parse param2 orientation value if present
                    const param2Match = entry.match(/\["param2"\]\s*=\s*(\d+)/);
                    const param2 = param2Match ? parseInt(param2Match[1]) : 0;

                    // Skip air blocks
                    if (name !== 'air' && !name.endsWith(':air')) {
                        blocks.push([x, y, z, name, param2]);
                    }
                }
            }

            if (blocks.length === 0) {
                throw new Error('No blocks found in WorldEdit file');
            }

            return blocks;
        }

        // ========== 3D Model Loader ==========
        let pendingMtlContent = null; // Temporary buffer for uploaded MTL content

        function load3DModel(file, mtlContent = null) {
            return new Promise((resolve, reject) => {
                const ext = file.name.split('.').pop().toLowerCase();
                const reader = new FileReader();

                reader.onload = (e) => {
                    try {
                        let geometry = null;

                        if (ext === 'obj') {
                            const objLoader = new THREE.OBJLoader();

                            // Apply materials when MTL data is available
                            if (mtlContent || pendingMtlContent) {
                                const mtlText = mtlContent || pendingMtlContent;

                                // Validate MTL content
                                const hasDirectColor = /^\s*Kd\s+[\d.]+\s+[\d.]+\s+[\d.]+/m.test(mtlText);
                                const hasTexture = /^\s*map_Kd\s+/m.test(mtlText);

                                if (hasTexture && !hasDirectColor) {
                                    log('Warning: MTL file references textures, but texture files cannot be loaded', 'warning');
                                    log('Add Kd (diffuse color) to MTL file for color information', 'warning');
                                }

                                const mtlLoader = new THREE.MTLLoader();
                                const materials = mtlLoader.parse(mtlText);
                                materials.preload();
                                objLoader.setMaterials(materials);

                                if (hasDirectColor) {
                                    log('MTL material applied', 'success');
                                }
                                pendingMtlContent = null; // Clear buffer after loading
                            }

                            const obj = objLoader.parse(e.target.result);
                            geometry = mergeGeometries(obj);
                        } else if (ext === 'stl') {
                            const loader = new THREE.STLLoader();
                            geometry = loader.parse(e.target.result);

                        } else {
                            reject(new Error(`Unsupported file format: ${ext}`));
                            return;
                        }

                        if (!geometry) {
                            reject(new Error('Failed to load geometry'));
                            return;
                        }

                        resolve(geometry);
                    } catch (err) {
                        reject(err);
                    }
                };

                reader.onerror = () => {
                    reject(new Error('Failed to read file'));
                };

                if (ext === 'obj') {
                    reader.readAsText(file);
                } else {
                    reader.readAsArrayBuffer(file);
                }
            });
        }

        function mergeGeometries(object) {
            const geometries = [];
            let materialCount = 0;
            let meshCount = 0;
            const detectedColors = new Set();

            object.traverse((child) => {
                if (child.isMesh && child.geometry) {
                    meshCount++;
                    const geom = child.geometry.clone();
                    child.updateWorldMatrix(true, false);
                    geom.applyMatrix4(child.matrixWorld);

                    // Extract material RGB colors and attach vertex color attribute to geometry
                    const pos = geom.getAttribute('position');
                    if (!geom.getAttribute('color') && pos) {
                        const colors = [];

                        // Multi-material array handling
                        if (Array.isArray(child.material)) {
                            // Assign vertex colors per geometry material group
                            const groups = geom.groups;
                            if (groups && groups.length > 0) {
                                // Initialize default vertex colors
                                for (let i = 0; i < pos.count; i++) {
                                    colors.push(0.5, 0.5, 0.5);
                                }
                                // Apply color per material group
                                for (const group of groups) {
                                    const mat = child.material[group.materialIndex];
                                    if (mat && mat.color) {
                                        const mc = mat.color;
                                        materialCount++;
                                        const r255 = Math.round(mc.r * 255);
                                        const g255 = Math.round(mc.g * 255);
                                        const b255 = Math.round(mc.b * 255);
                                        detectedColors.add(`RGB(${r255},${g255},${b255})`);
                                        for (let i = group.start; i < group.start + group.count; i++) {
                                            colors[i * 3] = mc.r;
                                            colors[i * 3 + 1] = mc.g;
                                            colors[i * 3 + 2] = mc.b;
                                        }
                                    }
                                }
                                geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                            } else {
                                // Fallback to first material when groups are absent
                                const mat = child.material[0];
                                if (mat && mat.color) {
                                    const mc = mat.color;
                                    const isDefaultWhite = (mc.r === 1 && mc.g === 1 && mc.b === 1);
                                    if (!isDefaultWhite) {
                                        const r255 = Math.round(mc.r * 255);
                                        const g255 = Math.round(mc.g * 255);
                                        const b255 = Math.round(mc.b * 255);
                                        detectedColors.add(`RGB(${r255},${g255},${b255})`);
                                        for (let i = 0; i < pos.count; i++) {
                                            colors.push(mc.r, mc.g, mc.b);
                                        }
                                        geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                                    }
                                }
                            }
                        } else if (child.material && child.material.color) {
                            // Single material handling
                            const mc = child.material.color;
                            const isDefaultWhite = (mc.r === 1 && mc.g === 1 && mc.b === 1);
                            if (!isDefaultWhite) {
                                materialCount++;
                                const r255 = Math.round(mc.r * 255);
                                const g255 = Math.round(mc.g * 255);
                                const b255 = Math.round(mc.b * 255);
                                detectedColors.add(`RGB(${r255},${g255},${b255})`);
                                for (let i = 0; i < pos.count; i++) {
                                    colors.push(mc.r, mc.g, mc.b);
                                }
                                geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
                            }
                        }
                    }
                    geometries.push(geom);
                }
            });

            log(`Meshes: ${meshCount}, Materials applied: ${materialCount}`);
            if (detectedColors.size > 0) {
                log(`Detected colors: ${Array.from(detectedColors).join(', ')}`);
            }

            if (geometries.length === 0) throw new Error('No geometry found');
            if (geometries.length === 1) return geometries[0];

            const merged = new THREE.BufferGeometry();
            const positions = [];
            const colors = [];
            let hasAnyColors = false;

            // Check if any child geometry contains vertex colors
            for (const geom of geometries) {
                if (geom.getAttribute('color')) {
                    hasAnyColors = true;
                    break;
                }
            }

            for (const geom of geometries) {
                const pos = geom.getAttribute('position');
                const col = geom.getAttribute('color');
                if (pos) {
                    for (let i = 0; i < pos.count; i++) {
                        positions.push(pos.getX(i), pos.getY(i), pos.getZ(i));
                        if (hasAnyColors) {
                            if (col) {
                                colors.push(col.getX(i), col.getY(i), col.getZ(i));
                            } else {
                                colors.push(0.5, 0.5, 0.5); // Default neutral gray for uncolored geometry
                            }
                        }
                    }
                }
            }
            merged.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            if (hasAnyColors && colors.length > 0) {
                merged.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            }
            return merged;
        }

        // ========== Auto Resolution ==========
        function calculateOptimalResolution(geometry, maxVoxels = 100000) {
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const sizeX = Math.max(bbox.max.x - bbox.min.x, 0.001);
            const sizeY = Math.max(bbox.max.y - bbox.min.y, 0.001);
            const sizeZ = Math.max(bbox.max.z - bbox.min.z, 0.001);
            const maxDim = Math.max(sizeX, sizeY, sizeZ);
            const volume = Math.max(sizeX * sizeY * sizeZ, 0.000001);

            // Calculate resolution to achieve approximately maxVoxels
            // volume / resolution^3 ≈ maxVoxels
            // resolution ≈ (volume / maxVoxels)^(1/3)
            let optimalRes = Math.pow(volume / maxVoxels, 1 / 3);

            // Ensure reasonable bounds: min 0.01, max = maxDim/5 (at least 5 voxels per axis)
            optimalRes = Math.max(0.01, Math.min(optimalRes, maxDim / 5));

            // Round to 2 decimal places
            optimalRes = Math.round(optimalRes * 100) / 100;
            if (optimalRes < 0.01) optimalRes = 0.01;

            return {
                resolution: optimalRes,
                modelSize: { x: sizeX.toFixed(2), y: sizeY.toFixed(2), z: sizeZ.toFixed(2) },
                maxDim: maxDim.toFixed(2),
                estimatedVoxels: Math.floor(volume / Math.pow(optimalRes, 3))
            };
        }

        // ========== Color to Block Mapping ==========
        // Category color palettes
        const BLOCK_COLORS_WOOL = [
            { name: 'wool:white', r: 234, g: 236, b: 237 },
            { name: 'wool:orange', r: 241, g: 118, b: 20 },
            { name: 'wool:magenta', r: 190, g: 69, b: 180 },
            { name: 'wool:cyan', r: 22, g: 156, b: 157 },
            { name: 'wool:yellow', r: 254, g: 199, b: 31 },
            { name: 'wool:green', r: 112, g: 185, b: 26 },
            { name: 'wool:pink', r: 238, g: 141, b: 172 },
            { name: 'wool:grey', r: 63, g: 68, b: 72 },
            { name: 'wool:dark_grey', r: 142, g: 142, b: 135 },
            { name: 'wool:violet', r: 122, g: 42, b: 173 },
            { name: 'wool:blue', r: 53, g: 57, b: 157 },
            { name: 'wool:brown', r: 114, g: 72, b: 41 },
            { name: 'wool:dark_green', r: 84, g: 109, b: 28 },
            { name: 'wool:red', r: 161, g: 39, b: 35 },
            { name: 'wool:black', r: 21, g: 21, b: 26 },
        ];

        const BLOCK_COLORS_CONCRETE = [
            { name: 'concrete:concrete_white', r: 207, g: 213, b: 214 },
            { name: 'concrete:concrete_orange', r: 224, g: 97, b: 1 },
            { name: 'concrete:concrete_magenta', r: 170, g: 48, b: 159 },
            { name: 'concrete:concrete_cyan', r: 21, g: 119, b: 136 },
            { name: 'concrete:concrete_yellow', r: 241, g: 175, b: 21 },
            { name: 'concrete:concrete_green', r: 94, g: 169, b: 25 },
            { name: 'concrete:concrete_pink', r: 214, g: 101, b: 143 },
            { name: 'concrete:concrete_grey', r: 55, g: 58, b: 62 },
            { name: 'concrete:concrete_dark_grey', r: 125, g: 125, b: 115 },
            { name: 'concrete:concrete_violet', r: 100, g: 32, b: 156 },
            { name: 'concrete:concrete_blue', r: 45, g: 47, b: 143 },
            { name: 'concrete:concrete_brown', r: 96, g: 60, b: 32 },
            { name: 'concrete:concrete_dark_green', r: 73, g: 91, b: 36 },
            { name: 'concrete:concrete_red', r: 142, g: 33, b: 33 },
            { name: 'concrete:concrete_black', r: 8, g: 10, b: 15 },
        ];

        const BLOCK_COLORS_TERRACOTTA = [
            { name: 'hardened_clay:white', r: 210, g: 178, b: 161 },
            { name: 'hardened_clay:orange', r: 162, g: 84, b: 38 },
            { name: 'hardened_clay:magenta', r: 150, g: 88, b: 109 },
            { name: 'hardened_clay:cyan', r: 87, g: 91, b: 91 },
            { name: 'hardened_clay:yellow', r: 186, g: 133, b: 35 },
            { name: 'hardened_clay:green', r: 104, g: 118, b: 53 },
            { name: 'hardened_clay:pink', r: 162, g: 78, b: 79 },
            { name: 'hardened_clay:grey', r: 58, g: 42, b: 36 },
            { name: 'hardened_clay:dark_grey', r: 135, g: 107, b: 98 },
            { name: 'hardened_clay:violet', r: 118, g: 70, b: 86 },
            { name: 'hardened_clay:blue', r: 74, g: 60, b: 91 },
            { name: 'hardened_clay:brown', r: 77, g: 51, b: 36 },
            { name: 'hardened_clay:dark_green', r: 76, g: 83, b: 42 },
            { name: 'hardened_clay:red', r: 143, g: 61, b: 47 },
            { name: 'hardened_clay:black', r: 37, g: 23, b: 17 },
        ];

        const BLOCK_COLORS_GLASS = [
            { name: 'default:glass', r: 230, g: 230, b: 230 },
            { name: 'default:glass_white', r: 240, g: 240, b: 240 },
            { name: 'default:glass_orange', r: 255, g: 200, b: 100 },
            { name: 'default:glass_magenta', r: 200, g: 100, b: 200 },
            { name: 'default:glass_cyan', r: 127, g: 221, b: 212 },
            { name: 'default:glass_yellow', r: 255, g: 255, b: 150 },
            { name: 'default:glass_green', r: 173, g: 255, b: 47 },
            { name: 'default:glass_pink', r: 255, g: 182, b: 193 },
            { name: 'default:glass_grey', r: 150, g: 150, b: 150 },
            { name: 'default:glass_dark_grey', r: 80, g: 80, b: 80 },
            { name: 'default:glass_violet', r: 147, g: 112, b: 219 },
            { name: 'default:glass_blue', r: 107, g: 138, b: 201 },
            { name: 'default:glass_brown', r: 120, g: 80, b: 50 },
            { name: 'default:glass_dark_green', r: 50, g: 100, b: 50 },
            { name: 'default:glass_red', r: 200, g: 50, b: 50 },
            { name: 'default:glass_black', r: 30, g: 30, b: 30 },
        ];

        const BLOCK_COLORS_OTHER = [
            { name: 'default:stone', r: 125, g: 125, b: 125 },
            { name: 'default:cobble', r: 100, g: 100, b: 100 },
            { name: 'default:dirt', r: 134, g: 96, b: 67 },
            { name: 'default:sand', r: 219, g: 211, b: 160 },
            { name: 'default:gravel', r: 136, g: 126, b: 126 },
            { name: 'default:clay', r: 159, g: 164, b: 177 },
            { name: 'default:sandstone', r: 218, g: 210, b: 158 },
            { name: 'default:brick', r: 150, g: 97, b: 83 },
            { name: 'default:obsidian', r: 15, g: 11, b: 25 },
            { name: 'default:goldblock', r: 249, g: 236, b: 79 },
            { name: 'default:steelblock', r: 230, g: 230, b: 230 },
            { name: 'default:copperblock', r: 192, g: 108, b: 80 },
            { name: 'default:wood', r: 162, g: 131, b: 79 },
            { name: 'default:tree', r: 111, g: 91, b: 54 },
            { name: 'default:leaves', r: 58, g: 93, b: 40 },
            { name: 'default:ice', r: 175, g: 215, b: 253 },
            { name: 'default:snowblock', r: 249, g: 254, b: 254 },
            { name: 'default:quartz_block', r: 235, g: 230, b: 220 },
            { name: 'default:emeraldblock', r: 50, g: 200, b: 100 },
            { name: 'default:rubyblock', r: 200, g: 50, b: 80 },
            { name: 'default:diamondblock', r: 100, g: 220, b: 255 },
            { name: 'amethyst_geode:amethyst_block', r: 150, g: 100, b: 200 },
            { name: 'charoite:block', r: 140, g: 80, b: 180 },
            { name: 'bluestone_stickyblocks:slimeblock', r: 120, g: 200, b: 80 },
            { name: 'pink_biome:cherry_blossom_leaves', r: 255, g: 180, b: 200 },
            { name: 'pink_biome:cherry_blossom_wood', r: 180, g: 130, b: 120 },
        ];

        // Combined palette of all color blocks
        const BLOCK_COLORS_ALL = [
            ...BLOCK_COLORS_WOOL,
            ...BLOCK_COLORS_CONCRETE,
            ...BLOCK_COLORS_TERRACOTTA,
            ...BLOCK_COLORS_GLASS,
            ...BLOCK_COLORS_OTHER,
        ];

        function getBlockColorPalette(mode) {
            switch (mode) {
                case 'wool': return BLOCK_COLORS_WOOL;
                case 'concrete': return BLOCK_COLORS_CONCRETE;
                case 'terracotta': return BLOCK_COLORS_TERRACOTTA;
                case 'glass': return BLOCK_COLORS_GLASS;
                case 'all': return BLOCK_COLORS_ALL;
                default: return [];
            }
        }

        function colorDistance(r1, g1, b1, r2, g2, b2) {
            // Perceptual weighted RGB distance (CIE76 approximation)
            const dr = r1 - r2, dg = g1 - g2, db = b1 - b2;
            // Perceptual channel weights (human vision sensitivity)
            const rMean = (r1 + r2) / 2;
            const weightR = rMean < 128 ? 2 : 3;
            const weightG = 4;
            const weightB = rMean < 128 ? 3 : 2;
            return Math.sqrt(weightR * dr * dr + weightG * dg * dg + weightB * db * db);
        }

        function findNearestBlock(r, g, b, mode = 'all') {
            if (mode === 'single') {
                return document.getElementById('blockId').value || 'default:stone';
            }

            const palette = getBlockColorPalette(mode);
            if (palette.length === 0) {
                return document.getElementById('blockId').value || 'default:stone';
            }

            let minDist = Infinity;
            let nearest = palette[0].name;
            for (const block of palette) {
                const dist = colorDistance(r, g, b, block.r, block.g, block.b);
                if (dist < minDist) {
                    minDist = dist;
                    nearest = block.name;
                }
            }
            return nearest;
        }

        // Backward compatibility alias
        function findNearestWool(r, g, b) {
            return findNearestBlock(r, g, b, 'all');
        }

        // ========== Voxelization ==========
        function voxelizeMesh(geometry, resolution, colorMode = 'all') {
            log(`Voxelizing (resolution: ${resolution}, color mode: ${colorMode})...`);
            geometry.computeBoundingBox();
            const bbox = geometry.boundingBox;
            const minX = bbox.min.x, minY = bbox.min.y, minZ = bbox.min.z;
            const maxX = bbox.max.x, maxY = bbox.max.y, maxZ = bbox.max.z;
            const sizeX = Math.ceil((maxX - minX) / resolution);
            const sizeY = Math.ceil((maxY - minY) / resolution);
            const sizeZ = Math.ceil((maxZ - minZ) / resolution);
            log(`Grid size: ${sizeX} x ${sizeY} x ${sizeZ}`);

            const positions = geometry.getAttribute('position');
            const colors = geometry.getAttribute('color'); // Read vertex color attribute
            const hasColors = colors !== null && colors !== undefined;

            // Ignore vertex colors in single-block mode
            const useColors = hasColors && colorMode !== 'single';

            if (useColors) {
                const modeNames = {
                    'wool': 'Wool',
                    'concrete': 'Concrete',
                    'hardened_clay': 'Terracotta',
                    'glass': 'Glass',
                    'all': 'All color blocks'
                };
                log(`Vertex colors detected - coloring with ${modeNames[colorMode] || colorMode}`, 'success');
                // Log sample vertex color
                if (colors.count > 0) {
                    const sampleR = Math.round(colors.getX(0) * 255);
                    const sampleG = Math.round(colors.getY(0) * 255);
                    const sampleB = Math.round(colors.getZ(0) * 255);
                    log(`Sample color: RGB(${sampleR}, ${sampleG}, ${sampleB})`);
                }
            } else if (colorMode === 'single') {
                log('Single block mode - using specified block ID');
            } else {
                log('No vertex colors - using single block ID');
                // Debug: display available attributes
                const attrs = Object.keys(geometry.attributes);
                log(`Available attributes: ${attrs.join(', ') || 'position only'}`);
            }

            const triangles = [];
            for (let i = 0; i < positions.count; i += 3) {
                const tri = {
                    v0: new THREE.Vector3(positions.getX(i), positions.getY(i), positions.getZ(i)),
                    v1: new THREE.Vector3(positions.getX(i + 1), positions.getY(i + 1), positions.getZ(i + 1)),
                    v2: new THREE.Vector3(positions.getX(i + 2), positions.getY(i + 2), positions.getZ(i + 2))
                };
                if (useColors) {
                    // Compute average RGB color across triangle vertices
                    tri.r = Math.round(((colors.getX(i) + colors.getX(i + 1) + colors.getX(i + 2)) / 3) * 255);
                    tri.g = Math.round(((colors.getY(i) + colors.getY(i + 1) + colors.getY(i + 2)) / 3) * 255);
                    tri.b = Math.round(((colors.getZ(i) + colors.getZ(i + 1) + colors.getZ(i + 2)) / 3) * 255);
                }
                triangles.push(tri);
            }
            log(`Triangles: ${triangles.length}`);

            const voxels = new Map(); // key -> { x, y, z, blockId }
            for (const tri of triangles) {
                const samples = sampleTriangle(tri.v0, tri.v1, tri.v2, resolution / 2);
                const blockId = useColors ? findNearestBlock(tri.r, tri.g, tri.b, colorMode) : null;
                for (const p of samples) {
                    const vx = Math.floor((p.x - minX) / resolution);
                    const vy = Math.floor((p.y - minY) / resolution);
                    const vz = Math.floor((p.z - minZ) / resolution);
                    const key = `${vx},${vy},${vz}`;
                    if (!voxels.has(key)) {
                        voxels.set(key, { x: vx, y: vy, z: vz, blockId: blockId });
                    }
                }
            }

            const result = [];
            for (const voxel of voxels.values()) {
                result.push([voxel.x, voxel.y, voxel.z, voxel.blockId]);
            }
            log(`Voxels: ${result.length}`, 'success');
            if (useColors) {
                const colorStats = {};
                for (const v of result) {
                    if (v[3]) colorStats[v[3]] = (colorStats[v[3]] || 0) + 1;
                }
                log(`Blocks used: ${Object.keys(colorStats).join(', ')}`);
            }
            return result;
        }

        function sampleTriangle(v0, v1, v2, step) {
            const points = [];
            const edge1 = new THREE.Vector3().subVectors(v1, v0);
            const edge2 = new THREE.Vector3().subVectors(v2, v0);
            const cross = new THREE.Vector3().crossVectors(edge1, edge2);
            const area = cross.length() / 2;
            // Cap samples at 100 to prevent memory explosion on large triangles
            const numSamples = Math.min(100, Math.max(1, Math.ceil(area / (step * step))));
            for (let i = 0; i <= numSamples; i++) {
                for (let j = 0; j <= numSamples - i; j++) {
                    const u = i / numSamples, v = j / numSamples, w = 1 - u - v;
                    points.push(new THREE.Vector3(
                        w * v0.x + u * v1.x + v * v2.x,
                        w * v0.y + u * v1.y + v * v2.y,
                        w * v0.z + u * v1.z + v * v2.z
                    ));
                }
            }
            return points;
        }

        function generate3DModelCommands(voxels, defaultBlockId, scale = 1) {
            const commands = [];
            let pos = [0, 0, 0];
            let lastBlockId = null;
            const sorted = [...voxels].sort((a, b) => {
                if (a[1] !== b[1]) return a[1] - b[1];
                if (a[2] !== b[2]) return a[2] - b[2];
                return a[0] - b[0];
            });
            for (let i = 0; i < sorted.length; i++) {
                const [x, y, z, colorBlockId] = sorted[i];
                const blockId = colorBlockId || defaultBlockId;
                const axes = ['x', 'y', 'z'];
                const target = [x, y, z];
                for (let j = 0; j < 3; j++) {
                    const diff = Math.floor(target[j] * scale - pos[j] * scale);
                    if (diff !== 0) {
                        commands.push(`/shift ${axes[j]} ${diff}`);
                        pos[j] = target[j];
                    }
                }
                commands.push(`/s ${blockId}`);
                if (i % 1000 === 0) setProgress(Math.floor((i / sorted.length) * 100));
            }
            return commands;
        }

        // ========== Commands ==========
        function generateCommands(blocks, scale = 1) {
            const commands = [];
            let pos = [0, 0, 0];
            let skipped = 0;

            const sorted = [...blocks].sort((a, b) => {
                if (a[1] !== b[1]) return a[1] - b[1];
                if (a[2] !== b[2]) return a[2] - b[2];
                return a[0] - b[0];
            });

            for (let i = 0; i < sorted.length; i++) {
                const block = sorted[i];
                const [x, y, z, name] = block;

                let cmd, param2;
                if (isWorldEdit) {
                    // WorldEdit format: Check custom conversion, use original if not found
                    let blockName = name;
                    if (!blockName.includes(':')) {
                        blockName = 'default:' + blockName;
                    }
                    // Check custom conversion (also try minecraft: prefix)
                    const minecraftName = 'minecraft:' + blockName.replace(/^[^:]+:/, '');
                    if (userMappings[blockName] !== undefined) {
                        cmd = userMappings[blockName];
                    } else if (userMappings[minecraftName] !== undefined) {
                        cmd = userMappings[minecraftName];
                    } else {
                        cmd = name;
                    }
                    param2 = block[4] || 0;
                } else {
                    // Minecraft format: Use mapping
                    [cmd, param2] = getMulticraftBlock(name);
                }
                if (cmd === null) { skipped++; continue; }

                const axes = ['x', 'y', 'z'];
                const target = [x, y, z];
                for (let j = 0; j < 3; j++) {
                    const diff = Math.floor(target[j] * scale - pos[j] * scale);
                    if (diff !== 0) {
                        commands.push(`/shift ${axes[j]} ${diff}`);
                        pos[j] = target[j];
                    }
                }
                commands.push(`/s ${cmd}`);
                if (param2 !== 0) commands.push(`/param2 ${param2}`);
                if (i % 1000 === 0) setProgress(Math.floor((i / sorted.length) * 100));
            }

            if (skipped > 0) log(`Skipped: ${skipped}`, 'warning');
            return commands;
        }

        // ========== Save ==========
        function saveCommands(commands, baseName) {
            const maxLines = parseInt(document.getElementById('maxLines').value) || 30000;
            downloadArea.innerHTML = '';
            const emptyEl = document.getElementById('commandsEmptyState');
            if (emptyEl) emptyEl.classList.add('is-hidden');

            if (commands.length > maxLines) {
                const n = Math.ceil(commands.length / maxLines);
                for (let i = 0; i < n; i++) {
                    const chunk = commands.slice(i * maxLines, Math.min((i + 1) * maxLines, commands.length));
                    createLink(chunk, `${baseName}_part${i + 1}.txt`, i, n);
                }
            } else {
                createLink(commands, `${baseName}.txt`, 0, 1);
            }
        }

        function createLink(commands, fileName, partIndex = 0, totalParts = 1) {
            const commandText = commands.join('\n');
            const blob = new Blob([commandText], { type: 'text/plain' });

            const item = document.createElement('div');
            item.className = 'download-item';

            const header = document.createElement('div');
            header.className = 'download-item-header';
            const partLabel = totalParts > 1 ? `Part ${partIndex + 1} of ${totalParts}` : 'Complete Output';
            header.innerHTML = `
                <div class="download-item-title-group">
                    <span class="download-part-label">${partLabel}</span>
                    <span class="download-filename">${fileName}</span>
                </div>
                <span class="download-line-count">${commands.length.toLocaleString()} lines</span>
            `;
            item.appendChild(header);

            const buttons = document.createElement('div');
            buttons.className = 'download-buttons';

            // Primary Copy Button (#BEF264)
            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'copy-btn';
            const defaultCopyHTML = `<img src="assets/icons/copy-dark.svg" alt="" width="16" height="16"><span>Copy Commands</span>`;
            const copiedHTML = `<img src="assets/icons/check-dark.svg" alt="" width="16" height="16"><span>Copied to Clipboard</span>`;
            copyBtn.innerHTML = defaultCopyHTML;
            copyBtn.addEventListener('click', async () => {
                try {
                    await copyTextToClipboard(commandText);
                    copyBtn.innerHTML = copiedHTML;
                    copyBtn.classList.add('copied');
                    log(`Copied: ${fileName}`, 'success');
                    setTimeout(() => {
                        copyBtn.innerHTML = defaultCopyHTML;
                        copyBtn.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    log(`Copy failed: ${err.message}`, 'error');
                }
            });
            buttons.appendChild(copyBtn);

            // Secondary Download .txt Link
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = fileName;
            link.className = 'download-link';
            link.innerHTML = `<img src="assets/icons/download.svg" alt="" width="16" height="16"><span>Download .txt</span>`;
            buttons.appendChild(link);

            item.appendChild(buttons);

            // Non-selectable Command Output Preview (copying via Copy Commands button above)
            const preview = document.createElement('div');
            preview.className = 'command-preview';

            const isInitiallyCollapsed = partIndex > 0;
            const previewHeader = document.createElement('div');
            previewHeader.className = 'command-preview-header';
            previewHeader.innerHTML = `
                <span class="command-preview-title">Command Output Preview (${commands.length.toLocaleString()} lines)</span>
                <span class="command-preview-toggle ${isInitiallyCollapsed ? '' : 'expanded'}">
                    <span class="toggle-text">${isInitiallyCollapsed ? 'Expand' : 'Collapse'}</span>
                    <img src="assets/icons/chevron-down.svg" alt="" width="14" height="14" class="chevron-icon" draggable="false">
                </span>
            `;

            const previewBody = document.createElement('div');
            previewBody.className = isInitiallyCollapsed ? 'command-preview-body collapsed' : 'command-preview-body';

            const previewContent = document.createElement('div');
            previewContent.className = 'command-preview-content';
            const displayCommands = commands.slice(0, 300);
            previewContent.innerHTML = displayCommands.map(cmd => {
                let highlighted = cmd
                    .replace(/(\/shift)/g, '<span class="cmd-shift">$1</span>')
                    .replace(/(\/s\s)/g, '<span class="cmd-set">$1</span>')
                    .replace(/(\/param2\s+\d+)/g, '<span class="cmd-param">$1</span>');
                return `<span class="cmd-line">${highlighted}</span>`;
            }).join('') + (commands.length > 300 ? `<span class="cmd-line cmd-more">... ${(commands.length - 300).toLocaleString()} more lines (use Copy Commands button above)</span>` : '');

            previewBody.appendChild(previewContent);

            previewHeader.addEventListener('click', () => {
                const isCollapsed = previewBody.classList.toggle('collapsed');
                const toggleWrap = previewHeader.querySelector('.command-preview-toggle');
                const toggleTxt = previewHeader.querySelector('.toggle-text');
                toggleWrap.classList.toggle('expanded', !isCollapsed);
                toggleTxt.textContent = isCollapsed ? 'Expand' : 'Collapse';
            });

            preview.appendChild(previewHeader);
            preview.appendChild(previewBody);
            item.appendChild(preview);

            downloadArea.appendChild(item);
            log(`Ready: ${fileName}`, 'success');
        }

        // ========== Unknown Blocks ==========
        // Cache of valid multicraft_items.js IDs
        const validMulticraftIds = new Set(allItems.map(item => item.id));

        function findUnknown(blocks) {
            const unknown = {};
            for (const b of blocks) {
                let [base] = parseBlockState(b[3].toLowerCase());
                if (!base.startsWith('minecraft:')) base = 'minecraft:' + base;
                if (BLOCK_MAPPING[base] === undefined && !unknown[base]) {
                    unknown[base] = blocks.filter(x => {
                        let [n] = parseBlockState(x[3].toLowerCase());
                        if (!n.startsWith('minecraft:')) n = 'minecraft:' + n;
                        return n === base;
                    }).length;
                }
            }
            return unknown;
        }

        // WorldEdit (.we) file unknown block detection
        // Detects block IDs not in multicraft_items.js
        function findUnknownWorldEdit(blocks) {
            const unknown = {};
            for (const b of blocks) {
                const name = b[3];
                // Skip air blocks
                if (name === 'air' || name.endsWith(':air')) continue;

                // Check if exists in multicraft_items.js
                if (!validMulticraftIds.has(name) && !unknown[name]) {
                    unknown[name] = blocks.filter(x => x[3] === name).length;
                }
            }
            return unknown;
        }

        // WorldEdit unknown blocks display
        function renderUnknownBlocksWorldEdit(unknown) {
            if (Object.keys(unknown).length === 0) {
                unknownList.innerHTML = '<div class="empty-state">No unknown blocks</div>';
                return;
            }

            const sorted = Object.entries(unknown).sort((a, b) => b[1] - a[1]);
            unknownList.innerHTML = sorted.map(([name, count]) => {
                return `
                <div class="unknown-item">
                    <div>
                        <div class="unknown-name">${name}</div>
                        <div class="unknown-count">${count} blocks</div>
                    </div>
                    <div class="autocomplete-wrapper">
                        <input type="text" class="unknown-input" data-block="${name}" placeholder="Enter target block">
                        <div class="autocomplete-list"></div>
                    </div>
                </div>
            `;
            }).join('');

            unknownList.querySelectorAll('.unknown-input').forEach(setupAutocomplete);
        }

        function renderUnknownBlocks(unknown) {
            if (Object.keys(unknown).length === 0) {
                unknownList.innerHTML = '<div class="empty-state">No unknown blocks</div>';
                return;
            }

            const sorted = Object.entries(unknown).sort((a, b) => b[1] - a[1]);
            unknownList.innerHTML = sorted.map(([name, count]) => {
                const fallback = name.replace('minecraft:', 'default:');
                return `
                <div class="unknown-item">
                    <div>
                        <div class="unknown-name">${name}</div>
                        <div class="unknown-count">${count} blocks</div>
                    </div>
                    <div class="autocomplete-wrapper">
                        <input type="text" class="unknown-input" data-block="${name}" placeholder="${fallback}">
                        <div class="autocomplete-list"></div>
                    </div>
                </div>
            `;
            }).join('');

            unknownList.querySelectorAll('.unknown-input').forEach(setupAutocomplete);
        }

        function collectMappings() {
            userMappings = {};
            for (const input of unknownList.querySelectorAll('.unknown-input')) {
                const name = input.dataset.block;
                const val = input.value.trim();
                if (val === '') {
                    // For WorldEdit files, use the original block ID
                    // For Minecraft files, replace minecraft: with default:
                    if (isWorldEdit) {
                        userMappings[name] = name;
                    } else {
                        userMappings[name] = name.replace('minecraft:', 'default:');
                    }
                }
                else if (val.toLowerCase() === 'air') userMappings[name] = null;
                else userMappings[name] = val;
            }

            // Integrate custom conversion mappings (higher priority)
            const customMappings = collectCustomMappings();
            if (customMappings === null) {
                return false; // Duplicate error
            }
            Object.assign(userMappings, customMappings);
            return true;
        }

        // ========== Export/Import Unknown Blocks ==========
        const exportUnknownBtn = document.getElementById('exportUnknownBtn');
        const importUnknownBtn = document.getElementById('importUnknownBtn');
        const importModal = document.getElementById('importModal');
        const importModalClose = document.getElementById('importModalClose');
        const importCancelBtn = document.getElementById('importCancelBtn');
        const importApplyBtn = document.getElementById('importApplyBtn');
        const importTextarea = document.getElementById('importTextarea');

        // Export: Copy unknown blocks list to clipboard
        exportUnknownBtn.addEventListener('click', async () => {
            const inputs = unknownList.querySelectorAll('.unknown-input');
            if (inputs.length === 0) {
                log('No unknown blocks to export', 'warning');
                return;
            }

            const lines = [];
            for (const input of inputs) {
                const source = input.dataset.block;
                const target = input.value.trim();
                if (target) {
                    lines.push(`${source} -> ${target}`);
                } else {
                    lines.push(`${source} -> `);
                }
            }

            const text = lines.join('\n');
            const defaultExportHTML = exportUnknownBtn.innerHTML;
            try {
                await copyTextToClipboard(text);
                log(`Copied ${inputs.length} unknown blocks`, 'success');
                exportUnknownBtn.innerHTML = `<img src="assets/icons/check.svg" alt="" width="14" height="14"><span>Copied</span>`;
                setTimeout(() => { exportUnknownBtn.innerHTML = defaultExportHTML; }, 1500);
            } catch (err) {
                log(`Copy failed: ${err.message}`, 'error');
            }
        });

        // Open import modal
        importUnknownBtn.addEventListener('click', () => {
            importTextarea.value = '';
            importModal.classList.add('active');
        });

        // Close import modal
        function closeImportModal() {
            importModal.classList.remove('active');
        }
        importModalClose.addEventListener('click', closeImportModal);
        importCancelBtn.addEventListener('click', closeImportModal);
        importModal.addEventListener('click', (e) => {
            if (e.target === importModal) closeImportModal();
        });

        // Apply import
        importApplyBtn.addEventListener('click', () => {
            const text = importTextarea.value;
            const lines = text.split('\n');
            let appliedCount = 0;

            for (const line of lines) {
                const trimmed = line.trim();
                if (!trimmed) continue;

                // Parse "source -> target" format
                const match = trimmed.match(/^(.+?)\s*->\s*(.*)$/);
                if (!match) continue;

                const source = match[1].trim();
                const target = match[2].trim();

                // Find matching input and set value
                const input = unknownList.querySelector(`.unknown-input[data-block="${source}"]`);
                if (input) {
                    input.value = target;
                    appliedCount++;
                }
            }

            closeImportModal();
            if (appliedCount > 0) {
                log(`Imported ${appliedCount} mappings`, 'success');
            } else {
                log('No matching mappings found to import', 'warning');
            }
        });

        // Loaded blocks list (for source autocomplete)
        let loadedBlocks = [];

        customConvertCheckbox.addEventListener('change', () => {
            customConvertEnabled = customConvertCheckbox.checked;
            const hidden = !customConvertEnabled;
            customConvertHint.classList.toggle('is-hidden', hidden);
            customConvertList.classList.toggle('is-hidden', hidden);
            customConvertAddBtn.classList.toggle('is-hidden', hidden);

            if (customConvertEnabled && customConvertEntries.length === 0) {
                addCustomConvertEntry();
            }
        });

        customConvertAddBtn.addEventListener('click', () => {
            addCustomConvertEntry();
        });

        // Source autocomplete (from loaded file blocks)
        function setupSourceAutocomplete(input) {
            const wrapper = input.parentElement;
            const list = wrapper.querySelector('.autocomplete-list');

            input.addEventListener('input', () => {
                const val = input.value.toLowerCase();
                if (val.length < 1) {
                    list.classList.remove('visible');
                    return;
                }

                const matches = loadedBlocks.filter(block =>
                    block.toLowerCase().includes(val)
                ).slice(0, 10);

                if (matches.length === 0) {
                    list.classList.remove('visible');
                    return;
                }

                list.innerHTML = matches.map(block => `
                    <div class="autocomplete-item" data-id="${block}">
                        <div class="item-id">${block}</div>
                    </div>
                `).join('');

                list.classList.add('visible');
            });

            list.addEventListener('click', (e) => {
                const item = e.target.closest('.autocomplete-item');
                if (item) {
                    input.value = item.dataset.id;
                    list.classList.remove('visible');
                }
            });

            input.addEventListener('blur', () => {
                setTimeout(() => list.classList.remove('visible'), 200);
            });
        }

        function addCustomConvertEntry() {
            const entryId = Date.now();
            customConvertEntries.push(entryId);

            const entryHTML = `
            <div class="custom-convert-entry" data-entry-id="${entryId}">
                <div class="autocomplete-wrapper">
                    <input type="text" class="unknown-input custom-convert-from" placeholder="Source block">
                    <div class="autocomplete-list"></div>
                </div>
                <span class="custom-convert-arrow" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </span>
                <div class="autocomplete-wrapper">
                    <input type="text" class="unknown-input custom-convert-to" placeholder="Target block">
                    <div class="autocomplete-list"></div>
                </div>
                <button type="button" class="custom-convert-remove-btn" data-remove-id="${entryId}" aria-label="Remove rule">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            `;

            customConvertList.insertAdjacentHTML('beforeend', entryHTML);

            // Setup autocomplete
            const entry = customConvertList.querySelector(`[data-entry-id="${entryId}"]`);
            // Source: from loaded blocks
            setupSourceAutocomplete(entry.querySelector('.custom-convert-from'));
            // Target: from Multicraft blocks
            setupAutocomplete(entry.querySelector('.custom-convert-to'));

            // Remove button event
            entry.querySelector('.custom-convert-remove-btn').addEventListener('click', function () {
                removeCustomConvertEntry(parseInt(this.dataset.removeId));
            });
        }

        function removeCustomConvertEntry(entryId) {
            const entry = customConvertList.querySelector(`[data-entry-id="${entryId}"]`);
            if (entry) entry.remove();
            customConvertEntries = customConvertEntries.filter(id => id !== entryId);
        }

        // Update loaded blocks list
        function updateLoadedBlocks(blocks) {
            const blockSet = new Set();
            for (const b of blocks) {
                let [base] = parseBlockState(b[3].toLowerCase());
                if (!base.startsWith('minecraft:') && !base.includes(':')) {
                    base = 'minecraft:' + base;
                }
                blockSet.add(base);
            }
            loadedBlocks = Array.from(blockSet).sort();
        }

        // collectCustomMappings with duplicate check
        function collectCustomMappings() {
            if (!customConvertEnabled) return {};

            const mappings = {};
            const duplicates = [];
            const entries = customConvertList.querySelectorAll('.custom-convert-entry');

            for (const entry of entries) {
                const fromInput = entry.querySelector('.custom-convert-from');
                const toInput = entry.querySelector('.custom-convert-to');

                const from = fromInput.value.trim();
                const to = toInput.value.trim();

                // Reset error style
                fromInput.style.borderColor = '';

                if (from) {
                    // Normalize minecraft: prefix
                    let normalizedFrom = from;
                    if (!normalizedFrom.includes(':')) {
                        normalizedFrom = 'minecraft:' + normalizedFrom;
                    }

                    // Duplicate check
                    if (mappings.hasOwnProperty(normalizedFrom)) {
                        duplicates.push(from);
                        fromInput.style.borderColor = '#d44';
                        continue;
                    }

                    if (to === '') {
                        // Skip if target is empty (no conversion)
                        continue;
                    } else if (to.toLowerCase() === 'air') {
                        mappings[normalizedFrom] = null;
                    } else {
                        mappings[normalizedFrom] = to;
                    }
                }
            }

            if (duplicates.length > 0) {
                log(`Error: Duplicate source blocks: ${duplicates.join(', ')}`, 'error');
                return null; // Return null on error
            }

            return mappings;
        }

        // ========== Process ==========
        async function processFiles(files) {
            // Handle multi-file selection (e.g. OBJ + MTL)
            const fileList = Array.from(files);
            let objFile = null;
            let mtlFile = null;
            let otherFile = null;

            for (const file of fileList) {
                const ext = file.name.split('.').pop().toLowerCase();
                if (ext === 'obj') objFile = file;
                else if (ext === 'mtl') mtlFile = file;
                else otherFile = file;
            }

            // Preload MTL material file first if included
            if (mtlFile) {
                log(`Loading MTL file: ${mtlFile.name}`);
                const mtlText = await mtlFile.text();
                pendingMtlContent = mtlText;
            }

            // Process primary model or schematic file
            const mainFile = objFile || otherFile || fileList[0];
            if (mainFile) {
                await processFile(mainFile);
            }
        }

        async function processFile(file) {
            try {
                userResolutionLocked = false;
                currentGeometry = null;
                isWorldEdit = false;
                currentFileName = file.name;
                const ext = file.name.split('.').pop().toLowerCase();
                log(`Loading: ${file.name}`);
                updateStatus('fileName', file.name);
                setProgress(0);

                if (['obj', 'stl'].includes(ext)) {
                    is3DModel = true;
                    log('Loading 3D model...', 'success');
                    const geometry = await load3DModel(file);
                    currentGeometry = geometry;

                    // Calculate optimal resolution based on model size
                    const autoRes = calculateOptimalResolution(geometry);
                    log(`Model size: ${autoRes.modelSize.x} x ${autoRes.modelSize.y} x ${autoRes.modelSize.z}`);
                    log(`Recommended resolution: ${autoRes.resolution} (est. voxels: ${autoRes.estimatedVoxels.toLocaleString()})`);

                    const resInput = resolutionInput;
                    if (!userResolutionLocked) {
                        // Refresh to the auto value for each new file unless the user explicitly typed a value
                        resInput.value = autoRes.resolution;
                    }

                    const userRes = parseFloat(resInput.value);
                    let resolution = autoRes.resolution;
                    if (userResolutionLocked && userRes && userRes > 0) {
                        const bbox = geometry.boundingBox;
                        const estVoxels = ((bbox.max.x - bbox.min.x) / userRes) *
                            ((bbox.max.y - bbox.min.y) / userRes) *
                            ((bbox.max.z - bbox.min.z) / userRes);
                        if (estVoxels > 500000) {
                            log(`Warning: Resolution ${userRes} will create ~${Math.floor(estVoxels).toLocaleString()} voxels`, 'warning');
                            log(`Using auto-adjusted resolution ${autoRes.resolution}`, 'warning');
                        } else {
                            resolution = userRes;
                        }
                    }

                    // Update UI with actual resolution used for this file
                    resInput.value = resolution;

                    // Auto-detect vertex colors and set color mode accordingly
                    const colors = geometry.getAttribute('color');
                    const hasVertexColors = colors !== null && colors !== undefined;
                    const colorModeSelect = document.getElementById('colorMode');

                    // Enable/disable color block options based on vertex colors
                    const colorOptions = colorModeSelect.querySelectorAll('option');
                    colorOptions.forEach(option => {
                        if (option.value !== 'single') {
                            option.disabled = !hasVertexColors;
                        }
                    });

                    if (hasVertexColors) {
                        // Vertex colors detected - select color block mode
                        colorModeSelect.value = 'all';
                        blockIdGroup.classList.remove('visible');
                        log('Vertex colors detected - auto-selecting color block mode', 'success');
                    } else {
                        // No vertex colors - select single block mode
                        colorModeSelect.value = 'single';
                        blockIdGroup.classList.add('visible');
                        log('No vertex colors - auto-selecting single block mode');
                    }

                    const colorMode = colorModeSelect.value;
                    current3DVoxels = voxelizeMesh(geometry, resolution, colorMode);
                    currentBlocks = [];
                    updateStatus('blockCount', current3DVoxels.length);
                    update3DSettingsVisibility();
                    convertBtn.disabled = false;
                    previewBtn.disabled = false;
                } else if (ext === 'we') {
                    // WorldEdit (.we) format
                    is3DModel = false;
                    isWorldEdit = true;
                    update3DSettingsVisibility();
                    const text = await file.text();
                    currentBlocks = loadWorldEdit(text);
                    current3DVoxels = [];
                    updateStatus('blockCount', currentBlocks.length);
                    log(`Loaded WorldEdit file: ${currentBlocks.length} blocks`, 'success');
                    // WorldEdit format checks blocks against multicraft_items.js
                    unknownBlocks = findUnknownWorldEdit(currentBlocks);
                    if (Object.keys(unknownBlocks).length > 0) {
                        renderUnknownBlocksWorldEdit(unknownBlocks);
                        log(`Unknown blocks: ${Object.keys(unknownBlocks).length} types`, 'warning');
                    }
                    updateSettingsVisibility();
                    updateLoadedBlocks(currentBlocks);
                    convertBtn.disabled = false;
                    previewBtn.disabled = false;
                } else if (ext === 'schem') {
                    // Sponge Schematic (.schem)
                    is3DModel = false;
                    isWorldEdit = false;
                    update3DSettingsVisibility();
                    const buf = await file.arrayBuffer();
                    let data;
                    try { data = pako.inflate(new Uint8Array(buf)); }
                    catch { data = new Uint8Array(buf); }

                    try {
                        currentBlocks = loadSchem(data);
                        current3DVoxels = [];
                        updateStatus('blockCount', currentBlocks.length);
                        log(`Loaded Schematic file: ${currentBlocks.length} blocks`, 'success');
                        unknownBlocks = findUnknown(currentBlocks);
                        if (Object.keys(unknownBlocks).length > 0) {
                            renderUnknownBlocks(unknownBlocks);
                            log(`Unknown blocks: ${Object.keys(unknownBlocks).length} types`, 'warning');
                            updateSettingsVisibility();
                        }
                        updateLoadedBlocks(currentBlocks);
                        convertBtn.disabled = false;
                        previewBtn.disabled = false;
                    } catch (e) {
                        log(`Schematic load error: ${e.message}`, 'error');
                        throw e;
                    }
                } else {
                    is3DModel = false;
                    isWorldEdit = false;
                    update3DSettingsVisibility();
                    const buf = await file.arrayBuffer();
                    let data;
                    try { data = pako.inflate(new Uint8Array(buf)); }
                    catch { data = new Uint8Array(buf); }
                    currentBlocks = loadNBT(data);
                    current3DVoxels = [];
                    updateStatus('blockCount', currentBlocks.length);
                    log(`Blocks: ${currentBlocks.length}`, 'success');
                    unknownBlocks = findUnknown(currentBlocks);

                    // Render unmapped blocks list if any are detected
                    if (Object.keys(unknownBlocks).length > 0) {
                        renderUnknownBlocks(unknownBlocks);
                        log(`Unknown blocks: ${Object.keys(unknownBlocks).length} types`, 'warning');
                        updateSettingsVisibility();
                    }
                    updateLoadedBlocks(currentBlocks);
                    convertBtn.disabled = false;
                    previewBtn.disabled = false;
                }
            } catch (e) {
                log(`Error: ${e.message}`, 'error');
                console.error(e);
            }
        }

        function doConvert() {
            const scale = parseInt(document.getElementById('scale').value) || 1;
            let commands;
            if (is3DModel) {
                if (!currentGeometry) {
                    log('No 3D model loaded', 'error');
                    return;
                }

                // Recalculate resolution at conversion time in case the user edited the value after load
                const autoRes = calculateOptimalResolution(currentGeometry);
                const resInput = resolutionInput;
                if (!userResolutionLocked) {
                    resInput.value = autoRes.resolution;
                }

                const userRes = parseFloat(resInput.value);
                let resolution = autoRes.resolution;
                if (userRes && userRes > 0) {
                    if (!currentGeometry.boundingBox) currentGeometry.computeBoundingBox();
                    const bbox = currentGeometry.boundingBox;
                    const estVoxels = ((bbox.max.x - bbox.min.x) / userRes) *
                        ((bbox.max.y - bbox.min.y) / userRes) *
                        ((bbox.max.z - bbox.min.z) / userRes);
                    if (estVoxels > 500000) {
                        log(`Warning: Resolution ${userRes} will create ~${Math.floor(estVoxels).toLocaleString()} voxels`, 'warning');
                        log(`Using auto-adjusted resolution ${autoRes.resolution}`, 'warning');
                    } else {
                        resolution = userRes;
                    }
                }
                resInput.value = resolution;

                const colorMode = document.getElementById('colorMode').value;
                current3DVoxels = voxelizeMesh(currentGeometry, resolution, colorMode);
                updateStatus('blockCount', current3DVoxels.length);

                const blockId = document.getElementById('blockId').value || 'default:stone';
                commands = generate3DModelCommands(current3DVoxels, blockId, scale);
            } else {
                if (!collectMappings()) {
                    return; // Stop if duplicate error
                }
                commands = generateCommands(currentBlocks, scale);
            }
            updateStatus('commandCount', commands.length);
            setProgress(100);
            saveCommands(commands, currentFileName.replace(/\.[^.]+$/, ''));
            log(`Done: ${commands.length} commands`, 'success');
        }

        // ========== Studio Step Navigation & Responsive Controls ==========
        const stepTabs = [
            document.getElementById('stepTab1'),
            document.getElementById('stepTab2'),
            document.getElementById('stepTab3')
        ];
        const stepViews = [
            document.getElementById('stepView1'),
            document.getElementById('stepView2'),
            document.getElementById('stepView3')
        ];

        function hasLoadedVoxels() {
            return (is3DModel && current3DVoxels.length > 0) || (!is3DModel && currentBlocks.length > 0);
        }

        function switchStep(stepNumber) {
            stepTabs.forEach((tab, idx) => {
                if (!tab) return;
                const active = idx === stepNumber - 1;
                tab.classList.toggle('active', active);
                tab.setAttribute('aria-selected', active ? 'true' : 'false');
            });
            stepViews.forEach((view, idx) => {
                if (!view) return;
                const active = idx === stepNumber - 1;
                view.classList.toggle('is-hidden', !active);
            });

            if (stepNumber === 2) {
                const emptyPreview = document.getElementById('previewEmptyState');
                const previewGenBtn = document.getElementById('previewGenerateBtn');
                if (hasLoadedVoxels()) {
                    if (emptyPreview) emptyPreview.classList.add('is-hidden');
                    previewModal.classList.remove('is-hidden');
                    if (previewGenBtn) previewGenBtn.disabled = false;
                    requestAnimationFrame(() => {
                        openPreview();
                    });
                } else {
                    if (emptyPreview) emptyPreview.classList.remove('is-hidden');
                    previewModal.classList.add('is-hidden');
                    if (previewGenBtn) previewGenBtn.disabled = true;
                }
            } else {
                closePreview();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        stepTabs.forEach((tab, idx) => {
            if (tab) tab.addEventListener('click', () => switchStep(idx + 1));
        });

        document.querySelectorAll('[data-goto-step]').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = parseInt(btn.getAttribute('data-goto-step'), 10);
                if (target) switchStep(target);
            });
        });

        // Format Mode Selector Tabs in Step 1
        const modeButtons = document.querySelectorAll('.mode-btn');
        const dropTitle = document.getElementById('dropTitle');
        const dropHint = document.getElementById('dropHint');

        const MODE_COPY = {
            schem: {
                title: 'Click or drop .schem or .nbt file',
                hint: 'Minecraft Sponge Schematics & Structure NBT (all formats auto-detected)'
            },
            we: {
                title: 'Click or drop .we WorldEdit file',
                hint: 'Minetest & MultiCraft WorldEdit Lua serialized schematics'
            },
            '3d': {
                title: 'Click or drop .obj or .stl 3D mesh (+ .mtl)',
                hint: 'Auto-voxelizes 3D models with material & vertex color matching'
            }
        };

        function setFormatMode(mode, fromFileLoad = false) {
            modeButtons.forEach(b => {
                const active = b.dataset.mode === mode;
                b.classList.toggle('active', active);
                b.setAttribute('aria-selected', active ? 'true' : 'false');
            });
            if (MODE_COPY[mode] && !fromFileLoad) {
                if (dropTitle) dropTitle.textContent = MODE_COPY[mode].title;
                if (dropHint) dropHint.textContent = MODE_COPY[mode].hint;
            }
            if (mode === '3d') {
                settings3D.classList.add('visible');
                settingsNBT.classList.remove('visible');
            } else if (!hasLoadedVoxels()) {
                settings3D.classList.remove('visible');
                settingsNBT.classList.add('visible');
            }
        }

        modeButtons.forEach(btn => {
            btn.addEventListener('click', () => setFormatMode(btn.dataset.mode));
        });

        // Sync Sliders, Readouts & Preset Buttons
        const maxLinesInput = document.getElementById('maxLines');
        const maxLinesSlider = document.getElementById('maxLinesSlider');
        const maxLinesDisplay = document.getElementById('maxLinesDisplay');
        const maxLinesPresets = document.querySelectorAll('[data-maxlines-preset]');

        function syncMaxLinesUI(val) {
            const num = Math.max(1000, Math.min(100000, parseInt(val, 10) || 30000));
            if (maxLinesDisplay) maxLinesDisplay.textContent = num.toLocaleString();
            if (maxLinesSlider) maxLinesSlider.value = num;
            maxLinesPresets.forEach(p => {
                p.classList.toggle('active', parseInt(p.dataset.maxlinesPreset, 10) === num);
            });
        }
        if (maxLinesInput && maxLinesSlider) {
            maxLinesSlider.addEventListener('input', () => {
                maxLinesInput.value = maxLinesSlider.value;
                syncMaxLinesUI(maxLinesSlider.value);
            });
            maxLinesInput.addEventListener('input', () => syncMaxLinesUI(maxLinesInput.value));
            maxLinesPresets.forEach(p => {
                p.addEventListener('click', () => {
                    maxLinesInput.value = p.dataset.maxlinesPreset;
                    syncMaxLinesUI(p.dataset.maxlinesPreset);
                });
            });
            syncMaxLinesUI(maxLinesInput.value);
        }

        const scaleInput = document.getElementById('scale');
        const scaleSlider = document.getElementById('scaleSlider');
        const scaleDisplay = document.getElementById('scaleDisplay');
        const scalePresets = document.querySelectorAll('[data-scale-preset]');

        function syncScaleUI(val) {
            const num = Math.max(1, Math.min(10, parseInt(val, 10) || 1));
            if (scaleDisplay) scaleDisplay.textContent = `${num}x`;
            if (scaleSlider) scaleSlider.value = num;
            scalePresets.forEach(p => {
                p.classList.toggle('active', parseInt(p.dataset.scalePreset, 10) === num);
            });
        }
        if (scaleInput && scaleSlider) {
            scaleSlider.addEventListener('input', () => {
                scaleInput.value = scaleSlider.value;
                syncScaleUI(scaleSlider.value);
            });
            scaleInput.addEventListener('input', () => syncScaleUI(scaleInput.value));
            scalePresets.forEach(p => {
                p.addEventListener('click', () => {
                    scaleInput.value = p.dataset.scalePreset;
                    syncScaleUI(p.dataset.scalePreset);
                });
            });
            syncScaleUI(scaleInput.value);
        }

        const resDisplay = document.getElementById('resolutionDisplay');
        const resPresets = document.querySelectorAll('[data-res-preset]');
        function syncResolutionReadout() {
            const val = parseFloat(resolutionInput.value) || 0.5;
            if (resDisplay) resDisplay.textContent = val.toString();
            resPresets.forEach(p => {
                p.classList.toggle('active', Math.abs(parseFloat(p.dataset.resPreset) - val) < 0.001);
            });
        }
        resolutionInput.addEventListener('input', syncResolutionReadout);
        resPresets.forEach(p => {
            p.addEventListener('click', () => {
                resolutionInput.value = p.dataset.resPreset;
                userResolutionLocked = true;
                syncResolutionReadout();
            });
        });

        const blockIdInput = document.getElementById('blockId');
        if (blockIdInput && blockIdInput.parentElement.classList.contains('autocomplete-wrapper')) {
            setupAutocomplete(blockIdInput);
        }

        // ========== Events ==========
        dropZone.addEventListener('click', () => fileInput.click());
        dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            if (e.dataTransfer.files.length > 0) {
                processFiles(e.dataTransfer.files);
            }
        });
        fileInput.addEventListener('change', e => {
            if (e.target.files.length > 0) {
                processFiles(e.target.files);
            }
        });

        function triggerGenerateAndGoToCommands() {
            if (!hasLoadedVoxels()) return;
            if (!is3DModel) {
                const testCheck = collectCustomMappings();
                if (testCheck === null) return;
            }
            switchStep(3);
            setProgress(15);
            requestAnimationFrame(() => {
                setTimeout(() => {
                    doConvert();
                }, 20);
            });
        }

        convertBtn.addEventListener('click', triggerGenerateAndGoToCommands);
        const previewGenerateBtn = document.getElementById('previewGenerateBtn');
        if (previewGenerateBtn) {
            previewGenerateBtn.addEventListener('click', triggerGenerateAndGoToCommands);
        }

        // ========== 3D Preview ==========
        const previewBtn = document.getElementById('previewBtn');
        const previewModal = document.getElementById('previewModal');
        const previewClose = document.getElementById('previewClose');
        const previewCanvas = document.getElementById('previewCanvas');
        const previewInfo = document.getElementById('previewInfo');
        const resetViewBtn = document.getElementById('resetViewBtn');
        const toggleWireBtn = document.getElementById('toggleWireBtn');

        let previewScene, previewCamera, previewRenderer, previewMesh;
        let previewCtrl = { drag: false, lx: 0, ly: 0, rx: 0.5, ry: 0.5, zoom: 1 };
        let wireMode = false, animId = null;

        function initPreview() {
            previewScene = new THREE.Scene();
            previewScene.background = new THREE.Color(0x060904);
            const c = previewCanvas.parentElement;
            const w = Math.max(c.clientWidth, 300);
            const h = Math.max(c.clientHeight, 300);
            previewCamera = new THREE.PerspectiveCamera(60, w / h, 0.1, 10000);
            previewCamera.position.set(0, 0, 100);
            previewRenderer = new THREE.WebGLRenderer({ canvas: previewCanvas, antialias: true });
            previewRenderer.setSize(w, h);
            previewRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            previewScene.add(new THREE.AmbientLight(0xffffff, 0.45));
            const d1 = new THREE.DirectionalLight(0xffffff, 0.65); d1.position.set(1, 1.2, 1); previewScene.add(d1);
            const d2 = new THREE.DirectionalLight(0xbef264, 0.25); d2.position.set(-1, -1, -1); previewScene.add(d2);
        }

        function createVoxels(vox, isNBT) {
            if (previewMesh) { previewScene.remove(previewMesh); previewMesh.geometry?.dispose(); previewMesh.material?.dispose(); }
            if (!vox.length) return;
            let mnX = Infinity, mnY = Infinity, mnZ = Infinity, mxX = -Infinity, mxY = -Infinity, mxZ = -Infinity;
            for (const v of vox) {
                const x = v[0], y = v[1], z = v[2];
                mnX = Math.min(mnX, x); mxX = Math.max(mxX, x);
                mnY = Math.min(mnY, y); mxY = Math.max(mxY, y);
                mnZ = Math.min(mnZ, z); mxZ = Math.max(mxZ, z);
            }
            const cx = (mnX + mxX) / 2, cy = (mnY + mxY) / 2, cz = (mnZ + mxZ) / 2, sz = Math.max(mxX - mnX, mxY - mnY, mxZ - mnZ) + 1;
            const geo = new THREE.BoxGeometry(0.95, 0.95, 0.95);

            const hasColorData = !isNBT && vox.some(v => v[3] !== null && v[3] !== undefined);

            let mat, mesh;
            if (hasColorData) {
                mat = new THREE.MeshLambertMaterial({ wireframe: wireMode });
                mesh = new THREE.InstancedMesh(geo, mat, vox.length);

                const m = new THREE.Matrix4();
                const colors = [];
                for (let i = 0; i < vox.length; i++) {
                    const v = vox[i];
                    const x = v[0], y = v[1], z = v[2], blockId = v[3];
                    m.setPosition(x - cx, y - cy, z - cz);
                    mesh.setMatrixAt(i, m);

                    let r = 0.74, g = 0.95, b = 0.39;
                    if (blockId) {
                        const block = BLOCK_COLORS_ALL.find(bc => bc.name === blockId);
                        if (block) {
                            r = block.r / 255;
                            g = block.g / 255;
                            b = block.b / 255;
                        }
                    }
                    colors.push(r, g, b);
                }
                mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(colors), 3);
                mesh.instanceColor.needsUpdate = true;
                mat.needsUpdate = true;
            } else {
                mat = new THREE.MeshLambertMaterial({ color: 0xbef264, wireframe: wireMode });
                mesh = new THREE.InstancedMesh(geo, mat, vox.length);
                const m = new THREE.Matrix4();
                for (let i = 0; i < vox.length; i++) {
                    const v = vox[i];
                    const x = v[0], y = v[1], z = v[2];
                    m.setPosition(x - cx, y - cy, z - cz);
                    mesh.setMatrixAt(i, m);
                }
            }

            mesh.instanceMatrix.needsUpdate = true;
            previewScene.add(mesh); previewMesh = mesh;
            previewCamera.position.set(0, 0, sz * 1.5); previewCamera.lookAt(0, 0, 0);
            previewCtrl.zoom = 1; previewCtrl.rx = 0.5; previewCtrl.ry = 0.5;
            previewInfo.textContent = `${vox.length.toLocaleString()} voxels · ${Math.ceil(mxX - mnX + 1)}×${Math.ceil(mxY - mnY + 1)}×${Math.ceil(mxZ - mnZ + 1)}`;
        }

        function renderLoop() {
            if (!previewMesh) return;
            previewMesh.rotation.x = previewCtrl.ry * Math.PI;
            previewMesh.rotation.y = previewCtrl.rx * Math.PI;
            previewRenderer.render(previewScene, previewCamera);
            animId = requestAnimationFrame(renderLoop);
        }

        function openPreview() {
            if (animId) { cancelAnimationFrame(animId); animId = null; }
            if (!previewScene) initPreview();
            const vox = is3DModel ? current3DVoxels : currentBlocks;
            if (!vox.length) { log('No data to preview', 'error'); return; }
            const maxVox = 100000;
            let pv = vox.length > maxVox ? (log(`Limiting preview to ${maxVox}`, 'warning'), vox.slice(0, maxVox)) : vox;
            createVoxels(pv, !is3DModel);
            previewModal.classList.add('active');
            const c = previewCanvas.parentElement;
            const w = Math.max(c.clientWidth, 300);
            const h = Math.max(c.clientHeight, 300);
            previewRenderer.setSize(w, h);
            previewCamera.aspect = w / h;
            previewCamera.updateProjectionMatrix();
            renderLoop();
        }

        function closePreview() {
            previewModal.classList.remove('active');
            if (animId) { cancelAnimationFrame(animId); animId = null; }
        }

        window.addEventListener('resize', () => {
            if (previewRenderer && previewCamera && previewModal.classList.contains('active')) {
                const c = previewCanvas.parentElement;
                if (c && c.clientWidth > 0 && c.clientHeight > 0) {
                    previewRenderer.setSize(c.clientWidth, c.clientHeight);
                    previewCamera.aspect = c.clientWidth / c.clientHeight;
                    previewCamera.updateProjectionMatrix();
                }
            }
        });

        previewCanvas.addEventListener('mousedown', e => { previewCtrl.drag = true; previewCtrl.lx = e.clientX; previewCtrl.ly = e.clientY; });
        previewCanvas.addEventListener('mousemove', e => {
            if (!previewCtrl.drag) return;
            previewCtrl.rx += (e.clientX - previewCtrl.lx) * 0.005;
            previewCtrl.ry += (e.clientY - previewCtrl.ly) * 0.005;
            previewCtrl.lx = e.clientX; previewCtrl.ly = e.clientY;
        });
        previewCanvas.addEventListener('mouseup', () => previewCtrl.drag = false);
        previewCanvas.addEventListener('mouseleave', () => previewCtrl.drag = false);
        previewCanvas.addEventListener('wheel', e => {
            e.preventDefault();
            const zoomFactor = e.deltaY > 0 ? 1.1 : 0.9;
            previewCamera.position.z *= zoomFactor;
            previewCamera.position.z = Math.max(1, Math.min(10000, previewCamera.position.z));
        }, { passive: false });

        let touchStartDist = 0;
        previewCanvas.addEventListener('touchstart', e => {
            e.preventDefault();
            if (e.touches.length === 1) {
                previewCtrl.drag = true;
                previewCtrl.lx = e.touches[0].clientX;
                previewCtrl.ly = e.touches[0].clientY;
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                touchStartDist = Math.sqrt(dx * dx + dy * dy);
            }
        }, { passive: false });

        previewCanvas.addEventListener('touchmove', e => {
            e.preventDefault();
            if (e.touches.length === 1 && previewCtrl.drag) {
                previewCtrl.rx += (e.touches[0].clientX - previewCtrl.lx) * 0.005;
                previewCtrl.ry += (e.touches[0].clientY - previewCtrl.ly) * 0.005;
                previewCtrl.lx = e.touches[0].clientX;
                previewCtrl.ly = e.touches[0].clientY;
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (touchStartDist > 0) {
                    const zoomFactor = touchStartDist / dist;
                    previewCamera.position.z *= zoomFactor;
                    previewCamera.position.z = Math.max(1, Math.min(10000, previewCamera.position.z));
                }
                touchStartDist = dist;
            }
        }, { passive: false });

        previewCanvas.addEventListener('touchend', () => {
            previewCtrl.drag = false;
            touchStartDist = 0;
        });

        if (previewBtn) {
            previewBtn.addEventListener('click', () => switchStep(2));
        }
        if (previewClose) {
            previewClose.addEventListener('click', () => switchStep(1));
        }
        resetViewBtn.addEventListener('click', () => {
            previewCtrl.rx = 0.5;
            previewCtrl.ry = 0.5;
            if (previewMesh) {
                const vox = is3DModel ? current3DVoxels : currentBlocks;
                if (vox.length > 0) {
                    let mxX = -Infinity, mxY = -Infinity, mxZ = -Infinity, mnX = Infinity, mnY = Infinity, mnZ = Infinity;
                    for (const v of vox) {
                        const [x, y, z] = is3DModel ? v : [v[0], v[1], v[2]];
                        mnX = Math.min(mnX, x); mxX = Math.max(mxX, x);
                        mnY = Math.min(mnY, y); mxY = Math.max(mxY, y);
                        mnZ = Math.min(mnZ, z); mxZ = Math.max(mxZ, z);
                    }
                    const sz = Math.max(mxX - mnX, mxY - mnY, mxZ - mnZ) + 1;
                    previewCamera.position.z = sz * 1.5;
                } else {
                    previewCamera.position.z = 100;
                }
            }
        });
        toggleWireBtn.addEventListener('click', () => {
            wireMode = !wireMode;
            if (previewMesh?.material) previewMesh.material.wireframe = wireMode;
            toggleWireBtn.textContent = wireMode ? 'Solid Mesh' : 'Wireframe';
        });

        const origProcess = processFile;
        processFile = async function (f) {
            await origProcess(f);
            const ready = hasLoadedVoxels();
            if (previewBtn) previewBtn.disabled = !ready;
            const previewGen = document.getElementById('previewGenerateBtn');
            if (previewGen) previewGen.disabled = !ready;
            if (ready) {
                const ext = f.name.split('.').pop().toLowerCase();
                if (['obj', 'stl'].includes(ext)) setFormatMode('3d', true);
                else if (ext === 'we') setFormatMode('we', true);
                else setFormatMode('schem', true);
                syncResolutionReadout();
            }
        };

        const origProcessFiles = processFiles;
        processFiles = async function (files) {
            await origProcessFiles(files);
            const ready = hasLoadedVoxels();
            if (previewBtn) previewBtn.disabled = !ready;
            const previewGen = document.getElementById('previewGenerateBtn');
            if (previewGen) previewGen.disabled = !ready;
        };

        // ========== Interactive Glowing Grid Background ==========
        function initInteractiveGridBg() {
            const bgCanvas = document.getElementById('bgGridCanvas');
            if (!bgCanvas) return;
            const ctx = bgCanvas.getContext('2d', { alpha: false });
            if (!ctx) return;

            const CELL = 28;
            const GLOW_RADIUS = 250;
            const NODE_RADIUS = 205;
            const IDLE_FADE_MS = 1600;
            const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            let viewW = document.documentElement.clientWidth || window.innerWidth;
            let viewH = window.innerHeight;
            let dpr = Math.min(window.devicePixelRatio || 1, 2);

            let targetX = Math.round(viewW * 0.5);
            let targetY = Math.round(viewH * 0.35);
            let curX = targetX;
            let curY = targetY;

            // Square dots & cursor glow stay at 0 until actual user interaction
            let curAlpha = 0;
            let targetAlpha = 0;
            let hasPointerSeed = false;
            let idleTimeoutId = null;

            const ripples = [];
            let bgRafId = null;

            function resizeBgCanvas() {
                viewW = document.documentElement.clientWidth || window.innerWidth;
                viewH = window.innerHeight;
                dpr = Math.min(window.devicePixelRatio || 1, 2);
                bgCanvas.width = Math.floor(viewW * dpr);
                bgCanvas.height = Math.floor(viewH * dpr);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                drawBgFrame(performance.now());
            }

            function paintAmbientGlow(cx, cy, radius, coreAlpha, midAlpha) {
                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
                grad.addColorStop(0, `rgba(190, 242, 100, ${coreAlpha})`);
                grad.addColorStop(0.38, `rgba(190, 242, 100, ${midAlpha})`);
                grad.addColorStop(0.72, `rgba(190, 242, 100, ${(midAlpha * 0.32).toFixed(4)})`);
                grad.addColorStop(1, 'rgba(190, 242, 100, 0)');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, viewW, viewH);
            }

            function drawBgFrame(now) {
                // 1. Pitch-black base (#000000)
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, viewW, viewH);

                // 2. Always-on large ambient pistachio glows in background (no interaction required)
                const maxDim = Math.max(viewW, viewH);
                paintAmbientGlow(viewW * 0.50, Math.min(viewH * 0.36, 360), maxDim * 0.68, 0.145, 0.068);
                paintAmbientGlow(viewW * 0.14, viewH * 0.26, maxDim * 0.46, 0.072, 0.032);
                paintAmbientGlow(viewW * 0.86, viewH * 0.78, maxDim * 0.48, 0.068, 0.030);

                // 3. Interactive cursor radial glow (ONLY visible during active interaction)
                if (curAlpha > 0.004) {
                    const spotGrad = ctx.createRadialGradient(curX, curY, 0, curX, curY, GLOW_RADIUS);
                    spotGrad.addColorStop(0, `rgba(190, 242, 100, ${(0.185 * curAlpha).toFixed(4)})`);
                    spotGrad.addColorStop(0.38, `rgba(190, 242, 100, ${(0.082 * curAlpha).toFixed(4)})`);
                    spotGrad.addColorStop(0.74, `rgba(190, 242, 100, ${(0.022 * curAlpha).toFixed(4)})`);
                    spotGrad.addColorStop(1, 'rgba(190, 242, 100, 0)');
                    ctx.fillStyle = spotGrad;
                    ctx.fillRect(
                        Math.max(0, curX - GLOW_RADIUS),
                        Math.max(0, curY - GLOW_RADIUS),
                        Math.min(viewW, GLOW_RADIUS * 2),
                        Math.min(viewH, GLOW_RADIUS * 2)
                    );
                }

                // 4. Always-visible pistachio green (#BEF264) fine grid lines across entire viewport
                ctx.beginPath();
                for (let x = 0; x <= viewW; x += CELL) {
                    const px = x + 0.5;
                    ctx.moveTo(px, 0);
                    ctx.lineTo(px, viewH);
                }
                for (let y = 0; y <= viewH; y += CELL) {
                    const py = y + 0.5;
                    ctx.moveTo(0, py);
                    ctx.lineTo(viewW, py);
                }
                ctx.strokeStyle = 'rgba(190, 242, 100, 0.20)';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Prune expired click ripples
                for (let i = ripples.length - 1; i >= 0; i--) {
                    if (now - ripples[i].born > 650) {
                        ripples.splice(i, 1);
                    }
                }

                // 5. Interactive brightened grid lines + square intersection dots (ONLY with interaction)
                if (curAlpha > 0.004) {
                    const minCol = Math.max(0, Math.floor((curX - GLOW_RADIUS) / CELL));
                    const maxCol = Math.min(Math.ceil(viewW / CELL), Math.ceil((curX + GLOW_RADIUS) / CELL));
                    const minRow = Math.max(0, Math.floor((curY - GLOW_RADIUS) / CELL));
                    const maxRow = Math.min(Math.ceil(viewH / CELL), Math.ceil((curY + GLOW_RADIUS) / CELL));

                    const lineGrad = ctx.createRadialGradient(curX, curY, 0, curX, curY, GLOW_RADIUS);
                    lineGrad.addColorStop(0, `rgba(190, 242, 100, ${(0.48 * curAlpha).toFixed(4)})`);
                    lineGrad.addColorStop(0.45, `rgba(190, 242, 100, ${(0.18 * curAlpha).toFixed(4)})`);
                    lineGrad.addColorStop(1, 'rgba(190, 242, 100, 0)');

                    ctx.beginPath();
                    const clipTop = Math.max(0, curY - GLOW_RADIUS);
                    const clipBottom = Math.min(viewH, curY + GLOW_RADIUS);
                    const clipLeft = Math.max(0, curX - GLOW_RADIUS);
                    const clipRight = Math.min(viewW, curX + GLOW_RADIUS);

                    for (let c = minCol; c <= maxCol; c++) {
                        const px = c * CELL + 0.5;
                        ctx.moveTo(px, clipTop);
                        ctx.lineTo(px, clipBottom);
                    }
                    for (let r = minRow; r <= maxRow; r++) {
                        const py = r * CELL + 0.5;
                        ctx.moveTo(clipLeft, py);
                        ctx.lineTo(clipRight, py);
                    }
                    ctx.strokeStyle = lineGrad;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }

                if (curAlpha > 0.004 || ripples.length > 0) {
                    const nodeMinCol = Math.max(0, Math.floor((curX - NODE_RADIUS) / CELL) - 1);
                    const nodeMaxCol = Math.min(Math.ceil(viewW / CELL), Math.ceil((curX + NODE_RADIUS) / CELL) + 1);
                    const nodeMinRow = Math.max(0, Math.floor((curY - NODE_RADIUS) / CELL) - 1);
                    const nodeMaxRow = Math.min(Math.ceil(viewH / CELL), Math.ceil((curY + NODE_RADIUS) / CELL) + 1);

                    const cStart = ripples.length > 0 ? 0 : nodeMinCol;
                    const cEnd = ripples.length > 0 ? Math.ceil(viewW / CELL) : nodeMaxCol;
                    const rStart = ripples.length > 0 ? 0 : nodeMinRow;
                    const rEnd = ripples.length > 0 ? Math.ceil(viewH / CELL) : nodeMaxRow;

                    for (let c = cStart; c <= cEnd; c++) {
                        const gx = c * CELL;
                        for (let r = rStart; r <= rEnd; r++) {
                            const gy = r * CELL;
                            let alpha = 0;

                            if (curAlpha > 0.004) {
                                const dist = Math.hypot(gx - curX, gy - curY);
                                if (dist < NODE_RADIUS) {
                                    alpha = Math.pow(1 - dist / NODE_RADIUS, 1.55) * curAlpha;
                                }
                            }

                            for (let k = 0; k < ripples.length; k++) {
                                const rp = ripples[k];
                                const progress = (now - rp.born) / 650;
                                const waveRadius = progress * 300;
                                const rDist = Math.hypot(gx - rp.x, gy - rp.y);
                                const band = Math.abs(rDist - waveRadius);
                                if (band < 38) {
                                    const waveAlpha = (1 - band / 38) * (1 - progress) * 0.95;
                                    if (waveAlpha > alpha) alpha = waveAlpha;
                                }
                            }

                            if (alpha > 0.025) {
                                if (alpha > 0.22) {
                                    ctx.fillStyle = `rgba(190, 242, 100, ${(alpha * 0.22).toFixed(3)})`;
                                    ctx.fillRect(gx - 3, gy - 3, 7, 7);
                                }
                                ctx.fillStyle = `rgba(190, 242, 100, ${(alpha * 0.94).toFixed(3)})`;
                                ctx.fillRect(gx - 1.25, gy - 1.25, 3.5, 3.5);
                            }
                        }
                    }
                }
            }

            function stepBgLoop(now) {
                const posFactor = prefersReducedMotion ? 1 : 0.22;
                const alphaFactor = prefersReducedMotion ? 1 : (targetAlpha > curAlpha ? 0.18 : 0.09);

                curX += (targetX - curX) * posFactor;
                curY += (targetY - curY) * posFactor;
                curAlpha += (targetAlpha - curAlpha) * alphaFactor;

                drawBgFrame(now);

                const posRemaining = Math.hypot(targetX - curX, targetY - curY);
                const alphaRemaining = Math.abs(targetAlpha - curAlpha);

                if ((curAlpha > 0.004 && posRemaining > 0.25) || alphaRemaining > 0.004 || ripples.length > 0) {
                    bgRafId = requestAnimationFrame(stepBgLoop);
                } else {
                    curX = targetX;
                    curY = targetY;
                    curAlpha = targetAlpha;
                    drawBgFrame(now);
                    bgRafId = null;
                }
            }

            function wakeBgLoop() {
                if (!bgRafId) {
                    bgRafId = requestAnimationFrame(stepBgLoop);
                }
            }

            function activateInteraction(x, y) {
                targetX = x;
                targetY = y;
                if (!hasPointerSeed || curAlpha < 0.02) {
                    curX = x;
                    curY = y;
                    hasPointerSeed = true;
                }
                targetAlpha = 1;
                if (idleTimeoutId) clearTimeout(idleTimeoutId);
                idleTimeoutId = setTimeout(() => {
                    targetAlpha = 0;
                    wakeBgLoop();
                }, IDLE_FADE_MS);
                wakeBgLoop();
            }

            function deactivateInteraction() {
                if (idleTimeoutId) {
                    clearTimeout(idleTimeoutId);
                    idleTimeoutId = null;
                }
                targetAlpha = 0;
                wakeBgLoop();
            }

            window.addEventListener('pointermove', (e) => {
                activateInteraction(e.clientX, e.clientY);
            }, { passive: true });

            window.addEventListener('touchstart', (e) => {
                if (e.touches && e.touches.length > 0) {
                    activateInteraction(e.touches[0].clientX, e.touches[0].clientY);
                }
            }, { passive: true });

            window.addEventListener('touchmove', (e) => {
                if (e.touches && e.touches.length > 0) {
                    activateInteraction(e.touches[0].clientX, e.touches[0].clientY);
                }
            }, { passive: true });

            window.addEventListener('touchend', () => {
                if (idleTimeoutId) clearTimeout(idleTimeoutId);
                idleTimeoutId = setTimeout(deactivateInteraction, 450);
            }, { passive: true });

            window.addEventListener('pointerdown', (e) => {
                activateInteraction(e.clientX, e.clientY);
                if (!prefersReducedMotion) {
                    ripples.push({ x: e.clientX, y: e.clientY, born: performance.now() });
                }
                wakeBgLoop();
            }, { passive: true });

            document.documentElement.addEventListener('mouseleave', deactivateInteraction, { passive: true });
            window.addEventListener('blur', deactivateInteraction, { passive: true });
            window.addEventListener('resize', resizeBgCanvas, { passive: true });

            resizeBgCanvas();
        }

        initInteractiveGridBg();
        updateSettingsVisibility();
        log('Ready');

