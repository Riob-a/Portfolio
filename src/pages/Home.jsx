import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Image, Tabs, Tab, Figure, ListGroup, Button, Carousel  } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import NavigationBar from '../components/Navbar';
import image1 from '../components/images/Derricks Demo.png';
import image2 from "../components/images/fund Girls.png"
import readfinder1 from "../components/images/readfinder1.jpg"
import readfinder2 from "../components/images/readfinder2.jpg"
import blogers from '../components/images/blogers.jpg';
import blogers2 from '../components/images/blogers2.jpg';

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaEnvelope, FaLinkedin, FaGithub, FaUser, FaFileAlt, FaPen, FaReact, FaPython, FaJsSquare } from "react-icons/fa";
import { ThemeContext } from "../components/ThemeContenxt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"
// import './reference.css';

function Home() {
    const svg = (
        <svg
            // width="250" height="250" 
            viewBox="0 0 24 24" fill="#706d42"
            xmlns="http://www.w3.org/2000/svg" className="header-icon"
        >
            <path d="M5 5H9V13.59L18.3 4.29L20.71 6.7L11.41 16H20V20H5V5Z" />
        </svg>
    )

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Tablets and larger
                settings: {
                    slidesToShow: 1.5, // Show 1.5 cards (partially visible)
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 1, // Show 1 card fully
                },
            },
        ],
    };

    return (
        <Container className="container-fluid mb-5">
            <hr />
            <Row className="page-top ">
                <div className="header">
                    <div className="page-top-left">Derrick R Ongwae</div>
                    <div className="page-top-right">Portfolio</div>
                </div>
            </Row>

            <hr />

            <Row className="header-section mb-5 mt-5">
                <Col className="header-text" data-aos="fade-up" data-aos-duration="800" data-aos-delay="" >
                    {svg} {svg} {svg} {svg} {svg} {svg}
                </Col>
                <Col className="header-image" md={10}>
                    <Card className="rounded-5  d-flex justify-content-center align-items-center position-relative" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" >
                        <Card.Text as="h1" className="portfolio-title" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" > PORTFOLIO</Card.Text>
                        <div className="portfolio-footer small" data-aos="fade-in" data-aos-delay="600">2025</div>
                    </Card>
                </Col>
            </Row>
            <hr />

            <Tabs defaultActiveKey="about" id="portfolio-tabs" className=" custom-tabs" variant="pills">
                <Tab eventKey="about"
                    title={
                        <span className="d-flex align-items-center gap-2 ">
                            <span className="tab-icon"><FaUser /></span> About me
                        </span>
                    }>
                    <hr />
                    <Row className="intro-section my-5">
                        <Col >
                            <Card className="h-100  intro rounded-5 d-flex flex-column justify-content-end" data-aos="fade-up" data-aos-duration="800" >
                                {/* <Card.Img variant="" src="" alt="Qorry" rounded className="w-100 grayscale" /> */}
                                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                                    <h2 className="mt-3 about-title">Hello, My name is Derrick</h2>
                                    <p className="about-description small">
                                        With an ICT background, I’m a dedicated web developer who constantly
                                        learns and explores new design approaches to deliver impactful solutions.
                                    </p>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>

                        <Col md={8}>
                            <Row className="intro ">
                                <h3 className="" data-aos="fade-right" data-aos-duration="800">Introduction</h3>
                                <Card className="rounded-5 p-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                    <h3>A Software Engineer based in Nairobi</h3>
                                    <Figure>
                                        <Figure.Caption>
                                            <p>
                                                I’m a full-stack software engineer with expertise in React and Flask,
                                                skilled in building scalable web applications with robust API integration, secure authentication,
                                                and smooth deployment using platforms like Vercel and Heroku.
                                                I focus on creating user-centric solutions that are both functional and intuitive.

                                            </p>
                                        </Figure.Caption>
                                        <Figure.Image
                                            id="caption-img"
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={image1}
                                        />
                                    </Figure>
                                </Card>
                            </Row>
                            <hr />
                            <Row className="get-in-touch mt-4">
                                <h3 className="mb-4" data-aos="fade-right" data-aos-duration="800">Get In Touch</h3>
                                <div className="d-flex gap-3">
                                    <Card className="rounded-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <a href="mailto:qorryadj@gmail.com" title="Email" className="icons" ><FaEnvelope size={40} /></a>
                                        <hr />
                                        <Card.Text className="icons">riobad74@gmail.com</Card.Text>
                                    </Card>
                                    <Card className="rounded-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <a href="https://www.linkedin.com/in/derrick-r-ongwae-1530142bb/" title="LinkedIn" className="icons" ><FaLinkedin size={40} /></a>
                                        <hr />
                                        <Card.Text className="icons">Derrick Ongwae</Card.Text>
                                    </Card>
                                    <Card className="rounded-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <a href="https://github.com/Riob-a" title="Github" className="icons" ><FaGithub size={40} /></a>
                                        <hr />
                                        <Card.Text className="icons">Riob-a </Card.Text>
                                    </Card>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="resume"
                    title={
                        <span className="d-flex align-items-center gap-2">
                            <span className="tab-icon"><FaFileAlt /></span> Resume
                        </span>
                    }>
                    <hr />
                    <Row className="qualifications my-5">
                        <Col className="expirience p-4" data-aos="fade-up" data-aos-duration="800" md={4}>
                            <h4 className="mb-4">Experience</h4>
                            <Card className="rounded-5">
                                <Card.Title>2024 - Present</Card.Title>
                                <strong className="card-p">Freelance</strong>
                                <p className="card-p"> Web Developer (Front and Backend)</p>
                            </Card>
                            <hr />

                            <Card className="rounded-5">
                                <Card.Title>2022</Card.Title>
                                <strong className="card-p"> Kenyatta National Hospital</strong>
                                <p className="card-p">Industrial attache</p>
                            </Card>
                            <hr />

                            <Card className="rounded-5">
                                <Card.Title>2021</Card.Title>
                                <strong className="card-p">Kenya Technical Trainers Institute</strong>
                                <p className="card-p">Industrial attache</p>
                            </Card>
                        </Col>

                        <Col className="expertise p-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" md={4}>
                            <h4 className="mb-4">Expertise</h4>
                            <p>Logo, Brand Identity, Packaging, Poster & Editorial, Social Media Post, 3D & Motion Graphic</p>
                            <hr />

                            <h5>Front-end</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {["React", "HTML", "CSS", "JavaScript", "Bootstrap"].map(skill => (
                                    <span key={skill} className="badge badge-color ">{skill}</span>
                                ))}
                            </div>
                            <hr />
                            <h5>Back-end</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {["Flask", "PostgreSQL", "Python"].map(skill => (
                                    <span key={skill} className="badge badge-color ">{skill}</span>
                                ))}
                            </div>
                            <hr />
                            <h5>Tools</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {["Figma", "db diagram", "render", "cloudinary"].map(skill => (
                                    <span key={skill} className="badge badge-color ">{skill}</span>
                                ))}
                            </div>
                            {/* <hr />
                            <h5 className="mt-3">Soft Skills</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {["Creativity", "Teamwork", "Time Management", "Flexibility", "Communication"].map(skill => (
                                    <span key={skill} className="badge bg-info text-dark">{skill}</span>
                                ))}
                            </div> */}
                        </Col>

                        <Col className="education p-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" md={4}>
                            <h4 className="mb-4">Education</h4>
                            <Card className="rounded-5">
                                <Card.Title>2024</Card.Title>
                                <Card.Text>Moringa</Card.Text>
                                <Card.Text>
                                    <strong>Software-develpment</strong>
                                    <p>Grade : ( A - Pass )</p>
                                </Card.Text>
                            </Card>
                            <hr />
                            <Card className="rounded-5">
                                <Card.Title>2020 - 2023</Card.Title>
                                <Card.Text>Nairobi National Polytechnic</Card.Text>
                                <Card.Text>
                                    <strong>Information Communication Technology</strong>
                                    <p>Grade : ( Credit )</p>
                                </Card.Text>
                            </Card>
                            <br />

                        </Col>
                    </Row>
                    <Row>
                        <Col className="certificates p-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                            <h4 className="mb-4">Certificates</h4>
                            <Button variant="" href="/Derrick Rioba Ongwae Software-engineer(Re).pdf" download className="button visit rounded-3 me-4 m-2">
                                Download Resume
                            </Button>
                            <Button variant="" href="/Derrick Rioba Ongwae Software- engineer(C).pdf" download className="button visit  rounded-3 me-4 m-2">
                                Download C.V
                            </Button>
                        </Col>
                    </Row>
                </Tab>

                <Tab eventKey="work"
                    title={
                        <span className="d-flex align-items-center gap-2">
                            <span className="tab-icon"><FaPen /></span> Work
                        </span>
                    }>
                    <hr />
                    <Slider {...settings}>
                        {/* Project 1 */}
                        <div className="">
                            <Card className="rounded-4 mb-5 project-card">
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Demo-App</Card.Title>
                                    <hr />
                                    <Card.Text className="text-center">A demo project that acts as a test-bed for any new techniques I learn.</Card.Text>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className=" project-card-l"  >
                                                <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                                <ul>
                                                    <li>Facilitates User Registration and sign in</li>
                                                    <li>Allows user to like and submit artwork</li>
                                                    <li>Allows user to view and edit their profile</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" project-card-r" >
                                                <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                                <ul>
                                                    <li><FaReact /> React</li>
                                                    <li><FaPython /> Flask Debug</li>
                                                    <li>Axios</li>
                                                    <li>Cloudinary</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Card.Text as="h5" className="text-center">
                                            <FaGithub /> Github Links<br />
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end">Frontend</Card.Link>
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link>
                                        </Card.Text>
                                    </Row>
                                    <Card className="rounded-4 project-card">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="d-block w-100 h-75 rounded-4" src={image1} alt="Demo Screenshot 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="" alt="Demo Screenshot 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Card>
                                    <hr />
                                    <Button variant="" href="https://demo-project-f-end.vercel.app/" className="button visit">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        {/* Project 2 */}
                        <div className="">
                            <Card className="rounded-4 mb-5 project-card">
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Blogers</Card.Title>
                                    <hr />
                                    <Card.Text className="text-center">
                                        A simple and intuitive blog site
                                        that allows users to like,comment,
                                        and write blogs as well as read them learn.
                                    </Card.Text>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className=" project-card-l"  >
                                                <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                                <ul>
                                                    <li>Facilitates User Registration and sign in</li>
                                                    <li>Allows user to like and submit blogs</li>
                                                    <li>Allows user to view and edit their profile</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" project-card-r" >
                                                <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                                <ul>
                                                    <li><FaReact /> React</li>
                                                    <li><FaPython /> Flask Debug</li>
                                                    <li>Axios</li>
                                                    <li>Cloudinary</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Card.Text as="h5" className="text-center">
                                            <FaGithub /> Github Links<br />
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end">Frontend</Card.Link>
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link>
                                        </Card.Text>
                                    </Row>
                                    <Card className="rounded-4 project-card">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="d-block w-100 h-75 rounded-4" src={blogers} alt="Demo Screenshot 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src={blogers2} alt="Demo Screenshot 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Card>
                                    <hr />
                                    <Button variant="" href="https://blogers-front-end-srpb.vercel.app/" className="button visit">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="">
                            <Card className="rounded-4 mb-5 project-card">
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Read Finder</Card.Title>
                                    <hr />
                                    <Card.Text className="text-center">
                                        A school project that displays an assortment
                                        of books available for purchase.
                                    </Card.Text>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className=" project-card-l"  >
                                                <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                                <ul>
                                                    <li>Facilitates User Registration and sign in</li>
                                                    <li>Allows user to like and submit artwork</li>
                                                    <li>Allows user to view and edit their profile</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" project-card-r" >
                                                <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                                <ul>
                                                    <li><FaReact /> React</li>
                                                    <li><FaPython /> Flask Debug</li>
                                                    <li>Axios</li>
                                                    <li>Cloudinary</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Card.Text as="h5" className="text-center">
                                            <FaGithub /> Github Links<br />
                                            <Card.Link href="https://github.com/Riob-a/ReadFinder">Frontend</Card.Link>
                                            <Card.Link href="https://github.com/Riob-a/ReadFinder">Backend</Card.Link>
                                        </Card.Text>
                                    </Row>
                                    <Card className="rounded-4 project-card">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="d-block w-100 h-75 rounded-4" src={readfinder1} alt="Demo Screenshot 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src={readfinder2} alt="Demo Screenshot 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Card>
                                    <hr />
                                    <Button variant="" href="https://read-finder.vercel.app/" className="button visit">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="">
                            <Card className="rounded-4 mb-5 project-card">
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Admin for Demo-App</Card.Title>
                                    <hr />
                                    <Card.Text className="text-center">Admin app for the "demo-app".</Card.Text>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className=" project-card-l"  >
                                                <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                                <ul>
                                                    <li>Facilitates User Registration and sign in</li>
                                                    <li>Allows Admin to delete likes and  artwork</li>
                                                    <li>Allows Admin to view and manage profiles</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" project-card-r" >
                                                <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                                <ul>
                                                    <li><FaReact /> React</li>
                                                    <li><FaPython /> Flask Debug</li>
                                                    <li>Axios</li>
                                                    <li>Cloudinary</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Card.Text as="h5" className="text-center">
                                            <FaGithub /> Github Links<br />
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end">Frontend</Card.Link>
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link>
                                        </Card.Text>
                                    </Row>
                                    <Card className="rounded-4 project-card">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="d-block w-100 h-75 rounded-4" src={image1} alt="Demo Screenshot 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="" alt="Demo Screenshot 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Card>
                                    <hr />
                                    <Button variant="" href="https://demo-project-admin-wheat.vercel.app/" className="button visit">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="">
                            <Card className="rounded-4 mb-5 project-card">
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Admin for Demo-App</Card.Title>
                                    <hr />
                                    <Card.Text className="text-center">A demo project that acts as a test-bed for any new techniques I learn.</Card.Text>
                                    <hr />
                                    <Row>
                                        <Col>
                                            <Card className=" project-card-l"  >
                                                <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                                <ul>
                                                    <li>Facilitates User Registration and sign in</li>
                                                    <li>Allows user to like and submit artwork</li>
                                                    <li>Allows user to view and edit their profile</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className=" project-card-r" >
                                                <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                                <ul>
                                                    <li><FaReact /> React</li>
                                                    <li><FaPython /> Flask Debug</li>
                                                    <li>Axios</li>
                                                    <li>Cloudinary</li>
                                                </ul>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <Row>
                                        <Card.Text as="h5" className="text-center">
                                            <FaGithub /> Github Links<br />
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end">Frontend</Card.Link>
                                            <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link>
                                        </Card.Text>
                                    </Row>
                                    <Card className="rounded-4 project-card">
                                        <Carousel>
                                            <Carousel.Item>
                                                <img className="d-block w-100 h-75 rounded-4" src={image1} alt="Demo Screenshot 1" />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img className="d-block w-100" src="" alt="Demo Screenshot 2" />
                                            </Carousel.Item>
                                        </Carousel>
                                    </Card>
                                    <hr />
                                    <Button variant="" href="https://demo-project-f-end.vercel.app/" className="button visit">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </Tab>
            </Tabs>
            <br />
        </Container>
    );
}
export default Home;