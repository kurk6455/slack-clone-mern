import { SignInButton } from '@clerk/clerk-react'
import React from 'react'

const AuthPage = () => {
  return (
    <div>
        <SignInButton mode="modal"/>
    </div>
  )
}

export default AuthPage