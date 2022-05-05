import { auth, firebaseAuthProvider } from '../../firebaseInit'

export const signInGoogle = async () => {
  await auth
    .signInWithPopup(firebaseAuthProvider)
    .catch((err: any) => err.message)
}
