import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import LotteryTicket from './Lottery'
// import TicketNum from './TicketNum'
import Ticket from './Ticket'
import { sum } from './helper'
import Form from './Form'

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    return ticket.every((num) => num === ticket[0]);
  }

  return (  
    <>
      {/* <LudoBoard /> */}
      {/* < TodoList /> */}
      <br />
      {/* <Ticket ticket = {[0, 1, 2]} />
      <Ticket ticket = {[6, 4, 7]} /> */}

      {/* <LotteryTicket n = {3}  winCondition={winCondition}/> */}
        <Form />
    </>
  )
}

export default App
