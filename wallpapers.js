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
    }
];
