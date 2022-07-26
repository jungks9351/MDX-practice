import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import styled from 'styled-components'

const PostItem = ({ post }: { post?: Post }) => {
  return (
    <Link href={post.url}>
      <PostItemWrapper>
        <h4 className="post-title">{post.title}</h4>
        <time className="post-date" dateTime={post.publishedAt}>
          {format(parseISO(post.publishedAt), 'LLLL d, yyyy')}
        </time>
        <p className="post-description">{post.description}</p>
      </PostItemWrapper>
    </Link>
  )
}

const PostItemWrapper = styled.li`
  display: flex;
  flex-direction: column;

  cursor: pointer;
  .post-title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .post-date {
    color: #a9adc1;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .post-description {
    height: 4rem;
    font-size: 1.4rem;
    color: #777777;
    line-height: 2rem;
  }
`

export default PostItem
