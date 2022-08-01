import Head from 'next/head'
import { allPosts, type Post } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import PostDetail from '@components/posts/PostDetail'

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = ({ params }) => {
  const post: Post = allPosts.find((post) => post.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

interface PostProps {
  post: Post
}

const PostDetailContainer = ({ post }: PostProps) => {
  const MDXContent = useMDXComponent(post.body.code)
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>
      <PostDetail {...post}>
        <MDXContent />
      </PostDetail>
    </>
  )
}

export default PostDetailContainer
