import React from 'react'
import authStyles from '../styles/Auth.module.css'
import Link from 'next/link'

const signup = () => {
  return (
      <div className={authStyles.authSpace}>
          <form className={authStyles.main_auth_column}>
        <h1>Join today</h1>
              <label>username</label>
              <input placeholder='enter your email address' />
              <label>email</label>
              <input placeholder='enter your email address' />
              <label>password</label>
              <input placeholder='enter your email address' />
              <label>confirm password</label>
              <input placeholder='enter your email address' />
              <button type='submit'>register</button>
              <small>Already have an account? <Link href="/signin">signin</Link> </small>
          </form>
    </div>
  )
}

export default signup