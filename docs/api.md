#接口文档

## 接口统一返回格式
返回json数据格式,status值表示失败或者成功,0为失败，1为成功，message为消息，解释
出现了什么样的失败或成功，data为协商所需要的数据,可有可没有 

错误的业务返回如下
```json
{
    "status":0,
    "message":"用户名已存在",
    "data":""
}
```

成功的业务返回如下:
```json
{
    "status":1,
    "message":"用户名已存在",
    "data":""
}


```

## 注册接口

- URL:`/users/create`
- 方式：`POST`
- 参数: `loginName`,`password`,`repassword`，分别为 用户名，密码，确认密码


## 登录接口

- URL:`/session/create`
- 方式：`POST`
- 参数: `loginName`,`password`,分别为 用户名，密码

## 登出接口

- URL:`/session/destroy`
- 方式：`GET`
- 参数: 无需要参数，请求就可以了


## 创建任务接口

- URL:`/task/create`
- 方式：`POST`
- 参数: `content`任务内容


## 任务列表接口

- URL:`/task`
- 方式：`GET`
- 参数: 不需要参数 
    
## 任务删除接口

- URL:`/task/:id/destroy`,其中的`:id`替换成任务ID
- 方式：`GET`
- 参数: 不需要参数 

## 任务完成接口

- URL:`/task/:id/compeleted`,其中的`:id`替换成任务ID
- 方式：`GET`
- 参数: 不需要参数 



