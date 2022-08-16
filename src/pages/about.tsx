import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

import myImage from '#static/images/my_image.jpeg'
import Container from '@components/common/Container'

const about = () => {
  return (
    <>
      <Head>
        <title>Blog About</title>
      </Head>

      <MyInfo>
        <Title>About</Title>
        <MyImageWrapper>
          <StyledImage src={myImage} alt="my_image" width={300} height={300} />
        </MyImageWrapper>
        <Introduce>
          열정적으로 개발에 정진하는 개발자 김정진입니다.
          <br />
          <br />
          <br />
          시작을 두려워하지 않고 끝맺음을 중요하게 생각합니다.
          <br />
          <br />
          문제가 발생하면 문제를 먼저 이해 하고 원인을 찾고 해결하기 위해
          고민합니다.
          <br />
          <br />
          단순 기능만 구현하는 것이 아닌, 사용자의 서비스 편의성을 코드에 담으려
          노력합니다.
        </Introduce>
      </MyInfo>
    </>
  )
}

const Title = styled.h2`
  padding-top: 3rem;
  font-size: 3rem;
  font-weight: 600;
`

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`

const MyImageWrapper = styled.div`
  overflow: hidden;
  margin: 3rem auto;
`

const StyledImage = styled(Image)`
  border-radius: 1rem;
`

const Introduce = styled.div`
  font-size: 1.6rem;
`

export default about
