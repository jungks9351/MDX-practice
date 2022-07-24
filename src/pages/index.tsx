import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'

import PostContainer from '@components/posts/PostContainer'

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h3>Recent Post</h3>
      <div>
        <PostContainer posts={posts} />
      </div>
    </>
  )
}

export default Home
