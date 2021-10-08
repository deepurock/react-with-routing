import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function Header(props) {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Components/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Components/StateHooks">
                State Hooks
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => history.push("/Components/About")}
                  >
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
}
Header.defaultProps = {
  title: "Your title here",
  searchBar: true,
};
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired,
};
