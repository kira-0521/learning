import ARROW_LEFT_UP from '../assets/svg/arrow_left_up.svg'
import ARROW_LEFT_DOWN from '../assets/svg/arrow_left_down.svg'
import ARROW_RIGHT_UP from '../assets/svg/arrow_right_up.svg'
import ARROW_RIGHT_DOWN from '../assets/svg/arrow_right_down.svg'
import WAVE_ARROW_UP from '../assets/svg/wave_arrow_up.svg'
import WAVE_ARROW_DOWN from '../assets/svg/wave_arrow_down.svg'
import WAVE_ARROW_LEFT from '../assets/svg/wave_arrow_left.svg'
import WAVE_ARROW_RIGHT from '../assets/svg/wave_arrow_right.svg'
import MULTIPLY from '../assets/svg/multiply.svg'
import PLUS from '../assets/svg/plus.svg'

export type TagFilterType = {
  id: number
  src: string[]
  text: string[]
  value: string[]
}

export const TAG_FILTER_GROUP: TagFilterType[] = [
  {
    id: 1,
    src: [ARROW_LEFT_UP, ARROW_LEFT_DOWN],
    text: ['arLeft', `arLeft`],
    value: ['alu', 'ald'],
  },
  {
    id: 2,
    src: [ARROW_RIGHT_UP, ARROW_RIGHT_DOWN],
    text: [`Arrow\nUp`, `Arrow\nDown`],
    value: ['aru', 'ard'],
  },
  {
    id: 3,
    src: [WAVE_ARROW_UP, WAVE_ARROW_DOWN],
    text: [`Wave\nUp`, `Wave\nDown`],
    value: ['wau', 'wad'],
  },
  {
    id: 4,
    src: [WAVE_ARROW_LEFT, WAVE_ARROW_RIGHT],
    text: [`Wave\nLeft`, `Wave\nRight`],
    value: ['wal', 'war'],
  },
  {
    id: 5,
    src: [MULTIPLY, PLUS],
    text: ['Multiply', 'Plus'],
    value: ['multiply', 'plus'],
  },
]
