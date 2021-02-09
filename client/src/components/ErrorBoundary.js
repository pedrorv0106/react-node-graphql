import React from 'react';
import { ErrorBoundary as BaseErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, componentStack, resetErrorBoundary }) => (
  <div role="alert">
    <p>Something went wrong:</p>
    <pre>{error.message}</pre>
    <pre>{componentStack}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
);

const ErrorBoundary = ({ children }) => {
  const handleReset = () => window.location.reload();

  return (
    <BaseErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
      {children}
    </BaseErrorBoundary>
  );
};

export default ErrorBoundary;
