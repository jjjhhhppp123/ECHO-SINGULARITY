// wallpapers.js - ECHO SINGULARITY 專屬圖片資料庫
// ==========================================

// 1. 獨立的分類對照表（統一管理所有分類的三語名稱）
const categoryDictionary = {
    harbor: {
        zh: "海港工業",
        ja: "港湾工業",
        en: "Harbor"
    },
    wasteland: {
        zh: "廢墟遺跡",
        ja: "荒野の遺跡",
        en: "Wasteland"
    },
    city: {
        zh: "都會街景",
        ja: "都市の街並み",
        en: "Cityscape"
    },
    crater: {
        zh: "隕石巨坑",
        ja: "クレーター",
        en: "Crater"
    }
};

// 2. 桌布資料庫（category 全部統一為小寫字母與標準格式）
const wallpaperDatabase = [
    { 
        id: "001", 
        tag: {
            category: "harbor",
            styleDesc: { zh: "重機港口 / 晨曦青黛", ja: "重機港口 / 朝焼けの青黛", en: "Heavy Machinery Harbor / Dawn Cyan" }
        },
        fileId: "1xq6hQmr8wMw_T-HOHktnq4RUUfYeMkye" 
    },
    { 
        id: "003", 
        tag: {
            category: "harbor",
            styleDesc: { zh: "鋼構起重機 / 殘存工業", ja: "鋼鉄のクレーン / 残された工業", en: "Steel Crane / Remnant Industry" }
        },
        fileId: "1L-W5qUeyV7OjPeKLZchX-ONLa2qDlf-s" 
    },
    { 
        id: "004", 
        tag: {
            category: "harbor",
            styleDesc: { zh: "港灣機具 / 盛夏雲層", ja: "港の機械 / 真夏の雲層", en: "Harbor Machinery / Midsummer Clouds" }
        },
        fileId: "1whrrQ1BXXvce6L39EogzXOpVSuiXCKtT" 
    },
    { 
        id: "005", 
        tag: {
            category: "harbor",
            styleDesc: { zh: "遠眺海平線 / 靜謐水面", ja: "水平線の遠望 / 静穏な水面", en: "Distant Horizon / Serene Waters" }
        },
        fileId: "1AOtcwi5MONTL3g-MGeW4rDMwxO_7m-sl" 
    },
    { 
        id: "006", 
        tag: {
            category: "wasteland",
            styleDesc: { zh: "廢棄街區 / 荒蕪綠意", ja: "放棄された街並み / 荒涼とした緑", en: "Abandoned District / Desolate Greenery" }
        },
        fileId: "1P23yTCspA7ld-fJvmCCE5DSwByco61aE" 
    },
    { 
        id: "007", 
        tag: {
            category: "city",
            styleDesc: { zh: "藍調都會 / 奇異光點", ja: "ブルートーンの都市 / 異世界の光点", en: "Blue-tone Metropolis / Singular Glow" }
        },
        fileId: "1wBHI2mFqcVLKB1uMgb7teHcXVSnWn3kr" 
    },
    { 
        id: "008", 
        tag: {
            category: "wasteland",
            styleDesc: { zh: "殘垣斷壁 / 荒野漫步", ja: "崩れた壁 / 荒野の散歩", en: "Broken Walls / Wasteland Stroll" }
        },
        fileId: "1u7mP2L6wVroAiGhLuFsaVCk0vdVHSUff" 
    },
    { 
        id: "009", 
        tag: {
            category: "wasteland",
            styleDesc: { zh: "廢棄溫室 / 綠意蔓延", ja: "放棄された温室 / 広がる緑", en: "Abandoned Greenhouse / Creeping Green" }
        },
        fileId: "13VW1ftxuy1ZOVwTHXNfiU0DlKDT9DerX" 
    },
    { 
        id: "010", 
        tag: {
            category: "city",
            styleDesc: { zh: "舊日商號 / 廢墟街景", ja: "往時の商店 / 廃墟の街並み", en: "Old Storefront / Ruin Streetscape" }
        },
        fileId: "1M5R7CjegP-B8B9Erl3cHMTOVa3GcPgEt" 
    },
    { 
        id: "011",
        tag: {
            category: "city",
            styleDesc: { 
                zh: "霓虹光影 / 少女與微風", ja: "ネオンの光と影 / 少女と微風", en: "Neon Light and Shadow / Girl and Breeze" 
            }
        },
        fileId: "1_Ev4Yusyfn4J4HPtZv8fNZSjqADpLYlK" 
    },
    { 
        id: "012", 
        tag: {
            category: "wasteland",
            styleDesc: { 
                zh: "廢棄街巷 / 蔓延的綠意", ja: "廃れた路地 / 広がる緑", en: "Abandoned Alley / Creeping Greenery" 
            }
        },
        fileId: "1d-Te4GGgfhNF91mpBQ86PDcEwQUSTUw-" 
    },
    { 
        id: "013", 
        tag: {
            category: "wasteland",
            styleDesc: { 
                zh: "廢土生存 / 仰望天際", ja: "廃墟のサバイバル / 空を仰ぐ", en: "Wasteland Survival / Looking at the Sky" 
            }
        },
        fileId: "1bf-zyAWCWY3AvxIkV9Y1QCuKEeAXUghj" 
    },
    { 
        id: "014",
        tag: {
            category: "crater",
            styleDesc: { 
                zh: "隕石坑邊緣 / 俯瞰深谷", 
                ja: "クレーターの縁 / 深き谷を見下ろす", 
                en: "Crater Edge / Overlooking the Abyss" 
            }
        },
        fileId: "1IqJssXQDtEQtyN0ad5Fxay8kSlpQvexh" 
    },
    { 
        id: "015", 
        tag: {
            category: "crater",
            styleDesc: { 
                zh: "谷底微光 / 岩壁間的探索", 
                ja: "谷底の微光 / 岩壁の探索", 
                en: "Glimmer in the Valley / Exploring the Rock Walls" 
            }
        },
        fileId: "12iTGIUnSk19y7Wlwa3h4ZgNDq--W78D-" 
    },
    { 
        id: "016", 
        tag: {
            category: "crater",
            styleDesc: { 
                zh: "日落峽谷 / 溫暖的餘暉", 
                ja: "日没の峡谷 / 温かい夕日", 
                en: "Sunset Canyon / Warm Glow" 
            }
        },
        fileId: "1dus8aqGT3o2MLQXPpM41I1tX7kboCz4u" 
    },
    { 
        id: "017", 
        tag: {
            category: "crater",
            styleDesc: { 
                zh: "巨石裂縫 / 踏上旅程", 
                ja: "巨岩の裂け目 / 旅立ち", 
                en: "Giant Rock Fissure / Embarking on a Journey" 
            }
        },
        fileId: "1pF6Jtgee8jEcuWL5UpzbAYUhZsNiN6Y1" 
    },
    { 
        id: "018", 
        tag: {
            category: "crater",
            styleDesc: { 
                zh: "堅定的眼眸 / 旅途的印記", 
                ja: "決意の瞳 / 旅の印", 
                en: "Determined Eyes / Mark of the Journey" 
            }
        },
        fileId: "1p5spkfuuP_hMbQXzcwJJOFZth9K8W8ve" 
    },
    { 
        id: "019", 
        tag: {
            category: "crater",
            styleDesc: { 
                zh: "隕石坑的生機 / 陽光灑落", 
                ja: "クレーターの息吹 / 降り注ぐ陽光", 
                en: "Life in the Crater / Sunlight Bath" 
            }
        },
        fileId: "1cnaP4ymbS6ilkSDekgxIzg0RNKE95X0j" 
    }
];
