import React from "react";
import "./style.css";

//component import
import { Col, Row, Container } from "../../components/Grid";
import { Jumbotron } from "../../components/Jumbotron";
import { Nav } from "../../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Jumbotron />
      <Container fluid>
        <h1>Hello World</h1>
      </Container>
    </>
  );
};

export default Home;
