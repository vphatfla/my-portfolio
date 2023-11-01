import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import faceRecognition from "../../Assets/Projects/face-recognition.png";
import tideGuards from "../../Assets/Projects/tidesGuard.png";
import ttt from "../../Assets/Projects/ttt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceRecognition}
              isBlog={false}
              title="UCF Here Face Rekoginition"
              description = "UCF Here 2.0 is an innovative mobile application designed to simplify attendance tracking for teachers. By leveraging AWS Face Recognition technology, it ensures secure and accurate student check-ins through QR code scanning, providing a seamless and efficient way to manage classroom attendance."
              ghLink="https://github.com/vphatfla/ucf-here-demo-terraform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tideGuards}
              isBlog={false}
              title="Tides Guard"
              description= "Tides Guard is a comprehensive project consisting of a web application for coastal community resilience and an Android mobile app built with React Native. The web app harnesses real-time data and predictive analytics powered by Express.js, empowering stakeholders to make informed decisions in the face of rising sea levels and tidal flooding, while the React Native mobile app ensures accessibility and ease of use on Android devices."
              ghLink="https://github.com/vphatfla/hackabull23"
              demoLink="https://devpost.com/software/tides-guard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttt}
              isBlog={false}
              title="AI Tic Tac Toe"
              description= "A Tic Tac Toe game implementing the Minimax AI algorithm ensures a 100% tie or win rate for the AI by making optimal moves in every situation. Minimax is a decision-making algorithm that minimizes the opponent's potential score while maximizing the AI's potential score, guaranteeing that the AI never loses and, in the absence of mistakes, will either win or tie every game of Tic Tac Toe."
              ghLink="https://github.com/vphatfla/tic-tac-toe"
              demoLink="https://vphatfla.github.io/tic-tac-toe/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
