import React from 'react';
import { Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

function DownloadButton({ href, language }) {
    return (
        <Button
            variant="primary"
            href={href}
            target="_blank"
            style={{ maxWidth: "250px" }}
        >
            <AiOutlineDownload />
            &nbsp;{language === 'es' ? "Descargar CV" : "Download CV"}
        </Button>
    );
}

export default DownloadButton;
