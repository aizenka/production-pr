import { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageAsync, AboutPageAsync } from './Pages';
import './index.scss'

const App = () => {
  return (
    <div className='app'>
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