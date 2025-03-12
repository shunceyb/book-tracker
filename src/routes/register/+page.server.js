import prisma from '$lib/prisma.js'
import { redirect } from '@sveltejs/kit'

export const actions = {
  default: async({ cookies, request }) => {
		const data = await request.formData()
    const username = data.get('username')
    const password = data.get('password')
    
    const user = await prisma.user.count({ where: { username }})
    if(user) return { exists: true }
    await prisma.user.create({ data: { username, password }})
    cookies.set('username', username, { path: '/' })
    redirect(302, '/')
  }
}