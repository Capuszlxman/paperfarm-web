const _n = 1,
  Cn = 18,
  Ln = 34,
  H = [
    {
      id: "wheat",
      name: "小麦",
      shape: "grain",
      soil: "field",
      unlock: 1,
      seedCoin: 2,
      seedInk: 2,
      growMin: 2,
      yield: 3,
      sell: 2,
      xp: 1,
      seasons: ["spring", "autumn"],
      colors: {
        leaf: "#9ccf6e",
        leaf2: "#79b356",
        fruit: "#f2c75a",
        fruit2: "#d6a13e",
      },
      desc: "最朴素的作物，磨成面粉和饲料都离不开它。",
    },
    {
      id: "carrot",
      name: "胡萝卜",
      shape: "root",
      soil: "field",
      unlock: 2,
      seedCoin: 4,
      seedInk: 4,
      growMin: 5,
      yield: 3,
      sell: 4,
      xp: 2,
      seasons: ["spring", "autumn"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#f08a3c",
        fruit2: "#d06a28",
      },
      desc: "兔子最爱，脆甜多汁。",
    },
    {
      id: "cabbage",
      name: "卷心菜",
      shape: "leafy",
      soil: "field",
      unlock: 3,
      seedCoin: 6,
      seedInk: 6,
      growMin: 8,
      yield: 2,
      sell: 9,
      xp: 3,
      seasons: ["spring", "autumn", "winter"],
      colors: {
        leaf: "#b6e08a",
        leaf2: "#7fb35e",
        fruit: "#d8f0b4",
        fruit2: "#a6d27a",
      },
      desc: "一层层包起来的心事。",
    },
    {
      id: "potato",
      name: "土豆",
      shape: "root",
      soil: "field",
      unlock: 4,
      seedCoin: 5,
      seedInk: 5,
      growMin: 10,
      yield: 4,
      sell: 5,
      xp: 3,
      seasons: ["spring", "autumn"],
      colors: {
        leaf: "#8cc46a",
        leaf2: "#5e9445",
        fruit: "#d9b07a",
        fruit2: "#b98a55",
      },
      desc: "埋在土里的金子。小猪也喜欢。",
    },
    {
      id: "tomato",
      name: "番茄",
      shape: "vine",
      soil: "field",
      unlock: 5,
      seedCoin: 8,
      seedInk: 8,
      growMin: 15,
      yield: 4,
      sell: 7,
      xp: 4,
      seasons: ["summer"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#e85a4c",
        fruit2: "#c0412f",
      },
      desc: "番茄炒蛋的另一半。",
    },
    {
      id: "sunflower",
      name: "向日葵",
      shape: "flower",
      soil: "field",
      unlock: 5,
      seedCoin: 8,
      seedInk: 8,
      growMin: 20,
      yield: 2,
      sell: 14,
      xp: 4,
      seasons: ["summer"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#f6c445",
        fruit2: "#8a5d3d",
      },
      flower: !0,
      desc: "一直朝着太阳。蜜蜂会来做客。",
    },
    {
      id: "corn",
      name: "玉米",
      shape: "tall",
      soil: "field",
      unlock: 6,
      seedCoin: 10,
      seedInk: 10,
      growMin: 20,
      yield: 3,
      sell: 12,
      xp: 5,
      seasons: ["summer"],
      colors: {
        leaf: "#9ccf6e",
        leaf2: "#6aa04e",
        fruit: "#f7d455",
        fruit2: "#e0b030",
      },
      desc: "高高的玉米秆，也能磨成饲料。",
    },
    {
      id: "rice",
      name: "水稻",
      shape: "grain",
      soil: "paddy",
      unlock: 6,
      seedCoin: 6,
      seedInk: 6,
      growMin: 18,
      yield: 5,
      sell: 6,
      xp: 4,
      seasons: ["summer", "autumn"],
      colors: {
        leaf: "#a6d27a",
        leaf2: "#79b356",
        fruit: "#efd88a",
        fruit2: "#cdb060",
      },
      desc: "需要种在水田里。",
    },
    {
      id: "radish",
      name: "白萝卜",
      shape: "root",
      soil: "field",
      unlock: 7,
      seedCoin: 7,
      seedInk: 7,
      growMin: 12,
      yield: 3,
      sell: 9,
      xp: 3,
      seasons: ["autumn", "winter"],
      colors: {
        leaf: "#9ccf6e",
        leaf2: "#6aa04e",
        fruit: "#f6f3ea",
        fruit2: "#dcd6c6",
      },
      desc: "冬天的萝卜赛人参。",
    },
    {
      id: "strawberry",
      name: "草莓",
      shape: "ground",
      soil: "field",
      unlock: 8,
      seedCoin: 12,
      seedInk: 12,
      growMin: 25,
      yield: 4,
      sell: 11,
      xp: 5,
      seasons: ["spring"],
      colors: {
        leaf: "#7fb35e",
        leaf2: "#5e9445",
        fruit: "#ee5a6b",
        fruit2: "#c63e52",
        accent: "#fff3b0",
      },
      desc: "春天的第一口甜。",
    },
    {
      id: "cucumber",
      name: "黄瓜",
      shape: "vine",
      soil: "field",
      unlock: 9,
      seedCoin: 10,
      seedInk: 10,
      growMin: 22,
      yield: 4,
      sell: 10,
      xp: 5,
      seasons: ["summer"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#5fa84a",
        fruit2: "#3f7f34",
      },
      desc: "顶花带刺，清清爽爽。",
    },
    {
      id: "lavender",
      name: "薰衣草",
      shape: "flower",
      soil: "field",
      unlock: 9,
      seedCoin: 14,
      seedInk: 14,
      growMin: 35,
      yield: 3,
      sell: 15,
      xp: 6,
      seasons: ["summer"],
      colors: {
        leaf: "#9cbf8a",
        leaf2: "#6f9a62",
        fruit: "#a58ad8",
        fruit2: "#7c62b8",
      },
      flower: !0,
      desc: "紫色的香气，可以做成香囊。",
    },
    {
      id: "eggplant",
      name: "茄子",
      shape: "vine",
      soil: "field",
      unlock: 10,
      seedCoin: 12,
      seedInk: 12,
      growMin: 28,
      yield: 4,
      sell: 12,
      xp: 6,
      seasons: ["summer", "autumn"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#7d4fa0",
        fruit2: "#5b347a",
      },
      desc: "紫色的小灯笼。",
    },
    {
      id: "apple",
      name: "苹果",
      shape: "tree",
      soil: "orchard",
      unlock: 10,
      seedCoin: 80,
      seedInk: 80,
      growMin: 120,
      regrowMin: 60,
      yield: 6,
      sell: 12,
      xp: 12,
      seasons: ["autumn"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#6aa04e",
        fruit: "#e85a4c",
        fruit2: "#ff9d8c",
      },
      desc: "种在果园地里，可以反复结果。",
    },
    {
      id: "sweetpotato",
      name: "红薯",
      shape: "root",
      soil: "field",
      unlock: 11,
      seedCoin: 9,
      seedInk: 9,
      growMin: 30,
      yield: 5,
      sell: 9,
      xp: 6,
      seasons: ["autumn"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#c8586a",
        fruit2: "#a03e52",
      },
      desc: "烤红薯是冬天的味道。",
    },
    {
      id: "pumpkin",
      name: "南瓜",
      shape: "ground",
      soil: "field",
      unlock: 12,
      seedCoin: 20,
      seedInk: 20,
      growMin: 60,
      yield: 2,
      sell: 40,
      xp: 10,
      seasons: ["autumn"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#f39a3a",
        fruit2: "#d47a22",
      },
      desc: "又大又圆，秋天的收获。",
    },
    {
      id: "rose",
      name: "玫瑰",
      shape: "flower",
      soil: "field",
      unlock: 13,
      seedCoin: 25,
      seedInk: 25,
      growMin: 45,
      yield: 2,
      sell: 35,
      xp: 9,
      seasons: ["spring"],
      colors: {
        leaf: "#6aa04e",
        leaf2: "#4b7a38",
        fruit: "#e0475a",
        fruit2: "#b52f45",
      },
      flower: !0,
      desc: "送给值得记住的人。",
    },
    {
      id: "blueberry",
      name: "蓝莓",
      shape: "bush",
      soil: "field",
      unlock: 14,
      seedCoin: 40,
      seedInk: 40,
      growMin: 60,
      regrowMin: 30,
      yield: 4,
      sell: 14,
      xp: 8,
      seasons: ["summer"],
      colors: {
        leaf: "#7fb35e",
        leaf2: "#5e9445",
        fruit: "#5a6fc8",
        fruit2: "#3c4f9e",
      },
      desc: "一丛灌木，可以一直采摘。",
    },
    {
      id: "grape",
      name: "葡萄",
      shape: "vine",
      soil: "orchard",
      unlock: 15,
      seedCoin: 60,
      seedInk: 60,
      growMin: 90,
      regrowMin: 45,
      yield: 5,
      sell: 16,
      xp: 12,
      seasons: ["autumn"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#5e9445",
        fruit: "#8a5cb8",
        fruit2: "#64408e",
      },
      desc: "爬满架子的紫色宝石。",
    },
    {
      id: "peach",
      name: "桃子",
      shape: "tree",
      soil: "orchard",
      unlock: 16,
      seedCoin: 100,
      seedInk: 100,
      growMin: 150,
      regrowMin: 75,
      yield: 6,
      sell: 15,
      xp: 14,
      seasons: ["summer"],
      colors: {
        leaf: "#88bf64",
        leaf2: "#6aa04e",
        fruit: "#ffaf9a",
        fruit2: "#f07f7a",
      },
      desc: "粉粉的，软软的。",
    },
  ],
  G = Object.fromEntries(H.map((e) => [e.id, e])),
  ue = [
    {
      kind: "chicken",
      name: "小鸡",
      home: "coop",
      unlock: 1,
      price: 30,
      cycleMin: 3,
      product: "egg",
      feeds: ["feed"],
      feedPerMeal: 1,
      cyclesPerMeal: 2,
      xp: 2,
      desc: "每天咯咯哒，下蛋最勤快。",
    },
    {
      kind: "duck",
      name: "鸭子",
      home: "duckhouse",
      unlock: 4,
      price: 60,
      cycleMin: 6,
      product: "duck_egg",
      feeds: ["feed", "rice"],
      feedPerMeal: 1,
      cyclesPerMeal: 2,
      xp: 3,
      desc: "摇摇摆摆，蛋又大又香。",
    },
    {
      kind: "cow",
      name: "奶牛",
      home: "barn",
      unlock: 6,
      price: 150,
      cycleMin: 10,
      product: "milk",
      feeds: ["feed", "corn"],
      feedPerMeal: 2,
      cyclesPerMeal: 2,
      xp: 5,
      desc: "温柔的大眼睛，每天一桶牛奶。",
    },
    {
      kind: "sheep",
      name: "绵羊",
      home: "sheeppen",
      unlock: 7,
      price: 120,
      cycleMin: 12,
      product: "wool",
      feeds: ["feed", "cabbage"],
      feedPerMeal: 1,
      cyclesPerMeal: 2,
      xp: 5,
      desc: "软乎乎的羊毛能织成布料。",
    },
    {
      kind: "pig",
      name: "小猪",
      home: "pigsty",
      unlock: 8,
      price: 160,
      cycleMin: 15,
      product: "fertilizer",
      bonus: { item: "truffle", chance: 0.15 },
      feeds: ["feed", "potato", "sweetpotato", "pumpkin"],
      feedPerMeal: 1,
      cyclesPerMeal: 2,
      xp: 5,
      desc: "会拱出肥料，偶尔还能找到松露。",
    },
    {
      kind: "goat",
      name: "山羊",
      home: "sheeppen",
      unlock: 9,
      price: 140,
      cycleMin: 9,
      product: "goat_milk",
      feeds: ["feed", "cabbage"],
      feedPerMeal: 1,
      cyclesPerMeal: 2,
      xp: 5,
      desc: "爱爬高的小胡子，产羊奶。",
    },
    {
      kind: "bee",
      name: "蜜蜂",
      home: "beehive",
      unlock: 10,
      price: 200,
      cycleMin: 20,
      product: "honey",
      feeds: [],
      feedPerMeal: 0,
      cyclesPerMeal: 1,
      xp: 6,
      desc: "不用喂食。附近种花的话，酿蜜会更快。",
    },
    {
      kind: "rabbit",
      name: "长毛兔",
      home: "hutch",
      unlock: 11,
      price: 100,
      cycleMin: 10,
      product: "rabbit_fur",
      feeds: ["carrot", "feed"],
      feedPerMeal: 1,
      cyclesPerMeal: 2,
      xp: 4,
      desc: "长长的兔毛可以纺成毛线。",
    },
  ],
  O = Object.fromEntries(ue.map((e) => [e.kind, e])),
  lt = 5,
  dt = (e, t) => Math.round(O[e].price * 0.6 * t),
  ut = (e) => 1 + 0.12 * (e - 1),
  ft = (e) => (e >= 3 ? 0.2 + 0.1 * (e - 3) : 0),
  Ce = [
    "豆豆",
    "团子",
    "小满",
    "糯米",
    "花卷",
    "芝麻",
    "汤圆",
    "布丁",
    "可可",
    "年糕",
    "饭团",
    "阿福",
    "栗子",
    "麦芽",
    "雪球",
    "奶糖",
  ],
  C =
    (e, t = 3, n = 4) =>
    (o) => ({
      coin: Math.round(e * (o - 1) * (1 + (o - 2) * 0.5)),
      wood: o >= t ? (o - t + 1) * 3 : 0,
      stone: o >= n ? (o - n + 1) * 2 : 0,
    }),
  _ = () => ({ coin: 0 }),
  je = [
    {
      id: "plot_field",
      name: "农田",
      cat: "farm",
      size: [2, 2],
      unlock: 1,
      cost: { coin: 10 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 1,
      limit: 0,
      soil: "field",
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "最普通的田地，大部分作物都能种。",
    },
    {
      id: "plot_paddy",
      name: "水田",
      cat: "farm",
      size: [2, 2],
      unlock: 6,
      cost: { coin: 40 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 1,
      limit: 0,
      soil: "paddy",
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "灌满水的田，用来种水稻。",
    },
    {
      id: "plot_orchard",
      name: "果园地",
      cat: "farm",
      size: [2, 2],
      unlock: 10,
      cost: { coin: 60 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 1,
      limit: 0,
      soil: "orchard",
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "种果树和葡萄的地，收获后会再次结果。",
    },
    {
      id: "coop",
      name: "鸡舍",
      cat: "animal",
      size: [4, 3],
      unlock: 1,
      cost: { coin: 80 },
      maxLevel: 5,
      upgradeCost: C(80),
      capacity: (e) => 1 + e,
      limit: 3,
      door: [1, 2],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "小鸡的家。等级越高，住得越多。",
    },
    {
      id: "duckhouse",
      name: "鸭舍",
      cat: "animal",
      size: [3, 3],
      unlock: 4,
      cost: { coin: 220 },
      maxLevel: 5,
      upgradeCost: C(120),
      capacity: (e) => e + 1,
      limit: 2,
      door: [1, 2],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "鸭子摇摇摆摆的家，门前有个小水洼。",
    },
    {
      id: "barn",
      name: "牛棚",
      cat: "animal",
      size: [5, 4],
      unlock: 6,
      cost: { coin: 600, wood: 6 },
      maxLevel: 5,
      upgradeCost: C(300),
      capacity: (e) => e + 1,
      limit: 2,
      door: [2, 3],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "奶牛住的大红房子。",
    },
    {
      id: "sheeppen",
      name: "羊圈",
      cat: "animal",
      size: [5, 4],
      unlock: 7,
      cost: { coin: 500, wood: 6 },
      maxLevel: 5,
      upgradeCost: C(260),
      capacity: (e) => e + 1,
      limit: 2,
      door: [2, 3],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "绵羊和山羊都可以住在这里。",
    },
    {
      id: "pigsty",
      name: "猪圈",
      cat: "animal",
      size: [4, 3],
      unlock: 8,
      cost: { coin: 650, wood: 4, stone: 2 },
      maxLevel: 5,
      upgradeCost: C(300),
      capacity: (e) => e + 1,
      limit: 2,
      door: [1, 2],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "小猪拱地，偶尔会带来惊喜。",
    },
    {
      id: "beehive",
      name: "蜂箱",
      cat: "animal",
      size: [2, 2],
      unlock: 10,
      cost: { coin: 800, wood: 4 },
      maxLevel: 5,
      upgradeCost: C(350),
      capacity: (e) => e,
      limit: 4,
      door: [0, 1],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "蜜蜂不用喂，附近有花开得越多，蜜越多。",
    },
    {
      id: "hutch",
      name: "兔舍",
      cat: "animal",
      size: [3, 2],
      unlock: 11,
      cost: { coin: 500, wood: 4 },
      maxLevel: 5,
      upgradeCost: C(250),
      capacity: (e) => e + 1,
      limit: 2,
      door: [1, 1],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "长毛兔的安乐窝。",
    },
    {
      id: "windmill",
      name: "风车磨坊",
      cat: "processing",
      size: [3, 5],
      unlock: 1,
      cost: { coin: 150 },
      maxLevel: 3,
      upgradeCost: C(200, 2, 3),
      capacity: (e) => e,
      limit: 1,
      door: [1, 4],
      movable: !0,
      removable: !1,
      refund: 0,
      desc: "把小麦磨成饲料和面粉。等级越高，能同时磨的越多。",
    },
    {
      id: "workshop",
      name: "加工坊",
      cat: "processing",
      size: [4, 3],
      unlock: 5,
      cost: { coin: 400, wood: 6 },
      maxLevel: 4,
      upgradeCost: C(300, 2, 3),
      capacity: (e) => e,
      limit: 1,
      door: [1, 2],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "面包、奶酪、布料……生活里的好东西都在这里做。",
    },
    {
      id: "shop",
      name: "集市小铺",
      cat: "processing",
      size: [4, 3],
      unlock: 3,
      cost: { coin: 250 },
      maxLevel: 4,
      upgradeCost: C(250, 2, 3),
      capacity: (e) => e,
      limit: 1,
      door: [1, 2],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "在这里出售农产品价格更好，等级越高越划算。",
    },
    {
      id: "silo",
      name: "谷仓",
      cat: "storage",
      size: [3, 3],
      unlock: 2,
      cost: { coin: 120 },
      maxLevel: 5,
      upgradeCost: C(150),
      capacity: (e) => 100 + 60 * e,
      limit: 3,
      door: [1, 2],
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "每座谷仓都会提高仓库容量。",
    },
    {
      id: "cabin",
      name: "小木屋",
      cat: "storage",
      size: [5, 4],
      unlock: 1,
      cost: { coin: 0 },
      maxLevel: 3,
      upgradeCost: C(400, 2, 3),
      capacity: (e) => 120 * e,
      limit: 1,
      door: [2, 3],
      movable: !0,
      removable: !1,
      refund: 0,
      desc: "你在庄园里的家，也是最初的仓库。",
    },
    {
      id: "mailbox",
      name: "邮筒",
      cat: "processing",
      size: [1, 1],
      unlock: 1,
      cost: { coin: 0 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 1,
      movable: !0,
      removable: !1,
      refund: 0,
      desc: "把农产品寄去镇上卖掉。点一下打开仓库出售。",
    },
    {
      id: "tree",
      name: "大树",
      cat: "decor",
      size: [2, 2],
      unlock: 1,
      cost: { coin: 25 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "夏天可以乘凉。",
    },
    {
      id: "bush",
      name: "灌木丛",
      cat: "decor",
      size: [1, 1],
      unlock: 1,
      cost: { coin: 8 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "圆滚滚的一丛绿。",
    },
    {
      id: "fence",
      name: "围栏",
      cat: "decor",
      size: [1, 1],
      unlock: 1,
      cost: { coin: 4 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "划出地块的边界，动物不会翻过去。",
    },
    {
      id: "path",
      name: "石子路",
      cat: "decor",
      size: [1, 1],
      unlock: 2,
      cost: { coin: 3 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "铺一条回家的小路。动物可以走。",
    },
    {
      id: "flowerbed",
      name: "花坛",
      cat: "decor",
      size: [2, 1],
      unlock: 3,
      cost: { coin: 20 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "一排小花。蜜蜂也喜欢。",
    },
    {
      id: "lantern",
      name: "路灯",
      cat: "decor",
      size: [1, 1],
      unlock: 4,
      cost: { coin: 30, stone: 1 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "天黑以后会亮起暖光。",
    },
    {
      id: "bench",
      name: "长椅",
      cat: "decor",
      size: [2, 1],
      unlock: 5,
      cost: { coin: 40, wood: 2 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "坐下来读一读以前的日记。",
    },
    {
      id: "scarecrow",
      name: "稻草人",
      cat: "decor",
      size: [1, 1],
      unlock: 3,
      cost: { coin: 35 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "守着田地的老朋友。",
    },
    {
      id: "pond",
      name: "小池塘",
      cat: "decor",
      size: [3, 2],
      unlock: 6,
      cost: { coin: 120, stone: 3 },
      maxLevel: 1,
      upgradeCost: _,
      capacity: () => 0,
      limit: 0,
      movable: !0,
      removable: !0,
      refund: 0.5,
      desc: "有荷叶和小鱼的池塘。",
    },
  ],
  y = Object.fromEntries(je.map((e) => [e.id, e])),
  mt = (e) => {
    var t;
    return !!((t = y[e]) != null && t.soil);
  },
  Ae = [
    {
      id: "wheat_to_feed",
      name: "小麦饲料",
      building: "windmill",
      inputs: [{ item: "wheat", qty: 3 }],
      outputs: [{ item: "feed", qty: 3 }],
      durationMin: 1,
      xp: 1,
      unlock: 1,
    },
    {
      id: "wheat_to_flour",
      name: "面粉",
      building: "windmill",
      inputs: [{ item: "wheat", qty: 4 }],
      outputs: [{ item: "flour", qty: 2 }],
      durationMin: 3,
      xp: 2,
      unlock: 2,
    },
    {
      id: "corn_to_feed",
      name: "玉米饲料",
      building: "windmill",
      inputs: [{ item: "corn", qty: 2 }],
      outputs: [{ item: "feed", qty: 4 }],
      durationMin: 2,
      xp: 2,
      unlock: 6,
    },
    {
      id: "bread",
      name: "面包",
      building: "workshop",
      inputs: [
        { item: "flour", qty: 2 },
        { item: "egg", qty: 1 },
      ],
      outputs: [{ item: "bread", qty: 1 }],
      durationMin: 6,
      xp: 4,
      unlock: 5,
    },
    {
      id: "cheese",
      name: "奶酪",
      building: "workshop",
      inputs: [{ item: "milk", qty: 3 }],
      outputs: [{ item: "cheese", qty: 1 }],
      durationMin: 15,
      xp: 8,
      unlock: 7,
    },
    {
      id: "strawberry_milk",
      name: "草莓牛奶",
      building: "workshop",
      inputs: [
        { item: "strawberry", qty: 1 },
        { item: "milk", qty: 1 },
      ],
      outputs: [{ item: "strawberry_milk", qty: 1 }],
      durationMin: 5,
      xp: 4,
      unlock: 8,
    },
    {
      id: "fabric",
      name: "布料",
      building: "workshop",
      inputs: [{ item: "wool", qty: 3 }],
      outputs: [{ item: "fabric", qty: 1 }],
      durationMin: 20,
      xp: 8,
      unlock: 7,
    },
    {
      id: "yarn",
      name: "毛线",
      building: "workshop",
      inputs: [{ item: "rabbit_fur", qty: 2 }],
      outputs: [{ item: "yarn", qty: 1 }],
      durationMin: 15,
      xp: 7,
      unlock: 11,
    },
    {
      id: "honey_jar",
      name: "蜂蜜礼罐",
      building: "workshop",
      inputs: [{ item: "honey", qty: 2 }],
      outputs: [{ item: "honey_jar", qty: 1 }],
      durationMin: 10,
      xp: 6,
      unlock: 10,
    },
    {
      id: "sachet",
      name: "薰衣草香囊",
      building: "workshop",
      inputs: [
        { item: "lavender_bunch", qty: 2 },
        { item: "fabric", qty: 1 },
      ],
      outputs: [{ item: "sachet", qty: 2 }],
      durationMin: 12,
      xp: 8,
      unlock: 9,
    },
  ],
  fe = Object.fromEntries(Ae.map((e) => [e.id, e])),
  p = {
    start: {
      coins: 60,
      ink: 0,
      items: { seed_wheat: 6, feed: 2 },
      chickens: 2,
    },
    charsPerGrain: 4,
    dailyCharCap: 600,
    tidyXpPerChar: 0.1,
    tidyXpMaxPerParagraph: 20,
    blockLandRing: 2,
    reclaimBaseCoin: 4,
    reclaimCoinPer25: 1,
    reclaimRadiusBase: 3,
    reclaimCharsPerRadius: 120,
    reclaimRadiusMax: 10,
    reclaimWoodChance: 0.3,
    reclaimStoneChance: 0.12,
    waterSpeedup: 0.25,
    inSeasonBonusYield: 1,
    goldenChance: 0.04,
    goldenSellMult: 5,
    plotCost: { field: [10, 6], paddy: [40, 15], orchard: [60, 20] },
    maxMealsBuffered: 3,
    storeBase: 2,
    beeFlowerBonus: 0.15,
    beeFlowerBonusMax: 0.6,
    shopBonusPerLevel: 0.08,
    baseSellMult: 1,
    materialPrice: { wood: 8, stone: 14 },
    buildSecondsPerLevel: 20,
    offlineCapHours: 12,
    sandboxSpeeds: [1, 10, 60],
    dailyTaskCount: 3,
  },
  ht = {
    sunflower: "sunflower_seed",
    lavender: "lavender_bunch",
    rose: "rose_bunch",
    apple: "apple_fruit",
  },
  pt = {
    sunflower: "葵花籽",
    lavender: "薰衣草束",
    rose: "玫瑰花束",
    apple: "苹果",
  },
  gt = {
    wheat: "束",
    rice: "束",
    corn: "根",
    carrot: "根",
    radish: "根",
    cucumber: "根",
    eggplant: "根",
    sunflower: "袋",
    lavender: "束",
    rose: "束",
    grape: "串",
    strawberry: "颗",
    blueberry: "颗",
    cabbage: "颗",
  },
  K = (e) => ht[e] ?? e,
  q = (e) => "seed_" + e,
  bt = H.map((e) => ({
    id: K(e.id),
    name: pt[e.id] ?? e.name,
    cat: "crop",
    unit: gt[e.id] ?? "个",
    sell: e.sell,
    desc: e.desc,
    icon: {
      kind: "crop:" + e.id,
      c1: e.colors.fruit,
      c2: e.colors.fruit2,
      c3: e.colors.leaf,
    },
  })),
  kt = H.map((e) => ({
    id: q(e.id),
    name: e.name + "种子",
    cat: "seed",
    unit: "包",
    sell: Math.max(1, Math.floor(e.seedCoin / 2)),
    desc: `种下后 ${e.growMin >= 60 ? (e.growMin / 60).toFixed(e.growMin % 60 ? 1 : 0) + " 小时" : e.growMin + " 分钟"}成熟。`,
    icon: { kind: "seed", c1: e.colors.fruit, c2: e.colors.leaf },
  })),
  wt = [
    {
      id: "egg",
      name: "鸡蛋",
      cat: "animal",
      unit: "个",
      sell: 6,
      desc: "新鲜的鸡蛋，还带着稻草的温度。",
      icon: { kind: "egg", c1: "#fff8ea", c2: "#efdcbf" },
    },
    {
      id: "duck_egg",
      name: "鸭蛋",
      cat: "animal",
      unit: "个",
      sell: 11,
      desc: "淡青色的大鸭蛋。",
      icon: { kind: "egg", c1: "#e3f1ec", c2: "#c4dcd3" },
    },
    {
      id: "milk",
      name: "牛奶",
      cat: "animal",
      unit: "瓶",
      sell: 18,
      desc: "香浓的鲜牛奶。",
      icon: { kind: "bottle", c1: "#fffdf6", c2: "#8fb3cf" },
    },
    {
      id: "goat_milk",
      name: "羊奶",
      cat: "animal",
      unit: "瓶",
      sell: 15,
      desc: "清淡微甜的羊奶。",
      icon: { kind: "bottle", c1: "#fffaf0", c2: "#a8c98a" },
    },
    {
      id: "wool",
      name: "羊毛",
      cat: "animal",
      unit: "团",
      sell: 22,
      desc: "软乎乎的一团羊毛。",
      icon: { kind: "ball", c1: "#fdfbf6", c2: "#e6ddcf" },
    },
    {
      id: "rabbit_fur",
      name: "兔毛",
      cat: "animal",
      unit: "团",
      sell: 20,
      desc: "比云还轻的兔毛。",
      icon: { kind: "ball", c1: "#fbeef0", c2: "#ecd2d8" },
    },
    {
      id: "honey",
      name: "蜂蜜",
      cat: "animal",
      unit: "罐",
      sell: 30,
      desc: "花香酿成的蜜。",
      icon: { kind: "jar", c1: "#f6b445", c2: "#d98a2b" },
    },
    {
      id: "fertilizer",
      name: "肥料",
      cat: "animal",
      unit: "袋",
      sell: 4,
      desc: "撒在田里，作物立刻长快一截。",
      icon: { kind: "sack", c1: "#9b7a55", c2: "#7a5a3a" },
    },
    {
      id: "truffle",
      name: "松露",
      cat: "special",
      unit: "颗",
      sell: 90,
      desc: "小猪偶尔拱出来的宝贝。",
      icon: { kind: "truffle", c1: "#6b4a35", c2: "#4a3226" },
    },
    {
      id: "feed",
      name: "饲料",
      cat: "goods",
      unit: "份",
      sell: 2,
      desc: "动物们的饭。",
      icon: { kind: "sack", c1: "#efe2c4", c2: "#f0c95a" },
    },
    {
      id: "flour",
      name: "面粉",
      cat: "goods",
      unit: "袋",
      sell: 6,
      desc: "细细的白面粉。",
      icon: { kind: "sack", c1: "#fbf7ee", c2: "#d8c7a2" },
    },
    {
      id: "cheese",
      name: "奶酪",
      cat: "goods",
      unit: "块",
      sell: 70,
      desc: "慢慢发酵的奶酪。",
      icon: { kind: "cheese", c1: "#f7d455", c2: "#e0b030" },
    },
    {
      id: "strawberry_milk",
      name: "草莓牛奶",
      cat: "goods",
      unit: "瓶",
      sell: 32,
      desc: "粉粉甜甜的一瓶。",
      icon: { kind: "bottle", c1: "#f9c4cf", c2: "#ee5a6b" },
    },
    {
      id: "fabric",
      name: "布料",
      cat: "goods",
      unit: "匹",
      sell: 80,
      desc: "羊毛织成的布。",
      icon: { kind: "fabric", c1: "#cfe0f0", c2: "#8fb3cf" },
    },
    {
      id: "yarn",
      name: "毛线",
      cat: "goods",
      unit: "卷",
      sell: 60,
      desc: "兔毛纺成的毛线。",
      icon: { kind: "ball", c1: "#f7b7c8", c2: "#e0889e" },
    },
    {
      id: "honey_jar",
      name: "蜂蜜礼罐",
      cat: "goods",
      unit: "罐",
      sell: 75,
      desc: "装进玻璃罐的蜂蜜，适合送人。",
      icon: { kind: "jar", c1: "#ffd36b", c2: "#c99a3b", c3: "#e85a4c" },
    },
    {
      id: "bread",
      name: "面包",
      cat: "goods",
      unit: "个",
      sell: 28,
      desc: "刚出炉的面包，日记里常常出现。",
      icon: { kind: "bread", c1: "#e3b06a", c2: "#c48a4a" },
    },
    {
      id: "sachet",
      name: "薰衣草香囊",
      cat: "goods",
      unit: "个",
      sell: 70,
      desc: "放在枕边，睡得更香。",
      icon: { kind: "sachet", c1: "#a58ad8", c2: "#7c62b8" },
    },
    {
      id: "wood",
      name: "木材",
      cat: "material",
      unit: "根",
      sell: 3,
      desc: "建筑升级需要的木材。",
      icon: { kind: "wood", c1: "#c08c56", c2: "#9b6a45" },
    },
    {
      id: "stone",
      name: "石料",
      cat: "material",
      unit: "块",
      sell: 5,
      desc: "结实的石头。",
      icon: { kind: "stone", c1: "#d3cbbd", c2: "#b5a893" },
    },
  ],
  yt = [...bt, ...kt, ...wt],
  T = Object.fromEntries(yt.map((e) => [e.id, e])),
  me = ":golden",
  he = (e) => e.endsWith(me),
  J = (e) => (he(e) ? e.slice(0, -me.length) : e);
function On(e) {
  const t = T[J(e)];
  return t ? (he(e) ? "金色" + t.name : t.name) : e;
}
function vt(e) {
  const t = T[J(e)];
  return t ? (he(e) ? t.sell * p.goldenSellMult : t.sell) : 0;
}
const Ie = 30,
  le = [
    0, 0, 10, 30, 60, 100, 150, 210, 280, 360, 450, 560, 690, 840, 1010, 1200,
    1420, 1670, 1950, 2260, 2600, 2980, 3400, 3860, 4360, 4900, 5500, 6160,
    6880, 7660, 8500,
  ];
function Mt(e) {
  for (let t = Ie; t >= 1; t--) if (e >= le[t]) return t;
  return 1;
}
const Pe = {
    1: { coins: 50, ink: 10, message: "欢迎来到《字里有田》！" },
    2: { coins: 30, ink: 5, message: "庄园在慢慢长大。" },
    3: { coins: 50, ink: 10, message: "庄园越来越热闹了。" },
    5: { coins: 80, ink: 15, message: "庄园更美了。" },
    8: { coins: 120, ink: 20, message: "手艺越来越好了。" },
    10: { coins: 150, ink: 30, message: "甜蜜的收获。" },
    15: { coins: 250, ink: 50, message: "庄园已经很有样子了。" },
    20: { coins: 400, ink: 80, message: "已经是经验丰富的农场主了！" },
    25: { coins: 600, ink: 120, message: "离大师级农场主只差一步了。" },
    30: { coins: 1e3, ink: 200, message: "恭喜！你已经达到最高等级！" },
  },
  Ee = [
    {
      id: "t_write",
      cat: "tutorial",
      title: "写下第一段日记",
      desc: "在下方纸页写一段话，换行或停一停，小动物会来帮你整理。",
      goal: { kind: "stat", key: "tidy_new", n: 1 },
      reward: { coin: 20, items: { seed_wheat: 4 } },
      hint: "在下方纸页写点今天的小事吧",
    },
    {
      id: "t_plant",
      cat: "tutorial",
      title: "种下小麦",
      desc: "去庄园，点一块空农田，选择小麦。",
      goal: { kind: "stat", key: "plant:wheat", n: 1 },
      after: "t_write",
      reward: { coin: 10, xp: 5 },
      hint: "点底部的「庄园」，再点一块农田",
    },
    {
      id: "t_harvest",
      cat: "tutorial",
      title: "第一次收获",
      desc: "等小麦成熟后点一下收获。",
      goal: { kind: "stat", key: "harvest:wheat", n: 1 },
      after: "t_plant",
      reward: { coin: 15, xp: 5 },
      hint: "小麦变成金色就能收获了",
    },
    {
      id: "t_feed",
      cat: "tutorial",
      title: "喂饱小鸡",
      desc: "在风车把小麦磨成饲料，再去鸡舍喂小鸡。",
      goal: { kind: "stat", key: "feed", n: 1 },
      after: "t_harvest",
      reward: { coin: 15, items: { feed: 2 } },
      hint: "点风车磨饲料，再点鸡舍喂食",
    },
    {
      id: "t_egg",
      cat: "tutorial",
      title: "收第一枚鸡蛋",
      desc: "吃饱的小鸡会下蛋，点鸡舍收取。",
      goal: { kind: "stat", key: "collect:egg", n: 1 },
      after: "t_feed",
      reward: { coin: 20, xp: 5 },
      hint: "鸡舍上冒出鸡蛋时点一下",
    },
    {
      id: "t_sell",
      cat: "tutorial",
      title: "卖出农产品",
      desc: "在邮筒或仓库里出售一些东西换金币。",
      goal: { kind: "stat", key: "sell_coin", n: 1 },
      after: "t_egg",
      reward: { coin: 20, xp: 5 },
      hint: "点邮筒打开仓库出售",
    },
    {
      id: "t_build",
      cat: "tutorial",
      title: "开一块新田",
      desc: "打开建造，在文字旁的空地放一块农田。",
      goal: { kind: "stat", key: "build:plot_field", n: 1 },
      after: "t_sell",
      reward: { coin: 30, xp: 10 },
      hint: "底部「建造」→ 农田，拖到绿地上",
    },
    {
      id: "g_lv3",
      cat: "growth",
      title: "小有收获",
      desc: "达到 3 级。",
      goal: { kind: "level", n: 3 },
      reward: { coin: 60, ink: 10 },
    },
    {
      id: "g_lv5",
      cat: "growth",
      title: "庄园初成",
      desc: "达到 5 级。",
      goal: { kind: "level", n: 5 },
      reward: { coin: 120, items: { wood: 6 } },
    },
    {
      id: "g_lv10",
      cat: "growth",
      title: "资深农场主",
      desc: "达到 10 级。",
      goal: { kind: "level", n: 10 },
      reward: { coin: 400, items: { wood: 10, stone: 6 } },
    },
    {
      id: "g_coop2",
      cat: "growth",
      title: "鸡舍翻新",
      desc: "把鸡舍升到 2 级。",
      goal: { kind: "building", def: "coop", level: 2 },
      reward: { coin: 60, xp: 15 },
    },
    {
      id: "g_three_animals",
      cat: "growth",
      title: "热闹起来",
      desc: "拥有 3 种不同的动物。",
      goal: { kind: "animalKinds", n: 3 },
      reward: { coin: 150, xp: 25 },
    },
    {
      id: "g_shop",
      cat: "growth",
      title: "开张大吉",
      desc: "建造集市小铺。",
      goal: { kind: "building", def: "shop" },
      reward: { coin: 50, xp: 15 },
    },
    {
      id: "g_workshop",
      cat: "growth",
      title: "手艺人",
      desc: "建造加工坊。",
      goal: { kind: "building", def: "workshop" },
      reward: { coin: 80, xp: 20 },
    },
    {
      id: "g_barn",
      cat: "growth",
      title: "迎接奶牛",
      desc: "建造牛棚。",
      goal: { kind: "building", def: "barn" },
      reward: { coin: 120, xp: 25 },
    },
    {
      id: "g_land60",
      cat: "growth",
      title: "新的庄园区域",
      desc: "拥有 160 块土地。",
      goal: { kind: "land", n: 160 },
      reward: { coin: 100, items: { stone: 4 } },
    },
    {
      id: "g_flour",
      cat: "growth",
      title: "磨坊主",
      desc: "磨出第一袋面粉。",
      goal: { kind: "stat", key: "craft:wheat_to_flour", n: 1 },
      reward: { coin: 30, xp: 10 },
    },
    {
      id: "g_bread",
      cat: "growth",
      title: "面包的香味",
      desc: "烤出一个面包。",
      goal: { kind: "stat", key: "craft:bread", n: 1 },
      reward: { coin: 60, xp: 15 },
    },
    {
      id: "a_words100",
      cat: "achievement",
      title: "笔耕不辍",
      desc: "累计记录 300 个字。",
      goal: { kind: "stat", key: "chars", n: 300 },
      reward: { coin: 60, xp: 20 },
    },
    {
      id: "a_words2000",
      cat: "achievement",
      title: "一本小书",
      desc: "累计记录 3000 个字。",
      goal: { kind: "stat", key: "chars", n: 3e3 },
      reward: { coin: 300, xp: 80 },
    },
    {
      id: "a_entries10",
      cat: "achievement",
      title: "十篇日记",
      desc: "整理 10 段日记。",
      goal: { kind: "stat", key: "tidy_new", n: 10 },
      reward: { coin: 120, xp: 40 },
    },
    {
      id: "a_days3",
      cat: "achievement",
      title: "三天的故事",
      desc: "在 3 个不同的日子写下日记（不必连续）。",
      goal: { kind: "stat", key: "write_days", n: 3 },
      reward: { coin: 100, xp: 30 },
    },
    {
      id: "a_harvest10",
      cat: "achievement",
      title: "收获季",
      desc: "累计收获 10 次。",
      goal: { kind: "stat", key: "harvest", n: 10 },
      reward: { coin: 50, xp: 15 },
    },
    {
      id: "a_harvest100",
      cat: "achievement",
      title: "丰收",
      desc: "累计收获 100 次。",
      goal: { kind: "stat", key: "harvest", n: 100 },
      reward: { coin: 400, xp: 80 },
    },
    {
      id: "a_eggs20",
      cat: "achievement",
      title: "养鸡能手",
      desc: "累计收集 20 枚鸡蛋。",
      goal: { kind: "stat", key: "collect:egg", n: 20 },
      reward: { coin: 80, xp: 20 },
    },
    {
      id: "a_crops5",
      cat: "achievement",
      title: "百草园",
      desc: "图鉴里收集 5 种作物。",
      goal: { kind: "codex", cat: "crops", n: 5 },
      reward: { coin: 100, xp: 25 },
    },
    {
      id: "a_crops20",
      cat: "achievement",
      title: "全图鉴 · 作物",
      desc: "收集全部 20 种作物。",
      goal: { kind: "codex", cat: "crops", n: 20 },
      reward: { coin: 1500, xp: 200 },
    },
    {
      id: "a_animals8",
      cat: "achievement",
      title: "全图鉴 · 动物",
      desc: "养过全部 8 种动物。",
      goal: { kind: "codex", cat: "animals", n: 8 },
      reward: { coin: 1500, xp: 200 },
    },
    {
      id: "a_golden",
      cat: "achievement",
      title: "金色的收获",
      desc: "收获一次稀有的金色作物。",
      goal: { kind: "stat", key: "golden", n: 1 },
      reward: { coin: 100, xp: 30 },
    },
    {
      id: "a_seasons",
      cat: "achievement",
      title: "四季流转",
      desc: "在 4 个不同的季节种过作物。",
      goal: { kind: "stat", key: "plant_seasons", n: 4 },
      reward: { coin: 300, xp: 60 },
    },
    {
      id: "a_daily5",
      cat: "achievement",
      title: "日常小事",
      desc: "完成 5 个每日任务。",
      goal: { kind: "stat", key: "daily_done", n: 5 },
      reward: { coin: 120, xp: 30 },
    },
  ],
  xt = Object.fromEntries(Ee.map((e) => [e.id, e])),
  Re = [
    {
      id: "d_write",
      title: (e) => `写下 ${e} 个字（选做，不写也不会有任何惩罚）`,
      key: "chars",
      range: [40, 120],
      minLevel: 1,
      reward: (e) => ({ coin: Math.round(e / 2), xp: 8 }),
    },
    {
      id: "d_harvest",
      title: (e) => `收获 ${e} 次作物`,
      key: "harvest",
      range: [4, 10],
      minLevel: 1,
      reward: (e) => ({ coin: e * 6, xp: 8 }),
    },
    {
      id: "d_collect",
      title: (e) => `收取 ${e} 份动物产品`,
      key: "collect",
      range: [3, 8],
      minLevel: 1,
      reward: (e) => ({ coin: e * 7, xp: 8 }),
    },
    {
      id: "d_craft",
      title: (e) => `加工 ${e} 次`,
      key: "craft",
      range: [2, 5],
      minLevel: 2,
      reward: (e) => ({ coin: e * 10, items: { wood: 2 } }),
    },
    {
      id: "d_sell",
      title: (e) => `出售赚到 ${e} 金币`,
      key: "sell_coin",
      range: [40, 150],
      minLevel: 2,
      reward: (e) => ({ coin: Math.round(e * 0.3), xp: 10 }),
    },
    {
      id: "d_feed",
      title: (e) => `喂食动物 ${e} 次`,
      key: "feed",
      range: [3, 6],
      minLevel: 1,
      reward: (e) => ({ coin: e * 5, items: { feed: 3 } }),
    },
    {
      id: "d_plant",
      title: (e) => `播种 ${e} 次`,
      key: "plant",
      range: [4, 12],
      minLevel: 1,
      reward: (e) => ({ coin: e * 4, xp: 6 }),
    },
    {
      id: "d_water",
      title: (e) => `浇水 ${e} 次`,
      key: "water",
      range: [3, 8],
      minLevel: 1,
      reward: (e) => ({ coin: e * 3, items: { stone: 1 } }),
    },
  ],
  $e = new Set(Array.from("，。、；：？！…—”’）》」』〕】,.;:?!)]}%·～~")),
  De = new Set(Array.from("“‘（《「『〔【([{")),
  Sn = (e) => $e.has(e) || De.has(e),
  _t = (e) =>
    e.charCodeAt(0) < 11904 &&
    e !== "—" &&
    e !== "…" &&
    e !== "“" &&
    e !== "”" &&
    e !== "‘" &&
    e !== "’" &&
    e !== "·";
function Ct(e, t, n = 2) {
  const o = Array.from(e.replace(/\s+$/u, "")),
    i = [],
    a = t * 2;
  let r = 0,
    s = 0,
    c = 0;
  for (; c < o.length && /\s/u.test(o[c]); ) c++;
  for (r = n * 2; c < o.length; c++) {
    const l = o[c];
    if (l === "	") continue;
    const f = _t(l),
      h = f ? 1 : 2;
    if (r + h > a) {
      if ($e.has(l) && r <= a) {
        (i.push({ ch: l, hc: r, line: s, half: f, src: c }), (r += h));
        continue;
      }
      const u = i[i.length - 1];
      (s++,
        (r = 0),
        u &&
          u.line === s - 1 &&
          De.has(u.ch) &&
          ((u.line = s), (u.hc = 0), (r = u.half ? 1 : 2)));
    }
    (l === " " && r === 0) ||
      (i.push({ ch: l, hc: r, line: s, half: f, src: c }), (r += h));
  }
  return { glyphs: i, lines: Math.max(1, s + 1), cols: t };
}
function F(e) {
  let t = 0;
  for (const n of e) /\s/u.test(n) || t++;
  return t;
}
function Lt(e) {
  return { adv: 17 * e, lh: 27 * e, header: 24 * e, pad: 9, font: 16 * e };
}
function ze(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return (t >>> 0).toString(36) + ":" + e.length;
}
const L = 14,
  Le = 8,
  Oe = 16,
  de = 12,
  Ot = 14,
  Y = (e, t) =>
    e.x < t.x + t.w && t.x < e.x + e.w && e.y < t.y + t.h && t.y < e.y + e.h,
  We = (e, t) => ({ x: e.x - t, y: e.y - t, w: e.w + 2 * t, h: e.h + 2 * t }),
  R = (e) => {
    const t = y[e.def];
    return { x: e.x, y: e.y, w: t.size[0], h: t.size[1] };
  };
function Q(e, t, n) {
  return t < 0 || t >= 34 || n < 0 || n >= e.rows ? "#" : e.land[n * 34 + t];
}
function pe(e, t, n) {
  ge(e, Math.max(0, ...t.map((i) => i[1] + 1)));
  const o = e.land.split("");
  for (const [i, a] of t)
    i >= 0 && i < 34 && a >= 0 && a < e.rows && (o[a * 34 + i] = n);
  e.land = o.join("");
}
function ge(e, t) {
  t <= e.rows || ((e.land += ".".repeat((t - e.rows) * 34)), (e.rows = t));
}
function Ne(e) {
  let t = 0;
  for (let n = 0; n < e.land.length; n++) e.land[n] === "g" && t++;
  return t;
}
function jn(e) {
  let t = L;
  for (const n of Object.values(e.blocks))
    n.hidden || (t = Math.max(t, n.y + n.h));
  for (const n of Object.values(e.objects)) t = Math.max(t, R(n).y + R(n).h);
  for (let n = e.rows - 1; n >= t; n--)
    if (e.land.slice(n * 34, (n + 1) * 34).includes("g")) {
      t = Math.max(t, n + 1);
      break;
    }
  return t;
}
function Z(e) {
  let t = L;
  for (const n of Object.values(e.blocks))
    n.hidden || (t = Math.max(t, n.y + n.h));
  for (const n of Object.values(e.objects)) t = Math.max(t, R(n).y + R(n).h);
  for (let n = e.rows - 1; n >= 0; n--)
    if (e.land.slice(n * 34, (n + 1) * 34).includes("g")) {
      t = Math.max(t, n + 1);
      break;
    }
  ge(e, t + Ot);
}
function Se(e, t, n, o) {
  const i = Lt(n),
    a = Ct(e, t),
    r = t * i.adv + i.pad * 2 + 4,
    s = (o ? i.header : 6) + a.lines * i.lh + i.pad * 2;
  return { w: Math.ceil(r / 18), h: Math.ceil(s / 18), lines: a.lines };
}
const W = (e) => ({ x: e.x, y: e.y, w: e.w, h: e.h });
function be(e, t) {
  const n = [];
  for (const o of Object.values(e.blocks))
    !o.hidden &&
      o.id !== t &&
      n.push({ rect: We(W(o), 1), kind: "block", id: o.id });
  for (const o of Object.values(e.objects))
    n.push({ rect: R(o), kind: "object", id: o.id });
  return n;
}
function Te(e, t, n, o = be(e, n)) {
  if (t.x < 0 || t.x + t.w > 34 || t.y < L) return !1;
  for (const i of o) if (Y(t, i.rect)) return !1;
  return !0;
}
function St(e, t, n, o, i, a) {
  const r = be(e, a),
    s = [];
  for (let c = 0; c + t <= 34; c++) s.push(c);
  s.sort((c, l) => Math.abs(c - i) - Math.abs(l - i));
  for (let c = Math.max(L, o); c < e.rows + 200; c++)
    for (const l of s)
      if (Te(e, { x: l, y: c, w: t, h: n }, a, r)) return { x: l, y: c };
  return { x: 1, y: e.rows + 1 };
}
function ke(e, t, n = p.blockLandRing) {
  const o = We(W(t), n),
    i = [],
    a = W(t);
  for (let r = o.y; r < o.y + o.h; r++)
    for (let s = o.x; s < o.x + o.w; s++) {
      if (
        s < 0 ||
        s >= 34 ||
        r < 0 ||
        (s >= a.x && s < a.x + a.w && r >= a.y && r < a.y + a.h)
      )
        continue;
      const c = s < a.x ? a.x - s : s >= a.x + a.w ? s - (a.x + a.w - 1) : 0,
        l = r < a.y ? a.y - r : r >= a.y + a.h ? r - (a.y + a.h - 1) : 0;
      c + l > n + 1 || (Q(e, s, r) === "." && i.push([s, r]));
    }
  return (i.length && pe(e, i, "g"), i);
}
function we(e, t, n) {
  const o = !!t.header,
    i = t.landedAt === 0,
    a = be(e, t.id),
    r = (h, u, m) => {
      const b = Se(t.text, m, n, o),
        B = { x: h, y: u, w: b.w, h: b.h };
      return Te(e, B, t.id, a)
        ? ((t.x = h), (t.y = u), (t.cols = m), (t.w = b.w), (t.h = b.h), !0)
        : !1;
    };
  if (!i) {
    if (r(t.x, t.y, t.cols)) return "kept";
    const h = [];
    for (let u = 1; u <= Oe - Le; u++)
      for (const m of [t.cols + u, t.cols - u]) m >= Le && m <= Oe && h.push(m);
    for (const u of h) if (r(t.x, t.y, u)) return "reflowed";
    for (let u = 1; u <= 6; u++)
      for (const m of [-u, u]) if (r(t.x + m, t.y, t.cols)) return "nudged";
  }
  const s = Se(t.text, t.cols || de, n, o),
    c = i ? jt(e, s.w) : t.x,
    l = i ? At(e) : t.y,
    f = St(e, s.w, s.h, l, c, t.id);
  return (
    (t.x = f.x),
    (t.y = f.y),
    (t.cols = t.cols || de),
    (t.w = s.w),
    (t.h = s.h),
    i ? "placed" : "moved"
  );
}
function jt(e, t) {
  const n = Object.values(e.blocks)
    .filter((a) => !a.hidden && a.landedAt > 0)
    .sort((a, r) => r.landedAt - a.landedAt);
  if (!n.length) return 1;
  const o = n[0];
  return o.x + o.w / 2 < 34 / 2 ? 34 - t - 1 : 1;
}
function At(e) {
  const t = Object.values(e.blocks)
    .filter((n) => !n.hidden && n.landedAt > 0)
    .sort((n, o) => o.landedAt - n.landedAt);
  return t.length ? Math.max(L, t[0].y - 2) : L;
}
function Be(e, t, n, o, i) {
  const a = y[t],
    r = { x: n, y: o, w: a.size[0], h: a.size[1] },
    s = [];
  if (n < 0 || o < 0 || n + r.w > 34)
    return { ok: !1, reason: "超出了纸张边缘", bad: [[n, o]] };
  for (let c = o; c < o + r.h; c++)
    for (let l = n; l < n + r.w; l++) Q(e, l, c) !== "g" && s.push([l, c]);
  if (s.length)
    return { ok: !1, reason: "只能建在绿地上（先开垦土地）", bad: s };
  for (const c of Object.values(e.blocks))
    if (!c.hidden && Y(r, W(c)))
      return { ok: !1, reason: "不能盖住日记文字", bad: [[n, o]] };
  for (const c of Object.values(e.objects))
    if (c.id !== i && Y(r, R(c)))
      return { ok: !1, reason: "和其他建筑重叠了", bad: [[n, o]] };
  return { ok: !0, bad: s };
}
function It(e) {
  return Math.min(
    p.reclaimRadiusMax,
    p.reclaimRadiusBase +
      Math.floor((e.stats.chars ?? 0) / p.reclaimCharsPerRadius),
  );
}
function Pt(e) {
  return p.reclaimBaseCoin + Math.floor(Ne(e) / 25) * p.reclaimCoinPer25;
}
const Et = (e, t, n) =>
  Math.max(n.x - e, 0, e - (n.x + n.w - 1), n.y - t, 0, t - (n.y + n.h - 1));
function Rt(e, t, n) {
  if (Q(e, t, n) !== ".") return { ok: !1, reason: "这里已经是土地了" };
  for (const r of Object.values(e.blocks))
    if (!r.hidden && Y({ x: t, y: n, w: 1, h: 1 }, W(r)))
      return { ok: !1, reason: "这是文字所在的地方" };
  if (
    ![
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ].some(([r, s]) => Q(e, t + r, n + s) === "g")
  )
    return { ok: !1, reason: "只能从已有土地向外开垦" };
  const i = It(e);
  return n < L ||
    Object.values(e.blocks).some((r) => !r.hidden && Et(t, n, W(r)) <= i)
    ? { ok: !0 }
    : {
        ok: !1,
        reason: `离文字太远了（多写一些，开垦范围会变大，目前 ${i} 格）`,
      };
}
function An(e) {
  const t = new Uint8Array(34 * e.rows);
  for (let o = 0; o < t.length; o++) t[o] = e.land[o] === "g" ? 1 : 0;
  const n = (o, i = 0) => {
    for (let a = o.y; a < o.y + o.h; a++)
      for (let r = o.x; r < o.x + o.w; r++)
        r >= 0 && r < 34 && a >= 0 && a < e.rows && (t[a * 34 + r] = i);
  };
  for (const o of Object.values(e.blocks)) o.hidden || n(W(o));
  for (const o of Object.values(e.objects)) {
    const i = y[o.def];
    if (o.def !== "path" && (n(R(o)), i.door)) {
      const a = o.x + i.door[0],
        r = o.y + i.door[1] + 1;
      r < e.rows && e.land[r * 34 + a] === "g" && (t[r * 34 + a] = 1);
    }
  }
  return t;
}
function In(e, t, n, o, i, a, r = 4e3) {
  const c = (A, v) => A >= 0 && A < 34 && v >= 0 && v < t;
  if (!c(i, a) || !e[a * 34 + i]) return null;
  const l = (A, v) => v * 34 + A,
    f = [l(n, o)],
    h = new Map([[l(n, o), 0]]),
    u = new Map([[l(n, o), Math.abs(i - n) + Math.abs(a - o)]]),
    m = new Map(),
    b = new Set();
  let B = 0;
  for (; f.length && B++ < r; ) {
    let A = 0;
    for (let M = 1; M < f.length; M++) u.get(f[M]) < u.get(f[A]) && (A = M);
    const v = f.splice(A, 1)[0],
      $ = v % 34,
      D = Math.floor(v / 34);
    if ($ === i && D === a) {
      const M = [];
      let I = v;
      for (; m.has(I); ) (M.push([I % 34, Math.floor(I / 34)]), (I = m.get(I)));
      return M.reverse();
    }
    b.add(v);
    for (const [M, I] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]) {
      const z = $ + M,
        g = D + I;
      if (!c(z, g) || !e[g * 34 + z]) continue;
      const x = l(z, g);
      if (b.has(x)) continue;
      const U = h.get(v) + 1;
      U < (h.get(x) ?? 1 / 0) &&
        (m.set(x, v),
        h.set(x, U),
        u.set(x, U + Math.abs(i - z) + Math.abs(a - g)),
        f.includes(x) || f.push(x));
    }
  }
  return null;
}
const Pn = (e, t) => ({ x: e * 18 + 18 / 2, y: t * 18 + 18 / 2 });
let ce = 0;
function $t(e) {
  ce = (ce + 1) % 1e6;
  const t = Math.random().toString(36).slice(2, 8);
  return `${e}${Date.now().toString(36)}${ce.toString(36)}${t}`;
}
function Dt(e, t) {
  if (e === t) return 1;
  if (!e.length || !t.length) return 0;
  const n = (c) => {
      const l = new Map(),
        f = Array.from(c);
      f.length === 1 && l.set(f[0], 1);
      for (let h = 0; h < f.length - 1; h++) {
        const u = f[h] + f[h + 1];
        l.set(u, (l.get(u) ?? 0) + 1);
      }
      return l;
    },
    o = n(e),
    i = n(t);
  let a = 0,
    r = 0,
    s = 0;
  for (const c of o.values()) r += c;
  for (const c of i.values()) s += c;
  for (const [c, l] of o) a += Math.min(l, i.get(c) ?? 0);
  return (2 * a) / (r + s);
}
function En(e, t, n, o = () => $t("p")) {
  const i = e.length,
    a = n.length,
    r = Array.from({ length: i + 1 }, () => new Array(a + 1).fill(0));
  for (let m = i - 1; m >= 0; m--)
    for (let b = a - 1; b >= 0; b--)
      r[m][b] =
        e[m] === n[b] && e[m].trim() !== ""
          ? r[m + 1][b + 1] + 1
          : Math.max(r[m + 1][b], r[m][b + 1]);
  const s = [];
  let c = 0,
    l = 0;
  for (; c < i && l < a; )
    e[c] === n[l] && e[c].trim() !== ""
      ? (s.push([c, l]), c++, l++)
      : r[c + 1][l] >= r[c][l + 1]
        ? c++
        : l++;
  const f = new Array(a).fill(null),
    h = new Set();
  for (const [m, b] of s) ((f[b] = t[m]), h.add(t[m]));
  const u = [[-1, -1], ...s, [i, a]];
  for (let m = 0; m < u.length - 1; m++) {
    const [b, B] = u[m],
      [A, v] = u[m + 1],
      $ = [],
      D = [];
    for (let g = b + 1; g < A; g++) $.push(g);
    for (let g = B + 1; g < v; g++) D.push(g);
    if (!$.length || !D.length) continue;
    const M = [];
    for (const g of $)
      for (const x of D) {
        const U = Dt(e[g].trim(), n[x].trim()),
          ct = $.length === 1 && D.length === 1 ? 0.5 : 0;
        M.push({ o: g, nw: x, s: Math.max(U, ct) + n[x].length / 1e6 });
      }
    M.sort((g, x) => x.s - g.s);
    const I = new Set(),
      z = new Set();
    for (const g of M)
      g.s < 0.25 ||
        I.has(g.o) ||
        z.has(g.nw) ||
        (n[g.nw].trim() === "" && e[g.o].trim() !== "") ||
        h.has(t[g.o]) ||
        ((f[g.nw] = t[g.o]), h.add(t[g.o]), I.add(g.o), z.add(g.nw));
  }
  return f.map((m) => m ?? o());
}
const zt = 4,
  Wt = /[。！？!?…~～」』”)）.]$/u;
function Rn(e, t) {
  if (e.composing) return [];
  const n = e.text.split(`
`);
  let o = -1;
  if (e.caret !== null) {
    let a = 0;
    for (let r = 0; r < n.length; r++) {
      if (e.caret <= a + n[r].length) {
        o = r;
        break;
      }
      a += n[r].length + 1;
    }
  }
  const i = [];
  return (
    n.forEach((a, r) => {
      const s = a.trim();
      if (F(s) < zt) return;
      const c = e.paraIds[r];
      if (c && t(c) !== ze(s)) {
        if (r !== o) {
          e.idleMs >= 600 && i.push(r);
          return;
        }
        (Wt.test(s) ? e.idleMs >= 2500 : e.idleMs >= 6e3) && i.push(r);
      }
    }),
    i
  );
}
function ee(e) {
  const t = new Date(e),
    n = (o) => String(o).padStart(2, "0");
  return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())}`;
}
function $n(e) {
  const t = new Date(e);
  return `${String(t.getHours()).padStart(2, "0")}:${String(t.getMinutes()).padStart(2, "0")}`;
}
const Nt = ["日", "一", "二", "三", "四", "五", "六"];
function Dn(e) {
  const [t, n, o] = e.split("-").map(Number),
    i = new Date(t, n - 1, o);
  return `${n}月${o}日 · 星期${Nt[i.getDay()]}`;
}
const w = (e = []) => ({ ok: !0, events: e }),
  d = (e) => ({ ok: !1, reason: e, events: [] });
function P(...e) {
  let t = 2166136261;
  const n = e.join("|");
  for (let o = 0; o < n.length; o++)
    ((t ^= n.charCodeAt(o)), (t = Math.imul(t, 16777619)));
  return (
    (t = Math.imul(t ^ (t >>> 15), 2246822507)),
    (t = Math.imul(t ^ (t >>> 13), 3266489909)),
    ((t ^ (t >>> 16)) >>> 0) / 4294967296
  );
}
function te(e) {
  const t = new Date(e).getMonth() + 1;
  return t >= 3 && t <= 5
    ? "spring"
    : t >= 6 && t <= 8
      ? "summer"
      : t >= 9 && t <= 11
        ? "autumn"
        : "winter";
}
const Tt = { spring: "春", summer: "夏", autumn: "秋", winter: "冬" };
function Ue(e) {
  const t = ee(e),
    n = P("weather", t),
    o = te(e) === "winter";
  return n < 0.52 ? "sunny" : n < 0.78 ? "cloudy" : o ? "snow" : "rain";
}
const Bt = { sunny: "晴", cloudy: "多云", rain: "小雨", snow: "小雪" },
  qe = { sound: !0, music: !0, textScale: 1, autoTidy: !0, reduceMotion: !1 };
function Ut(e, t = "main") {
  const n = {
    schema: 1,
    slot: t,
    createdAt: e,
    updatedAt: e,
    lastTick: e,
    sandbox: t === "sandbox" ? { offset: 0, speed: 1 } : null,
    coins: p.start.coins,
    ink: p.start.ink,
    pendingInk: 0,
    xp: 0,
    inv: { ...p.start.items },
    land: "",
    rows: 0,
    blocks: {},
    objects: {},
    animals: {},
    jobs: {},
    ledger: { entryChars: {}, paraChars: {}, day: ee(e), dayChars: 0 },
    stats: {},
    daily: { day: "", stats: {}, tasks: [] },
    claimed: [],
    codex: { crops: [], animals: [], items: [] },
    writeDays: [],
    seasonsPlanted: [],
    tutorial: { dismissed: !1 },
    settings: { ...qe },
    nextId: 1,
  };
  ge(n, L + 30);
  const o = [];
  for (let r = 1; r < L - 1; r++)
    for (let s = 1; s < 33; s++)
      (Math.min(s - 1, 32 - s, r - 1, L - 2 - r) === 0 &&
        P("yard", s, r) < 0.35) ||
        ((s <= 2 || s >= 31) && (r <= 2 || r >= L - 3)) ||
        o.push([s, r]);
  pe(n, o, "g");
  const i = (r, s, c) => {
    const l = Fe(n, r, s, c, e);
    return ((l.buildUntil = 0), l);
  };
  (i("cabin", 3, 2), i("mailbox", 9, 5));
  const a = i("coop", 22, 3);
  i("windmill", 28, 2);
  for (let r = 0; r < 4; r++)
    i("plot_field", 11 + (r % 2) * 2 + Math.floor(r / 2) * 5, 3);
  (i("plot_field", 11, 6),
    i("plot_field", 13, 6),
    i("tree", 18, 8),
    i("bush", 3, 9),
    i("flowerbed", 25, 8));
  for (let r = 0; r < p.start.chickens; r++) He(n, "chicken", a.id, e, 2);
  return ((n.codex.animals = ["chicken"]), n);
}
function ye(e, t) {
  return `${t}${(e.nextId++).toString(36)}`;
}
function Fe(e, t, n, o, i) {
  const a = {
    id: ye(e, "o"),
    def: t,
    x: n,
    y: o,
    level: 1,
    placedAt: i,
    buildUntil: 0,
    spent: { coin: 0, wood: 0, stone: 0 },
  };
  return (
    mt(t) &&
      (a.plot = {
        crop: null,
        plantedAt: 0,
        growMs: 0,
        watered: !1,
        fertilized: !1,
        harvests: 0,
        serial: 0,
      }),
    (e.objects[a.id] = a),
    a
  );
}
function He(e, t, n, o, i = 0) {
  const a = Object.keys(e.animals).length,
    r = {
      id: ye(e, "a"),
      kind: t,
      name: Ce[a % Ce.length],
      level: 1,
      home: n,
      bornAt: o,
      meals: i,
      cycleStart: null,
      stored: 0,
      storedBonus: {},
      cycles: 0,
      lastFedAt: i ? o : 0,
    };
  return (
    (e.animals[r.id] = r),
    e.codex.animals.includes(t) || e.codex.animals.push(t),
    r
  );
}
const S = (e) => Mt(e.xp);
function qt(e) {
  const t = S(e);
  if (t >= Ie) return { lv: t, cur: 1, need: 1 };
  const n = le[t],
    o = le[t + 1];
  return { lv: t, cur: e.xp - n, need: o - n };
}
function k(e, t, n = 1) {
  ((e.stats[t] = (e.stats[t] ?? 0) + n),
    (e.daily.stats[t] = (e.daily.stats[t] ?? 0) + n));
}
function j(e, t, n) {
  if (t <= 0) return;
  const o = S(e);
  ((e.xp += Math.round(t)), n.push({ t: "xp", delta: Math.round(t) }));
  const i = S(e);
  for (let a = o + 1; a <= i; a++) {
    const r = Pe[a],
      s = Ge(a);
    ((e.coins += s.coin ?? 0), (e.ink += s.ink ?? 0));
    const c = Xe(a),
      l = c.length
        ? `解锁：${c.join("、")}`
        : ((r == null ? void 0 : r.message) ?? "继续加油！");
    n.push({ t: "level", level: a, reward: s, message: l });
  }
}
function Ge(e) {
  const t = Pe[e];
  return {
    coin: (t == null ? void 0 : t.coins) ?? 20 + e * 10,
    ink: (t == null ? void 0 : t.ink) ?? 0,
  };
}
function Xe(e) {
  return [
    ...H.filter((t) => t.unlock === e).map((t) => t.name),
    ...ue.filter((t) => t.unlock === e).map((t) => t.name),
    ...je
      .filter((t) => t.unlock === e && t.id !== "cabin" && t.id !== "mailbox")
      .map((t) => t.name),
    ...Ae.filter((t) => t.unlock === e).map((t) => t.name),
  ];
}
function ne(e) {
  let t = 0;
  for (const [n, o] of Object.entries(e.inv)) {
    const i = T[J(n)];
    !i || i.cat === "seed" || i.cat === "material" || (t += o);
  }
  return t;
}
function oe(e) {
  let t = 0;
  for (const n of Object.values(e.objects))
    (n.def === "cabin" || n.def === "silo") &&
      (t += y[n.def].capacity(n.level));
  return Math.max(t, 60);
}
function E(e, t) {
  for (const [n, o] of Object.entries(t)) {
    if (o <= 0) continue;
    e.inv[n] = (e.inv[n] ?? 0) + o;
    const i = J(n);
    e.codex.items.includes(i) || e.codex.items.push(i);
  }
}
function N(e, t, n) {
  return (e.inv[t] ?? 0) < n
    ? !1
    : ((e.inv[t] -= n), e.inv[t] <= 0 && delete e.inv[t], !0);
}
function Ft(e, t) {
  return (
    e.coins >= t.coin &&
    (e.inv.wood ?? 0) >= (t.wood ?? 0) &&
    (e.inv.stone ?? 0) >= (t.stone ?? 0)
  );
}
function Ve(e, t) {
  ((e.coins -= t.coin),
    t.wood && N(e, "wood", t.wood),
    t.stone && N(e, "stone", t.stone));
}
function Ke(e) {
  const t = [`${e.coin} 金币`];
  return (
    e.wood && t.push(`${e.wood} 木材`),
    e.stone && t.push(`${e.stone} 石料`),
    t.join(" + ")
  );
}
function Ye(e, t) {
  return e.coins < t.coin
    ? `金币不足（需要 ${t.coin}）`
    : (e.inv.wood ?? 0) < (t.wood ?? 0)
      ? `木材不足（需要 ${t.wood}）`
      : (e.inv.stone ?? 0) < (t.stone ?? 0)
        ? `石料不足（需要 ${t.stone}）`
        : "";
}
function Ht(e, t, n, o) {
  const i = F(n),
    a = e.ledger.entryChars[t] ?? 0;
  if (i <= a) return { grains: 0, credited: 0 };
  e.ledger.entryChars[t] = i;
  const r = ee(o);
  e.ledger.day !== r && ((e.ledger.day = r), (e.ledger.dayChars = 0));
  const s = Math.max(0, Math.min(i - a, p.dailyCharCap - e.ledger.dayChars));
  if (!s) return { grains: 0, credited: 0 };
  const c = Math.floor(e.ledger.dayChars / p.charsPerGrain);
  e.ledger.dayChars += s;
  const l = Math.floor(e.ledger.dayChars / p.charsPerGrain) - c;
  return (
    (e.pendingInk += l),
    k(e, "chars", s),
    e.writeDays.includes(r) ||
      (e.writeDays.push(r), (e.stats.write_days = e.writeDays.length)),
    { grains: l, credited: s }
  );
}
function Gt(e, t) {
  const n = Math.min(t, e.pendingInk);
  return ((e.pendingInk -= n), (e.ink += n), n);
}
function Xt(e, t, n) {
  const o = t.text.trim();
  if (F(o) < 1) return d("空段落");
  const i = [];
  let a = e.blocks[t.id];
  const r = ze(o),
    s = !a;
  if (!a)
    ((a = {
      id: t.id,
      entryId: t.entryId,
      x: 0,
      y: 0,
      cols: de,
      w: 1,
      h: 1,
      text: o,
      hash: r,
      header: t.header,
      landedAt: 0,
      updatedAt: n,
      hidden: !1,
    }),
      (e.blocks[t.id] = a));
  else {
    if (a.hash === r && a.header === t.header && !a.hidden) return w([]);
    ((a.text = o),
      (a.hash = r),
      (a.header = t.header),
      (a.hidden = !1),
      (a.updatedAt = n));
  }
  const c = we(e, a, e.settings.textScale);
  a.landedAt || (a.landedAt = n);
  const l = ke(e, a);
  Z(e);
  const f = F(o),
    h = e.ledger.paraChars[t.id] ?? 0;
  if (f > h) {
    e.ledger.paraChars[t.id] = f;
    const u = Math.min(
      p.tidyXpMaxPerParagraph,
      Math.ceil((f - h) * p.tidyXpPerChar),
    );
    j(e, u, i);
  }
  return (
    s && k(e, "tidy_new"),
    i.push({ t: "block", id: a.id, mode: c, land: l.length }),
    l.length && i.push({ t: "land", cells: l }),
    w(i)
  );
}
function Vt(e, t, n) {
  const o = [],
    i = new Map();
  t.text
    .split(
      `
`,
    )
    .forEach((r, s) => {
      t.paraIds[s] && i.set(t.paraIds[s], r.trim());
    });
  for (const r of Object.values(e.blocks)) {
    if (r.entryId !== t.id) continue;
    if (t.deletedAt) {
      r.hidden = !0;
      continue;
    }
    const s = i.get(r.id);
    if (s === void 0 || F(s) < 1) {
      delete e.blocks[r.id];
      continue;
    }
    if (r.hidden) {
      r.hidden = !1;
      const c = we(e, r, e.settings.textScale);
      (ke(e, r), o.push({ t: "block", id: r.id, mode: c, land: 0 }));
    }
  }
  const a = t.paraIds.find((r) => e.blocks[r] && !e.blocks[r].hidden);
  for (const r of Object.values(e.blocks))
    r.entryId === t.id && (r.header = r.id === a ? Qe(t) : "");
  return (Z(e), o);
}
const Qe = (e) => `${e.date}${e.title ? " · " + e.title : ""}`;
function Kt(e, t) {
  e.settings.textScale = t;
  const n = Object.values(e.blocks)
      .filter((i) => !i.hidden)
      .sort((i, a) => i.landedAt - a.landedAt),
    o = [];
  for (const i of n) (we(e, i, t) === "moved" && o.push(i.id), ke(e, i));
  return (Z(e), o);
}
function Yt(e, t, n) {
  const o = [],
    i = [],
    a = {};
  let r = 0;
  for (const [s, c] of t) {
    const l = Rt(e, s, c);
    if (!l.ok) {
      if (!i.length && t.length === 1) return d(l.reason);
      continue;
    }
    const f = Pt(e);
    if (e.coins < f) {
      if (!i.length) return d(`金币不足（开垦一格需要 ${f}）`);
      break;
    }
    ((e.coins -= f), (r += f), pe(e, [[s, c]], "g"), i.push([s, c]));
    const h = P("reclaim", s, c);
    h < p.reclaimStoneChance
      ? (a.stone = (a.stone ?? 0) + 1)
      : h < p.reclaimStoneChance + p.reclaimWoodChance &&
        (a.wood = (a.wood ?? 0) + 1);
  }
  return i.length
    ? (E(e, a),
      k(e, "reclaim", i.length),
      Z(e),
      j(e, Math.floor(i.length / 4), o),
      o.push({ t: "land", cells: i }, { t: "coins", delta: -r }),
      Object.keys(a).length &&
        o.push({ t: "items", items: a, source: "reclaim" }),
      w(o))
    : d("这里还不能开垦");
}
function ve(e, t) {
  const n = y[t];
  if (n.soil) {
    const [o, i] = p.plotCost[n.soil],
      a = Object.values(e.objects).filter((r) => r.def === t).length;
    return { coin: o + i * Math.max(0, a - 6) };
  }
  return n.cost;
}
function Je(e, t) {
  const n = y[t];
  if (!n) return { ok: !1, reason: "未知建筑" };
  if (S(e) < n.unlock) return { ok: !1, reason: `${n.unlock} 级解锁` };
  if (
    n.limit &&
    Object.values(e.objects).filter((i) => i.def === t).length >= n.limit
  )
    return { ok: !1, reason: `最多只能有 ${n.limit} 座` };
  const o = Ye(e, ve(e, t));
  return o ? { ok: !1, reason: o } : { ok: !0 };
}
function Qt(e, t, n, o, i) {
  const a = Je(e, t);
  if (!a.ok) return d(a.reason);
  const r = Be(e, t, n, o);
  if (!r.ok) return d(r.reason);
  const s = ve(e, t);
  Ve(e, s);
  const c = Fe(e, t, n, o, i);
  c.spent = { coin: s.coin, wood: s.wood ?? 0, stone: s.stone ?? 0 };
  const l = y[t];
  (l.cat !== "decor" &&
    l.cat !== "farm" &&
    (c.buildUntil = i + p.buildSecondsPerLevel * 1e3),
    k(e, "build:" + t),
    k(e, "build"));
  const f = [
    { t: "build", id: c.id, def: t },
    { t: "coins", delta: -s.coin },
  ];
  return (
    j(e, l.cat === "decor" ? 1 : 3 + Math.round(s.coin / 60), f),
    { ...w(f), id: c.id }
  );
}
function Jt(e, t, n, o) {
  const i = e.objects[t];
  if (!i) return d("建筑不存在");
  if (!y[i.def].movable) return d("这个不能移动");
  const a = Be(e, i.def, n, o, t);
  return a.ok ? ((i.x = n), (i.y = o), w()) : d(a.reason);
}
function Zt(e, t, n) {
  var r;
  const o = e.objects[t];
  if (!o) return d("建筑不存在");
  const i = y[o.def];
  if (!i.removable) return d("这是庄园的核心建筑，不能拆除");
  if (Object.values(e.animals).some((s) => s.home === t))
    return d("里面还住着动物，先把它们搬去别的家");
  if (Object.values(e.jobs).some((s) => s.building === t))
    return d("还有加工任务没完成");
  if ((r = o.plot) != null && r.crop) return d("田里还有作物，收获后再拆");
  const a = {
    coin: Math.floor(o.spent.coin * i.refund),
    wood: Math.floor(o.spent.wood * i.refund),
    stone: Math.floor(o.spent.stone * i.refund),
  };
  return (
    (e.coins += a.coin),
    E(e, { wood: a.wood, stone: a.stone }),
    delete e.objects[t],
    w([
      { t: "coins", delta: a.coin },
      { t: "toast", text: `已拆除，返还 ${Ke(a)}`, tone: "plain" },
    ])
  );
}
function en(e, t, n) {
  const o = e.objects[t];
  if (!o) return d("建筑不存在");
  const i = y[o.def];
  if (o.level >= i.maxLevel) return d("已经是最高等级");
  if (o.buildUntil > n) return d("正在施工中");
  const a = i.upgradeCost(o.level + 1),
    r = Ye(e, a);
  if (r) return d(r);
  (Ve(e, a),
    (o.spent.coin += a.coin),
    (o.spent.wood += a.wood ?? 0),
    (o.spent.stone += a.stone ?? 0),
    (o.level += 1),
    (o.buildUntil = n + p.buildSecondsPerLevel * 1e3 * o.level),
    k(e, "upgrade"),
    k(e, `upgrade:${o.def}`));
  const s = [{ t: "coins", delta: -a.coin }];
  return (j(e, 5 * o.level, s), w(s));
}
const X = (e, t) => {
  var n;
  return (
    !!((n = e.plot) != null && n.crop) && t >= e.plot.plantedAt + e.plot.growMs
  );
};
function Ze(e, t) {
  const n = e.plot;
  return n != null && n.crop
    ? Math.max(0, Math.min(1, (t - n.plantedAt) / n.growMs))
    : 0;
}
function tn(e, t) {
  const n = Ze(e, t);
  return n >= 1 ? 4 : n >= 0.66 ? 3 : n >= 0.33 ? 2 : n >= 0.08 ? 1 : 0;
}
function et(e, t) {
  const n = G[t];
  return n
    ? S(e) < n.unlock
      ? { ok: !1, reason: `${n.unlock} 级解锁` }
      : (e.inv[q(t)] ?? 0) < 1
        ? { ok: !1, reason: `没有${n.name}种子了` }
        : { ok: !0 }
    : { ok: !1, reason: "未知作物" };
}
function nn(e, t, n, o) {
  const i = e.objects[t];
  if (!(i != null && i.plot)) return d("这里不是田地");
  if (i.plot.crop) return d("已经种上了");
  const a = G[n],
    r = et(e, n);
  if (!r.ok) return d(r.reason);
  if (y[i.def].soil !== a.soil)
    return d(
      `${a.name}要种在${a.soil === "paddy" ? "水田" : a.soil === "orchard" ? "果园地" : "普通农田"}里`,
    );
  N(e, q(n), 1);
  const s = i.plot;
  ((s.crop = n),
    (s.plantedAt = o),
    (s.growMs = a.growMin * 6e4),
    (s.watered = !1),
    (s.fertilized = !1),
    (s.harvests = 0),
    Me(o) && ie(s, o),
    k(e, "plant"),
    k(e, "plant:" + n));
  const c = te(o);
  return (
    e.seasonsPlanted.includes(c) ||
      (e.seasonsPlanted.push(c),
      (e.stats.plant_seasons = e.seasonsPlanted.length)),
    w()
  );
}
const Me = (e) => {
  const t = Ue(e);
  return t === "rain" || t === "snow";
};
function ie(e, t) {
  const n = Math.max(0, e.plantedAt + e.growMs - t);
  ((e.growMs -= Math.round(n * p.waterSpeedup)), (e.watered = !0));
}
function on(e, t, n) {
  const o = e.objects[t],
    i = o == null ? void 0 : o.plot;
  return i != null && i.crop
    ? i.watered
      ? d("已经浇过水了")
      : X(o, n)
        ? d("已经成熟了")
        : (ie(i, n), k(e, "water"), w())
    : d("没有需要浇水的作物");
}
function an(e, t, n) {
  const o = e.objects[t],
    i = o == null ? void 0 : o.plot;
  if (!(i != null && i.crop)) return d("没有作物");
  if (i.fertilized) return d("已经施过肥了");
  if (X(o, n)) return d("已经成熟了");
  if (!N(e, "fertilizer", 1)) return d("没有肥料（小猪会生产肥料）");
  const a = Math.max(0, i.plantedAt + i.growMs - n);
  return (
    (i.growMs -= Math.round(a * 0.4)),
    (i.fertilized = !0),
    k(e, "fertilize"),
    w()
  );
}
function rn(e, t, n) {
  var h;
  const o = e.objects[t],
    i = o == null ? void 0 : o.plot;
  if (!(i != null && i.crop)) return d("没有作物");
  if (!X(o, n)) return d("还没成熟");
  const a = G[i.crop],
    r = a.seasons.includes(te(n)),
    s = a.yield + (r ? p.inSeasonBonusYield : 0);
  if (ne(e) + s > oe(e)) return d("仓库满了，先卖掉一些或者建造谷仓");
  const c = { [K(a.id)]: s },
    l = P("golden", o.id, i.serial) < p.goldenChance;
  (l && (c[K(a.id) + me] = 1),
    E(e, c),
    i.serial++,
    i.harvests++,
    a.regrowMin
      ? ((i.plantedAt = n),
        (i.growMs = a.regrowMin * 6e4),
        (i.watered = !1),
        (i.fertilized = !1),
        Me(n) && ie(i, n))
      : (i.crop = null),
    e.codex.crops.includes(a.id) || e.codex.crops.push(a.id),
    k(e, "harvest"),
    k(e, "harvest:" + a.id),
    l && k(e, "golden"));
  const f = [{ t: "items", items: c, source: "harvest" }];
  return (
    j(e, a.xp, f),
    l &&
      f.push({
        t: "toast",
        text: `稀有！收获了金色${((h = T[K(a.id)]) == null ? void 0 : h.name) ?? a.name}`,
        tone: "gold",
      }),
    w(f)
  );
}
function sn(e, t, n, o) {
  const i = G[t];
  if (!i) return d("未知作物");
  if (S(e) < i.unlock) return d(`${i.unlock} 级解锁`);
  if (n < 1 || !Number.isInteger(n)) return d("数量不对");
  const a = (o === "coin" ? i.seedCoin : i.seedInk) * n;
  if (o === "coin") {
    if (e.coins < a) return d("金币不足");
    e.coins -= a;
  } else {
    if (e.ink < a) return d("墨粒不足");
    e.ink -= a;
  }
  return (
    E(e, { [q(t)]: n }),
    k(e, "buy_seed", n),
    w([{ t: "items", items: { [q(t)]: n }, source: "shop" }])
  );
}
function cn(e, t, n) {
  const o = p.materialPrice[t] * n;
  return n < 1 || !Number.isInteger(n)
    ? d("数量不对")
    : e.coins < o
      ? d("金币不足")
      : ((e.coins -= o),
        E(e, { [t]: n }),
        w([{ t: "items", items: { [t]: n }, source: "shop" }]));
}
function tt(e, t) {
  const n = Object.values(e.objects).find(
      (i) => i.def === "shop" && i.buildUntil === 0,
    ),
    o = p.baseSellMult + (n ? p.shopBonusPerLevel * n.level : 0);
  return Math.max(0, Math.floor(vt(t) * o));
}
function ln(e, t, n) {
  if (n < 1 || !Number.isInteger(n)) return d("数量不对");
  if ((e.inv[t] ?? 0) < n) return d("数量不够");
  const o = tt(e, t);
  if (o <= 0) return d("这个不能出售");
  N(e, t, n);
  const i = o * n;
  return (
    (e.coins += i),
    k(e, "sell_coin", i),
    k(e, "sell", n),
    w([{ t: "coins", delta: i }])
  );
}
function nt(e, t) {
  return Object.values(e.animals).filter((n) => n.home === t);
}
function ot(e, t) {
  const n = e.objects[t];
  return n ? y[n.def].capacity(n.level) - nt(e, t).length : 0;
}
const ae = (e) => p.storeBase + e.level,
  re = (e, t) => {
    const n = O[t.kind];
    let o = ut(t.level);
    return (t.kind === "bee" && (o *= 1 + dn(e, t)), (n.cycleMin * 6e4) / o);
  },
  V = (e) => O[e].feeds.length > 0,
  it = (e) => O[e].cyclesPerMeal * p.maxMealsBuffered;
function dn(e, t) {
  var i, a;
  const n = e.objects[t.home];
  if (!n) return 0;
  let o = 0;
  for (const r of Object.values(e.objects))
    Math.abs(r.x - n.x) <= 6 &&
      Math.abs(r.y - n.y) <= 6 &&
      (r.def === "flowerbed" && o++,
      (i = r.plot) != null &&
        i.crop &&
        (a = G[r.plot.crop]) != null &&
        a.flower &&
        o++);
  return Math.min(p.beeFlowerBonusMax, o * p.beeFlowerBonus);
}
function at(e, t) {
  const n = O[t];
  if (!n) return { ok: !1, reason: "未知动物", homes: [] };
  if (S(e) < n.unlock)
    return { ok: !1, reason: `${n.unlock} 级解锁`, homes: [] };
  const o = Object.values(e.objects)
    .filter((i) => i.def === n.home && i.buildUntil === 0 && ot(e, i.id) > 0)
    .map((i) => i.id);
  return o.length
    ? e.coins < n.price
      ? { ok: !1, reason: "金币不足", homes: o }
      : { ok: !0, homes: o }
    : { ok: !1, reason: `需要有空位的${y[n.home].name}`, homes: o };
}
function un(e, t, n, o) {
  const i = at(e, t);
  if (!i.ok) return d(i.reason);
  const a = o && i.homes.includes(o) ? o : i.homes[0];
  e.coins -= O[t].price;
  const r = He(e, t, a, n, V(t) ? 0 : 1);
  k(e, "buy_animal");
  const s = [{ t: "coins", delta: -O[t].price }];
  return (j(e, 3, s), { ...w(s), id: r.id });
}
function fn(e, t, n) {
  const o = e.animals[t];
  if (!o) return d("动物不存在");
  const i = O[o.kind];
  if (!V(o.kind)) return d(`${i.name}不需要喂食`);
  if (o.meals + i.cyclesPerMeal > it(o.kind)) return d(`${o.name}已经吃饱了`);
  const a = i.feeds.find((r) => (e.inv[r] ?? 0) >= i.feedPerMeal);
  return a
    ? (se(e, o, n),
      N(e, a, i.feedPerMeal),
      (o.meals += i.cyclesPerMeal),
      (o.lastFedAt = n),
      o.cycleStart === null && o.stored < ae(o) && (o.cycleStart = n),
      k(e, "feed"),
      w([{ t: "items", items: { [a]: -i.feedPerMeal }, source: "feed" }]))
    : d(
        `没有${i.feeds
          .map((r) => {
            var s;
            return ((s = T[r]) == null ? void 0 : s.name) ?? r;
          })
          .join("或")}了`,
      );
}
function mn(e, t, n) {
  const o = e.animals[t];
  if (!o) return d("动物不存在");
  se(e, o, n);
  const i = O[o.kind];
  if (!(o.stored + Object.values(o.storedBonus).reduce((u, m) => u + m, 0)))
    return d("还没有产品");
  const r = oe(e) - ne(e);
  if (r <= 0) return d("仓库满了，先卖掉一些或者建造谷仓");
  const s = {},
    c = Math.min(o.stored, r);
  (c && (s[i.product] = c), (o.stored -= c));
  let l = r - c;
  for (const [u, m] of Object.entries(o.storedBonus)) {
    const b = Math.min(m, l);
    (b && ((s[u] = (s[u] ?? 0) + b), (o.storedBonus[u] -= b), (l -= b)),
      o.storedBonus[u] || delete o.storedBonus[u]);
  }
  E(e, s);
  const f = Object.values(s).reduce((u, m) => u + m, 0);
  k(e, "collect", f);
  for (const [u, m] of Object.entries(s)) k(e, "collect:" + u, m);
  o.cycleStart === null &&
    (o.meals > 0 || !V(o.kind)) &&
    o.stored < ae(o) &&
    (o.cycleStart = n);
  const h = [{ t: "items", items: s, source: "collect" }];
  return (j(e, i.xp * f * 0.5, h), w(h));
}
function hn(e, t) {
  const n = e.animals[t];
  if (!n) return d("动物不存在");
  if (n.level >= lt) return d("已经是最高等级");
  const o = dt(n.kind, n.level);
  if (e.coins < o) return d(`金币不足（需要 ${o}）`);
  ((e.coins -= o), n.level++, k(e, "animal_upgrade"));
  const i = [{ t: "coins", delta: -o }];
  return (j(e, 4 * n.level, i), w(i));
}
function se(e, t, n) {
  const o = O[t.kind],
    i = V(t.kind),
    a = ae(t);
  if (t.cycleStart === null) {
    (t.meals > 0 || !i) && t.stored < a && (t.cycleStart = n);
    return;
  }
  const r = re(e, t);
  let s = 0;
  for (; t.cycleStart !== null && n >= t.cycleStart + r && s++ < 200; ) {
    const c = t.cycleStart + r;
    (t.stored++,
      t.cycles++,
      i && t.meals--,
      P("extra", t.id, t.cycles) < ft(t.level) && t.stored < a && t.stored++,
      o.bonus &&
        P("bonus", t.id, t.cycles) < o.bonus.chance * (t.level >= 5 ? 2 : 1) &&
        (t.storedBonus[o.bonus.item] = (t.storedBonus[o.bonus.item] ?? 0) + 1),
      (t.cycleStart = (t.meals > 0 || !i) && t.stored < a ? c : null));
  }
}
function pn(e, t, n) {
  return t.cycleStart === null
    ? 0
    : Math.max(0, Math.min(1, (n - t.cycleStart) / re(e, t)));
}
function rt(e, t, n, o) {
  var s;
  const i = e.objects[t],
    a = fe[n];
  if (!i || !a) return { ok: !1, reason: "无效" };
  if (i.def !== a.building) return { ok: !1, reason: "这里不能做这个" };
  if (i.buildUntil > o) return { ok: !1, reason: "正在施工中" };
  if (S(e) < a.unlock) return { ok: !1, reason: `${a.unlock} 级解锁` };
  if (
    Object.values(e.jobs).filter((c) => c.building === t).length >=
    y[i.def].capacity(i.level)
  )
    return { ok: !1, reason: "加工位已满（升级建筑可以同时加工更多）" };
  for (const c of a.inputs)
    if ((e.inv[c.item] ?? 0) < c.qty)
      return {
        ok: !1,
        reason: `${((s = T[c.item]) == null ? void 0 : s.name) ?? c.item}不足`,
      };
  return { ok: !0 };
}
function gn(e, t, n, o) {
  const i = rt(e, t, n, o);
  if (!i.ok) return d(i.reason);
  const a = fe[n];
  for (const s of a.inputs) N(e, s.item, s.qty);
  const r = ye(e, "j");
  return (
    (e.jobs[r] = {
      id: r,
      recipe: n,
      building: t,
      startAt: o,
      endAt: o + a.durationMin * 6e4,
    }),
    w([
      {
        t: "items",
        items: Object.fromEntries(a.inputs.map((s) => [s.item, -s.qty])),
        source: "craft",
      },
    ])
  );
}
function bn(e, t, n) {
  for (const o of Object.values(e.jobs).sort((i, a) => i.endAt - a.endAt)) {
    if (t < o.endAt) continue;
    const i = fe[o.recipe],
      a = i.outputs.reduce((c, l) => c + l.qty, 0);
    if (ne(e) + a > oe(e)) continue;
    const r = Object.fromEntries(i.outputs.map((c) => [c.item, c.qty]));
    (E(e, r), delete e.jobs[o.id], k(e, "craft"), k(e, "craft:" + i.id));
    const s = e.objects[o.building];
    (n.push({
      t: "items",
      items: r,
      source: "craft",
      at: s ? { x: s.x, y: s.y } : void 0,
    }),
      j(e, i.xp, n));
  }
}
function kn(e, t) {
  var a;
  const n = [],
    o = Math.max(t, e.lastTick),
    i = Math.min(o, e.lastTick + p.offlineCapHours * 36e5);
  for (const r of Object.values(e.animals)) se(e, r, i);
  if (i < o)
    for (const r of Object.values(e.animals))
      r.cycleStart !== null &&
        r.cycleStart < o - re(e, r) &&
        (r.cycleStart = o);
  bn(e, o, n);
  for (const r of Object.values(e.objects))
    r.buildUntil && r.buildUntil <= o && (r.buildUntil = 0);
  if (Me(o))
    for (const r of Object.values(e.objects))
      (a = r.plot) != null &&
        a.crop &&
        !r.plot.watered &&
        !X(r, o) &&
        ie(r.plot, o);
  return (_e(e, o), (e.lastTick = o), n);
}
function st(e, t) {
  const n = t.goal;
  let o = 0,
    i = 1;
  switch (n.kind) {
    case "stat":
      ((o = e.stats[n.key] ?? 0), (i = n.n));
      break;
    case "level":
      ((o = S(e)), (i = n.n));
      break;
    case "animals":
      ((o = Object.keys(e.animals).length), (i = n.n));
      break;
    case "animalKinds":
      ((o = new Set(Object.values(e.animals).map((a) => a.kind)).size),
        (i = n.n));
      break;
    case "building": {
      ((o =
        Math.max(
          0,
          ...Object.values(e.objects)
            .filter((r) => r.def === n.def && r.buildUntil === 0)
            .map((r) => r.level),
        ) >= (n.level ?? 1)
          ? 1
          : 0),
        (i = 1));
      break;
    }
    case "land":
      ((o = Ne(e)), (i = n.n));
      break;
    case "codex":
      ((o = e.codex[n.cat].length), (i = n.n));
      break;
  }
  return { cur: Math.min(o, i), need: i, done: o >= i };
}
function wn(e) {
  return Ee.filter(
    (t) =>
      !e.claimed.includes(t.id) &&
      (!t.after || e.claimed.includes(t.after)) &&
      (t.cat !== "tutorial" || !e.tutorial.dismissed),
  );
}
function xe(e, t, n) {
  (t.coin && ((e.coins += t.coin), n.push({ t: "coins", delta: t.coin })),
    t.ink && (e.ink += t.ink),
    t.items &&
      (E(e, t.items), n.push({ t: "items", items: t.items, source: "reward" })),
    t.xp && j(e, t.xp, n));
}
function yn(e, t) {
  const n = xt[t];
  if (!n) return d("未知任务");
  if (e.claimed.includes(t)) return d("已经领取过了");
  if (n.after && !e.claimed.includes(n.after)) return d("还没解锁");
  if (!st(e, n).done) return d("还没完成");
  e.claimed.push(t);
  const o = [{ t: "quest", id: t }];
  return (xe(e, n.reward, o), w(o));
}
function _e(e, t) {
  const n = ee(t);
  if (e.daily.day === n) return;
  const o = S(e),
    i = Re.filter((s) => s.minLevel <= o),
    a = [],
    r = new Set();
  for (
    let s = 0;
    a.length < Math.min(p.dailyTaskCount, i.length) && s < 50;
    s++
  ) {
    const c = i[Math.floor(P("daily", e.createdAt, n, s) * i.length)];
    if (r.has(c.id)) continue;
    r.add(c.id);
    const [l, f] = c.range,
      h = Math.round(l + (f - l) * P("dailyN", e.createdAt, n, c.id));
    a.push({ id: c.id, key: c.key, n: h, title: c.title(h), claimed: !1 });
  }
  e.daily = { day: n, stats: {}, tasks: a };
}
function vn(e, t, n) {
  _e(e, n);
  const o = e.daily.tasks[t];
  if (!o) return d("任务不存在");
  if (o.claimed) return d("已经领取过了");
  if ((e.daily.stats[o.key] ?? 0) < o.n) return d("还没完成");
  o.claimed = !0;
  const i = Re.find((r) => r.id === o.id),
    a = [];
  return (
    xe(e, i.reward(o.n), a),
    (e.stats.daily_done = (e.stats.daily_done ?? 0) + 1),
    w(a)
  );
}
function Mn(e) {
  ((e.coins = Math.max(0, Math.floor(e.coins || 0))),
    (e.ink = Math.max(0, Math.floor(e.ink || 0))),
    (e.pendingInk = Math.max(0, Math.floor(e.pendingInk || 0))),
    (e.xp = Math.max(0, Math.floor(e.xp || 0))));
  for (const [t, n] of Object.entries(e.inv))
    !Number.isFinite(n) || n <= 0
      ? delete e.inv[t]
      : (e.inv[t] = Math.floor(n));
  for (const t of Object.values(e.animals))
    if (!e.objects[t.home]) {
      const n = Object.values(e.objects).find((o) => {
        var i;
        return o.def === ((i = O[t.kind]) == null ? void 0 : i.home);
      });
      n ? (t.home = n.id) : delete e.animals[t.id];
    }
  for (const t of Object.values(e.jobs))
    e.objects[t.building] || delete e.jobs[t.id];
  return (
    e.land.length !== e.rows * 34 &&
      (e.land = e.land.slice(0, e.rows * 34).padEnd(e.rows * 34, ".")),
    e
  );
}
const xn = (e) => {
    const t = R(e);
    return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
  },
  zn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        ANIMALS: ue,
        CROPS: H,
        DEFAULT_SETTINGS: qe,
        SEASON_NAME: Tt,
        WEATHER_NAME: Bt,
        addXp: j,
        animalProgress: pn,
        animalStoreCap: ae,
        build: Qt,
        buildCost: ve,
        buyAnimal: un,
        buyMaterial: cn,
        buySeeds: sn,
        canBuild: Je,
        canBuyAnimal: at,
        canPay: Ft,
        canPlant: et,
        canStartJob: rt,
        claimDaily: vn,
        claimQuest: yn,
        collect: mn,
        collectInk: Gt,
        costText: Ke,
        creditWriting: Ht,
        cropStage: tn,
        cycleMs: re,
        ensureDaily: _e,
        entryHeader: Qe,
        feed: fn,
        fertilize: an,
        giveItems: E,
        grantReward: xe,
        growthOf: Ze,
        harvest: rn,
        homeAnimals: nt,
        homeFree: ot,
        hrand: P,
        isRipe: X,
        level: S,
        levelReward: Ge,
        maxMeals: it,
        moveObject: Jt,
        needsFood: V,
        newGame: Ut,
        objCenter: xn,
        plant: nn,
        questProgress: st,
        reclaim: Yt,
        removeObject: Zt,
        sanitize: Mn,
        seasonOf: te,
        sell: ln,
        sellPrice: tt,
        setTextScale: Kt,
        startJob: gn,
        storageCap: oe,
        storageUsed: ne,
        syncEntry: Vt,
        tick: kn,
        tickAnimal: se,
        tidyParagraph: Xt,
        unlocksAt: Xe,
        upgradeAnimal: hn,
        upgradeObject: en,
        visibleQuests: wn,
        water: on,
        weatherOf: Ue,
        xpProgress: qt,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export {
  pn as $,
  ue as A,
  y as B,
  H as C,
  en as D,
  p as E,
  Ft as F,
  G,
  nn as H,
  yt as I,
  se as J,
  fe as K,
  rt as L,
  gn as M,
  Ze as N,
  tn as O,
  X as P,
  on as Q,
  Ae as R,
  Tt as S,
  an as T,
  rn as U,
  Zt as V,
  Bt as W,
  O as X,
  it as Y,
  fn as Z,
  mn as _,
  ne as a,
  re as a0,
  ae as a1,
  lt as a2,
  dt as a3,
  ft as a4,
  ut as a5,
  hn as a6,
  Ke as a7,
  Kt as a8,
  _e as a9,
  Jt as aA,
  Qt as aB,
  Pt as aC,
  J as aD,
  he as aE,
  _n as aF,
  qe as aG,
  Mn as aH,
  Ut as aI,
  kn as aJ,
  $t as aK,
  $n as aL,
  En as aM,
  Ht as aN,
  Vt as aO,
  Qe as aP,
  Xt as aQ,
  Re as aa,
  vn as ab,
  Ee as ac,
  Ie as ad,
  le as ae,
  yn as af,
  Ln as ag,
  Cn as ah,
  An as ai,
  In as aj,
  R as ak,
  Pn as al,
  W as am,
  Gt as an,
  Rn as ao,
  Sn as ap,
  ze as aq,
  jn as ar,
  L as as,
  Ct as at,
  Q as au,
  Rt as av,
  Be as aw,
  Yt as ax,
  Lt as ay,
  zn as az,
  oe as b,
  F as c,
  Dn as d,
  nt as e,
  T as f,
  tt as g,
  P as h,
  On as i,
  ln as j,
  S as k,
  ee as l,
  q as m,
  V as n,
  sn as o,
  at as p,
  st as q,
  un as r,
  te as s,
  je as t,
  Je as u,
  wn as v,
  Ue as w,
  qt as x,
  ve as y,
  cn as z,
};
