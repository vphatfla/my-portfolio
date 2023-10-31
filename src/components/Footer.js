import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
  <div className="footer-body">
    <ul className="footer-icons">
      <li className="footer-icons-item">
        <h3 className="footer-copyright">Copyright © {year} Van Phat Phan               </h3>
      </li>
      <li className="social-icons">
        <a
          href="https://github.com/vphatfla"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/vphatfla"
          style={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  </div>
</Container>
  );
}

export default Footer;
