# ConfigUI

基於 **Create React App (CRA)** 的專案，實現支持處理 **XML 文件上傳** 的功能，並通過 `react-app-rewired` 擴展 Webpack 配置，實現高度自定義的需求。

---

## 功能簡介
- **基於 CRA** 的快速構建和開發伺服器支持。
- 使用 `react-app-rewired`，在不 `eject` 的情況下修改 Webpack 配置。
- 支持直接導入和處理 XML 文件（例如上傳 XML 並解析其內容）。

---

## 安裝與配置步驟

### **1. 初始化專案**
確保你的專案是基於 CRA 的應用。如果尚未創建 CRA 專案，可以執行以下指令初始化：
```
github 新建 ConfigUI
到vscode clone repositiry
cd ./ConfigUI
npx create-react-app frontend
```

### **2. 安裝必要依賴**
```bash
cd ./frontend
npm install react-app-rewired xml-loader antd react-redux react-router-dom reactflow --save-dev
```

### **3. 修改腳本**
```json
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test": "react-app-rewired test"
}
```

### **4. 配置 Webpack 處理 XML 文件 - config-overrides.js**

## 環境衝突
### **1. 清理環境**
```bash
Remove-Item -Recurse -Force .\node_modules, .\package-lock.json
Remove-Item .* -Recurse -Force
```

### **2. 重新安裝依賴**
```bash
npm install
```

