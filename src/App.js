import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CanvasPage from './CanvasPage'

function App() {
  return <BrowserRouter>
    <div>
      <Switch>
        <Route path="/:id" children={<CanvasPage />} />
      </Switch>
    </div>
  </BrowserRouter>
}

export default App
