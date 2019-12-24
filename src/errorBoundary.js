import React, { Component } from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(
      "An error has occurred and has been handled.",
      error,
      errorInfo
    );
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <h1>
          An error has occurred. <Link to="/">Click here</Link> to go back to
          the home page or wait for five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
