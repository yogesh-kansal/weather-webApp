import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
class Spin extends Component {
    render() {
        return (
        <Loader
         type="ThreeDots"
         color="#34568B"
         height={100}
         width={100} 
      />
        );
    }
}

export default Spin;