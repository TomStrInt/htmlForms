'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

const render = require('koa-ejs');
const path = require('path');

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'form',
    viewExt: 'html',
    cache: false,
    debug: true
  });


router
    .get('/', async ctx => {
        await ctx.render('form');
    });
   /* .post('/login', (ctx, next)=> {
    ctx.body = 'Zalogowany';
    });
*/
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);
