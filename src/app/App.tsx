import { AppRouter } from 'app/providers/Router'
import { userActions } from 'entities/User'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])


  return (
    <div className='app'>
      <Navbar />
      <div className='contentLayout'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App