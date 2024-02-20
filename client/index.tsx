import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { GameTrackerProvider } from './components/GameTrackerContext.tsx'

import { routes } from './routes.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter(routes)

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <GameTrackerProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </GameTrackerProvider>
    </QueryClientProvider>,
  )
})
