import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { unauthorized } from './modules/router/routes'

function App() {
  return (
    <div className="App">
      {unauthorized.map(route => <Route key={route.path} { ...route } />)}
    </div>
  );
}

export default App;
