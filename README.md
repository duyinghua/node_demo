# node_demo

#### 采用Node.js + Express + mysql搭建的Web接口服务端项目

## 安装

### 方法1：安装 Express 自建应用

安装之后需要自己建项目目录，以及各文件

``` 
npm init
npm install express --save

```
### 方法2：Express 生成器生成应用
简单、快捷、高效
           
``` 
$ npm install express-generator -g
$ express myapp -ejs

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.jade
   create : myapp/views/layout.jade
   create : myapp/views/error.jade
   create : myapp/bin
   create : myapp/bin/www
$ cd myapp 
$ npm install

$ DEBUG=myapp npm start

```

## 浏览器访问

```
localhost:3000  
```

## 项目结构
```
.
├── bin         执行文件
├── config      项目配置
├── projects    全部项目目录
│   ├── projectA    项目A
│   │   ├── controller  项目应用层控制器
│   │   ├── model       项目model目录
│   │   ├── services    项目服务层
│   │   └── route-config.js    项目全部接口集
│   └── projectB    项目B
├── public      静态资源 (暂不使用)
│   ├── images
│   ├── javascripts
│   └── stylesheets
├── routes      路由器 (暂不使用)
├── utils       工具库
└── views       视图模版 (暂不使用)

```