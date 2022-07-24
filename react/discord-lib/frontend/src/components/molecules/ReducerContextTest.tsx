import React, { useContext } from 'react'
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'

import { ToastContext } from '../../provider/ToastProvider'

const styledButton = css({
  border: '1px solid #fff',
  backgroundColor: 'blue',
  padding: '5px 10px',
  borderRadius: '10px',
})

export const ReducerContextTest = () => {
  const toastCtx = useContext(ToastContext)

  const toast = () => {
    switch (toastCtx.state.type) {
      case 'success':
        return <h1 style={{ color: 'teal' }}>success!!!</h1>
      case 'info':
        return <h1 style={{ color: 'blue' }}>info!!!</h1>
      case 'warning':
        return <h1 style={{ color: 'yellow' }}>success!!!</h1>
      default:
      case 'error':
        return <h1 style={{ color: 'red' }}>success!!!</h1>
    }
  }

  console.log(toastCtx.state)
  return (
    <div>
      <br />
      <br />
      <br />
      <button
        css={styledButton}
        onClick={() => {
          toastCtx.dispatch({
            type: 'SHOW_SUCCESS_TOAST',
            payload: { message: 'success!!!' },
          })
        }}>
        成功！！！
      </button>
      {toastCtx.state.isShow && toast()}
    </div>
  )
}
