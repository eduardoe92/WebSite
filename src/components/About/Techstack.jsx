import { SiSpring, SiBootstrap, SiTailwindcss, SiAstro } from "react-icons/si";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMysql,
  DiHtml5,
  DiJava,
  DiCss3,
  DiWordpress
} from "react-icons/di";

function Techstack() {

  const stack = [
    { icon: <DiJava />, name: 'Java' },
    { icon: <DiReact />, name: 'ReactJS' },
    { icon: <SiAstro/>, name: 'Astro'},
    { icon: <DiMysql />, name: 'MySQL' },
    { icon: <DiJavascript1 />, name: 'JavaScript' },
    { icon: <DiHtml5 />, name: 'HTML' },
    { icon: <DiCss3 />, name: 'CSS' },
    { icon: <SiBootstrap />, name: 'Bootstrap' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiSpring />, name: 'Spring Framework' },
    { icon: <DiWordpress />, name: 'WordPress' },
    { icon: <DiNodejs />, name: 'Node.JS' }
  ];

  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map((stack, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {stack.icon}
          <div className="text-muted fs-6">
            {stack.name}
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;