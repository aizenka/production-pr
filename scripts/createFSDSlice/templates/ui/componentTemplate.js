export const componentTemplate = (componentName, camalizedComponentName) => {
  return `import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/common'
import cls from './${componentName}.module.scss'

interface ${componentName}Props {
  className?: string
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
    <div className={classNames(cls.${camalizedComponentName}, {}, [className])}>

    </div>
  )
})
`
}