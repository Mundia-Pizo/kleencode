import Link from 'next/link'
import React from 'react'
import authStyles from '../styles/Auth.module.css'

const signin= () => {
  return (
      <div className={authStyles.authSpace}>
          <form className={authStyles.main_auth_column}>
              <h1>Sign in</h1>
              <label>email</label>
              <input placeholder='enter your email address' />
              <label>password</label>
              <input placeholder='enter your email address' />
              <button type='submit'>register</button>
             <div className={authStyles.auth_questions}>
              <small>Don't have an account?<Link href="/signup">register</Link> </small>
              <small>Forgot password? reset </small>
             </div>
        
          </form>
    </div>
  )
}

export default signin