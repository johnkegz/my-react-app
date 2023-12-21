
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query';
// import Todo from './Todo';
import { AppRoutes } from './AppRoutes';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
      {/* <Todo /> */}
    </QueryClientProvider>
  )
}

export default App
