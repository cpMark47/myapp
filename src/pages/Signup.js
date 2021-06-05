import React, { Component } from 'react';
import Logo from '../components/Logo';
import Form from '../components/Form';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import{ Actions } from 'react-native-router-flux';
import { Field, reduxForm} from 'redux-form';
import InputText from "../components/InputText";


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0091ea',
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont : {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'     
  },
  signupText : {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  button: {
    width: 300,
   backgroundColor: '#0064b7',
   borderRadius: 25,
   marginVertical: 10,
   paddingVertical: 12,
},
buttonText: {
  fontSize: 16,
  fontWeight: '500',
  color: '#ffffff',
  textAlign : 'center'
},
errorText: {
  color : "#ffffff",
  fontSize : 14,
  paddingHorizontal : 16,
  paddingBottom : 8
}
 });

class Signup extends Component<{}> {

  goBack() {
    Actions.pop();
  }

  createNewUser = () => {
    alert("boom");
  }

  onSubmit = (values) => {
    console.log(values);
  }

 renderTextInput = (field) => {
   const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
  return(
    <View>
      <InputText 
       onChangeText = {onChange}
       maxLength = {maxLength}
       placeholder = {placeholder} 
       keyboardType = {keyboardType}
       secureTextEntry = {secureTextEntry}
       label = {label}
       {...restInput} />
       {(touched && error) && <Text style = {styles.errorText}>{error}</Text>}
    </View>
  );
  }

    render() {
      const { handleSubmit } = this.props;
      return (
         <View style = {styles.container}>
           <Logo/>
           <Field 
           name="name" 
           placeholder = "Name"
           component={this.renderTextInput}
            />
             <Field 
           name="email" 
           placeholder = "Email"
           component={this.renderTextInput}
            />
             <Field 
           name="password" 
           placeholder = "Password"
           secureTextEntry={true}
           component={this.renderTextInput}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
             <Text style={styles.buttonText}>Signup</Text>    
           </TouchableOpacity> 
           <View style = {styles.signupTextCont}>
             <Text style = {styles.signupText}>Already have an account?</Text>
             <TouchableOpacity onPress={this.goBack}><Text style = {styles.signupButton}>Signin</Text></TouchableOpacity>
           </View>
         </View>
      );
    }
  }

  const validate = ( values ) => {
    const errors = {};
    if(!values.name) {
      errors.name = "Name is required";
    }
    if(!values.email) {
      errors.email = "Email is required";
    }
    if(!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  } 

   export default reduxForm({
     form: "register",
     validate
   })(Signup)
