import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from './firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth'

// Create context
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext)

// Sign-in function
export async function signInWithEmail(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error('Sign-in error:', error.message)
    throw error
  }
}

// Sign-out function
export async function signOut() {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    console.error('Sign-out error:', error.message)
  }
}
