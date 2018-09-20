import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="app-content content">
        <div className="content-wrapper">
          <div className="content-header row" />
          <div className="content-body">
            <section className="flexbox-container">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="col-md-4 col-10 box-shadow-2 p-0">
                  <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                    <div className="card-header border-0">
                      <div className="card-title text-center">
                        <img
                          src="https://erfancdn.blob.core.windows.net/admin-template/images/sd_logo.png"
                          height="80px"
                          alt="Social Developers"
                        />
                      </div>
                      <h6 className="card-subtitle line-on-side text-muted text-center font-small-3 pt-2">
                        <span>Easily Using</span>
                      </h6>
                    </div>
                    <div className="card-content">
                      <div className="text-center">
                        <a
                          href="#"
                          className="btn btn-social-icon mr-1 mb-1 btn-outline-facebook"
                        >
                          <span className="la la-facebook" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-social-icon mr-1 mb-1 btn-outline-twitter"
                        >
                          <span className="la la-twitter" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin"
                        >
                          <span className="la la-linkedin font-medium-4" />
                        </a>
                        <a
                          href="#"
                          className="btn btn-social-icon mr-1 mb-1 btn-outline-github"
                        >
                          <span className="la la-github font-medium-4" />
                        </a>
                      </div>
                      <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                        <span>OR Using Account Details</span>
                      </p>
                      <div className="card-body">
                        <form
                          className="form-horizontal"
                          onSubmit={this.onSubmit}
                          noValidate
                        >
                          <fieldset className="form-group position-relative has-icon-left">
                            <input
                              type="email"
                              className={classnames("form-control", {
                                "is-invalid": errors.email
                              })}
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              value={this.state.email}
                              onChange={this.onChange}
                            />
                            <div className="form-control-position">
                              <i className="icon-envelope" />
                            </div>
                            {errors.email && (
                              <div className="invalid-feedback">
                                {errors.email}
                              </div>
                            )}
                          </fieldset>
                          <fieldset className="form-group position-relative has-icon-left">
                            <input
                              type="password"
                              className={classnames("form-control", {
                                "is-invalid": errors.password
                              })}
                              id="password"
                              name="password"
                              placeholder="Enter Password"
                              value={this.state.password}
                              onChange={this.onChange}
                            />
                            <div className="form-control-position">
                              <i className="la la-key" />
                            </div>
                            {errors.password && (
                              <div className="invalid-feedback">
                                {errors.password}
                              </div>
                            )}
                          </fieldset>
                          <div className="form-group row">
                            <div className="col-md-6 col-12 text-center text-sm-left">
                              <fieldset>
                                <input
                                  type="checkbox"
                                  id="remember-me"
                                  className="chk-remember"
                                />
                                <label htmlFor="remember-me">
                                  {" "}
                                  Remember Me
                                </label>
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-12 float-sm-left text-center text-sm-right">
                              <a
                                href="recover-password.html"
                                className="card-link"
                              >
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-outline-info btn-block"
                          >
                            <i className="icon-lock-open" /> Login
                          </button>
                        </form>
                      </div>
                      <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                        <span>New to Social Developers ?</span>
                      </p>
                      <div className="card-body">
                        <a
                          href="/register"
                          className="btn btn-outline-danger btn-block"
                        >
                          <i className="icon-user" />
                          Register
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
