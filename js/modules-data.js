/* =========================================================
 * Permes 展示网站 · 职业模块数据
 * 数据源：module_registry.json + shared_protocol/__init__.py
 * icon 字段映射到 assets/icons/ 下的图片文件名
 * role: dps / tank / heal（用于前端筛选）
 * hot: true 表示热门模块（9 个指定职业的已发布模块）
 * ========================================================= */

window.MODULES = [
  // ---- 死亡骑士 ----
  { folder: "邪dk",       zh: "邪恶",   en: "Unholy",        class: "死亡骑士", classEn: "Death Knight",  role: "dps",  released: true,  visibility: "public",   icon: "Unholy DK.png", hot: true },
  { folder: "鲜血dk",     zh: "鲜血",   en: "Blood",         class: "死亡骑士", classEn: "Death Knight",  role: "tank", released: true,  visibility: "public",   icon: "Blood DK.jpg" },
  { folder: "冰dk",       zh: "冰霜",   en: "Frost",         class: "死亡骑士", classEn: "Death Knight",  role: "dps",  released: false, visibility: "public",   icon: "Frost DK.jpg" },

  // ---- 圣骑士 ----
  { folder: "惩戒骑",      zh: "惩戒",   en: "Retribution",   class: "圣骑士",   classEn: "Paladin",       role: "dps",  released: true,  visibility: "public",   icon: "R Pally.png", hot: true },
  { folder: "神圣骑",      zh: "神圣",   en: "Holy",          class: "圣骑士",   classEn: "Paladin",       role: "heal", released: true,  visibility: "public",   icon: "H Pally.png" },
  { folder: "防骑",        zh: "防护",   en: "Protection",    class: "圣骑士",   classEn: "Paladin",       role: "tank", released: true,  visibility: "public",   icon: "Prot Pally.png" },

  // ---- 战士 ----
  { folder: "武器战",      zh: "巨神兵武器战", en: "Colossus Arms",       class: "战士", classEn: "Warrior", role: "dps",  released: true, visibility: "public", icon: "A Warrior.png", hot: true },
  { folder: "武器战_定制", zh: "屠戮武器战",   en: "Slayer Arms",         class: "战士", classEn: "Warrior", role: "dps",  released: true, visibility: "public", icon: "A Warrior.png" },
  { folder: "狂暴战",      zh: "山丘狂暴战",   en: "Mountain Thane Fury", class: "战士", classEn: "Warrior", role: "dps",  released: true, visibility: "public", icon: "F Warrior.png", hot: true },
  { folder: "狂暴战_定制", zh: "屠戮狂暴战",   en: "Slayer Fury",         class: "战士", classEn: "Warrior", role: "dps",  released: true, visibility: "public", icon: "F Warrior.png" },
  { folder: "防战",        zh: "防护",   en: "Protection",    class: "战士",     classEn: "Warrior",       role: "tank", released: true,  visibility: "public",   icon: "Prot Warrior.png" },

  // ---- 法师 ----
  { folder: "奥法",       zh: "奥术",   en: "Arcane",        class: "法师",     classEn: "Mage",          role: "dps",  released: true,  visibility: "public",   icon: "A Mage.png" },
  { folder: "火法",       zh: "火焰",   en: "Fire",          class: "法师",     classEn: "Mage",          role: "dps",  released: false, visibility: "public",   icon: "Fire Mage.png" },
  { folder: "冰法",       zh: "冰霜",   en: "Frost",         class: "法师",     classEn: "Mage",          role: "dps",  released: true,  visibility: "public",   icon: "F Mage.png" },

  // ---- 术士 ----
  { folder: "痛苦术",     zh: "痛苦",   en: "Affliction",    class: "术士",     classEn: "Warlock",       role: "dps",  released: false, visibility: "public",   icon: "Aff Warlock.png" },
  { folder: "恶魔术",     zh: "恶魔学识", en: "Demonology",  class: "术士",     classEn: "Warlock",       role: "dps",  released: true,  visibility: "public",   icon: "D Warlock.png" },
  { folder: "毁灭术",     zh: "毁灭",   en: "Destruction",   class: "术士",     classEn: "Warlock",       role: "dps",  released: false, visibility: "public",   icon: "Dest Warlock.png" },

  // ---- 牧师 ----
  { folder: "戒律牧",     zh: "戒律",   en: "Discipline",    class: "牧师",     classEn: "Priest",        role: "heal", released: true,  visibility: "developing", icon: "D Priest.png" },
  { folder: "神圣牧",     zh: "神圣",   en: "Holy",          class: "牧师",     classEn: "Priest",        role: "heal", released: false, visibility: "developing", icon: "H Priest.png" },
  { folder: "暗牧",       zh: "暗影",   en: "Shadow",        class: "牧师",     classEn: "Priest",        role: "dps",  released: true,  visibility: "public",   icon: "S Priest.png" },

  // ---- 萨满 ----
  { folder: "元素萨",     zh: "元素",   en: "Elemental",     class: "萨满",     classEn: "Shaman",        role: "dps",  released: true,  visibility: "public",   icon: "Ele Shaman.png", hot: true },
  { folder: "增强萨",     zh: "增强",   en: "Enhancement",   class: "萨满",     classEn: "Shaman",        role: "dps",  released: true,  visibility: "public",   icon: "Enh Shaman.webp", hot: true },
  { folder: "恢复萨",     zh: "恢复",   en: "Restoration",   class: "萨满",     classEn: "Shaman",        role: "heal", released: true,  visibility: "public",   icon: "Resto Shaman.png", hot: true },

  // ---- 唤魔师 ----
  { folder: "湮灭",       zh: "湮灭",   en: "Devastation",   class: "唤魔师",   classEn: "Evoker",        role: "dps",  released: false, visibility: "public",   icon: "DEvoker.png" },
  { folder: "增辉",       zh: "增辉",   en: "Augmentation",  class: "唤魔师",   classEn: "Evoker",        role: "dps",  released: true,  visibility: "public",   icon: "Avoker.webp", hot: true },
  { folder: "恩护",       zh: "恩护",   en: "Preservation",  class: "唤魔师",   classEn: "Evoker",        role: "heal", released: false, visibility: "developing", icon: "Pevoker.png" },

  // ---- 猎人 ----
  { folder: "兽王猎",     zh: "兽王",   en: "Beast Mastery", class: "猎人",     classEn: "Hunter",        role: "dps",  released: true,  visibility: "public",   icon: "BM Hunter.webp", hot: true },
  { folder: "射击猎",     zh: "射击",   en: "Marksmanship",  class: "猎人",     classEn: "Hunter",        role: "dps",  released: true,  visibility: "public",   icon: "MM Hunter.png" },
  { folder: "生存猎",     zh: "生存",   en: "Survival",      class: "猎人",     classEn: "Hunter",        role: "dps",  released: true,  visibility: "public",   icon: "Sur Hunter.jpeg" },

  // ---- 潜行者 ----
  { folder: "奇袭贼",     zh: "奇袭",   en: "Assassination", class: "潜行者",   classEn: "Rogue",         role: "dps",  released: false, visibility: "public",   icon: "A Rogue.png" },
  { folder: "狂徒贼",     zh: "狂徒",   en: "Outlaw",        class: "潜行者",   classEn: "Rogue",         role: "dps",  released: true,  visibility: "public",   icon: "O Rogue.png", hot: true },
  { folder: "敏锐贼",     zh: "敏锐",   en: "Subtlety",      class: "潜行者",   classEn: "Rogue",         role: "dps",  released: false, visibility: "public",   icon: "S Rogue.png" },

  // ---- 武僧 ----
  { folder: "酒仙",       zh: "酒仙",   en: "Brewmaster",    class: "武僧",     classEn: "Monk",          role: "tank", released: true,  visibility: "public",   icon: "BM Monk.png", hot: true },
  { folder: "织雾",       zh: "织雾",   en: "Mistweaver",    class: "武僧",     classEn: "Monk",          role: "heal", released: true,  visibility: "public",   icon: "M Monk.png", hot: true },
  { folder: "踏风",       zh: "踏风",   en: "Windwalker",    class: "武僧",     classEn: "Monk",          role: "dps",  released: true,  visibility: "public",   icon: "W Monk.png" },

  // ---- 恶魔猎手 ----
  { folder: "噬灭",       zh: "噬灭",   en: "Annihilation",  class: "恶魔猎手", classEn: "Demon Hunter",  role: "dps",  released: true,  visibility: "public",   icon: "DDH.png", hot: true },
  { folder: "浩劫",       zh: "浩劫",   en: "Havoc",         class: "恶魔猎手", classEn: "Demon Hunter",  role: "dps",  released: true,  visibility: "public",   icon: "Havoc.webp" },
  { folder: "复仇",       zh: "复仇",   en: "Vengeance",     class: "恶魔猎手", classEn: "Demon Hunter",  role: "tank", released: true,  visibility: "public",   icon: "VDH.png" },

  // ---- 德鲁伊 ----
  { folder: "平衡德",     zh: "平衡",   en: "Balance",       class: "德鲁伊",   classEn: "Druid",         role: "dps",  released: true,  visibility: "public",   icon: "B Druid.png" },
  { folder: "野性德",     zh: "野性",   en: "Feral",         class: "德鲁伊",   classEn: "Druid",         role: "dps",  released: true,  visibility: "public",   icon: "FDruid.webp" },
  { folder: "熊德",       zh: "守护",   en: "Guardian",      class: "德鲁伊",   classEn: "Druid",         role: "tank", released: true,  visibility: "public",   icon: "GDruid.jpg", hot: true },
  { folder: "恢复德",     zh: "恢复",   en: "Restoration",   class: "德鲁伊",   classEn: "Druid",         role: "heal", released: false, visibility: "developing", icon: "Rdruid.png" },
];
