import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage, AboutPage } from 'pages'
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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;