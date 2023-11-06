import { Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import { classNames } from './helpers'
import { useTheme } from './theme/useTheme';
import { MainPageAsync, AboutPageAsync } from './Pages'
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
          <Route path='/' element={<MainPageAsync />}/>
          <Route path='/about' element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;