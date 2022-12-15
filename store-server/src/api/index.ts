import Router from 'koa-router'

const router = new Router()
router.get('/api/greet', async ctx => {
  ctx.body = {msg: 'hello world'}
})

export default router