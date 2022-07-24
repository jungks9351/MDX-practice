import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

const PostItem = ({ post }: { post?: Post }) => {
  return (
    <ul>
      <Link href={post.url}>
        <h4>{post.title}</h4>
      </Link>
      <time dateTime={post.publishedAt}>
        {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
      </time>
    </ul>
  )
}

export default PostItem
