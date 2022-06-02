import { FC, memo } from 'react'
import { useQueryTags } from '../../hooks/useQueryTags'
import { TagItem } from './TagItem'

export const TagList: FC = memo(() => {
  const { data, status } = useQueryTags()

  console.log('rendered TagList')
  if (status === 'loading') return <div>{'Loading...'}</div>
  if (status === 'error' || !data) return <div>{'Error'}</div>
  return (
    <div>
      {'message' in data ? (
        <div>{'Error'}</div>
      ) : (
        <>
          {data.map((tag) => (
            <div key={tag.id}>
              <ul>
                <TagItem tag={tag} />
              </ul>
            </div>
          ))}
        </>
      )}
    </div>
  )
})
