'use strict';

const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

const render = require('koa-ejs');
const path = require('path');

const { koaBody } = require('koa-body');

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'form',
    viewExt: 'html',
    cache: false,
    debug: true
  });



  router
    .get('/login', async ctx => {
        await ctx.render('form');
    })
   /*.post('/login', async ctx => {
       // await  ctx.render('form');
    ctx.body = 'Zalogowany';
    });
*/
    router.post('/login', koaBody(), (ctx) => {
      console.log(ctx.request.body);
      // => POST body
      ctx.body = 'Zalogowany!';
    });
    


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);
