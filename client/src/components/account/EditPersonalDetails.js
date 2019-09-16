import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input } from "reactstrap";
import {
  getCurrentUser,
  editPersonalDetails,
  deleteAccount
} from "../../actions/accountActions";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Button, Container } from "semantic-ui-react";

const EditPersonalDetails = ({
  account: { loading, userDetails },
  editPersonalDetails,
  deleteAccount,
  history
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: ""
  });

  useEffect(() => {
    setFormData({
      firstName: loading || !userDetails.firstName ? "" : userDetails.firstName,
      surname: loading || !userDetails.surname ? "" : userDetails.surname,
      email: loading || !userDetails.email ? "" : userDetails.email
    });
  }, [loading, userDetails]);

  const { firstName, surname, email } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    editPersonalDetails(formData, history);
  };
  return (
    <Container className="main container">
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Surname</Label>
          <Input
            type="text"
            name="surname"
            value={surname}
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <Button type="submit" value="EditPersonalDetails">
          Edit Personal Details
        </Button>
        <Button
          style={{ marginLeft: "0.3rem", marginTop: "0.3rem" }}
          onClick={() => deleteAccount()}
        >
          Delete Account
        </Button>
        <Link
          to="/account"
          style={{ marginLeft: "0.3rem" }}
          className="ui button"
        >
          Go Back To Dashboard
        </Link>
      </Form>
    </Container>
  );
};

EditPersonalDetails.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  editPersonalDetails: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.accountReducer
});

export default connect(
  mapStateToProps,
  { getCurrentUser, editPersonalDetails, deleteAccount }
)(withRouter(EditPersonalDetails));
