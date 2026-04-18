import Footer from './ui/components/shared/Footer'
import Header from './ui/components/shared/Header'
import CountryDetail from './ui/pages/CountryDetail'
import Home from './ui/pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <>
        <Header/>
        <div className='min-h-screen flex flex-col px-4 sm:px-6'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/country/:code" element={<CountryDetail />} />
          </Routes>
        </div>
        <Footer/>
      </>
    </>
  )
}

export default App
