import { memo, useState } from 'react'
import { classNames } from '@/shared/lib/common'
import RatingIcon from '@/shared/assets/icons/icon-star-rating.svg'
import { Icon } from '../Icon/Icon'
import { Row } from '../Flex'
import cls from './StarRaiting.module.scss'

interface StarRaitingProps {
  className?: string
  onSelect?: (starNumber: number) => void
  size?: string
  selectedStars?: number
}

const STARS = [1, 2, 3, 4, 5]

export const StarRaiting = memo((props: StarRaitingProps) => {
  const {
    className,
    onSelect,
    size = '40',
    selectedStars = 0
  } = props
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars)
  const [isSelected, setIsSelected] = useState(!!selectedStars)

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount)
    }
  }

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0)
    }
  }

  const onSelectStar = (starsCount: number) => () => {
    onSelect && onSelect(starsCount)
    setCurrentStarsCount(starsCount)
    setIsSelected(true)
  }

  return (
    <Row
      className={classNames(cls.starRating, {}, [className])}
      gap={16}
    >
      {
        STARS.map(starNumber => {
          return (
            <Icon
              key={starNumber}
              className={classNames(cls.starIcon, {
                [cls.hovered]: currentStarsCount >= starNumber
                // [cls.selected]: isSelected
              })}
              Svg={RatingIcon}
              width={size}
              height={size}
              onClick={onSelectStar(starNumber)}
              onMouseEnter={onHover(starNumber)}
              onMouseLeave={onLeave}
            />
          )
        })
      }
    </Row>
  )
})