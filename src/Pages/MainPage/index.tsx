import { useTranslation } from 'react-i18next'
import { MAIN_PAGE_NAMESPACE } from 'constants/i18n'

const MainPage = () => {
  const { t } = useTranslation(MAIN_PAGE_NAMESPACE)

  return (
    <div>
      {t('mainPage')}
    </div>
  );
};

export default MainPage;