import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
//CREATE THE MAIN HONO APP 
export const blogRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string
		JWT_SECRET: string
	}
}>();

blogRouter.post('/blog', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();


blogRouter.put('/' ,(c) => {
  return c.json({message: "Write the blog"})
})

blogRouter.get('/' ,(c) =>{
  const id = c.req.param('id')
	return c.text('get blog route')
})
blogRouter.get('/bulk' , (c) => {
	return c.text('signin route')