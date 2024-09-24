type THeaderTitle = {
  title: string
  id: string
  icon?: JSX.Element
}

export type TMainRow = {
  rowTitle: string
  rowContent: {}
}

export type TTable = {
  tableName: string
  headerTitles: THeaderTitle[]
  mainRow: TMainRow
  isLoading: boolean
}
