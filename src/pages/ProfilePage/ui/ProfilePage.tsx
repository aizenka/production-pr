import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { PageWrapper } from 'widgets/PageWrapper'
import { classNames } from 'shared/lib/common'
import { EditableProfileCard } from 'features/EditableProfileCard'

interface ProfilePageProps {
  className?: string
}

export default memo(function ProfilePage ({ className }: ProfilePageProps) {
  const { id: profileId } = useParams<{id: string}>()

  return (
    <PageWrapper className={classNames('', {}, [className])}>
      <EditableProfileCard id={profileId!} />
    </PageWrapper>
  )
})