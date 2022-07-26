import { Post } from 'contentlayer/generated'

import PostItem from '@components/posts/PostItem'
import styled from 'styled-components'

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <PostListWrapper>
      {posts.map((post, idx) => (
        <PostItem key={idx} post={post} />
      ))}
    </PostListWrapper>
  )
}

const PostListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export default PostList
