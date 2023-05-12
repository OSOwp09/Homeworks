import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Challenge02 from './components/challenge02'
import Challenge03 from './components/challenge03'
import Challenge04 from './components/challenge04'
import {Challenge06} from './components/challenge06/challenge06'
import Challenge07 from './components/challenge07'
import { Challenge09 } from './components/challenge9'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Challenge09 value = {0}/>
  </React.StrictMode>,
)