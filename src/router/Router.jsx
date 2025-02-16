import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'


export default function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Login' element={<Login/>}/>
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}
