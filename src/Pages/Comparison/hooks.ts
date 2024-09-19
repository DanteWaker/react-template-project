import { getData } from '@/services/dataService/dataService'
import { IData } from '@/types/data.types'
import { useQuery } from '@tanstack/react-query'

function useComparisonData() {
  const query = useQuery<IData>({
    queryKey: ['data'],
    queryFn: getData,
  })

  return { data: query.data }
}

export function useComparison() {
  const { data } = useComparisonData()

  console.log(data)

  return { data }
}
