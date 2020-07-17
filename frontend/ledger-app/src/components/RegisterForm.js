import React        from 'react';
import InputField   from './InputField';
import SubmitButton from './SubmitButton';
import UserStore    from './UserStore';

class registerform extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username : '',
            password: '', 
            email: '',
            phonenumber:'',
            buttonDisabled: false
        }
    }

    setInputValue(property, val){
        val = val.trim();
        if(val.length > 12) {
            return;
        }
        this.setState({
            [property]: val 
        })
    }
    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {

        if (!this.state.username){
            return;
        } 
        if (!this.state.password){
            return;
        }

        this.setState({
            buttonDisabled: true
        })

        try {

            let res = await fetch('/login', {
                method: 'post' ,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });

            let result = await res.json();
                if(result && result.success) {
                    UserStore.isLoggedIn = true;
                    UserStore.username = result.username;
                }
                else if (result && result.sucess === false) {
                    this.resetForm();
                    alert(result.msg);
                }
        }

        catch (e) {
            console.log(e)
            this.resetForm();
        }

    }

    async doSignUp() {

    }

    render() {
        return (
            <div className="loginForm">
                Let's Register, fill out the information below:
                <InputField
                    type = 'text'
                    placeholder = 'First Name'
                    //value={this.state.username ? this.state.firstname : ''}
                    onChange = { (val) => this.setInputValue('firstname', val) }
                    
                />

                <InputField
                    type = 'text'
                    placeholder = 'Last Name'
                    //value={this.state.password ? this.state.lastname : ''}
                    onChange = { (val) => this.setInputValue('lastname', val) }
                    
                />

                <InputField
                    type = 'text'
                    placeholder = 'Username'
                    //value={this.state.password ? this.state.username : ''}
                    onChange = { (val) => this.setInputValue('username', val) }
                    
                />

                <InputField
                    type = 'text'
                    placeholder = 'Password'
                    //value={this.state.password ? this.state.password : ''}
                    onChange = { (val) => this.setInputValue('password', val) }
                    
                />


                <InputField
                    type = 'text'
                    placeholder = 'Email'
                    //value={this.state.password ? this.state.email : ''}
                    onChange = { (val) => this.setInputValue('email', val) }
                    
                />

                <InputField
                    type = 'text'
                    placeholder = 'Phone Number'
                    //value={this.state.password ? this.state.phonenumber : ''}
                    onChange = { (val) => this.setInputValue('phone number', val) }
                    
                />

                 <SubmitButton
                    text = 'Sign Up'
                    disabled = {this.state.buttonDisabled}
                    onClick={ () => this.doSignUp }
                />

            </div>
        );
    }
}
export default registerform;