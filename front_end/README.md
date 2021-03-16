# Podcastify

Podcast 線上串流服務平台

[網站連結](http://podcastify.tw/)

| 測試用身份 | 帳號 | 密碼 |
| --- | --- | -------- |
| 會員 | test01 |  test01  |

![網站 Demo](https://i.imgur.com/hW5QUqi.gif)

## 專案簡介

Podcastify 是一個提供給使用者收聽 Podcast 的串流服務平台，並支援 RWD。前端採用 React Hooks 技術、串接 [第三方 API](https://www.listennotes.com/api/) 
取得 Podcast 的資料，搭配後端 Express、Sequelize 技術進行開發。使用者身份為訪客、會員，功能如下：

- 會員可使用功能：

  - **訂閱系統**：進入專屬訂閱頻道頁面，對頻道訂閱的內容進行管理。
  - **播放清單系統**：建立專屬會員播放清單，提供編輯清單功能，一鍵播放清單內全部單元，也可將單元從播放清單移除。
  - **音樂播放器系統**：播放、暫停當前單元、選取播放清單中下一個與前一個單元，並可操控進度條的時間進度及控制音量。
  - **搜尋系統**：透過輸入想要關注的 Podcast 頻道名稱，進行關鍵字搜尋。
  - **會員資料管理系統**：可定期更新登入密碼，保障會員隱私與資料安全。
 
- 訪客可使用功能：
  - 註冊、登入成為會員。
  - 瀏覽首頁頁面。


## 專案展示

#### `會員功能`
- 會員註冊：輸入必填欄位，即可註冊成功。
- 會員登入：輸入帳號、密碼，即可登入。
- 會員專區：會員登入之後，可定期更新密碼。

#### `頻道搜尋功能`
輸入頻道關鍵字搜尋相關資料，也能在搜尋結果頁面上，點取圖示連結到頻道頁面。

![頻道搜尋](https://i.imgur.com/snZyZ2Q.gif)

#### `頻道訂閱功能`
- 頻道頁面：每個獨立頻道頁，可直接訂閱或取消訂閱頻道。
- 管理頻道頁面：統一管理訂閱中的頻道，提供刪除頻道的功能。

![訂閱功能](https://i.imgur.com/taoq8b0.gif)

#### `播放清單功能`
- 首頁頁面：新增會員專屬播放清單。
- 頻道頁面：加入喜愛的單元到播放清單。
- 播放清單頁面：會員能編輯播放清單名稱，一鍵播放清單內全部單元，也可將單元從播放清單移除。

![播放清單](https://i.imgur.com/Tr3o9JB.gif)

#### `音樂播放器功能`
- 音樂播放器：播放、暫停當前播放單元、選取播放清單中下一個與前一個單元，並可操控進度條的時間進度及控制音量。
- 單元播放功能：在頁面側邊欄、頻道頁面、播放清單頁面，提供單元播放、暫停的按鍵，讓會員自在點選單元播放。

![播放器](https://i.imgur.com/L5xuAGY.gif)
![單元播放](https://i.imgur.com/njsy09X.gif)


##  使用技術
#### `前端框架`
- [React Hooks](https://reactjs.org/)
- [React DOM](https://www.npmjs.com/package/react-dom)

#### `第三方 套件`
- [React Router DOM](https://reactrouter.com/)：使用 BrowserRouter 進行路由管理
- [styled-components](https://styled-components.com/)：使用 CSS-in-JS 處理版面配置、動態更新 CSS
- [react-elastic-carousel](https://sag1v.github.io/react-elastic-carousel/)：首頁圖片輪播功能
- [Normalize.css](https://sag1v.github.io/react-elastic-carousel/)：處理跨瀏覽器樣式的一致性
- [ESLint](https://eslint.org/)：檢查語法，統一程式撰寫風格
- [Prettier](https://prettier.io/)：統一程式碼格式

#### `第三方 API`
- [Listen API](https://www.listennotes.com/api/)


## 專案執行
1. 複製專案在 GitHub 的連結，在終端機執行以下指令
``` 
git clone https://github.com/cwc329/mtr04-final-project-Podcastify.git
```
2. 前往 `front_end` 資料夾，安裝專案所需套件
```
npm install
```
3. 在 `front_end` 資料夾的位置，開啟專案
```
npm run start
```


## 聲明
本網站僅作為個人練習，註冊時請勿使用真實資料。另本網站包含之圖片與內容僅作練習使用，不作任何商業用途。