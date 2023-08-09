import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Jade Ye </span>
            living in suburb of <span className="purple">Chicago, IL</span>
            <br /> I graduated from <span className="purple">University of Illinois at Urbana Champaign</span>.
            <br />
            My major is <span className="purple">Civil and Environmental Engineering.</span> 
            <br/>
            <br/>
            I used to build landfill, light pole, roadway, pipings. 
            <br />
            I've discovered that constructing digital infrastructure shares remarkable similarities with building physical infrastructures, but with an added element of speed and enjoyment. 
            
            <br/>
            <br/>
            My affinity for embracing novel technologies has led me to choose the path of studying software engineering during my maternity leave. I'm eager to delve deeper into this realm and explore its endless possibilities.
            <br />
            <br />
            My Past Jobs:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Project Engineer - Lisle, IL
            </li>
            <li className="about-activity">
              <ImPointRight /> Civil Engineer - Naperville, IL
            </li>
            <li className="about-activity">
              <ImPointRight /> Staff Engineer - Peoria, IL
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
