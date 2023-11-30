import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AppLayout from './components/AppLayout.tsx'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('appLayout') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <AppLayout />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
})
