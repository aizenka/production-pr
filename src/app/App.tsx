import { AppRouter } from 'app/providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'

const App = () => {

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