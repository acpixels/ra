import React             from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render }        from 'react-dom'


const App = () => (

  <div>
    <h5>hey</h5>
  </div>
)

render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>

  , document.getElementById('reason-analytics'));
