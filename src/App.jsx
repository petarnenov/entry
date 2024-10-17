import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Users from './components/users/Users'
import HelloWorld from './HelloWorld'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <HelloWorld />
      <Users />
    </QueryClientProvider>
  )
}

export default App
