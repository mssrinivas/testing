import React from 'react';
import {Redirect} from 'react-router-dom';
import Navigation from './Navigation';
import cookie from 'react-cookies'


class StarterPage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render()
  {
    let Redirect_to_home = null;
    return (
        
        <div class="backgroundcontainer" >
        {Redirect_to_home}
      <div class="centering row centered">
                              <div class="info-form">
                              </div>
                              <br />  
           </div>
      </div>

    )
  }
}
export default StarterPage;

