import { useEffect, useState } from 'react'
import { Button } from 'shared/ui'

export default function BugButton () {
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const onThrowError = () => {
    setError(prev => !prev)
  }

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={onThrowError}>
      throw Error
    </Button>
  )
}