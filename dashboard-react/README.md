## Project Tree

```
dashboard-react
├─ build
│  ├─ asset-manifest.json
│  ├─ index.html
│  └─ static
│     ├─ css
│     │  ├─ main.d56e46e2.css
│     │  └─ main.d56e46e2.css.map
│     └─ js
│        ├─ main.8699c319.js
│        ├─ main.8699c319.js.LICENSE.txt
│        └─ main.8699c319.js.map
├─ package-lock.json
├─ package.json
├─ public
│  └─ index.html
├─ README.md
└─ src
   ├─ App.css
   ├─ App.js
   ├─ components
   │  ├─ AnalyseMessageSection.js
   │  ├─ ChangeServerSection.js
   │  ├─ DeviceStateSection.js
   │  ├─ Navigation.js
   │  ├─ RebootSection.js
   │  ├─ UpdateNewSection.js
   │  └─ UpdateSection.js
   └─ index.js

```

## 部署

直接将`/build`下的内容拷贝到`nginx`服务器的`html`文件夹中即可



## 持续开发

开发完后在终端中运行

**先cd到项目文件夹下**

```bash
#运行项目
$ npm install 
$ npm start
##退出运行：command/ctrl + c
#打包
$ npm run build
```

