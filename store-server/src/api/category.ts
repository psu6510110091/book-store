import Router from "koa-router";
import db from '../db';

const router = new Router()
const makeQuery = () => db('category').select('*')
const findById = (id: number) => makeQuery().where({id})

router.get('/', async (ctx, next) => {
  ctx.body = [
    {id: 1, title: 'Programming'},
    {id: 2, title: 'Life Style'}
  ]
})

export default router