module.exports = app => {
    // // 该事件一个worker进程只会触发一次，在HTTP服务完成启动后，会将HTTP server通过这个事件暴露出来给开发者
    // app.once('server',server=>{
    //     console.log('该事件一个worker进程只会触发一次，在HTTP服务完成启动后，会将HTTP server通过这个事件暴露出来给开发者',server)
    // });
    // // 运行时有任何的异常被onerror插件捕获后，都会触发error事件，将错误对象和关联的上下文暴露给开发者
    // app.on('error',(err,ctx)=>{
    //     console.log('运行时有任何的一场被onerror插件捕获后，都会触发error事件，将错误对象和关联的上下文暴露给开发者',err,ctx);
    // });
    // // 应用收到请求时触发，并将上下文暴露出来
    // app.on('request',ctx=>{
    //     console.log('应用收到请求时触发，并将上下文暴露出来',ctx)
    // })
    // app.on('response',ctx=>{
    //     console.log('应用响应数据时触发,并将上下文暴露出来',ctx)
    // });
    // console.log('--------------app',app.config.appMiddleware)
    app.validator.addRule('json',(rule,value)=>{
        try{
            JSON.parse(value)
        }catch(err){
            return '必须是一个JSON'
        }
    })
    app.cache = Date.now();
    // 创建一个context实例
    app.beforeStart(()=>{
        const ctx = app.createAnonymousContext()
    });
}

