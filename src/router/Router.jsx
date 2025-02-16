import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'


export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}
