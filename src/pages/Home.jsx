import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Button, Image, Carousel, ListGroup } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import NavigationBar from '../components/Navbar';
import image1 from '../components/images/Derricks Demo.png'
import image2 from "../components/images/fund Girls.png"
import image3 from "../components/images/read finder.png"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaReact, FaPython, FaJsSquare, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { ThemeContext } from "../components/ThemeContenxt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"



function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    // useEffect(() => {
    //     AOS.init({
    //         duration: 500,
    //         easing: "ease-in-out",
    //         offset: 200,
    //         once: true, 
    //     });
    // }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
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
        <div id="body">
            {/* Floating Theme Toggle Button */}
            <Button
                className="floating-theme-button"
                onClick={toggleTheme}
                variant={theme === "light" ? "dark" : "light"}
            >
                {theme === "light" ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
            </Button>
            <header>
                <section id="home" className="text-white text-center  mb-5 mt-2" data-aos="fade-up" data-aos-delay="200" >
                    <div className="container">
                        <NavigationBar />
                        <h1>Welcome to my Portfolio</h1>
                        <p>Full-Stack Developer | Passionate About Problem Solving & Scalable Solutions</p>
                    </div>
                </section>
            </header>

            <section id="about">
                <Row className="p-1 m-1 d-flex align-items-stretch">
                    <Col md={6} className="d-flex" data-aos="fade-up" data-aos-delay="100">
                        <Card className=" mt-5 mb-5 rounded-5 flex-fill">
                            <Card.Body>
                                <Card.Title><h2>About Me</h2></Card.Title>
                                <hr />
                                <Card.Text className="lead">
                                    I am a software engineer with expertise in designing and developing web applications, solving complex problems, and creating user-centric solutions.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="/Derrick Rioba Ongwae Software-engineer(Re).pdf" download className="button rounded-3 me-4 m-2">
                                    Download Resume
                                </Button>
                                <Button variant="primary" href="/Derrick Rioba Ongwae Software- engineer(C).pdf" download className="button rounded-3 m-2">
                                    Download C.V
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col md={6} className="d-flex" data-aos="fade-up" data-aos-delay="200">
                        <Card className=" mt-5 mb-5 rounded-5 flex-fill">
                            <Card.Body>
                                <Container>
                                    <h2>Qualifications</h2>
                                    <hr />
                                    <div>
                                        <div className="row">
                                            <h4>Nairobi Technical Training Institute</h4>
                                            <p><strong>Grade:</strong> Credit (KNEC)</p>
                                            <p>Diploma in I.C.T</p>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <h4>Moringa</h4>
                                            <p><strong>Grade:</strong> Pass</p>
                                            <p>Certificate in Software engineering</p>
                                        </div>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </section>


            {/* Skills Section py-5 mt-5 mb-5 rounded-4*/}


            <Container className="text-center justify-content-center py-5 mt-5 mb-5 rounded-4" data-aos="fade-right" data-aos-delay="300">
                <section id="skills" className=" mt-4 mb-5 p-2 py-5 mt-5 mb-5 rounded-4">
                    <h2>Skills</h2>
                    <hr />
                    <Carousel indicators={true} interval={3000}>
                        {/* Frontend Slide */}
                        <Carousel.Item>
                            <div className="py-4">
                                <h3>Frontend</h3>
                                <p>React, HTML, CSS, JavaScript</p>
                            </div>
                        </Carousel.Item>

                        {/* Backend Slide */}
                        <Carousel.Item>
                            <div className="py-4">
                                <h3>Backend</h3>
                                <p>Node.js, Flask, PostgreSQL</p>
                            </div>
                        </Carousel.Item>

                        {/* Tools Slide */}
                        <Carousel.Item>
                            <div className="py-4">
                                <h3>Tools</h3>
                                <p>Git, Render, CI/CD, Vercel</p>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </section>
            </Container>


            {/* Projects Section */}
            <section id="projects" className="py-5 mb-5">
                <Container data-aos="fade-up" data-aos-delay="300">
                    <Row className=" mb-4 text-center">
                        <h1>Projects</h1>
                        <p>Projects I have accomplished</p>
                    </Row>
                    <Slider {...settings}>
                        {/* Project 1 */}
                        <div className="project-card">
                            <Card className="rounded-4">
                                <Card.Img variant="top" src={image1} />
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Derricks-Demo</Card.Title>
                                    <Card.Text>A demo project that acts as a test-bed for any new techniques I learn.</Card.Text>
                                    <Card.Text as="h5" className="text-center" >Accomplishments</Card.Text>
                                    <ul className="list">
                                        <li>Facilitates User Registration and sign in</li>
                                        <li>Allows user to like and submit artwork</li>
                                        <li>Allows user to view and edit their profile</li>
                                    </ul>
                                    <Card.Text as="h5" className="text-center">Tech used</Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item><FaReact /> React</ListGroup.Item>
                                        <ListGroup.Item><FaPython /> Python/Flask</ListGroup.Item>
                                        <ListGroup.Item><FaJsSquare /> JavaScript</ListGroup.Item>
                                    </ListGroup>
                                    <br />
                                    <Card.Text as="h6" className="text-center"><FaGithub /> Github Links<br />
                                        <Card.Link href={`https://github.com/Riob-a/Demo-Project-F-end`} >Frontend </Card.Link>
                                        <Card.Link href={'https://github.com/Riob-a/Demo-Project-Backend'} >Backend</Card.Link>
                                    </Card.Text>
                                    <hr />
                                    <Button variant="primary" href="https://demo-project-f-end.vercel.app/" className="button">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        {/* Project 2 */}
                        <div className="project-card">
                            <Card className="rounded-4">
                                <Card.Img variant="top" src={image2} />
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Fund.Girls</Card.Title>
                                    <Card.Text>Automated-donation-Platform allows users to donate to various beneficiaries and charities.</Card.Text>
                                    <Card.Text as="h5" className="text-center" >Accomplishments</Card.Text>
                                    <ul className="list">
                                        <li>Facilitates User Registration and sign in</li>
                                        <li>Allows user to donate</li>
                                        <li>Facilitates creation of a charity</li>
                                    </ul>
                                    <Card.Text as="h5" className="text-center">Tech used</Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item><FaReact /> React</ListGroup.Item>
                                        <ListGroup.Item><FaPython /> Python/Flask</ListGroup.Item>
                                        <ListGroup.Item><FaJsSquare /> JavaScript</ListGroup.Item>
                                    </ListGroup>
                                    <br />
                                    <Card.Text as="h6" className="text-center"><FaGithub /> Github Links<br />
                                        <Card.Link href={`https://github.com/Riob-a/Automated-Donation-Platform-Front-end`} >Frontend </Card.Link>
                                        <Card.Link href={'https://github.com/Riob-a/Automated-Donation-Platform-Back-End'} >Backend</Card.Link>
                                    </Card.Text>
                                    <hr />
                                    <Button variant="primary" href="https://automated-donation-platform-front-end.vercel.app/" className="button">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        {/* Project 3 */}
                        <div className="project-card">
                            <Card className="rounded-4">
                                <Card.Img variant="top" src={image3} />
                                <Card.Body>
                                    <Card.Title as="h2" className="text-center mb-4">Read Finder</Card.Title>
                                    <Card.Text>A school project that displays an assortment of books available for purchase.</Card.Text>
                                    <Card.Text as="h5" className="text-center" >Accomplishments</Card.Text>
                                    <ul className="list">
                                        <li>Allows user to buy books</li>
                                        <li>Facilitates adding books to a wishlist</li>
                                        <li>Allows user to view and edit their profile</li>
                                    </ul>
                                    <Card.Text as="h5" className="text-center">Tech used</Card.Text>
                                    <ListGroup>
                                        <ListGroup.Item><FaReact /> React</ListGroup.Item>
                                        <ListGroup.Item><FaJsSquare /> JavaScript</ListGroup.Item>
                                    </ListGroup>
                                    <br />
                                    <Card.Text as="h6" className="text-center"><FaGithub /> Github Links<br />
                                        <Card.Link href={`https://github.com/Riob-a/ReadFinder`}>Frontend </Card.Link>
                                    </Card.Text>
                                    <hr />
                                    <Button variant="primary" href="https://read-finder.vercel.app/" className="button">Visit</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Slider>
                </Container>
            </section>

            {/* Contact Section */}
            <Container data-aos="fade-up" data-aos-delay="500">
                <section id="contact" className="rounded-4 py-5  mt-5 mb-5">
                    <div className="container text-center" >
                        <h2>Contacts</h2>
                        <hr />
                        <p className="m-4">
                            <FaLinkedin className="me-2" />: <a href="https://www.linkedin.com/in/derrick-r-ongwae-1530142bb/" className="me-2">Derrick Ongwae</a>
                            <FaGithub className="me-2" />: <a href="https://github.com/Riob-a" className="me-2">Riob-a</a>
                            <FaPhone className="me-2" />: <a href="blank" className="me-2">+254 71233 9792</a></p>

                        <p>Feel free to reach out for collaborations or just a friendly hello!</p>

                        <a href="mailto:riobad65@gmail.com" className="btn btn-primary button">Email Me</a>
                    </div>
                </section>
            </Container>

        </div>
    );
}
export default Home;