import { Loading } from '../Loading'
import { TTable } from './Table.types'

export const Table = ({
  tableName,
  headerTitles,
  isLoading,
  mainRow,
}: TTable) => {
  console.log(headerTitles)
  console.log(mainRow)
  return (
    <div className="flex w-full flex-col flex-wrap gap-8 bg-white shadow-sm">
      <div className="h-16 w-full border-b-[1px] bg-white" />
      {!isLoading ? (
        <table className="flex w-full border-separate flex-col gap-1 p-8">
          <tr className="flex h-80 w-full items-start justify-start gap-1">
            <th className="flex h-full w-72 items-end justify-start border-2 p-4 text-start">
              {tableName}
            </th>
            {headerTitles.map((header) => (
              <th
                key={header.id}
                className="flex h-full flex-1 flex-row items-center justify-start gap-4 bg-background p-4 text-start text-secondary vertical-lr"
              >
                {header.icon && (
                  <span className="text-icon rotate-180">{header.icon}</span>
                )}
                {header.title}
              </th>
            ))}
          </tr>
          <tr className="flex w-full items-start justify-start gap-1">
            <td className="flex w-72 items-end justify-start border-2 bg-border p-4 text-start font-semibold">
              Benchmark (all industries)
            </td>
            {/* {mainRow.map((row) => (
              <td className="flex-1 border-2 bg-border p-4 text-start text-secondary"></td>
            ))} */}
          </tr>

          {/* <tr className="flex w-full items-start justify-start gap-1">
      <td className="flex w-72 items-end justify-start border-2 bg-border p-4 text-start font-semibold">
        Benchmark (all industries)
      </td>
      {benchmarkData.map((item) => (
        <td className="flex-1 border-2 bg-border p-4 text-start text-secondary">
          {item[1]}
        </td>
      ))}
    </tr>
    <tr className="flex w-full items-start justify-start gap-1">
      <td className="flex w-72 items-end justify-start border-2 p-4 text-start font-semibold">
        All Teams
      </td>
      {benchmarkData.map((item) => (
        <td className="flex-1 border-2 border-green-300 bg-green-300 p-4 text-start text-secondary">
          {item[1]}
        </td>
      ))}
    </tr> */}
        </table>
      ) : (
        <div className="flex h-72 w-full items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  )
}
