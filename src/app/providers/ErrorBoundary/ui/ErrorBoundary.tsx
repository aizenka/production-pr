import type { ErrorInfo, ReactNode } from 'react'
import React from 'react'
import { PageError } from 'widgets/PageError'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    return { hasError: error }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // TODO: add sentry
    console.log(error, errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return <PageError />
    }

    return children
  }
}

export default ErrorBoundary