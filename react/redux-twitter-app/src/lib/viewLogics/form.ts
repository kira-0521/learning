import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { isNil } from 'lodash'

export const onChangeImageHandler = (
  e: ChangeEvent<HTMLInputElement>,
  setAction: Dispatch<SetStateAction<File | null>>
) => {
  if (!isNil(e.target.files)) {
    setAction(e.target.files[0])
    // 同じファイルが選択された時にイベント発火
    e.target.value = ''
  }
}
