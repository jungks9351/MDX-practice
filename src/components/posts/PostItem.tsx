import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import styled from 'styled-components'

const PostItem = ({ post }: { post?: Post }) => {
  return (
    <PostItemWrapper>
      <time className="post-date text-color1" dateTime={post.publishedAt}>
        {format(parseISO(post.publishedAt), 'LLLL ddE yyyy', { locale: ko })}
      </time>
      <Link href={post.url}>
        <h4 className="post-title">{post.title}</h4>
      </Link>
      <TagsWrapper>
        {post.tags &&
          post.tags.map((tag, i) => (
            <li key={i} className="tag text-color2">
              {tag}
            </li>
          ))}
      </TagsWrapper>
      <p className="post-description text-color1">{post.description}</p>
    </PostItemWrapper>
  )
}

const PostItemWrapper = styled.li`
  display: flex;
  flex-direction: column;

  .post-date {
    font-weight: 500;
    font-size: 1.6rem;
  }
  .post-title {
    font-size: 2.4rem;
    font-weight: 600;
    margin: 1rem 0;
    cursor: pointer;
  }
  .post-description {
    height: 4rem;
    font-size: 1.6rem;
    line-height: 2rem;
  }
`

const TagsWrapper = styled.ul`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  .tag {
    color: ${({ theme }) => theme.fontColor.text2};
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`

export default PostItem
