import { TTitleBar } from '../Comparison.types'
import { Button } from './Button'

export const TitleBar = ({ title }: TTitleBar) => {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <Button type="export" action={() => console.log('export')} />
      </div>
    </>
  )
}
