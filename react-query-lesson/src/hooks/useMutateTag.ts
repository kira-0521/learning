import { useQueryClient, useMutation } from 'react-query'

import { useAppDispatch } from '../app/hooks'
import { resetEditedTag } from '../slices/todoSlice'
import { fetchUpdateTag, fetchCreateTag, fetchDeleteTag } from '../lib/api'
import { Tag } from '../@types/types.d'

export const useMutateTag = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()

  const createTagMutation = useMutation(fetchCreateTag, {
    onSuccess: (data) => {
      const previousTags = queryClient.getQueryData<Tag[]>('tags')
      if (previousTags) {
        queryClient.setQueryData<Tag[]>('tags', [...previousTags, data])
      }
      dispatch(resetEditedTag())
    },
  })

  const updateTagMutation = useMutation(fetchUpdateTag, {
    onSuccess: (data, variables) => {
      const previousTags = queryClient.getQueryData<Tag[]>('tags')
      if (previousTags) {
        queryClient.setQueryData<Tag[]>(
          'tags',
          previousTags.map((tag) => (tag.id === variables.id ? data : tag))
        )
      }
      dispatch(resetEditedTag())
    },
  })

  const deleteTagMutation = useMutation(fetchDeleteTag, {
    onSuccess: (data, variables) => {
      const previousTags = queryClient.getQueryData<Tag[]>('tags')
      if (previousTags) {
        queryClient.setQueryData<Tag[]>(
          'tags',
          previousTags.filter((tag) => tag.id !== variables)
        )
      }
      dispatch(resetEditedTag())
    },
  })

  return { createTagMutation, updateTagMutation, deleteTagMutation }
}
