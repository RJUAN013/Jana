import React, { Component } from 'react';
import './App.css';

import { Button, Form , FormGroup, Label, Input } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <div className="login-form">
      <form>
      <h1>
        <span className="font-weight-bold">mywebsite</span>.com
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <label>Email</label>
        <input type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <label>Password</label>
        <input type="password" placeholder="Password"/>
      </FormGroup>
      <button className="btn-lg btn-dark btn-block">
        Login
        </button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <div className="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/sign-up">Forgot Password</a>
      </div>
      </form>
    </div>
  );
}

export default App;
