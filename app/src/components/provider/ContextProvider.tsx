import { FC, ReactNode, useMemo, useReducer } from "react"
import { initialState, newsReducer, ContextApp } from "../../store/reducer"

interface Props {
  children: ReactNode
}

const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState)

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <ContextApp.Provider value={contextValue}>{children}</ContextApp.Provider>
  )
}

export default ContextProvider
