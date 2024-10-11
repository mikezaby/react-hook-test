import { Controller, useFormContext } from "react-hook-form"

type A = { a: string, b: string }
type B = { a: string, c: string }
type FormType = A | B

function App() {
  const { control } = useFormContext<FormType>()

  return (
    <div>
      <Controller name="a" control={control} render={() => <div />} />
      <Controller name="c" control={control} render={() => <div />} />
    </div>
  )
}

export default App
