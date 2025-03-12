import prisma from '$lib/prisma.js'
import { redirect } from '@sveltejs/kit'

export const load = async({ cookies, parent }) => {
  const { username } = await parent()
  const user = await prisma.user.findFirst({ where: { username }, include: { books: true }})
	return {
    books: user.books
  }
}

export const actions = {
  logout: async({ cookies, request }) => {
    cookies.delete('username', { path: '/' })
    redirect(302, '/')
  },
  add: async({ cookies, request }) => {
		const data = await request.formData()
    const bookName = data.get('book-name')
    const totalPages = data.get('total-pages')
    const currentPage = data.get('current-page')
    await prisma.book.create({ data: { username: cookies.get('username'), name: bookName, total_pages: parseInt(totalPages), current_page: parseInt(currentPage) }})
  },
  deleteBook: async({ cookies, request }) => {
		const data = await request.formData()
    const bookId = data.get('book-id')
    await prisma.book.delete({ where: { id: bookId } })
  },
  updateCurrentPage: async({ request }) => {
		const data = await request.formData()
    const bookId = data.get('book-id')
    const currentPage = data.get('current-page')
    await prisma.book.update({ where: { id: bookId }, data: { current_page: parseInt(currentPage) } })
  }
}