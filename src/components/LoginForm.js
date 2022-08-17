import React, { useContext } from 'react'
import loginService from '../services/login'
import RootContext from '../RootContext'

const LoginForm = ({ handleSubmit }) => {
  const user = useContext(RootContext)
console.log('user',user)
  /*   const handleSubmit = async (event) => {
    event.preventDefault()
  } */
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input
             value={user.username}
               onChange={user.setUser}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
                value={user.password}
                onChange={user.setPw}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm
