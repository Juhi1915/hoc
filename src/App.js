import React from 'react';
import './App.css';
import Comp from './Comp';
import BuggyCounter from './BuggyCounte.js';
import ErrorComp from './ErrorComp';

function App() {
  return (
    <div className="App">

<p>
        <b>
          <h1>
          This is an example of error boundaries in React 16.
          </h1>
          <br /><br />
         :- Click on the numbers to increase the counters.
          <br />
          The counter is programmed to throw when it reaches 5. This simulates a JavaScript error in a component.
        </b>
      </p>
      <ErrorComp>
        <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
        <BuggyCounter />
      </ErrorComp>
     
      
 
     <Comp/>
    </div>
  );
}

export default App;



