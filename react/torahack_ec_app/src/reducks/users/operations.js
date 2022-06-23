import { signInAction } from './actions'
import { push } from 'connected-react-router'

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn

    if (!isSignedIn) {
      const url = 'https://jsonplaceholder.typicode.com/users?id=1'

      const response = await fetch(url)
        .then((res) => res.json())
        .catch((err) => console.log(err))

      const username = response[0].name

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '000001',
          username,
        })
      )
      dispatch(push('/'))
    }
  }
}
