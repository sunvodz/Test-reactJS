import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import mycar from "../assets/Ford.png";

import car from "../assets/funtion/car.png";
import tab from "../assets/funtion/tab.png";
import map from "../assets/funtion/map.png";
import color from "../assets/funtion/color.png";
import value from "../assets/funtion/value.png";

import "../App.css";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <img src={mycar} className="img_my_car" />
        </Row>
        <Row>
          <p className="title_my_car">Ford</p>
        </Row>
        <Row>
          <p className="next_my_car">เข้ารับบริการครั้งต่อไป 01/01/2565</p>
        </Row>

        <div style={{ borderWidth: 2, borderColor: "red" }}>
          <Row>
            <Col>
              <p>
                <img src={car} className="funtion_car" />
                Ford
              </p>
            </Col>

            <Col>
              <p>
                <img src={tab} className="funtion_car" />
                Ford
              </p>
            </Col>

            <Col>
              <p>
                <img src={map} className="funtion_car" />
                Ford
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                <img src={color} className="funtion_car" />
                Ford
              </p>
            </Col>
            <Col>
              <p>
                <img src={value} className="funtion_car" />
                Ford
              </p>
            </Col>
            <Col></Col>
          </Row>
        </div>
        <Row>
          <p className="next_my_car2">เข้ารับบริการครั้งต่อไป 07/07/2562</p>
        </Row>

        <FormGroup>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            placeholder="Note..."
          />
        </FormGroup>
      </Container>
    );
  }
}
export default Home;
