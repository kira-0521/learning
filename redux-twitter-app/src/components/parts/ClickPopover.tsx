import React, { FC, ReactNode } from 'react'
import { Popover } from '@material-ui/core'

type Props = {
  children: ReactNode
  id: string | undefined
  open: boolean
  anchorEl: Element | null
  onClose: () => void
}

export const ClickPopover: FC<Props> = (props) => {
  const { children, id, open, anchorEl, onClose } = props

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}>
      {children}
    </Popover>
  )
}
