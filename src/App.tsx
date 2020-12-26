import React, {ReactElement} from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomeScreen } from "./screens/HomeScreen";
import { ScanScreen } from "./screens/ScanScreen";

import './App.css';

export const App = (): ReactElement  =>{
  return (
    <main className='main__container'>
      <Switch>
        <Route path='/' exact>
          <HomeScreen />
        </Route>
        <Route path='/scan' exact>
          <ScanScreen />
        </Route>
      </Switch>
    </main>
  )
}
