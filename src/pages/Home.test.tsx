import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
)

describe('Home', () => {
  it('renders welcome message', () => {
    render(<Home />, { wrapper })
    expect(screen.getByText('Welcome to React App')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(<Home />, { wrapper })
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
