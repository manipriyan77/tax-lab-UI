import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentss/Header/Header'
import AcoountingMadeSimple from './componentss/AccountingMadeSimple/AccountingMadeSimple'
import Payroll from './componentss/Payroll/Payroll'
import { ChakraProvider } from '@chakra-ui/react'
import SimplifyTask from './componentss/SimplifyTask/SimplifyTask'
import Layoutbg from './componentss/Layoutbg'
import Bussiness from './componentss/bussiness/bussiness'
import Rate from './componentss/rate/Rate'
function App() {


  return (
    <div>
     <ChakraProvider>
    <Header/>
    <AcoountingMadeSimple/>
    <Payroll/>
    <SimplifyTask/>
    <Layoutbg/>
    <Bussiness/>
    <Rate/>
    </ChakraProvider>
    </div>
  )
}

export default App
