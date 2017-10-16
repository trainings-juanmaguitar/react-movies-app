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
          <Col sm={2}>
            <div>
              <div>
                <img
                  className="img-circle img-responsive center-block"
                  src={ user.photoURL }
                  alt="aa"
                />
                <ul className="list-unstyled">
                  <li className="name">
                    {user.displayName}
                  </li>
                  <li>
                    <a href="#">{user.email}</a>
                  </li>
                </ul>
              </div>
              <nav >
                <ul className="list-unstyled">
                  <li>
                    <a href="#">
                      <span className="fa fa-user" /> Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-cog" /> Settings
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <span className="fa fa-credit-card" /> Billing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-envelope" /> Messages
                    </a>
                  </li>
                  <li>
                    <a href="user-drive.html">
                      <span className="fa fa-th" /> Drive
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="fa fa-clock-o" /> Reminders
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      }
    </Grid>
  );
};

export default Profile;
