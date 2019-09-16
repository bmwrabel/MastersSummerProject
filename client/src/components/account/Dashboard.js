import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Message, Grid, Card } from "semantic-ui-react";
import SessionList from "./SessionList";
import CreateSessionModal from "./CreateSessionModal";
import QueryHistoryModal from "./QueryHistoryModal";
import io from "socket.io-client";
import { setInitialSocket } from "../../actions/socketActions";
import { getSessions, updateDeleteSession } from "../../actions/accountActions";
import Spinner from "../layout/Spinner";

let socket;

const AccountBoard = ({
  getSessions,
  updateDeleteSession,
  setInitialSocket,
  account: { sessions, loading, userDetails, queries },
  socketState
}) => {
  useEffect(() => {
    if (!socketState.socket_connected) {
      socket = io.connect("http://localhost:5000", {
        query: "user_id=" + localStorage.getItem("user_id")
      });
      setInitialSocket(socket);
    } else {
      socket = socketState.socket;
    }

    socket.on("newUserAddedToSession", function(payload) {
      getSessions();
    });

    socket.on("sessionDeleted", function(payload) {
      updateDeleteSession(payload.deletedSession._id);
    });
  }, [
    getSessions,
    setInitialSocket,
    socketState.socket,
    socketState.socket_connected,
    updateDeleteSession,
    loading
  ]);

  const [message, setMessage] = useState({ visible: true });

  return loading ? (
    <Spinner />
  ) : (
    <Container className="main container">
      {message.visible && (
        <Message onDismiss={() => setMessage({ visible: false })} color="blue">
          <Message.Header>
            Welcome back {userDetails && userDetails.firstName}.
          </Message.Header>
        </Message>
      )}
      <Grid columns={3} textAlign="center">
        <Grid.Row textAlign="center">
          <Grid.Column textAlign="center">
            <Card>
              <Card.Content>
                <Card.Header>Sessions: {sessions.length}</Card.Header>
                <Card.Description>Your active sessions count</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Header>Queries: {queries.length}</Card.Header>
                <Card.Description>Your search history</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Card.Description textAlign="center">
                  <CreateSessionModal />
                  <QueryHistoryModal
                    userQueries={queries}
                    userSessions={sessions}
                  />
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <SessionList userSessions={sessions} userDetails={userDetails} />
      {sessions.length === 0 && (
        <Message color="green">
          <Message.Header>No sessions.</Message.Header>
        </Message>
      )}
    </Container>
  );
};

AccountBoard.propTypes = {
  getSessions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  account: state.accountReducer,
  socketState: state.socketReducer
});

export default connect(
  mapStateToProps,
  {
    getSessions,
    updateDeleteSession,
    setInitialSocket
  }
)(AccountBoard);
