import { Post } from 'contentlayer/generated'

import PostItem from '@components/posts/PostItem'

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post, idx) => (
        <PostItem key={idx} post={post} />
      ))}
    </ul>
  )
}

export default PostList
