/* eslint-disable react/prop-types */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import api from '../services/api'

interface UserData {
  email: string
  id: string
}

interface SignInProps {
  email: string
  password: string
}

interface AuthContextData {
  user: any
  signIn(formData: SignInProps): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState({})

  const signIn = useCallback(async (formData) => {
    try {
      const { data } = await api.post('/auth', formData)

      setUser(data.user)

      localStorage.setItem('@auth/user', JSON.stringify(data.user))
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    const foundUser = localStorage.getItem('@auth/user')

    if (foundUser) {
      const parsedUser = JSON.parse(foundUser)

      setUser(parsedUser)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  return context
}
