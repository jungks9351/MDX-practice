import React from 'react'

interface PostDetailProps {
  title: string
  description: string
  publishedAt: string
  children: JSX.Element | JSX.Element[]
}

import { format, parseISO } from 'date-fns'

const PostDetail = (props: PostDetailProps) => {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <time dateTime={props.publishedAt}>
          {format(parseISO(props.publishedAt), 'LLLL d, yyyy')}
        </time>
      </div>
      <div>{props.children}</div>
    </>
  )
}

export default PostDetail
