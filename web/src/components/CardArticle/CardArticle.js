import styled from 'styled-components'
import { motion } from 'framer-motion'
import LazyLoadImage from '@souvik1991/react-lazy-load-image'
import fallbackImg from '../../../public/placeholder.jpg'

const variants = {
  closed: { scale: 1, height: '220px' },
  open: { scale: 1, height: '310px' },
}

const Card = styled(motion.div)`
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 300px;
  height: 260px;
  margin: 10px;
  backdrop-filter: blur(16px) saturate(180%);
  backdrop-filter: blur(20px) saturate(171%);
  -webkit-backdrop-filter: blur(20px) saturate(171%);
  background-color: rgba(255, 255, 255, 0.5);
  overflow: hidden;
`

Card.Img = styled(LazyLoadImage)`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

Card.Body = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`

Card.Title = styled.h1`
  font-size: 1rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

Card.ExcerptSection = styled.p`
  font-size: 0.875rem;
  height: 50px;
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  p {
    margin: 0;
  }
`

Card.LinkSection = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
`

Card.Link = styled.a`
  text-decoration: none;
  color: #5061e3;
  font-weight: bold;
  font-size: 0.875rem;
`

export default function CardArticle({ article }) {
  return (
    <div className="w-[90%] sm:w-1/4 sm:min-w-[300px] h-80 flex flex-col bg-white bg-opacity-30 rounded-lg overflow-hidden backdrop-blur-3xl">
      <Card.Img
        src={article.top_image_url}
        placeholder={fallbackImg}
        debounceDelay={30}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{article.given_title}</Card.Title>

        <>
          <Card.ExcerptSection>
            <p>{article.excerpt}</p>
          </Card.ExcerptSection>
        </>
      </Card.Body>

      <Card.LinkSection>
        <Card.Link
          href={article.given_url}
          onClick={(e) => {
            e.stopPropagation()
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Card.Link>
      </Card.LinkSection>
    </div>
  )
}
