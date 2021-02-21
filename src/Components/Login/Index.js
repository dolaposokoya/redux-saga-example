import React, { useState } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { getUser, getUserSuccess } from '../../actions/userAction'

export const Index = (props) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [emailError, setemailError] = useState('')
    const [error, setError] = useState('')

    const validateInput = async () => {
        let isValid = true;
        const emailError = {}
        const passwordError = {}

        if (email === '') {
            emailError.empty = 'Email is empty';
            isValid = false
        }
        if (!email.includes('@')) {
            emailError.valid = 'Not a valid email'
            isValid = false
        }
        if (password === '') {
            passwordError.empty = 'Password is empty'
            isValid = false
        }
        setpasswordError(passwordError)
        setemailError(emailError)
        return isValid;

    }

    const handleInput = async (evt) => {
        evt.preventDefault()
        const valid = await validateInput()
        const formData = {}
        const error = {}
        if (valid === false) {
            alert('Please fill all fields')
        }
        else {
            formData.email = email
            formData.password = password
            await props.getUser(formData, response => {
                if (response.error === false) {
                    alert(response.message)
                }
                else {
                    alert(response.message)
                }
            })
        }
    }
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh'
            }}
        >
            <form
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexGrow: 1,
                    position: 'relative',
                    flexDirection: 'column',
                }}
            >
                <input
                    style={{
                        margin: 10,
                        width: 250,
                        paddingTop: 7,
                        paddingBottom: 7,
                    }}
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(evt) => setemail(evt.target.value)}
                />
                {emailError && Object.keys(emailError).map(key => (
                    <h5
                        style={{
                            color: 'red',
                            margin: 0,
                            textAlign: 'left'
                        }}
                    >{emailError[key]}</h5>
                ))}
                <input
                    style={{
                        margin: 10,
                        width: 250,
                        paddingTop: 7,
                        paddingBottom: 7,
                    }}
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(evt) => setpassword(evt.target.value)}
                />
                {passwordError && Object.keys(passwordError).map(key => (
                    <h5
                        style={{
                            color: 'red',
                            margin: 0,
                            textAlign: 'left'
                        }}
                    >{passwordError[key]}</h5>
                ))}
                <button
                    style={{
                        cursor: 'pointer',
                        paddingTop: 7,
                        paddingBottom: 7,
                        paddingRight: 20,
                        paddingLeft: 20,
                    }}
                    onClick={handleInput}
                >Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { data } = state.login
    console.log('Reducer data', data)
    return state
}


const mapDispatchToProps = dispatch => bindActionCreators({ getUser, getUserSuccess }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
