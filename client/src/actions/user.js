import axios from "axios"
import { setUser } from '../reducers/userReducer'


export const instanceAxios = axios.create({
     baseURL: 'http://localhost:8000/api/'
})

export const registration = async (name, email, password) => {
   try {
        const response = await instanceAxios.post('auth/registration', {
            name,
            email,
            password
        })
        alert(response.data.message)
   } catch (e) {
        alert(e.response.data.message)
   }
}

export const login = (email, password) => {
     return async dispatch => {
          try {
               const response = await instanceAxios.post('auth/login', {
                   email,
                   password
               })
               dispatch(setUser(response.data.user))
               localStorage.setItem('token', response.data.token)
          } catch (e) {
               alert(e.response.data.message)
          }
     }
}

export const auth = () => {
     return async dispatch => {
          try {
               const response = await instanceAxios.get('auth/auth',
                    { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
               )
               localStorage.setItem('token', response.data.token)
               dispatch(setUser(response.data.user))
          } catch (e) {
               console.log(e.response.data.message)
               localStorage.removeItem('token')
          }
     }
}