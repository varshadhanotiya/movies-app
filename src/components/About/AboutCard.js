import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Varsha Dhanotiya</span> from{" "}
            <span className="purple">Kota, India.</span>
            <br />
            I completed MCA in 2023, and I'm currently working as an Associate Software Engineer at A3logics.
            <br />
            I have 1.6 years of experience in software development, with a focus on building web and mobile applications using technologies like{" "}
            <b className="purple">React.js, React Native, Java, and JavaScript</b>.
            <br />
            I am passionate about learning new technologies, and I love solving real-world problems with code.
            <br />
            <br />
            {/* Some other activities I enjoy include: */}
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Technical Articles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
          <footer className="blockquote-footer">Varsha Dhanotiya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
