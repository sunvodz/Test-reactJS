import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";

import map from "../assets/map/map.png";
import navigater from "../assets/map/navigater.png";
import mess from "../assets/map/mess.png";
import tal from "../assets/map/tal.png";
import manager from "../assets/map/manager.png";
import mapp from "../assets/map/mapp.png";

import "../App.css";

class Map extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <img src={map} className="img_my_car_item" />
          </Col>
          <Col>
            <Row>
              <p>222 ถ.สุขุมวิท</p>
            </Row>
            <Row>
              <p>กรุงเทพ,ประเทศไทย</p>
            </Row>
          </Col>
          <Col>
            <img src={navigater} className="img_my_car_item" />
          </Col>
        </Row>
        <Row>
          <img src={mapp} className="img_my_car_item_map" />
        </Row>
        <Row>
          <Col>
            <img src={tal} className="img_my_car_item" />
          </Col>
          <Col>
            <img src={mess} className="img_my_car_item" />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              backgroundColor: "green",
              color: "#fff"
            }}
          >
            <p style={{ textAlign: "left", marginLeft: "10%" }}>
              <img src={manager} className="img_my_car_item" />
              คลิกเพื่อโทรหาเจ้าหน้าที่
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Map;
