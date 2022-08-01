import React from 'react'
import { format, parseISO } from 'date-fns'
import styled from 'styled-components'

interface PostDetailProps {
  title: string
  description: string
  publishedAt: string
  children: JSX.Element | JSX.Element[]
  tags?: string[]
}

const PostDetail = (props: PostDetailProps) => {
  return (
    <>
      <MDXHeader>
        <time className="post-publishedAt" dateTime={props.publishedAt}>
          {format(parseISO(props.publishedAt), 'LLLL d, yyyy')}
        </time>
        <h1 className="post-title">{props.title}</h1>
        <ul className="tag-list">
          {props.tags &&
            props.tags.map((tag, i) => (
              <li key={i} className="tag">
                {tag}
              </li>
            ))}
        </ul>
        <h2 className="post-description">{props.description}</h2>
      </MDXHeader>
      <MDXContent>{props.children}</MDXContent>
    </>
  )
}

const MDXHeader = styled.div`
  padding-top: 4rem;
  .post-publishedAt {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.fontColor.text1};
    margin-bottom: 1rem;
  }
  .post-title {
    font-size: 3.2rem;
    line-height: 1.5;
    letter-spacing: -0.004em;
    font-weight: 800;
    word-break: keep-all;
    margin-bottom: 1rem;
  }
  .tag-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    .tag {
      color: #1340c1;
      padding: 0.5rem;
      background-color: #a9adc1;
      border-radius: 2rem;
      font-weight: 800;
    }
  }
  .post-description {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.fontColor.text1};
    margin-bottom: 1rem;
  }
`

const MDXContent = styled.div`
  display: inline-block;
  font-size: 1.4rem;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #1340c1;
    padding: 1rem 0;
    margin: 1.6rem 0;
    font-weight: 600;
  }
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  p {
    margin-bottom: 1.6rem;
    line-height: 1.7;
    letter-spacing: -0.004em;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
  a {
    color: #1340c1;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
  ul {
    margin: 0 1.6rem;
    list-style: inherit;
  }
  ol {
    list-style-type: decimal;
    margin: 1.6rem;
  }
  blockquote {
    margin: 2rem 0px;
    border-left: 4px solid #1340c1;
    border-bottom-right-radius: 4px;
    background: #282a36;
    padding: 1rem 1rem 1rem 2rem;
    color: var(--text1);
    p {
      margin: 0;
    }
  }
`

export default PostDetail
