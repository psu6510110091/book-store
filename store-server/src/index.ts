import Koa from 'koa'
import json from 'koa-json'
import api from './api'

const app = new Koa()

app.use(json())
app.use(api.routes())

app.listen(8000)