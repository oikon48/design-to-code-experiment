import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example from './src/App.Portfolio'
import KombaiWrapper from './KombaiWrapper'
import ErrorBoundary from '@kombai/react-error-boundary'
import './src/App.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <KombaiWrapper>
        <Example />
      </KombaiWrapper>
    </ErrorBoundary>
  </StrictMode>,
)