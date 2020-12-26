import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import './HomeScreen.css'

import { PlusIcon } from "../components/PlusIcon";

export const HomeScreen = (): ReactElement => {
  return (
   <main className='main__container'>
     <header className='main__header'>
       <Link className='main__link' to='/'>
         <h1>Wallet</h1>
       </Link>
       <Link className='main__link main__scan-link' to='/scan'>
         <PlusIcon />
       </Link>
     </header>
     <section>
       <ul>
       </ul>
     </section>
   </main>
  )
}
