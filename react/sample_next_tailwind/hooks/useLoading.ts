import { useContext } from 'react'

import {
  LoadingContext,
  LoadingContextType,
} from '../providers/LoadingProvider'

export const useLoading = (): LoadingContextType => useContext(LoadingContext)
