import React, {Component} from 'react';

const margin ={
  marginTop: "10px"
}



class SigninForm extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <form className="form-signin" onSubmit = {this.onSubmit} >
        <h2 className="form-signin-heading"> Sign In</h2>

        <label style={margin} className="sr-only">Email address</label>
        <input
        type="email"
        name="username"
        onChange= {this.onChange}
        id="inputEmail"
        className="form-control"
        placeholder="Email address" required autoFocus />

        <label className="sr-only">Password</label>
        <input
        type="password"
        name = "password"
        id="inputPassword"
        onChange= {this.onChange}
        style={margin}
        className="form-control"
        placeholder="Password" required />
        <div className="checkbox">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    );
  }

}

export default SigninForm;
