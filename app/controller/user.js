'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        const ctx = this.ctx;
        const userId = ctx.queries.id;
        const user = await ctx.service.user.find(userId);
        ctx.body = user;
    }

    async register() {
        const ctx = this.ctx;
        // const userId=ctx.queries.id;
        // const user=await ctx.service.user.add(userId);
        // ctx.body=user;
        await this.ctx.render('user/register.tpl', null);
    }

    async register_async() {
        const ctx = this.ctx;
        const info = ctx.query;
        console.log(info);
        const user = await ctx.service.user.add(info);
        ctx.body = {msg: 'suc', info: info, result: user};

    }
}

module.exports = UserController;