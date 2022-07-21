export interface NavLinkType {
  id: number
  title: string
  link: string
}

const navLinks: NavLinkType[] = [
  { id: 0, title: 'Home', link: '/' },
  { id: 1, title: 'Post', link: '/post' },
  { id: 2, title: 'About', link: '/about' },
]

export default navLinks
