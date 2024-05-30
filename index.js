import React from "react";
import "./src/App.css";
import profile from "./src/images/profile.jpg"; // Make sure to place a profile image in the src folder
export function Index () {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Harsh Sharma</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#resume">Resume</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="background">
                <div className="overlay">
                    <div className="content" id="home">
                        <h2>Welcome to My Portfolio</h2>
                        <p>
                            As a recent graduate, I am seeking a role which allows me to continue
                            learning and perfecting my skills as I provide high-quality work, and
                            encourages me to flourish as a software developer.
                        </p>
                    </div>
                </div>
            </div>
            <section className="section" id="about">
                <div className="about-content">
                    <img src={profile} alt="Harsh Sharma" className="profile-pic" />
                    <div className="about-text">
                        <h2>WHO I AM</h2>
                        <p>
                            As a recent graduate, I am seeking a role which allows me to continue
                            learning and perfecting my skills as I provide high-quality work, and
                            encourages me to flourish as a software developer.
                        </p>
                        <p>
                            <strong>Interests:</strong> Java, HTML, CSS, Flutter
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:haxsh.shrma@gmail.com" className="email-link">
                                haxsh.shrma@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section className="section" id="resume">
                <h2>Resume</h2>
                <div className="resume-content">
                    <div className="education">
                        <h3>Education</h3>
                        <div className="resume-item">
                            <h4>Post graduate degree in Cyber security for control systems</h4>
                            <p>2024 - 2025</p>
                            <p>Southeren Alberta Institute of Tech</p>
                            <p>Learned advanced topics in Cybersecurity for control systems.</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Engeneering</h4>
                            <p>2019 - 2023</p>
                            <p>Chtkara University</p>
                            <p>
                                Focused on software development, web technologies, and mobile app
                                development.
                            </p>
                        </div>
                    </div>
                    <div className="work-experience">
                        <h3>Work Experience</h3>
                        <div className="resume-item">
                            <h4>Software Developer Intern</h4>
                            <p>2022 - 2023</p>
                            <p>Tech Company</p>
                            <p>
                                Worked on developing and maintaining web applications using
                                JavaScript, HTML, and CSS.
                            </p>
                        </div>
                        <div className="resume-item">
                            <h4>Freelance Developer</h4>
                            <p>2020 - 2022</p>
                            <p>Self-employed</p>
                            <p>
                                Built several web and mobile applications for various clients using
                                Flutter and React.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="contact">
                <h2>Contact</h2>
                <p>
                    Email:{" "}
                    <a href="mailto:haxsh.shrma@gmail.com" className="email-link">
                        haxsh.shrma@gmail.com
                    </a>
                </p>
            </section>
        </div>);
}