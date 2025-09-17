import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// images
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

          {/* BMI CALCULATOR */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BMI CALCULATOR"
              description="🧠 BMI Buddy – Smart Body Mass Index Calculator
BMI Buddy is a sleek, user-friendly web application that calculates your Body Mass Index (BMI) based on your height and weight inputs. It also categorizes the result and shows tips accordingly."
              ghLink="https://github.com/harichopper/bmi-buddy"
              demoLink="https://bmi-buddy-calculate.netlify.app/"
            />
          </Col>

          {/* Chill-Chat */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chill-Chat"
              description="💬 ChillChat – Real-Time Web Messenger
ChillChat is a modern real-time chat app with cloud media sharing and smooth UI for messaging."
              ghLink="https://github.com/harichopper/chill-chat"
              demoLink="https://chill-chat-9do2.onrender.com/login"
            />
          </Col>

          {/* Animated Music Player */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Animated Music Player"
              description="🎵 Animated Music Player – Interactive Audio Experience
A visually engaging audio player with smooth animations and core playback features."
              ghLink="https://github.com/harichopper/Animated-Music-player"
              demoLink="https://amimated-musicplayer.netlify.app/"
            />
          </Col>

          {/* AI Search Box */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI Search Box"
              description="🔍 AI Search Box – Intelligent Query Assistant
A realtime AI-enhanced search interface with predictive suggestions and contextual handling."
              ghLink="https://github.com/harichopper/Ai-Search-Box"
              demoLink="https://ai-searchbox.netlify.app/"
            />
          </Col>

          {/* Rubix Cube */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Rubix Cube"
              description="🧩 Rubik’s Cube – 3D Interactive Puzzle Simulator
An interactive 3D Rubik’s Cube simulator with rotation and solving controls."
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
