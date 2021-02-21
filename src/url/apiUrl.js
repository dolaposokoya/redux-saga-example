let type = 'dev';
const url = type == 'dev' ? `http://localhost:5000/api/` : `http://your-api/api/`
const basicAuth = btoa(`bloodbank-api@gmail.com:e2b1b93e3082485a308992c8c30e06c1`)

export const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    authorization: `Basic ${basicAuth}`
}
export const API_URL = {
    loginUser: `${url}user/loginUser`,
    loginAdmin: `${url}admin/loginAdmin`,
}