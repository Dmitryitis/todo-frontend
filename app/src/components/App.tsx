import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"
import { ReactQueryDevtools } from "react-query/devtools"
import AppRouter from "./AppRouter"
import ContextProvider from "./provider/ContextProvider"

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen />
        </ContextProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
