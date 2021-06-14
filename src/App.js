import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// COMPONENTS
import Navbar from './components/Navbar/Navbar'

// PAGES
import Home from './pages/home/Home'
import Login from './pages/login/Login'

function App() {

  return (
      <div className="app-container">
        <BrowserRouter>
          <Navbar />
          <Switch>

            <Route path="/login">
              <Login />
            </Route>
            
            <Route path="/register">

            </Route>

            <Route path="/">
              <Home/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
