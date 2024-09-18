import { getData } from '@/services/dataService/dataService'
import { IData } from '@/types/data.types'
import { useQuery } from '@tanstack/react-query'

export function useComparison() {
  const query = useQuery<IData>({
    queryKey: ['data'],
    queryFn: getData,
  })

  return { data: query.data }
}
