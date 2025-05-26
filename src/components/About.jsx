import { Container, Row, Col, Card, Figure } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";
import image1 from '../components/images/Derricks Demo 1.jpg';


function About() {
    return (
        <Container>
            <Row className="intro-section my-5">
                <Col >
                    <Card className="h-100  intro rounded-5 d-flex flex-column justify-content-end p-3 gen-card" data-aos="fade-up" data-aos-duration="800" >
                        {/* <Card.Img variant="" src="" alt="Qorry" rounded className="w-100 grayscale" /> */}
                        {/* <Card.ImgOverlay className="d-flex flex-column justify-content-end"> */}
                        <h2 className="mt-3 about-title">Hello, My name is Derrick</h2>
                        <p className="about-description small">
                            With an ICT background, I’m a dedicated web developer who constantly
                            learns and explores new design approaches to deliver impactful solutions.
                        </p>
                        {/* </Card.ImgOverlay> */}
                    </Card>
                </Col>

                <Col md={8}>
                    <Row className="intro mt-4">
                        <h3 className="mb-4" data-aos="fade-right" data-aos-duration="800">Introduction</h3>
                        <Card className="rounded-5 p-4 gen-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
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
                    <Row className="get-in-touch mt-4 mb-5">
                        <h3 className="mb-4" data-aos="fade-right" data-aos-duration="800">Get In Touch</h3>
                        <div className="gap-">
                            <Row className="social-icons">
                                <Col className="mt-4">
                                    <Card className="rounded-5 " data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                                        <a href="mailto:qorryadj@gmail.com" title="Email" className="icons" ><FaEnvelope size={40} /></a>
                                        <hr />
                                        <Card.Text className="icons">riobad74@gmail.com</Card.Text>
                                    </Card>
                                </Col>

                                <Col className="mt-4">
                                    <Card className="rounded-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                                        <a href="https://www.linkedin.com/in/derrick-r-ongwae-1530142bb/" title="LinkedIn" className="icons" ><FaLinkedin size={40} /></a>
                                        <hr />
                                        <Card.Text className="icons">Derrick Ongwae</Card.Text>
                                    </Card>
                                </Col>

                                <Col className="mt-4">
                                    <Card className="rounded-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                                        <a href="https://github.com/Riob-a" title="Github" className="icons" ><FaGithub size={40} /></a>
                                        <hr />
                                        <Card.Text className="icons">Riob-a </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default About;