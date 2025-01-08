import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './m2/App.jsx'
import Counter from './MT-8/useState.jsx'
import LoginStatus from './MT-8/Tugas praktek.jsx'
import ArrayState from './MT-8/useState1.jsx'
import SimpleCalculator from './MT-8/Tugas praktek 2.jsx'
import SortList from './MT-8/useState1.jsx'
import Card2 from './MT-9/Praktek MT-9.jsx'
import TextLogger from './MT-10/Tugas Praktek 10 bgn 3.jsx'
import CountLogger from './MT-10/Tugas praktek 10 bgn 2 .jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountLogger/>
  </StrictMode>,
)
