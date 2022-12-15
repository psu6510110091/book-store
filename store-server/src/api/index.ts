import Router from 'koa-router'
import category from './category'

const router = new Router()
router.use('/api/category',category.routes())

export default router