import React  from 'react';


class BuggyCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
      this.setState(({counter}) => ({
        counter: counter + 1
      }));
    }
    
    render() {
      if (this.state.counter === 5) {

        throw new Error('Opps: !I crashed!');
      }
      return <button onClick={this.handleClick}>{this.state.counter}</button>;
    }
  }

  export default BuggyCounter;