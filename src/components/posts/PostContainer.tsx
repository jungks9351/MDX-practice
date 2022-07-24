import { Post } from 'contentlayer/generated'

import PostList from '@components/posts/PostList'

const PostContainer = ({ posts }: { posts?: Post[] }) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default PostContainer
