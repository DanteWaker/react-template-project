import { useData } from '@/hooks/Data'
import { PiDownloadFill } from 'react-icons/pi'
export function Comparison() {
  const { mockData, headers } = useData()
  const transformedData = {
    benchmark: Object.entries(mockData.benchmark),
    teams: mockData.teams.map((team) => ({
      name: team.name,
      metrics: Object.entries(team).filter(([key]) => key !== 'name'),
    })),
  }

  const benchmarkData = transformedData.benchmark

  console.log(benchmarkData)

  return (
    <section className="w-full p-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">Comparison</h1>
        <button
          onClick={() => console.log('export')}
          className="flex items-center justify-center gap-2 rounded-sm border-2 bg-white px-4 py-2 font-semibold text-secondary-foreground"
        >
          <PiDownloadFill />
          Export
        </button>
      </div>
      <div className="flex w-full flex-col flex-wrap gap-8 bg-white shadow-sm">
        <div className="h-16 w-full border-b-[1px] bg-white" />
        <table className="flex w-full border-separate flex-col gap-1 p-8">
          <tr className="flex h-80 w-full items-start justify-start gap-1">
            <th className="flex h-full w-72 items-end justify-start border-2 p-4 text-start">
              Teams
            </th>
            {headers.map((header) => (
              <th className="vertical-lr h-full flex-1 bg-background p-4 text-start text-secondary">
                {header}
              </th>
            ))}
          </tr>
          <tr className="flex w-full items-start justify-start gap-1">
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
          </tr>
        </table>
      </div>
    </section>
  )
}
