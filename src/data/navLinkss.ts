interface NavLinks {
  id: number
  title: string
  link: string
}

const navLinks: NavLinks[] = [
  { id: 0, title: 'Home', link: '/' },
  { id: 1, title: 'Post', link: '/post' },
  { id: 2, title: 'About', link: '/about' },
]

export default navLinks
