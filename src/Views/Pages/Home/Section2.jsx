import React from 'react';

const Section2 = () => {
    return (
        <>
            <div className="container">
                {/* About Me Title */}
                <div className="row">
                    <div>
                        <span className='h2' data-aos="fade-right"></span>
                        <h2
                            style={{
                                fontFamily: "Playwrite AU SA, serif",
                                borderBottom: "2px solid #94E214",
                                display: 'inline-block'
                            }}
                            data-aos="fade-down"
                            className='mt-0 mt-lg-5 mb-0 mb-lg-5'
                        >
                            <span className='about'>About</span><span className='me'> Me</span>
                        </h2>
                        <span className='dashh2' data-aos="fade-right"></span>
                    </div>

                    {/* Intro Paragraph */}
                    <p className="text-light fs-4 mt-5" data-aos="fade-up">
                        <span className='p'></span>
                        As a Fullstack Developer, I specialize in building scalable, responsive, and efficient web applications from front-end interfaces to back-end systems. I am committed to delivering high-quality, user-centric solutions with clean architecture and seamless performance.
                        <span className='dashp'></span>
                    </p>
                </div>

                {/* Frontend Card */}
<div className="row mb-5" data-aos="fade-up">
    <span className='cardtag'></span>
    <div className="col-lg-8 me-auto border rounded py-5 d-flex align-items-center justify-content-center">
        <div className="container">
            <img src="/common.webp" width={100} alt="Frontend" />
            <h3
                className="text-light mt-3 mb-4"
                style={{
                    fontFamily: "Playwrite AU SA, serif",
                    borderBottom: "3px solid #94E214",
                    display: 'inline-block',
                    fontSize: '2.2rem'
                }}
            >
                <span style={{ color: "#94E214" }}>Frontend Development</span>
            </h3>
            <ul className="text-light ms-5 fs-5 mt-3 list-unstyled">
                <li>
                    {/* During my <strong>6-month internship</strong>, I had the opportunity to work on live projects where I gained practical knowledge of frontend development beyond just the basics. */}
                    I worked with modern tools like <span style={{ color: "#94E214" }}>HTML5</span>, <span style={{ color: "#94E214" }}>CSS3</span>, <span style={{ color: "#94E214" }}>JavaScript (ES6+)</span>, and built responsive UIs using <span style={{ color: "#94E214" }}>Bootstrap</span> and <span style={{ color: "#94E214" }}>Tailwind CSS</span>.
                    <br /><br />
                    My primary focus was on <span style={{ color: "#94E214" }}>React.js</span>, where I explored:
                    <ul className="mt-3">
                        <li>Creating functional components using <span style={{ color: "#94E214" }}>React Hooks</span> (useState, useEffect, useRef, useMemo)</li>
                        <li>State management with <span style={{ color: "#94E214" }}>Redux Toolkit</span> and <span style={{ color: "#94E214" }}>Context API</span></li>
                        <li>API integration using <span style={{ color: "#94E214" }}>Axios</span> and handling loading/error states</li>
                        <li>Data fetching and caching with <span style={{ color: "#94E214" }}>TanStack Query</span> (React Query)</li>
                        <li>Code optimization with <span style={{ color: "#94E214" }}>lazy loading</span> and <span style={{ color: "#94E214" }}>code splitting</span> techniques</li>
                        <li>Routing with <span style={{ color: "#94E214" }}>React Router</span> including protected/private routes</li>
                        <li>Managing meta data and basic SEO using <span style={{ color: "#94E214" }}>React Helmet</span></li>
                        <li>Form validation with <span style={{ color: "#94E214" }}>React Hook Form</span> and custom validations</li>
                    </ul>
                    <br />
                    I also explored <span style={{ color: "#94E214" }}>Next.js</span> for building SSR pages, static site generation, and dynamic routing, which helped in better performance and SEO.
                    <br /><br />
                    {/* This internship helped me gain real-world experience in building, debugging, and deploying React-based applications while following clean code practices and component reusability. */}
                </li>
            </ul>
        </div>
    </div>
</div>


                {/* Backend Card */}
      <div className="row mb-5" data-aos="fade-up">
    <span className='cardtag text-center'></span>
    <div className="col-lg-8 ms-auto border rounded py-5 d-flex align-items-center justify-content-center">
        <div className="container">
            <img src="/common.webp" width={100} alt="Backend" />
            <h3
                className="text-light mt-3 mb-4"
                style={{
                    fontFamily: "Playwrite AU SA, serif",
                    borderBottom: "3px solid #94E214",
                    display: 'inline-block',
                    fontSize: '2.2rem'
                }}
            >
                <span style={{ color: "#94E214" }}>Backend Development</span>
            </h3>
            <ul className="text-light ms-5 fs-5 mt-3 list-unstyled">
                <li>
                    I worked with modern backend technologies like <span style={{ color: "#94E214" }}>Node.js</span>, <span style={{ color: "#94E214" }}>Express.js</span>, and <span style={{ color: "#94E214" }}>MongoDB</span> to build efficient and scalable server-side applications during my internship experience.
                    <br /><br />
                    My backend stack includes:
                    <ul className="mt-3">
                        <li><span style={{ color: "#94E214" }}>Authentication</span> using <span style={{ color: "#94E214" }}>JWT</span> and role-based access control (RBAC)</li>
                        <li><span style={{ color: "#94E214" }}>MongoDB</span> with <span style={{ color: "#94E214" }}>Mongoose</span> for schema-based data modeling</li>
                        <li>Secure and scalable <span style={{ color: "#94E214" }}>REST API</span> architecture with proper status codes and validations</li>
                        <li><span style={{ color: "#94E214" }}>Middleware</span> for authentication, error handling, logging, and route protection</li>
                        <li>Backend <span style={{ color: "#94E214" }}>testing</span> with Postman and manual test cases during development</li>
                        <li>Code organization with <span style={{ color: "#94E214" }}>MVC architecture</span> and modular file structure</li>
                    </ul>
                    <br />
                    I also handled CRUD operations, connected frontend forms to backend APIs, and managed authentication tokens and headers effectively.
                </li>
            </ul>
        </div>
    </div>
</div>

     {/* Tools & Technologies Card - simple nested list */}
<div className="row mb-5" data-aos="fade-up">
  <span className='cardtag text-center'></span>
  <div className="col-lg-8 border rounded py-5">
    <div className="container">
      <img src="/common.webp" width={100} alt="Tools & Technologies" />
     <h3
                className="text-light mt-3 mb-4"
                style={{
                    fontFamily: "Playwrite AU SA, serif",
                    borderBottom: "3px solid #94E214",
                    display: 'inline-block',
                    fontSize: '2.2rem'
                }}
            >
                <span style={{ color: "#94E214" }}>Tools & Technologies</span>
            </h3>
            <ul className="text-light ms-5 fs-5 mt-3 list-unstyled">
                <li>
        In my workflow, I rely on essential development tools that enhance efficiency and code quality. These tools help manage codebases, test APIs, debug frontends, and communicate visually with UI teams.
                    <br /><br />
                    Tools & Technologies:
                    <ul className="mt-3">
                        <li>Version control system for managing source code and team collaboration <span style={{ color: "#94E214" }}>Git & GitHub</span></li>
                        <li>Versatile and lightweight code editor with powerful extensions <span style={{ color: "#94E214" }}>VS Code</span></li>
                        <li>  API testing tool used for debugging, monitoring, and documentation <span style={{ color: "#94E214" }}>Postman</span></li>
                        <li> Browser-based tool for inspecting elements and debugging JS <span style={{ color: "#94E214" }}>Chrome DevTools</span></li>
                        <li>Design tool for UI/UX collaboration and wireframing <span style={{ color: "#94E214" }}>Basic Figma</span></li>
                    </ul>
                    {/* <br /> */}
                </li>
                </ul>
    </div>
  </div>
</div>


                {/* Soft Skills Card */}
                {/* <div className="row mb-5" data-aos="fade-up">
                    <span className='cardtag text-center'></span>
                    <div className="col-lg-8 ms-auto border rounded py-5 d-flex align-items-center justify-content-center">
                        <div className="container">
                            <img src="/common.webp" width={100} alt="Soft Skills" />
                           <h3
                                className="text-light mt-3 mb-4"
                                style={{
                                    fontFamily: "Playwrite AU SA, serif",
                                    borderBottom: "3px solid #94E214",
                                    display: 'inline-block',
                                    fontSize: '2.2rem'
                                }}
                            >
                                <span style={{ color: "#94E214" }}>Soft Skills</span>
                            </h3>
                            <ul className="text-light ms-5 fs-5 mt-3 list-unstyled">
                                <li>
                                    In addition to technical expertise, I bring strong interpersonal and professional skills:
                                    <br /><br />
                                    <span style={{ color: "#94E214" }}>Problem-solving</span>, <span style={{ color: "#94E214" }}>Effective Communication</span>, and <span style={{ color: "#94E214" }}>Team Collaboration</span>.
                                    <br /><br />
                                    I am also experienced in <span style={{ color: "#94E214" }}>Agile methodologies</span>, have a proactive mindset, and continuously seek to learn and improve.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Section2;
