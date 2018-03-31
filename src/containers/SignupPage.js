import React from 'react';
import SignupForm from '../components/SignupForm';

import {signup_action, userSignupRequest} from '../actions/Authentication';
import {connect} from 'react-redux';

const signupStyle= {
      width: "400px",
      marginTop: "100px"
}

class SignupPage extends React.Component{

  constructor(){
    super();
    this.state = {
      username: '',
      password: '',
      password_confirmation: ''
    };
  }
  //
  // userSignupRequest(userdata){
  //   this.setState({
  //     username: userdata.username,
  //     password: userdata.password,
  //     password_confirmation: userdata.password_confirmation
  //   });
  //
  //   console.log(userdata);
  // }

  render(){
    return(
      <div className="container"  style = {signupStyle}>
        <SignupForm userSignupRequest = { this.props.userSignupRequest } />
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => {
    return{
      signup: (userdata)=> {
        dispatch(signup_action(userdata));
      }
    };
}

export default connect(mapStateToProps, {userSignupRequest})(SignupPage);
