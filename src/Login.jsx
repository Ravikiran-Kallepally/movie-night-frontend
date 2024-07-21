import React from 'react';
import './Login.css';
import poster from './assets/Movie Nights Poster.jpeg'

const App = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={poster} alt="Placeholder" />
      </div>
      <div className="form-container">
        <div className="login-signup">
          <h2>Login</h2>
          <form>
            <div>
              <label htmlFor="login-email">Email:</label>
              <input type="email" id="login-email" name="login-email" />
            </div>
            <div>
              <label htmlFor="login-password">Password:</label>
              <input type="password" id="login-password" name="login-password" />
            </div>
            <button type="submit">Login</button>
          </form>
          <h2>Signup</h2>
          <form>
            <div>
              <label htmlFor="signup-email">Email:</label>
              <input type="email" id="signup-email" name="signup-email" />
            </div>
            <div>
              <label htmlFor="signup-password">Password:</label>
              <input type="password" id="signup-password" name="signup-password" />
            </div>
            <div>
              <label htmlFor="signup-confirm-password">Confirm Password:</label>
              <input type="password" id="signup-confirm-password" name="signup-confirm-password" />
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
