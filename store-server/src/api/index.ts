import Router from 'koa-router'
import category from './category'
import book from './book'

const router = new Router()
router.use('/api/category',category.routes())
router.use('/api/book', book.routes())

export default router