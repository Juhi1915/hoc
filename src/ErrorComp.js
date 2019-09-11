import React from 'react';
class ErrorComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
    
    componentDidCatch(error) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
      
      })}
    
    render() {
      if (this.state.error) {
    
        return (
          <div>
            <h2>Oops! Something went wrong.</h2>
            <details>
              {this.state.error && this.state.error.toString()}
              <br />
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }

  export default ErrorComp;