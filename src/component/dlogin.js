import React from 'react';

function Dlogin(){
    return(
        <>
        <div className="box-form">
        <div className="left">
          <div className="overlay">
          <h1>Hello World.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Curabitur et est sed felis aliquet sollicitudin</p>
          <span>
            <p>login with social media</p>
            <a href="/"><i className="fa fa-facebook" aria-hidden="true"></i>facebook</a>
            <a href="/"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
          </span>
          </div>
        </div>
          <div className="R">
          <h5>Login</h5>
          <div className="cr">
          <h3>As Doctor</h3>
          <p>Don't have an account? <a href="/dreg">Creat Your Account</a> it takes less than a minute</p>
          </div>
          <div className="inputs">
            <input type="text" placeholder="user name"/>
            <br/>
            <input type="password" placeholder="password"/>
          </div>
          <div className="remember-me--forget-password">
            
        <label>
          <input type="checkbox" name="item" checked/>
          <span className="text-checkbox">Remember me</span>
        </label>
            <p>forget password?</p>
          </div>
            
            <br/>
            <button>Login</button>
        </div>
        
      </div>
      </>
    );
}
export default Dlogin;