import React, { Fragment, useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/accountActions";
import { Redirect } from "react-router-dom";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Form,
  FormGroup
} from "reactstrap";

const Login = ({ loginUser, isAuthenticated }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = loginData;
  const onChange = e =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    loginUser(email, password);
  };

  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  // redirect to private area
  if (isAuthenticated) {
    return <Redirect to="/account" />;
  }

  return (
    <Fragment>
      <Button color="green" onClick={() => onClick()}>
        Sign in
      </Button>
      <Modal isOpen={modal} toggle={() => onClick()}>
        <ModalHeader toggle={e => onClick(e)}>Sign in</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => onSubmit(e)}>
            <FormGroup>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={e => onChange(e)}
                required
              />
            </FormGroup>
            <Button
              color="green"
              fluid
              size="large"
              type="submit"
              value="Login"
              inverted
            >
              <Icon name="checkmark" />
              Sign in
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.accountReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
