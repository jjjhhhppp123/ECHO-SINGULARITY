// wallpapers.js - ECHO SINGULARITY 專屬圖片資料庫
// ==========================================
// 未來要新增桌布，只需要複製一組 { ... } 區塊並修改網址與資訊即可，
// 網頁會自動抓取這個檔案的內容並排版出來。

const wallpaperDatabase = [
    { 
        id: "001", 
        tag: {
            category: "wasteland",
            styleDesc: "有機賽博 / 日光青黛"
        },
        url: "S8.jpg" 
    },
    { 
        id: "002", 
        tag: {
            category: "harbor",
            styleDesc: "工業大地 / 溫暖琥珀"
        },
        url: "S8.jpg" 
    },
    { 
        id: "003", 
        tag: {
            category: "mist",
            styleDesc: "寧靜薄霧 / 奇異點微光"
        },
        // 這是一張測試圖片網址，您可以隨時換成自己的直鏈或檔案
        url: "S8.jpg" 
    }
];
