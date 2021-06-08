import React, { Component } from 'react';
import loadingGif from '../Assets//images/gif/loading-arrow.gif';

class Loading extends Component {
   render() {
      return (
         <div className="loading">
            <img src={loadingGif} alt="" />
         </div>
      );
   }
}

export default Loading;