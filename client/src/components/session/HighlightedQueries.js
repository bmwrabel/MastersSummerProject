import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addLike,
  removeLike,
  removeHighlightedSearch
} from "../../actions/sessionActions";
import CommentSection from "./CommentSection";
import Moment from "react-moment";
import { Container, Button, Item, Header, Label } from "semantic-ui-react";

const HighlightedQueries = ({
  removeHighlightedSearch,
  highlightedQueries,
  addLike,
  removeLike,
  session,
  account
}) => {
  const highlightedSearches = (
    <Item.Group divided>
      {highlightedQueries.map(link => (
        <Item key={link._id}>
          <Item.Content>
              <Item.Meta>
              <p>{link.user} added query
                  <span style={{'float': 'right'}}>
                  <Moment format="DD/MM/YYYY">{link.date}</Moment>
                  </span>
              </p>
          </Item.Meta>
            <Item.Header>{link.title}</Item.Header>
            <Item.Meta>
              <a href={link.link} target="_blank">
                {link.link}
              </a>
            </Item.Meta>
            <Item.Description>{link.snippet}</Item.Description>
            <Item.Extra>
              <Button
                icon="eye"
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
              />
                <Button as='div' labelPosition='left'>
                    <Label as='a' basic>
                        {link.likes.length}
                    </Label>
                    <Button
                        icon="thumbs up outline"
                        onClick={() => addLike(session._id, link._id)}
                    />
                </Button>

              <Button
                icon="thumbs down outline"
                onClick={() => removeLike(session._id, link._id)}
              />
              {!account.loading &&
                link.user ===
                  account.userDetails.firstName +
                    " " +
                    account.userDetails.surname && (
                  <Button
                    icon="trash alternate outline"
                    onClick={() =>
                      removeHighlightedSearch(session._id, link._id)
                    }
                  />
                )}
              <CommentSection
                key={link._id}
                session={session}
                searchId={link._id}
                searchComments={link.comments}
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  );

  return (
    <Fragment>
      <Container>
        <Header dividing>Highlighted Searches</Header>
        {highlightedSearches}
      </Container>
    </Fragment>
  );
};

HighlightedQueries.propTypes = {
  removeHighlightedSearch: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired,
  highlightedQueries: PropTypes.array.isRequired,
  account: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  account: state.accountReducer
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, removeHighlightedSearch }
)(HighlightedQueries);
