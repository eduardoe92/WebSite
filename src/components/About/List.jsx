import React from "react";
import { Row, Col } from "react-bootstrap";
import TecSkills from "./TecSkills";
import SoftSkills from "./SoftSkills";
import Hobbies from "./Hobbies";

function List() {
  return (
    <Row className="p-4">
      <Col lg={4} className="mb-2 columnStyle">
        <TecSkills />
      </Col>
      <Col lg={4} className="mb-2 columnStyle">
        <SoftSkills />
      </Col>
      <Col lg={4} className="mb-2 columnStyle">
        <Hobbies />
      </Col>
    </Row>
  );
}

export default List;
