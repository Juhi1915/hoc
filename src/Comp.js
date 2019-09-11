import React, { Component } from 'react';
import Hoc from './Hoc.js';
export class Comp extends Component {
    state={
        Increament:0
    };
    handlegIncreament=() =>
    {
        this.setState({Increament:this.state.Increament +1});
    }
    render() {
        return (
            <div>
                <h3 onMouseOver={this.handlegIncreament}>

                    Comp{this.props.hocaction}Increament:{this.state.Increament}
                </h3>

                {/* <button>Action</button> */}
                
            </div>
        );
    }
}

export default Hoc(Comp);
