import React, { Component } from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";

import rod from "../assets/rod.png";
import "../App.css";

class History extends Component {
  render() {
    return (
      <Container style={{ textAlign: "left" }}>
        <Row>
          <p>5 รายการ ( 11/07/2019 - 1/09/2020)</p>
        </Row>
        <Row sm="3">
          <Col>
            <img src={rod} className="img_my_car_rod" />
          </Col>
          <Col>
            <div>
              <p>
                <b>เปลี่ยนยาง</b>
              </p>
              <p>อู่ใจดีภูเก็ต</p>
              <p>ระยะทาง 50,000</p>
            </div>
          </Col>
          <Col>
            <p>1 ก.ย. 63</p>
            <p>THB 40,000</p>
          </Col>
        </Row>

        <Row sm="3">
          <Col>
            <img src={rod} className="img_my_car_rod" />
          </Col>
          <Col>
            <div>
              <p>
                <b>เปลี่ยนยาง</b>
              </p>
              <p>อู่ใจดีภูเก็ต</p>
              <p>ระยะทาง 50,000</p>
            </div>
          </Col>
          <Col>
            <p>1 ก.ย. 63</p>
            <p>THB 40,000</p>
          </Col>
        </Row>

        <Row sm="3">
          <Col>
            <img src={rod} className="img_my_car_rod" />
          </Col>
          <Col>
            <div>
              <p>
                <b>เปลี่ยนยาง</b>
              </p>
              <p>อู่ใจดีภูเก็ต</p>
              <p>ระยะทาง 50,000</p>
            </div>
          </Col>
          <Col>
            <p>1 ก.ย. 63</p>
            <p>THB 40,000</p>
          </Col>
        </Row>

        <Row sm="3">
          <Col>
            <img src={rod} className="img_my_car_rod" />
          </Col>
          <Col>
            <div>
              <p>
                <b>เปลี่ยนยาง</b>
              </p>
              <p>อู่ใจดีภูเก็ต</p>
              <p>ระยะทาง 50,000</p>
            </div>
          </Col>
          <Col>
            <p>1 ก.ย. 63</p>
            <p>THB 40,000</p>
          </Col>
        </Row>

        <Row sm="3">
          <Col>
            <img src={rod} className="img_my_car_rod" />
          </Col>
          <Col>
            <div>
              <p>
                <b>เปลี่ยนยาง</b>
              </p>
              <p>อู่ใจดีภูเก็ต</p>
              <p>ระยะทาง 50,000</p>
            </div>
          </Col>
          <Col>
            <p>1 ก.ย. 63</p>
            <p>THB 40,000</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default History;
