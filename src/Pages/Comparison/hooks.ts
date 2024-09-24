import { getData } from '@/services/dataService/dataService'
import { IData } from '@/types/data.types'
import { useQuery } from '@tanstack/react-query'
import { TableHeaderTitle } from './constants'
import { TMainRow } from '@/components/Table/Table.types'

function useComparisonData() {
  const query = useQuery<IData>({
    queryKey: ['data'],
    queryFn: getData,
  })
  const data = query.data
  const isLoading = query.isLoading

  return { data, isLoading }
}

export function useComparison() {
  const { data, isLoading } = useComparisonData()

  const mainRow: TMainRow = {
    rowTitle: 'Benchmark (all industries)',
    rowContent: { ...data?.benchmark },
  }

  return { data, isLoading, TableHeaderTitle, mainRow }
}
