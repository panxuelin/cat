'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/cat/', controller.home.index);
    router.get('/cat/news', controller.news.list);
    router.get('/cat/user/index', controller.user.info);
    router.get('/cat/user/register', controller.user.register);
    router.get('/cat/user/register_async', controller.user.register_async);

};
