import styled from 'styled-components'
import LazyLoadImage from '@souvik1991/react-lazy-load-image'
import fallbackImg from '../../../public/placeholder.jpg'

const Card = styled.div`
  display: flex;
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
    <div className="relative w-[90%] sm:w-1/4 sm:min-w-[250px] h-80 flex flex-col bg-white bg-opacity-30 rounded-lg overflow-hidden backdrop-blur-3xl">
      <LazyLoadImage
        className={'w-full h-[160px] object-cover'}
        src={article.top_image_url}
        placeholder={fallbackImg}
        debounceDelay={30}
      ></LazyLoadImage>
      <div className="px-3 py-3">
        <h1 className="font-semibold text-base">{article.given_title}</h1>

        <div className="w-[100%] h-[60px] overflow-hidden text-sm p-0 mt-2">
          <p className="w-[100%] m-0">{article.excerpt}</p>
        </div>
      </div>

      <a
        className="absolute right-4 bottom-2 no-underline text-violet-700 font-semibold text-sm"
        href={article.given_url}
        onClick={(e) => {
          e.stopPropagation()
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
    </div>
  )
}
