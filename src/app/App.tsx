import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle theme</button>
      <Link to='/'>
        Main page
      </Link>
      <Link to='/about'>
        About page
      </Link>
      <AppRouter />
    </div>
  );
};

export default App;