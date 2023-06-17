import React from 'react';

function Rform(){
    return(
        <>
        <div className="box-form">
        <div className="left">
          <div className="overlay">
          <h1>Welcome to Blockchain Hospital</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur et est sed felis aliquet sollicitudin</p>
          <span>
            <p>Register with social media</p>
            <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i>facebook</a>
            <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
          </span>
          </div>
        </div>
          <div className="R">
          <h2>Register</h2>
          <div className="cr">
          <h2>AS Patient</h2>
          </div>
          <div className="inputs">
            <input type="text" placeholder="First name"/>
            <br/>
            <input type="text" placeholder="Last name"/>
            <br/>
            <input type="email" placeholder="Email"/>
            <br/>
            <input type="number" placeholder="Phone number"/>
            <br/>
            <input type="password" placeholder="password"/>
            <br/>
            <input type="text" placeholder="Address"/>
            <br/>
          </div>
          <div className="remember-me--forget-password">
        <label>
          <input type="checkbox" name="item" checked/>
          <span className="text-checkbox">Remember me</span>
        </label>
        <br/>
          </div>
            <br/>
            <button>Register</button>
        </div>
        
      </div>
      </>
    );
}
export default Rform;