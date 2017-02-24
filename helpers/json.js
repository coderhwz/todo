var json = {
    error:function(message,data){
        return {"status":0,"message":message,data:data}
    },
    success:function(message,data){
        return {"status":1,"message":message,data:data}
    }
}
module.exports = json;
