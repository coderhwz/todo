# 项目安装 

## 1. 安装 nodemon

nodemon 是一个热加载组件,通过以下命令安装 

```
npm install -g nodemon
```

也就是说使用nodemon启动一个服务，当前项目的文件变化都会重启一个服务。


## 2. 安装项目的依赖

在项目目录下执行
```
npm install
```

## 3. 执行数据库创建

在项目目录下执行
```
./node_modules/.bin/sequelize db:migrate
```

## 4. 启动服务

```
nodemon bin/server.js
```

运行后，会在`127.0.0.1:3000`提供服务


