import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section className="home-section-out">
      <div className="home-section" >
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
            <div md={7} className="home-header">
              <h1 style={{ padding  : 30 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Van Phat Phan</strong>
              </h1>

              <div style={{ padding: 110}}>
                <Type />
              </div>
            
            </div>
        </Container>
      </Container>
      </div>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
