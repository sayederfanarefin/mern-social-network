import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <nav className="header-navbar navbar-expand-md navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-light navbar-hide-on-scroll navbar-border navbar-shadow navbar-brand-center">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item mobile-menu d-md-none mr-auto">
                <a
                  className="nav-link nav-menu-main menu-toggle hidden-xs"
                  href=""
                >
                  <i className="ft-menu font-large-1" />
                </a>
              </li>
              <li className="nav-item">
                {
                  <Link className="navbar-brand" to="/">
                    <img
                      className="brand-logo"
                      alt="modern admin logo"
                      src="../../../app-assets/images/logo/logo.png"
                    />
                    <h3 className="brand-text">Social Developers</h3>
                  </Link>
                }
              </li>
              <li className="nav-item d-md-none">
                <a
                  className="nav-link open-navbar-container"
                  data-toggle="collapse"
                  data-target="#navbar-mobile"
                >
                  <i className="la la-ellipsis-v" />
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-container content">
            <div className="collapse navbar-collapse" id="navbar-mobile">
              <ul className="nav navbar-nav mr-auto float-left">
                <li className="nav-item d-none d-md-block">
                  <a
                    className="nav-link nav-menu-main menu-toggle hidden-xs"
                    href=""
                  >
                    <i className="ft-menu" />
                  </a>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a className="nav-link nav-link-expand" href="">
                    <i className="ficon ft-maximize" />
                  </a>
                </li>

                <li className="nav-item nav-search">
                  <a className="nav-link nav-link-search" href="">
                    <i className="ficon ft-search" />
                  </a>
                  <div className="search-input">
                    <input
                      className="input"
                      type="text"
                      placeholder="Explore Modern..."
                    />
                  </div>
                </li>
              </ul>
              <ul className="nav navbar-nav float-right">
                <li className="dropdown dropdown-user nav-item">
                  <a
                    className="dropdown-toggle nav-link dropdown-user-link"
                    href=""
                    data-toggle="dropdown"
                  >
                    <span className="mr-1">
                      Hello,
                      <span className="user-name text-bold-700">John Doe</span>
                    </span>
                    <span className="avatar avatar-online">
                      <img
                        src="../../../app-assets/images/portrait/small/avatar-s-19.png"
                        alt="avatar"
                      />
                      <i />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    {
                      <Link className="dropdown-item" to="/editProfile">
                        <i className="ft-user" /> Edit Profile
                      </Link>
                    }

                    {
                      <Link className="dropdown-item" to="/chats">
                        <i className="ft-message-square" /> Chats
                      </Link>
                    }
                    {
                      <Link className="dropdown-item" to="/logOut">
                        <i className="ft-power" /> Logout
                      </Link>
                    }
                  </div>
                </li>
                <li className="dropdown dropdown-language nav-item">
                  <a
                    className="dropdown-toggle nav-link"
                    id="dropdown-flag"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flag-icon flag-icon-gb" />
                    <span className="selected-language" />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdown-flag"
                  >
                    <a className="dropdown-item" href="">
                      <i className="flag-icon flag-icon-gb" /> English
                    </a>

                    <a className="dropdown-item" href="">
                      <i className="flag-icon flag-icon-bd" /> Bangladeshi
                    </a>
                    <a className="dropdown-item" href="">
                      <i className="flag-icon flag-icon-de" /> German
                    </a>
                  </div>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href=""
                    data-toggle="dropdown"
                  >
                    <i className="ficon ft-bell" />
                    <span className="badge badge-pill badge-default badge-danger badge-default badge-up badge-glow">
                      5
                    </span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Notifications</span>
                      </h6>
                      <span className="notification-tag badge badge-default badge-danger float-right m-0">
                        5 New
                      </span>
                    </li>
                    <li className="scrollable-container media-list w-100">
                      <a href="">
                        <div className="media">
                          <div className="media-left align-self-center">
                            <i className="ft-plus-square icon-bg-circle bg-cyan" />
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">
                              You have new order!
                            </h6>
                            <p className="notification-text font-small-3 text-muted">
                              Lorem ipsum dolor sit amet, consectetuer elit.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                30 minutes ago
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item text-muted text-center"
                        href=""
                      >
                        Read all notifications
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown dropdown-notification nav-item">
                  <a
                    className="nav-link nav-link-label"
                    href=""
                    data-toggle="dropdown"
                  >
                    <i className="ficon ft-mail"> </i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-media dropdown-menu-right">
                    <li className="dropdown-menu-header">
                      <h6 className="dropdown-header m-0">
                        <span className="grey darken-2">Messages</span>
                      </h6>
                      <span className="notification-tag badge badge-default badge-warning float-right m-0">
                        4 New
                      </span>
                    </li>
                    <li className="scrollable-container media-list w-100">
                      <a href="">
                        <div className="media">
                          <div className="media-left">
                            <span className="avatar avatar-sm avatar-online rounded-circle">
                              <img
                                src="../../../app-assets/images/portrait/small/avatar-s-19.png"
                                alt="avatar"
                              />
                              ><i />
                            </span>
                          </div>
                          <div className="media-body">
                            <h6 className="media-heading">Margaret Govan</h6>
                            <p className="notification-text font-small-3 text-muted">
                              I like your portfolio, let's start.
                            </p>
                            <small>
                              <time
                                className="media-meta text-muted"
                                // datetime="2015-06-11T18:29:20+08:00"
                              >
                                Today
                              </time>
                            </small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-menu-footer">
                      <a
                        className="dropdown-item text-muted text-center"
                        href=""
                      >
                        Read all messages
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
