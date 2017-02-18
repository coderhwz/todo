#接口文档

## 接口统一返回格式
返回json数据格式,status值表示失败或者成功,0为失败，1为成功，message为消息，解释
出现了什么样的失败或成功，data为协商所需要的数据,可有可没有 

错误的业务返回如下
```json
{
    "status":0,
    "message":"用户名已存在",
    data:""
}
```

成功的业务返回如下:
```json
{
    "status":1,
    "message":"用户名已存在",
    data:""
}


```

## 注册接口

- URL:`/users/create`
- 方式：`POST`
- 参数: `loginName`,`password`,`repassword`，分别为 用户名，密码，确认密码
