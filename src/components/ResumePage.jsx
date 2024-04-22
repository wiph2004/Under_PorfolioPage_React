import { useState, useEffect } from "react";
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from "react-router-dom";

export default function ResumePage() {
  return (
    <>
      <h1>Resume Page</h1>
      <ul>
        <p>
          <a href="/BanksResume.pdf">View Resume</a>
        </p>
        <li className="fw-bold">Front End</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <ul>
        <li className="fw-bold">Back End</li>
        <li>Node.js</li>
        <li>API's</li>
        <li>React</li>
        <li>MYSQL</li>
        <li>MONGO</li>
      </ul>
    </>
  );
}
