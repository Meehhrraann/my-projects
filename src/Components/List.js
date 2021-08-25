import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import "./List.css";

const List = ({ people }) => {
  let oneOrMoreperson =
    people.length <= 1 ? (
      <h3>{people.length} Birthday Today</h3>
    ) : (
      <h3>{people.length} Birthdays Today</h3>
    );

  return (
    <div className="list-container">
      <br />
      {oneOrMoreperson}
      <br />
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div key={id}>
            <Row className="row-style align-items-center">
              <Col>
                <Image
                  src={image}
                  alt={name}
                  roundedCircle
                  className="image-size"
                />
              </Col>
              <Col>
                <h5>{name}</h5>
              </Col>
              <Col>
                <h6>{age}</h6>
              </Col>
            </Row>
          </div>
        );
      })}
    </div>
  );
};

export default List;
