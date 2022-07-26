import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'

import PostContainer from '@components/posts/PostContainer'

export const getStaticProps = async () => {
  const posts: Post[] = allPosts
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
    })
    .slice(0, 5)
  return { props: { posts } }
}

const HomePage = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <PostContainer posts={posts} />
    </>
  )
}

export default HomePage
