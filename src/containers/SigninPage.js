import React from 'react';
import '../style/Signin.css';
import SigninForm from '../components/SigninForm';

const signinStyle= {

    width: "400px",
    marginTop: "100px"
}



class SigninPage extends React.Component{



  render(){

    return(
      <div className="container"  style = {signinStyle}>
        <SigninForm />
      </div>
    );
  }

}

export default SigninPage;
