import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/music.png";
import emotion from "../../Assets/Projects/cube.png";
import editor from "../../Assets/Projects/chill.png";
import chatify from "../../Assets/Projects/aura.png";
import suicide from "../../Assets/Projects/ai.png";
import bitsOfCode from "../../Assets/Projects/bmi.png";
import auction from "../../Assets/Projects/s-2.png";  // add your ARTA project image
import resume from "../../Assets/Projects/resume.png";   // add your Resume Builder project image

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
              imgPath={chatify}
              isBlog={false}
              title="AURA"
              description="📸 Aura – Social Media Platform for Meaningful Connections
Aura is a modern, full-stack social media web application that allows users to share moments, express themselves, and connect with others in real-time. Designed with performance and user experience in mind, Aura features a clean Instagram-like UI, real-time messaging, post interactions, and robust authentication."
              ghLink="https://github.com/harichopper/Aura-Social-Media-App"
              demoLink="https://aura-social-media-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BMI CALCULATOR"
              description="🧠 BMI Buddy – Smart Body Mass Index Calculator
BMI Buddy is a sleek, user-friendly web application that calculates your Body Mass Index (BMI) based on your height and weight inputs. It not only computes your BMI but also categorizes your health status (e.g., Underweight, Normal, Overweight, Obese) and provides helpful health tips accordingly."
              ghLink="https://github.com/harichopper/bmi-buddy"
              demoLink="https://bmi-buddy-calculate.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chill-Chat"
              description="💬 ChillChat – Real-Time Web Messenger
ChillChat is a modern, full-stack real-time chat application designed to provide seamless messaging between users. Inspired by platforms like WhatsApp and Messenger, ChillChat offers a clean UI, real-time communication, and cloud-based media sharing — making chatting smooth and interactive."
              ghLink="https://github.com/harichopper/chill-chat"
              demoLink="https://chill-chat-9do2.onrender.com/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Amimated Music Player"
              description="🎵 Animated Music Player – Interactive Audio Experience
The Animated Music Player is a sleek and visually engaging web-based audio player that combines elegant UI animations with core media functionality. It allows users to play, pause, and navigate through music tracks while enjoying smooth animations that enhance the overall experience."
              ghLink="https://github.com/harichopper/Animated-Music-player"
              demoLink="https://amimated-musicplayer.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai search box"
              description="🔍 AI Search Box – Intelligent Query Assistant
The AI Search Box is a smart, real-time search interface powered by AI that enhances user interaction with predictive suggestions, contextual understanding, and dynamic query handling. It mimics the experience of interacting with an intelligent assistant, helping users find content or perform actions with minimal input."
              ghLink="https://github.com/harichopper/Ai-Search-Box"
              demoLink="https://ai-searchbox.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Rubix Cube"
              description="🧩 Rubik’s Cube – 3D Interactive Puzzle Simulator
The Rubik’s Cube project is a dynamic, interactive 3D simulation of the classic puzzle game. It allows users to rotate, twist, and solve a virtual Rubik’s Cube using intuitive controls and smooth animations. Designed for both fun and education, the simulator demonstrates the logic and complexity behind one of the world’s most iconic brain teasers."
              ghLink="https://github.com/harichopper/Rubik-s-cube"
              demoLink="https://3d-rubix-cube.netlify.app/"
            />
          </Col>

          {/* New Project: ARTA - Avalanche Auction */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auction}
              isBlog={false}
              title="ARTA – Avalanche Realtime Auction"
              description="⚡ ARTA (Avalanche Realtime Auction) – Blockchain-powered realtime auction platform built on the Avalanche network. It ensures secure, transparent, and tamper-proof bidding using smart contracts, enabling decentralized auctions with real-time updates and trustless transactions."
              ghLink="https://github.com/harichopper/ARTA"   // replace with your repo
              demoLink="https://arta-frontend-three.vercel.app/"            // replace with your demo
            />
          </Col>

          {/* New Project: Resume Builder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Resume Builder"
              description="📄 Resume Builder – Professional resume creation web app where users can input details and generate customizable, elegant resumes instantly. It supports live preview, export to PDF, and multiple templates for a smooth job application experience."
              ghLink="https://github.com/harichopper/resume-manage" // replace with your repo
              demoLink="https://resume-manage-cwxs.vercel.app/"     // replace with your demo
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
