import { MetaTags } from '@redwoodjs/web'
import styled from 'styled-components'
import ArticlesCell from 'src/components/ArticlesCell'
import { loadLastSync } from 'src/services/loader'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #5061e3;

  background-image: radial-gradient(
      at 4% 23%,
      hsl(162, 77%, 40%) 0,
      transparent 59%
    ),
    radial-gradient(at 82% 65%, hsl(198, 100%, 50%) 0, transparent 55%);
`

const HomePage = () => {
  const since = loadLastSync()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Container>
        <ArticlesCell code="fe971d45-3a8a-9142-f09d-47d08d" since={since} />
      </Container>
    </>
  )
}

export default HomePage
