import Home from './ui/pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='min-h-screen flex flex-col px-4 sm:px-6'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
