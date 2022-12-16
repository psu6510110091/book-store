import Router from "koa-router";
import db from '../db';

const router = new Router()
const makeQuery = () => db('category').select('*')
const findById = (id: number) => makeQuery().where({id})

router
  .get('/', async (ctx, next) => {
    ctx.body = await makeQuery().orderBy('id')
  })
  .get('/:id', async (ctx, next) => {
    const id = parseInt(ctx.params.id)
    const category = await findById(id).first()
    if(!category){
      ctx.response.status = 404
    }
    ctx.body = category
  })


export default router