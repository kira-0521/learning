/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

export const EmotionTest = () => {
  const containerStyle = css`
    border: solid 1px black;
    border-radius: 20px;
    padding: 8px;
  `

  const titleStyle = css({
    margin: 0,
    color: 'teal',
  })

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>
        Object styles are recommended since they are type checked with the help
        of the csstype package. For example, the following code will emit an
        error.
      </h1>
    </div>
  )
}
