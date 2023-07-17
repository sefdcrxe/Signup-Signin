import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';


function RegisterPage(props){

    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Name, serName] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');


    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    };

    const onNameHandler = (event) => {
        serName(event.currentTarget.value);
    };

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    };

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야합니다.')
        }

        let body = {
            email: Email,
            name : Name,
            password: Password
        };


        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success){
                    props.history.push("/auth/signin")
                }else {
                    alert("failed to signup")
                }
            })
    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>

            <form style={{ display: 'felx', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />


                <br />
                <button>
                    회원가입
                </button>
            </form>

        </div>
    )
}
export default RegisterPage