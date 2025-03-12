import prisma from '$lib/prisma.js'
import { redirect } from '@sveltejs/kit'

export const actions = {
  default: async({ cookies, request }) => {
		const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    
    const user = await prisma.user.findFirst({ where: { username }})
    if(!user) return { invalid: true }
    if(user.password == password) {
      cookies.set('username', username, { path: '/' })
      redirect(302, '/')
    }
  }
}