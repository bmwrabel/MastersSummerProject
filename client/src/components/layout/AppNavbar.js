import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/accountActions";
import { Dropdown, Item } from "semantic-ui-react";
import Login from "../auth/Login";

const AppNavbar = ({
  account: { isAuthenticated, loading, userDetails },
  logout
}) => {
  function scroll(parm) {
    let elmnt = document.getElementById(parm);
    elmnt.scrollIntoView();
  }

  const privateLinks = (
    <div className="right menu primary">
      <Dropdown
        item
        text={userDetails && userDetails.firstName + " " + userDetails.surname}
      >
        <Dropdown.Menu>
          <Link className="item" to="/account">
            <i className="home icon" />
            Dashboard
          </Link>
          <Link className="item" to="/edit-personal-details">
            <i className="edit icon" />
            Edit profile
          </Link>
          <Link className="item" to="/" onClick={logout}>
            <i className="sign-out icon" /> Sign out
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );

  const publicLinks = (
    <div className="right menu primary">
      <Link to="#about" className="item" onClick={() => scroll("about")}>
        <i className="globe icon" />
        About CSI
      </Link>
      <Link className="item" to="#contact" onClick={() => scroll("contact")}>
        <i className="edit outline icon" />
        Contact Us
      </Link>
      <Item>
        <Login />
      </Item>
    </div>
  );

  return (
    <Fragment>
      <div className="ui top fixed large menu main">
        <Link className="item" to="#root" onClick={() => scroll("root")}>
          LOGO
        </Link>
        {!loading && isAuthenticated ? (
          <Fragment>{privateLinks}</Fragment>
        ) : (
          <Fragment>{publicLinks}</Fragment>
        )}
      </div>
    </Fragment>
  );
};

AppNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.accountReducer
});

export default connect(
  mapStateToProps,
  { logout }
)(AppNavbar);
