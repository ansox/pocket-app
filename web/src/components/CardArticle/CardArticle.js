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

export default function CardArticle({ article }) {
  return (
    <div className="relative w-[320px] sm:w-1/4 sm:min-w-[250px] h-[340px] flex flex-col bg-white bg-opacity-30 backdrop-blur-md rounded-lg overflow-hidden">
      <LazyLoadImage
        className={'w-full h-[160px] object-cover'}
        src={article.top_image_url}
        placeholder={fallbackImg}
        debounceDelay={30}
      ></LazyLoadImage>

      <div className="px-3 py-3 sm:max-w-none">
        <h1 className="font-semibold line-clamp-2">{article.given_title}</h1>
        <div className="py-2">
          <p className="w-full line-clamp-3">{article.excerpt}</p>
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
