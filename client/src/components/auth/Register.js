import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";

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

    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => this.setState({ errors: err.response.data }));
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
                            <span>OR Using Email</span>
                          </p>
                          <div className="card-body">
                            <form
                              className="form-horizontal"
                              action="index.html"
                              noValidate
                            >
                              <fieldset className="form-group position-relative has-icon-left">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="user-name"
                                  placeholder="User Name"
                                />
                                <div className="form-control-position">
                                  <i className="icon-user" />
                                </div>
                              </fieldset>
                              <fieldset className="form-group position-relative has-icon-left">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="user-email"
                                  placeholder="Your Email Address"
                                  required
                                />
                                <div className="form-control-position">
                                  <i className="icon-envelope" />
                                </div>
                              </fieldset>
                              <fieldset className="form-group position-relative has-icon-left">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="user-password"
                                  placeholder="Enter Password"
                                  required
                                />
                                <div className="form-control-position">
                                  <i className="la la-key" />
                                </div>
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
                                <i className="icon-user" /> Register
                              </button>
                            </form>
                          </div>
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

export default Register;
