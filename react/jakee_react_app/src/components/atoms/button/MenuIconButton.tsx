import { PureComponent } from 'react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

type Props = {
  onOpen: () => void
}

export class MenuIconButton extends PureComponent<Props> {
  render() {
    const { onOpen } = this.props

    return (
      <IconButton
        aria-label='メニューボタン'
        icon={<HamburgerIcon />}
        size='sm'
        variant='unstyled'
        display={{ base: 'block', md: 'none' }}
        onClick={onOpen}></IconButton>
    )
  }
}
