import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/common'
import {
  Button,
  Card,
  Column,
  Drawer,
  Input,
  Modal,
  Row,
  StarRaiting,
  Text
} from '@/shared/ui'
import { RATING_NAMESPACE } from '@/shared/constants/i18n'
import { useDetectMobileScreen } from '@/shared/lib/hooks'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  rate?: number
  feedbackText?: string
  onCancel?: (starsCount: number) => void
  onSubmit?: (starsCount: number, feedbackText?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    feedbackText = '',
    onCancel,
    onSubmit,
    rate = 0
  } = props
  const { t } = useTranslation(RATING_NAMESPACE)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(rate)
  const [feedback, setFeedback] = useState(feedbackText)
  const isMobile = useDetectMobileScreen()

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount)

    if (feedbackTitle) {
      setIsModalOpen(true)
    } else {
      onSubmit && onSubmit(selectedStarsCount)
    }
  }, [feedbackTitle, onSubmit])

  const submitHandler = useCallback(() => {
    onSubmit && onSubmit(starsCount, feedback)
    setIsModalOpen(false)
  }, [onSubmit, starsCount, feedback])

  const cancelHandler = useCallback(() => {
    onCancel && onCancel(starsCount)
    setIsModalOpen(false)
  }, [onCancel, starsCount])

  const modalContent = (
    <>
      <Text title={feedbackTitle}/>
      <Input
        placeholder={t('leaveFeedback')}
        value={feedback}
        onChange={setFeedback}
      />
    </>
  )

  return (
    <Card className={classNames('', {}, [className])}>
      <Column align='center' gap={16}>
        <Text title={starsCount ? t('thanksForReview') : title} />
        <StarRaiting
          onSelect={onSelectStars}
          selectedStars={rate}
        />
        {
          isMobile ? (
            <Drawer
              isOpen={isModalOpen}
              onClose={cancelHandler}
              lazy
            >
              <Column gap={16}>
                {modalContent}
                <Button
                  variant='outlined'
                  onClick={submitHandler}
                  stretch
                >
                  {t('sendBtn')}
                </Button>
              </Column>
            </Drawer>
          ) : (
            <Modal open={isModalOpen} lazy>
              <Column gap={16}>
                {modalContent}
                <Row
                  vAlign='center'
                  align='right'
                  gap={16}
                >
                  <Button
                    variant='outlinedDanger'
                    onClick={cancelHandler}
                  >
                    {t('closeBtn')}
                  </Button>
                  <Button
                    variant='outlined'
                    onClick={submitHandler}
                  >
                    {t('sendBtn')}
                  </Button>
                </Row>
              </Column>
            </Modal>
          )
        }
      </Column>
    </Card>
  )
})