import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import { withRouter } from "react-router-dom";
import {
  getSessionById,
  openChat,
  closeChat
} from "../../actions/sessionActions";
import SearchBox from "./SearchBox";
import {
  Segment,
  Grid,
  Divider,
  Header,
  Button,
  Input
} from "semantic-ui-react";
import HighlightedQueries from "./HighlightedQueries";
import InviteUserModal from "./InviteUserModal";
import RemoveUserModal from "./RemoveUserModal";
import {
  highlightSearchUpdate,
  removeHighlightedSearchUpdate,
  addLikeUpdate,
  removeLikeUpdate,
  addCommentUpdate,
  removeCommentUpdate,
  removeUserUpdate
} from "../../actions/sessionActions";
import ChatMessage from "./ChatMessage";
import { getCurrentUser } from "../../actions/accountActions";

const SessionView = ({
  getSessionById,
  account: { userDetails, isAuthenticated, sessions },
  session: { session, loading, chatWindow },
  openChat,
  closeChat,
  highlightSearchUpdate,
  addLikeUpdate,
  match,
  removeHighlightedSearchUpdate,
  removeLikeUpdate,
  removeCommentUpdate,
  addCommentUpdate,
  socketState: { socket }
}) => {
  if (socket === undefined) {
    window.location.href = "/";
  }

  useEffect(() => {
    if (socket === null) {
      window.location.href = "/account";
    }
    socket.on("removedFromSession", async function(data) {
      window.location.href = "/account";
    });

    getSessionById(sessions, match.params.id);

    socket.on("highlightSearchUpdate", function(data) {
      highlightSearchUpdate(data);
    });

    socket.on("removedHighlightSearchUpdate", function(data) {
      removeHighlightedSearchUpdate(data);
    });

    socket.on("HighlightSearchLikeUpdate", function(data) {
      addLikeUpdate(data);
    });

    socket.on("HighlightSearchUnlikeUpdate", function(data) {
      removeLikeUpdate(data);
    });

    socket.on("HighlightSearchAddCommentUpdate", function(data) {
      addCommentUpdate(data);
    });

    socket.on("HighlightSearchRemoveCommentUpdate", function(data) {
      removeCommentUpdate(data);
    });

    socket.on("new_chat_message", data => {
      setChat(prevChat => {
        return [
          ...prevChat,
          {
            user_name: data.user_name,
            msg: data.msg
          }
        ];
      });
    });
  }, [
    getSessionById,
    addCommentUpdate,
    addLikeUpdate,
    highlightSearchUpdate,
    removeCommentUpdate,
    removeLikeUpdate,
    socket,
    removeHighlightedSearchUpdate,
    match.params.id
  ]);

  const [chat, setChat] = useState([]);

  const onIconClick = e => {
    socket.emit("chat", {
      msg: e.currentTarget.parentNode.childNodes[0].value,
      session: session._id,
      user_name: userDetails.firstName + " " + userDetails.surname
    });
    e.currentTarget.parentNode.childNodes[0].value = "";
  };

  let defaultColumns = {
    numOfCols: 2,
    widthOfSearchBox: 8,
    widthOfHighSearches: 8
  };

  let chatOn = {
    numOfCols: 3,
    widthOfSearchBox: 5,
    widthOfHighSearches: 8
  };

  const [gridView, setGridView] = useState(defaultColumns);

  const { numOfCols, widthOfSearchBox, widthOfHighSearches } = gridView;

  const toggleChat = () => {
    if (chatWindow === true) {
      setGridView(defaultColumns);
      return closeChat();
    }
    setGridView(chatOn);
    return openChat();
  };

  return (
    <Fragment>
      {session === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Grid padded>
            <Grid.Column width={13}>
              <Divider section />
              <strong>{session.name}</strong>
            </Grid.Column>
            <Grid.Column width={3}>
              <Divider section />
              {isAuthenticated &&
                loading === false &&
                userDetails._id === session.author && (
                  <span>
                    <InviteUserModal />
                    <RemoveUserModal />
                  </span>
                )}
              <Button
                circular
                icon="chat"
                float="right"
                onClick={() => toggleChat()}
              />
            </Grid.Column>
          </Grid>

          <Grid columns={numOfCols} padded style={{ height: "80vh" }}>
            <Grid.Column width={widthOfSearchBox}>
              <Segment
                style={{
                  overflow: "auto",
                  height: "80vh",
                  maxHeight: "80vh"
                }}
              >
                <SearchBox />
              </Segment>
            </Grid.Column>
            <Grid.Column width={widthOfHighSearches}>
              <Segment
                style={{
                  overflow: "auto",
                  height: "80vh",
                  maxHeight: "80vh"
                }}
              >
                <HighlightedQueries
                  highlightedQueries={session.highlightedQueries}
                  session={session}
                />
              </Segment>
            </Grid.Column>
            {chatWindow && (
              <Grid.Column width={3}>
                <Segment
                  style={{
                    overflow: "auto",
                    height: "80vh",
                    maxHeight: "80vh"
                  }}
                >
                  <Input
                    action={{ icon: "send", onClick: onIconClick }}
                    placeholder="Message"
                  />
                  {chat.map((item, index) => (
                    <ChatMessage
                      user_name={item.user_name}
                      key={index}
                      msg={item.msg}
                    />
                  ))}
                </Segment>
              </Grid.Column>
            )}
            {/* <Grid.Column width={16}>
              <Segment textAlign="center">
                {isAuthenticated &&
                  loading === false &&
                  userDetails._id === session.author && (
                    <span>
                      <Header>{session.name}</Header>
                      <InviteUserModal />
                      <RemoveUserModal />
                    </span>
                  )}
                <Button
                  circular
                  icon="chat"
                  float="right"
                  onClick={() => toggleChat()}
                />
              </Segment>
            </Grid.Column> */}
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
};

SessionView.propTypes = {
  getSessionById: PropTypes.func.isRequired,
  openChat: PropTypes.func.isRequired,
  closeChat: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  session: state.sessionReducer,
  account: state.accountReducer,
  socketState: state.socketReducer
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      getCurrentUser,
      getSessionById,
      openChat,
      closeChat,
      highlightSearchUpdate,
      removeHighlightedSearchUpdate,
      addLikeUpdate,
      removeLikeUpdate,
      removeUserUpdate,
      addCommentUpdate,
      removeCommentUpdate
    }
  )(SessionView)
);
