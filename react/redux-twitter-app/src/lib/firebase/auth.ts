import { auth, firebaseAuthProvider } from '../../firebaseInit'

export const signInGoogle = async () => {
  await auth.signInWithPopup(firebaseAuthProvider).catch((err: unknown) => {
    if (err instanceof Error) {
      return err.message
    }
  })
}

export const signInWithEmail = async (email: string, password: string) => {
  await auth
    .signInWithEmailAndPassword(email, password)
    .catch((err: unknown) => {
      if (err instanceof Error) {
        return err.message
      }
    })
}
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    return await auth.createUserWithEmailAndPassword(email, password)
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message
    }
  }
}

export const sendResetEmail = async (resetEmail: string) => {
  try {
    return await auth.sendPasswordResetEmail(resetEmail)
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message
    }
  }
}

export const logout = async () => {
  await auth.signOut()
}
