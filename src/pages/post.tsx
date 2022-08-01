import Head from 'next/head'
import { compareDesc } from 'date-fns'
import { allPosts, type Post } from 'contentlayer/generated'

import PostContainer from '@components/posts/PostContainer'
import Pagination from '@components/common/Pagination'
import usePagination from '@hooks/usePagination'

export const getStaticProps = async () => {
  const posts: Post[] = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  })
  return { props: { posts } }
}

const PostPage = ({ posts }: { posts: Post[] }) => {
  const { page, lastPage, ListPerPage, handlePrevBtn, handleNextBtn } =
    usePagination(posts)

  return (
    <>
      <Head>
        <title>Blog Post</title>
      </Head>
      <div>
        <PostContainer posts={ListPerPage} />
        <Pagination
          page={page}
          lastPage={lastPage}
          handlePrevBtn={handlePrevBtn}
          handleNextBtn={handleNextBtn}
        />
      </div>
    </>
  )
}

export default PostPage
