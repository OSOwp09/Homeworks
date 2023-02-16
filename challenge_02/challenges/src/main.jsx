import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Challenge02 from './components/challenge02'
import Challenge03 from './components/challenge03'
import Challenge04 from './components/challenge04'
import {Challenge05} from './components/challenge05/challenge05'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Challenge05 value = {0}/>
  </React.StrictMode>,
)
