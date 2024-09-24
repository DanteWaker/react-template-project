import { Table } from '@/components/Table'
import { TitleBar } from './components/TitleBar'
import { useComparison } from './hooks'

export function Comparison() {
  const { TableHeaderTitle, isLoading, mainRow } = useComparison()
  return (
    <section className="w-full p-12">
      <TitleBar title="Comparison" buttonType="export" />
      <Table
        tableName="Teams"
        headerTitles={TableHeaderTitle}
        isLoading={isLoading}
        mainRow={mainRow}
      />
    </section>
  )
}
