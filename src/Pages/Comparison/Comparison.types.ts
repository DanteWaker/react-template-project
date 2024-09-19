export type TTitleBar = {
  title: string
  buttonType?: string
}

export type TButton = {
  type: "export" | "import"
  action: () => void
}
