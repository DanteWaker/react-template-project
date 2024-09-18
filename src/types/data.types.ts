interface TeamMetrics {
  participation: number
  eNPS: number
  overall_engagement: number
  recognition: number
  feedback: number
  relationship_with_peers: number
  relationship_with_manager: number
  satisfaction: number
  alignment: number
  happiness: number
  wellness: number
  personal_growth: number
  ambassadorship: number
}

interface TeamData extends TeamMetrics {
  name: string
}

interface BenchmarkData extends TeamMetrics {}

export interface IData {
  benchmark: BenchmarkData
  teams: TeamData[]
}
