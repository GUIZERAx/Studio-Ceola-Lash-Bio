import React, { Component, ReactNode, ErrorInfo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

console.log('Iniciando aplicação...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// Error Boundary Simples para capturar erros dentro do React
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Erro no React:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white">
          <h2 className="text-xl font-serif text-brand-gold mb-2">Ops! Algo deu errado.</h2>
          <p className="text-sm text-zinc-400 mb-4">Não foi possível carregar o conteúdo.</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700 transition"
          >
            Tentar Novamente
          </button>
          <p className="mt-8 text-[10px] text-zinc-600 font-mono break-all max-w-xs">
            {this.state.error?.toString()}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
  console.log('Aplicação renderizada com sucesso');
} catch (error) {
  console.error('Erro fatal na renderização:', error);
  // Fallback visual caso o createRoot falhe
  rootElement.innerHTML = `
    <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background:#000;color:#fff;text-align:center;padding:20px;">
      <h3 style="margin-bottom:10px;">Erro ao iniciar</h3>
      <p style="opacity:0.7;font-size:12px;">${error instanceof Error ? error.message : String(error)}</p>
    </div>
  `;
}