import React, { Fragment } from "react";
import { Grid, Header, Image, Segment, Button, Form } from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import homePagePic from "../../images/collab.png";
import contactImage from "../../images/contact.png";
import "../../App.css";
import Register from "../auth/Register";
import Login from "../auth/Login";

const HomePage = ({ isAuthenticated }) => {
  // if user is logged in, redirect it to the account page.
  if (isAuthenticated) {
    return <Redirect to="/account" />;
  }

  return (
    <Fragment>
      <Segment className="hero-section bg14">
        <Grid>
          <Grid.Column textAlign="center" className="intro">
            <Header as="h1" inverted>
              Collaborative Search Interface
            </Header>
            <Button.Group size="large">
              <Login />
              <Button.Or />
              <Register />
            </Button.Group>
          </Grid.Column>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical id="about">
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Companies and Companions
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give you or your company superpowers to do things that
                you never thought possible. Let us delight your customers and
                empower your needs... through collaborative search interface.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image src={homePagePic} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Register />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "8em 0em" }} vertical id="contact">
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={contactImage} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Contact Us
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>

              <Form>
                <Form.Group widths="equal">
                  <Form.Input
                    fluid
                    label="First name"
                    placeholder="First name"
                  />
                  <Form.Input fluid label="Last name" placeholder="Last name" />
                </Form.Group>
                <Form.TextArea
                  label="Message"
                  placeholder="Tell us more about you..."
                />
                <Form.Button color="blue" floated="right">
                  Submit
                </Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 0em" }} vertical id="footer">
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={12}>
              <p style={{ color: "white" }}>
                Created by Boris Wrabel. Summer 2019
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>
  );
};

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.accountReducer.isAuthenticated
});

export default connect(mapStateToProps)(HomePage);
