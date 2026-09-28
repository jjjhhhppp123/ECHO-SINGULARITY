// wallpapers.js - ECHO SINGULARITY 專屬圖片資料庫
// ==========================================
// 未來要新增桌布，只需要複製一組 { ... } 區塊並修改 id、分類與 fileId 即可，
// 網頁會自動抓取這個檔案的內容並轉換成 Google 雲端硬碟的預覽與下載網址。

const wallpaperDatabase = [
    { 
        id: "001", 
        tag: {
            category: "wasteland",
            styleDesc: "有機賽博 / 日光青黛"
        },
        // 只要填入 Google 雲端硬碟的檔案 ID 即可自動轉換
        fileId: "1xq6hQmr8wMw_T-HOHktnq4RUUfYeMkye" 
    },
    { 
        id: "002", 
        tag: {
            category: "harbor",
            styleDesc: "工業大地 / 溫暖琥珀"
        },
        // 支援向下相容，如果想放本機檔案，原本的 url 寫法依然有效
        url: "S8.png" 
    },
    { 
        id: "003", 
        tag: {
            category: "mist",
            styleDesc: "寧靜薄霧 / 奇異點微光"
        },
        // 只要填入 Google 雲端硬碟的檔案 ID 即可自動轉換
        fileId: "1xq6hQmr8wMw_T-HOHktnq4RUUfYeMkye" 
    }
];
