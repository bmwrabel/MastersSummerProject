import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../../actions/accountActions";
import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Form,
  FormGroup
} from "reactstrap";

const Register = ({ registerUser, isAuthenticated }) => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { firstName, surname, email, password, confirmPassword } = registerData;
  const onChange = e =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
    } else {
      registerUser({ firstName, surname, email, password });
    }
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
      <Button className="primary" onClick={() => onClick()}>
        Register
      </Button>
      <Modal isOpen={modal} toggle={() => onClick()}>
        <ModalHeader toggle={() => onClick()}>Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={e => onSubmit(e)}>
            <FormGroup>
              <Label>Enter your first name</Label>
              <Input
                type="text"
                name="firstName"
                placeholder="e.g. Patrick Smith"
                value={firstName}
                onChange={e => onChange(e)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter your surname</Label>
              <Input
                type="text"
                name="surname"
                placeholder="e.g. Patrick Smith"
                value={surname}
                onChange={e => onChange(e)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter your email address</Label>
              <Input
                type="text"
                name="email"
                placeholder="e.g. patrick.smith@gmail.com"
                value={email}
                onChange={e => onChange(e)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Enter password. It must be at least 6 characters</Label>
              <Input
                type="password"
                name="password"
                placeholder="..."
                value={password}
                onChange={e => onChange(e)}
                minLength="6"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Confirm password</Label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="..."
                value={confirmPassword}
                onChange={e => onChange(e)}
                minLength="6"
                required
              />
            </FormGroup>
            <Button type="submit" value="Register">
              Register
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.accountReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
