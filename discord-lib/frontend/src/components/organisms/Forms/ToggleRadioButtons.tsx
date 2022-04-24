import { FC, memo, useCallback, useContext } from 'react'
import { MoneyUnitContext } from '../../../provider/MoneyUnitProvider'
import { RadioCard } from '../../molecules/Forms/RadioCard'
import { useRadioGroup, HStack } from '@chakra-ui/react'

type Unit = 'ETH' | 'USD'
export const ToggleRadioButtons: FC = memo(() => {
  const options = ['ETH', 'USD']
  const moneyUnitContext = useContext(MoneyUnitContext)
  const onChangeUnit = useCallback(
    (nextValue: Unit) => {
      moneyUnitContext.setUnit(nextValue)
    },
    [moneyUnitContext.unit]
  )

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'money',
    defaultValue: moneyUnitContext.unit,
    onChange: onChangeUnit,
  })

  const group = getRootProps()

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} useRadioProps={radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
})
