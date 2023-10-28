import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who is <span className="blue"> Van Phat Phan</span>?
            </h1>
            <p className="home-about-body">
              Van is currently a junior majoring in Computer Science with a minor in Robotics at the University of Central Florida, he is set to graduate in May 2025.
              <br />
              <br />
              Van Phat Phan's coding journey began at age 13, and it has been a driving force throughout his life. His move to the United States at 17 only fueled his passion for web technology.
              <br/> <br/>
              Van Phat is enthusiastic about cloud computing, backend development, big data, and privacy applications. He's proficient in 
              <i>
                <b className="black"> Java, JavaScript, Python, Golang, and C. </b>
              </i>
              <br />
              <br />
              Van Phat's interests span a wide spectrum of tech domains, including <b className="black">cloud computing, backend development, big data, and privacy applications.</b>
              <br />
              <br />
              He is currently focused on building microservices using <b className="black">Golang and Java</b>, actively integrating them with AWS cloud services, reflecting his dedication to tech innovation.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="black">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vphatfla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vphatfla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
