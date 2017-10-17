import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Profile.css";

const Profile = ({ user }) => {
  console.log(user);
  return (
    <Grid className="Profile">
      {
        user && 
        <Row>
          <Col sm={3} className="Profile__sidebar">
            <div>
              <div>
                <img
                  className="img-circle img-responsive center-block"
                  src={ user.photoURL }
                  alt="aa"
                />
                <h2>{user.displayName}</h2>
                <p><a href={`mailto:{ user.email}`}>{user.email}</a></p>    
              </div>
            </div>
          </Col>
        </Row>
      }
    </Grid>
  );
};

export default Profile;
