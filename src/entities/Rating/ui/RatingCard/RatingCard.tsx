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
import { ButtonVariant } from '@/shared/ui/Button/Button'
import { useDetectMobileScreen } from '@/shared/lib/hooks'

interface RatingCardProps {
  className?: string
  title?: string
  feedbackTitle?: string
  onCancel?: (starsCount: number) => void
  onSubmit?: (starsCount: number, feedbackText?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    onCancel,
    onSubmit
  } = props
  const { t } = useTranslation(RATING_NAMESPACE)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [starsCount, setStarsCount] = useState(0)
  const [feedback, setFeedback] = useState('')
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
        <Text title={title} />
        <StarRaiting onSelect={onSelectStars} />
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
                  variant={ButtonVariant.OUTLINED}
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
                    variant={ButtonVariant.OUTLINED_DANGER}
                    onClick={cancelHandler}
                  >
                    {t('closeBtn')}
                  </Button>
                  <Button
                    variant={ButtonVariant.OUTLINED}
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