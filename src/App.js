import React from 'react';
import './App.css';

// import Greetings from './components/Greetings'
// import GreetingsClass from './components/GreetingsClass'
// import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      Come let's Learn React
      <ol>
        <li> How to apply styles</li>
        <li> How to apply class</li>
        <li> Hello Component</li>
        <li> Counter to understand state, function, this & setState</li>
        <li> Greetings using props</li>
          <ol>
            <li> GreetingClassComponent using props</li>
          </ol>
        <li> Greetings from users array within </li>
        <li> Greetings from users array in parent</li>
          <ol>
            <li>Display numbers using index</li>
            <li>Display numbers without using index ;)  </li>
          </ol>
      </ol>
      {/* <Hello /> */}
    </div>
  );
}

export default App;

// const usersnames = [ ] //name of the students
// {usernames.map(username =>( <Greetings />  ))}

{/* <Greetings username={'jsfactory'} />
<GreetingsClass username={'jsfactory'}/> */}
