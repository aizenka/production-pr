import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserMounted, userActions } from 'entities/User'
import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useAppDispatch } from 'shared/lib/hooks'
import './styles/index.scss'

const App = () => {
  const _mounted = useSelector(getUserMounted)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])


  return (
    <div className='app'>
      <Navbar />
      <div className='contentLayout'>
        <Sidebar />
        {
          _mounted && (
            <AppRouter />
          )
        }
      </div>
    </div>
  )
}

export default App