// - Main：

// 匯入目錄 node_modules 的套件：
import React from 'react'
import ReactDOM from 'react-dom/client'

// 匯入目前專案資料夾的檔案：
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)