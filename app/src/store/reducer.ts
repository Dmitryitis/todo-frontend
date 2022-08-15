import { createContext } from "react"

export const initialState: PropsState = {
  isActiveNews: true,
}

export const ContextApp = createContext<any>(undefined)

export interface PropsState {
  isActiveNews: boolean
}

interface Action {
  type: string
  payload: any
}

export const newsReducer = (state: PropsState, action: Action) => {
  switch (action.type) {
    case "update_news":
      return { ...state, ...action.payload }
    default:
      return state
  }
}
