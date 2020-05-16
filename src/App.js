import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'
import CanvasPage from './CanvasPage'
import CanvasList from './CanvasList'

function App() {
  return <BrowserRouter>
    <div>
      <Switch>
        <Route path="/:id" children={<CanvasPage />} />
        <Route path="/" children={<CanvasList />} />
      </Switch>
    </div>
  </BrowserRouter>
}

export default App
