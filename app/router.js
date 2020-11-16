module.exports = (app) => {
    const {router,controller} = app;
    const jsonp = app.jsonp({callback:'cb'});
    router.get('/',controller.home.index);
    router.get('/user/:userId',controller.home.params);
    router.post('/post',controller.home.post);
    router.post('/upload',controller.home.upload);
    router.get('/service',controller.service.index);
    router.get('/jsonp',jsonp,controller.jsonp.index)
}