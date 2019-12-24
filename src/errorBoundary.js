import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  timer = null;

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

  componentDidUpdate() {
    if (this.state.hasError && !this.state.redirect) {
      console.log("updated the redirect state...");
      this.timer = setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
