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
 

    router.post('/login', koaBody(), (ctx) => {
  
        const { password } = ctx.request.body;
        const { username } = ctx.request.body;
        
      console.log(ctx.request.body);
      console.log(password);
      console.log(username);
     // if(password.length < 8){

    //  }
      if(username === 'admin' && password === 'adminadmin'){
      
      ctx.body = 'Zalogowany!';}
      else { ctx.body = 'NIeprawidlowa nazwa uzytkownika lub haslo';
      };
    });

 

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(8080);
