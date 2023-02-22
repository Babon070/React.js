import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Create from './create/Create';
import Login from './login/Login';
import "./Auth.scss"

function Auth() {
  return (
    <section className='auth'>
      <div className='animation__circle'></div>
      <div className='auth__popup'>
        <ul className='auth__popup--nav'>
          <li>
              <NavLink activeClassName='active__link' className="auth__popup--link" to="/auth/create">Registratsia</NavLink>
          </li>
          <li>
              <NavLink activeClassName='active__link' className="auth__popup--link" to="/auth/login">Kirish</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/auth/create" component={Create}/>
          <Route path="/auth/login" component={Login}/>
        </Switch>
      </div>
      
    </section>
  )
}

export default Auth