import React, { Component } from 'react';

const Hoc = Men => {
    class NewComp extends Component {
        render() {
            return <Men hocaction=" -:New Hoc Comp:- "  />
        }
    }
    return NewComp;

};
 export default Hoc;