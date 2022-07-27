import { Post } from 'contentlayer/generated'

import PostList from '@components/posts/PostList'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

const PostContainer = ({ posts }: { posts?: Post[] }) => {
  const { pathname } = useRouter()

  return (
    <PostContainerWrapper>
      <h3 className="post-container-title">
        {pathname === '/' ? 'Recent Posts' : 'All Posts'}
      </h3>
      <PostList posts={posts} />

      {pathname === '/' && (
        <Link href={'/post'}>
          <ButtonWrapper>
            <button>All post</button>
          </ButtonWrapper>
        </Link>
      )}
    </PostContainerWrapper>
  )
}

const PostContainerWrapper = styled.section`
  padding: 3rem 0;
  .post-container-title {
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 2rem;
    @media (min-width: 640px) {
      font-size: 3.6rem;
    }
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.4rem;
`
export default PostContainer
