'use client'

import { type UserAuthResponse } from '@/types/AllTypes'
import jwt from 'jsonwebtoken'
import React from 'react'

interface IContextProvider {
  children?: React.ReactNode
}

interface IAuthState {
  user: string | jwt.JwtPayload | UserAuthResponse | null
  loading: boolean
  userEmail: null | string
  userToken: null | string
  error: null | unknown | Record<string, unknown>
}

interface IAuthContext {
  authState: IAuthState
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>
}

export const AuthContext = React.createContext<IAuthContext | null>(null)

export const AuthContextProvider: React.FC<IContextProvider> = ({ children }) => {
  const [authState, setAuthState] = React.useState<IAuthState>({
    userEmail: null,
    userToken: null,
    user: null,
    loading: true,
    error: null,
  })

  React.useEffect(() => {
    const token = localStorage.getItem('jwtToken') // Session token that will only check if there is a valid session with user id
    const secret = process.env.JWT_SECRET
    if (token != null && secret != null) {
      // Verify the token and extract user information
      try {
        const decoded = jwt.verify(token, secret)
        setAuthState(({ userEmail, userToken, error }) => ({
          userEmail,
          userToken,
          user: decoded as UserAuthResponse,
          loading: false,
          error,
        }))
      } catch (error) {
        setAuthState(() => ({
          userEmail: null,
          userToken: null,
          user: null,
          loading: false,
          error,
        }))
      }
    } else {
      setAuthState(() => ({
        userEmail: null,
        userToken: null,
        user: null,
        loading: true,
        error: null,
      }))
    }
  }, [])

  const contextValues = React.useMemo(
    () => ({
      authState,
      setAuthState,
    }),
    [authState],
  )

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): IAuthContext => {
  const context = React.useContext(AuthContext)
  if (context == null) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }
  return context
}
