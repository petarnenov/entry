import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Oops! Something went wrong. Please try again later.');
    console.error('Error details:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section>
          {this.props.fallback}
        </section>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propsTypes = {
  fallback: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
