import React, { Component } from 'react';

type Props = { children: React.ReactNode };

type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
    state = { hasError: false };
    static getDerivedStateFromError(e: any) {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return <div>Что-то пошло не так...</div>;
        else return this.props.children;
    }
}

export default ErrorBoundary;
