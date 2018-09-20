import React, { Component } from "react";
import PropTypes from "prop-types";

import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="register">
        <div>
          <div className="app-content content">
            <div className="content-wrapper">
              <div className="content-header row" />
              <div className="content-body">
                <section className="flexbox-container">
                  <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="col-md-4 col-10 box-shadow-2 p-0">
                      <div className="card border-grey border-lighten-3 px-1 py-1 m-0">
                        <div className="card-header border-0 pb-0">
                          <div className="card-title text-center">
                            <img
                              src="https://erfancdn.blob.core.windows.net/admin-template/images/sd_logo.png"
                              height="80px"
                              alt="Social Developers"
                            />
                          </div>
                        </div>
                        <div className="card-content">
                          <div className="text-center" />
                          <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                            <span>Register</span>
                          </p>
                          <div className="card-body">
                            <form
                              className="form-horizontal"
                              onSubmit={this.onSubmit}
                              noValidate
                            >
                              <fieldset className="form-group position-relative has-icon-left">
                                <input
                                  type="text"
                                  className={classnames("form-control", {
                                    "is-invalid": errors.name
                                  })}
                                  id="name"
                                  name="name"
                                  placeholder="Name"
                                  value={this.state.name}
                                  onChange={this.onChange}
                                />
                                <div className="form-control-position">
                                  <i className="icon-user" />
                                </div>
                                {errors.name && (
                                  <div className="invalid-feedback">
                                    {errors.name}
                                  </div>
                                )}
                              </fieldset>
                              <fieldset className="form-group position-relative has-icon-left">
                                <input
                                  type="email"
                                  className={classnames("form-control", {
                                    "is-invalid": errors.email
                                  })}
                                  id="email"
                                  name="email"
                                  placeholder="Your Email Address"
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
                              <fieldset className="form-group position-relative has-icon-left">
                                <input
                                  type="password"
                                  className={classnames("form-control", {
                                    "is-invalid": errors.password2
                                  })}
                                  id="password2"
                                  name="password2"
                                  placeholder="Confirm Password"
                                  value={this.state.password2}
                                  onChange={this.onChange}
                                />
                                <div className="form-control-position">
                                  <i className="la la-key" />
                                </div>
                                {errors.password2 && (
                                  <div className="invalid-feedback">
                                    {errors.password2}
                                  </div>
                                )}
                              </fieldset>

                              <button
                                type="submit"
                                className="btn btn-outline-info btn-block"
                              >
                                <i className="icon-user" /> Register
                              </button>
                            </form>
                          </div>

                          <div className="text-center" />
                          <p className="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1">
                            <span>Or Login</span>
                          </p>
                          <div className="card-body">
                            <a
                              href="/login"
                              className="btn btn-outline-danger btn-block"
                            >
                              <i className="icon-lock-open" />
                              Login
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
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
