import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import textutil from "../../Assets/Projects/textutil.png";
import movie from "../../Assets/Projects/movie.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Listing"
              description="This React app displays popular movies, allows browsing, and provides detailed movie information. It uses React and react-router-dom for smooth navigation between the home, explore, and movie detail pages."              
              ghLink="https://github.com/varshadhanotiya/movies-app"
              demoLink="https://movies-app-ochre-mu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={weather}
              isBlog={false}
              title="Weather Forecasting"
              description="This React web app allows users to search cities and view weather forecasts for the next 5-6 days with 3-hour intervals. Built with React.js and Material-UI, it fetches weather data using the OpenWeatherMap API."              
              ghLink="https://github.com/varshadhanotiya/weather"
              demoLink="https://weather-eight-lac.vercel.app/"            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={textutil}
              isBlog={false}
              title="Text Utils"
              description="Text utils is a utility for text manipulation, transformation like changing case from lowercase to uppercase, uppercase to lowercase, trimming the extra space around text, counting the characters, words, etc in a given sentence, etc."
              ghLink="https://github.com/varshadhanotiya/Text-utils"
              demoLink="https://text-utils-one-psi.vercel.app/"            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
