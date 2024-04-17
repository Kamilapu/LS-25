import { Routes, Route } from 'react-router-dom';
import { Layout } from "./Layout";
import { Home } from './components/pages/home/Home';
import { Bag } from './components/pages/bag/Bag';
import { Heart } from './components/pages/heart/Heart';
import { Notification } from './components/pages/notification/Notification';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/bag' element={<Bag />} />
          <Route path='/heart' element={<Heart />} />
          <Route path='/notification' element={<Notification />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
