import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';   
import  Registration from "./components/registration"
function App() {
  return (
    <div >
      <Router>
    <Route exact path="/registration" component={Registration}/> 
    </Router>
    </div>
  );
}
export default App;