import { isNil, map, reduce } from 'lodash'

export const getDomHight = (
  rejectDomIds: string[],
  otherRejectHeight?: number
): number => {
  const windowHeight = window.innerHeight

  const rejectDomsCalcHeight = reduce(
    rejectDomIds,
    (sumResult: number, currentDomId: string): number => {
      const currentDom = document.getElementById(currentDomId)

      const currentDomHeight = !isNil(currentDom) ? currentDom.offsetHeight : 0
      return sumResult + currentDomHeight
    },
    0
  )

  return isNil(otherRejectHeight)
    ? windowHeight - rejectDomsCalcHeight
    : windowHeight - rejectDomsCalcHeight - otherRejectHeight
}