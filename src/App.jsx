import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './page/home/home'
import Header from './component/header/header'
import PxToRem from './page/px-to-rem/px-to-rem'
import EmToPx from './page/em/em-to-px/em-to-px'
import PxToEm from './page/em/px-to-em/px-to-em'
import UnitsOfMeasurement from './page/unit-of-measurements/units'
import RemToPx from './page/rem-to-px/rem-to-px'
import LeftSide from './component/left-side/left-side'
import RightSide from './component/right-side/right-side'
import OtherDatas from './component/other-datas/other-datas'
import NotFound from './page/not-found/not-found'

function App() {

  return (
    <div id="app">
      <Header />
      <main className='main'>
        <div className="left-side">
          <LeftSide />
        </div>
        <div className="middle-side">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rem-to-px" element={<RemToPx />}/>
              <Route path="/px-to-rem" element={<PxToRem />}/>
              <Route path="/em-to-px" element={<EmToPx />}/>
              <Route path="/px-to-em" element={<PxToEm />}/>
              <Route path="/all-units" element={<UnitsOfMeasurement />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </BrowserRouter>
          <OtherDatas />
        </div>
        <div className="right-side">
          <RightSide />
        </div>
      </main>
    </div>
  )
}

export default App
