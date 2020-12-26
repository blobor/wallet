import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import './HomeScreen.css'

export const HomeScreen = (): ReactElement => {
  return (
   <main className='main_container'>
     <header className='main__header'>
       <Link className='main__link' to='/'>
         <h1>Wallet</h1>
       </Link>
       <Link className='main__link main__scan-link' to='/scan'>+</Link>
     </header>
     <section>
       <ul>
       </ul>
     </section>
   </main>
  )
}
