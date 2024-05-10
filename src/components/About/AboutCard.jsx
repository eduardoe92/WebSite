import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0"
          style={{ textAlign: "justify" }}
        >
          <p>
            He participado en diversos programas de formación que han
            enriquecido mi conjunto de habilidades como programador. Estos
            programas incluyen: Programador
            <strong className="purple"> Full Stack</strong> en 'Egg Cooperation
            y Argentina Programa'. Desarrollador
            <strong className="purple"> Front-End</strong> en 'Eidos Global y
            Accenture' y actualmente en el programa
            <strong className="purple"> Full Stack Developer Core</strong> en
            'Digital Nao x Tecmilenio'.
          </p>
          <p>
            Anteriormente formé parte de la
            <strong className="purple"> Universidad de los Andes</strong>, en la
            ciudad de Mérida — Venezuela, en donde estudié la carrera de
            <strong className="purple"> Ingeniería Eléctrica.</strong>
          </p>
          <p>
            Además de mi formación formal, he buscado de manera autodidacta
            expandir mis conocimientos a través de plataformas educativas como
            <strong className="purple">
              {" "}
              Udemy, FundAula y Educacion IT.{" "}
            </strong>
          </p>
          <p>
            Adicionalmente, he trabajado en
            <strong className="purple"> Proyectos Personales,</strong> que me
            han permitido aplicar y fortalecer mis habilidades en programación
            web.
            <p />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
