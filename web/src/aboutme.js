import React from 'react';
import styled from 'styled-components';
import linkedin from './assets/linkedin.svg';
import github from './assets/github.svg';
import resume from './assets/Winkler_Resume.pdf';
import sat from './assets/sat.png';
import drone from './assets/drone.png';
import swat from './assets/swat.jpg';
import dox from './assets/dox.jpg';
import amazon from './assets/amazon.jpg';
import BlurText from './BlurText';
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 4rem;
  max-width: 100%;
  margin: auto;
  padding: 4rem;
`;

export function Hero() {
  return (
    <Container id="home">
      {/* Top Content */}
      <div className="top-content">
        <div className="hero-text">
          <p>Hello, I'm</p>
          <h1>Alexander</h1>
        </div>
        {/* Button and Social Media Icons */}
        <div className="button-container">
          <button className="button">
            <a
              href={resume}
              download="Alexander Winkler Resume.pdf"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              CV/Resume
            </a>
          </button>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/alexwinklerr/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/ailothh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      {/* Project Boxes */}
      <div className="boxes-container">

        {/* Box 1: Amazon Tool */}
        <div className="box">
          <div className="box-title-container">
            <div className="box-title">Amazon Employee Search Tool</div>
            <div className="box-icons">
              <img src={amazon} alt="Amazon Icon" />
            </div>
          </div>
          <div className="line"></div>
          <div className="sub">Amazon RDS, Vercel, Next.js, FastAPI, Python, SQLite</div>
          <p className="blank-paragraph"></p>
          <div className="box-content">
          Engineered a tool to search through a breach dataset of 1.2 million Amazon employee records by first name, uncovering that hundreds of senior and executive employees’ personal data remained active two years after the breach. The application provided real-time access to emails, phone numbers, job titles, departments, office locations, manager names, and other detailed employee information—data that could be exploited in social engineering attacks. It featured a Next.js frontend paired with a FastAPI backend, initially leveraging SQLite for data storage before migrating to Amazon RDS (MySQL) to enhance performance and scalability. This architecture supported efficient querying of a large dataset with minimal maintenance overhead. Following the discovery, AWS Security intervened directly, requesting immediate removal of the database and halting further development. This project highlighted the persistent risks of breach data and the power of scalable architectures in security analysis.
          </div>
          <div className="rainbow rainbow_text_animated">
            <a
              href="https://employee-search-amazon-n4hjuem2g-ailothhs-projects.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Demo
            </a>
          </div>
        </div>

        {/* Box 2: Ethical Scraper */}
        <div className="box">
          <div className="box-title-container">
            <div className="box-title">Ethical Scraper</div>
            <div className="box-icons">
              <img src={dox} alt="Doxbin Icon" />
              <img src={swat} alt="SwatWiki Icon" />
            </div>
          </div>
          <div className="line"></div>
          <div className="sub">Python, SQLite</div>
          <p className="blank-paragraph"></p>
          <div className="box-content">
          Developed a Python-based scraping tool processing 1,000+ pages from forums like Doxbin and SwatWiki at a rate of 50 pages per minute, achieving 95% accuracy in extracting sensitive PII. The tool was capable of capturing over 10,000 records, including social security numbers, emails, phone numbers, addresses, and names from forum posts. A custom session handler was engineered to bypass Cloudflare’s BIC anti-bot protections by dynamically updating authentication cookies, ensuring uninterrupted scraping. Implemented a live tracker that enabled the program to run continuously in the background and capture data in real time, with immediate detection of any failures. Data parsing was handled by BeautifulSoup with efficient storage and querying managed via SQLite.
          </div>
          <div className="rainbow rainbow_text_animated">
            <a
              href="https://github.com/ailothh/Forum-Scraper"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Demo
            </a>
          </div>
        </div>

        {/* Box 3: UAV Specs Explorer */}
        <div className="box">
          <div className="box-title-container">
            <div className="box-title">UAV Specs Explorer</div>
            <div className="box-icons">
              <img src={drone} alt="Drone Icon" />
            </div>
          </div>
          <div className="line"></div>
          <div className="sub">React, JavaScript, GitHub Pages, CSS/HTML</div>
          <div className="box-content">
          Developed a React-based search tool that dynamically queries over 13,000 military drones, retrieving 15+ technical specifications per drone in real time using the Wikimedia API. The application delivers optimized search results with sub-500ms response times, providing users with fast, accurate access to detailed, structured datasets.           </div>
          <div className="rainbow rainbow_text_animated">
            <a
              href="https://ailothh.github.io/Military-Drone-Search/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Demo
            </a>
          </div>
        </div>

        {/* Box 4: Weather Satellite */}
        <div className="box">
          <div className="box-title-container">
            <div className="box-title">Weather Satellite</div>
            <div className="box-icons">
              <img src={sat} alt="Satellite Icon" />
            </div>
          </div>
          <div className="line"></div>
          <div className="sub">Python, React, JavaScript, GitHub Pages, HTML/CSS</div>
          <div className="box-content">
          The application was initially developed in Python/Tkinter and later converted to a scalable React.js frontend, integrated with the OpenWeather API to provide real-time weather data. It offers a mobile-compatible platform that delivers dynamic weather forecasts, ensuring users have access to up-to-date weather information with a focus on functionality and ease of use.          </div>
          <div className="rainbow rainbow_text_animated">
            <a
              href="https://ailothh.github.io/Mock-Weather-Satellite/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Demo
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
