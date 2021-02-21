
import { API_URL, header } from './../url/apiUrl';

export const signin = async (email, password) => {
    return (fetch(API_URL.loginUser, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email, password)
    })

    )
}


export const loginUser = async (formData) => {
    console.log('formData',formData)
    return (
        fetch(API_URL.loginAdmin, {
            method: 'POST',
            headers: header,
            body: JSON.stringify(formData)
        }).then(response => response.json())
    )

}