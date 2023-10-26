import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Programador Full Stack",
          "Desarrollador Web",
          "Entusiasta",
          "Innovador",
          "Creativo",
          "Apasionado por la Tecnología",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
