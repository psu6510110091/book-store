import Router from "koa-router"

const router = new Router()

router.get('/', async (ctx, next) => {
  ctx.body = [
    { id: 1, title: 'Python', price: 120, category:{id: 1, title: 'Programming'}, stockAmount: 2}
  ]
})

export default router
