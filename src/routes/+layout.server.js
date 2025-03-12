import prisma from '$lib/prisma.js'
import { redirect } from '@sveltejs/kit'


export const load = async({ cookies, url }) => {
	const currentPath = url.pathname 
  const username = cookies.get('username')
  console.log('whjat')
  if(!username || !(await prisma.user.findFirst({ where: { username }}))) {
    cookies.delete('username', { path: '/' })
    if((currentPath != '/login') && (currentPath != '/register')) {
      return redirect(302, '/login')
    }
  }
  if(!username && (currentPath != '/login') && (currentPath != '/register')) {
    return redirect(302, '/login')
  }
  return { username }
}