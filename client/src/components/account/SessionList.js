import React, { Fragment } from "react";
import { Button, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteSession } from "../../actions/accountActions";
import { removeUser } from "../../actions/sessionActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const SessionList = ({
  userSessions,
  deleteSession,
  removeUser,
  userDetails
}) => {
  const sessionList = (
    <Card.Group>
      {userSessions.map(session => (
        <Card key={session._id}>
          <Card.Content>
            <Card.Header>{session.name}</Card.Header>
            <Card.Meta>
              {" "}
              Created: <Moment format="DD/MM/YYYY">{session.date}</Moment>
            </Card.Meta>
            <Card.Description>{session.description}</Card.Description>
          </Card.Content>
          <Card.Content extra style={{'text-align': 'right'}}>
              <Link
                className="ui button inverted green"
                to={`/sessions/${session._id}`}
              >
                Enter
              </Link>
              {session.author === userDetails._id ? (
                <Button
                  inverted
                  color="red"
                  onClick={() => deleteSession(session._id)}
                >
                  Delete
                </Button>
              ) : (
                <Button
                  inverted
                  color="red"
                  onClick={() => removeUser(userDetails.email, session._id)}
                >
                  Leave
                </Button>
              )}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
  return <Fragment>{sessionList}</Fragment>;
};

SessionList.propTypes = {
  deleteSession: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteSession, removeUser }
)(SessionList);
