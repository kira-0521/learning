type ToastType = 'success' | 'info' | 'warning' | 'error'
export type ToastState = { type: ToastType; message: string; isShow: boolean }

export type ToastAction =
  | { type: 'SHOW_SUCCESS_TOAST'; payload: { message: string } }
  | { type: 'SHOW_INFO_TOAST'; payload: { message: string } }
  | { type: 'SHOW_WARNING_TOAST'; payload: { message: string } }
  | { type: 'SHOW_ERROR_TOAST'; payload: { message: string } }
  | { type: 'CLOSE_TOAST' }

export const toastInitialState: ToastState = {
  type: 'success',
  message: '',
  isShow: false,
}

const processToastClose = () => {
  setTimeout(() => {
    toastInitialState.isShow = false
  }, 8000)
}

export const toastReducer = (
  state: ToastState,
  action: ToastAction
): ToastState => {
  switch (action.type) {
    case 'SHOW_SUCCESS_TOAST':
      console.log('action')
      processToastClose()
      return {
        type: 'success',
        message: action.payload.message,
        isShow: true,
      }
    case 'SHOW_INFO_TOAST':
      processToastClose()
      return {
        type: 'info',
        message: action.payload.message,
        isShow: true,
      }
    case 'SHOW_WARNING_TOAST':
      processToastClose()
      return {
        type: 'warning',
        message: action.payload.message,
        isShow: true,
      }
    case 'SHOW_ERROR_TOAST':
      processToastClose()
      return {
        type: 'error',
        message: action.payload.message,
        isShow: true,
      }
    case 'CLOSE_TOAST':
    default:
      return {
        type: 'success',
        message: '',
        isShow: false,
      }
  }
}
