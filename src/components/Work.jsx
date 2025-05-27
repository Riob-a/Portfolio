import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { FaGithub, FaReact, FaPython } from "react-icons/fa";
import image1 from '../components/images/Derricks Demo 1.jpg';
import image3 from "../components/images/Derricks Demo 3.jpg"
import readfinder1 from "../components/images/readfinder1.jpg"
import readfinder2 from "../components/images/readfinder2.jpg"
import blogers from '../components/images/blogers.jpg';
import blogers2 from '../components/images/blogers2.jpg';
import blogers3 from "../components/images/blogers3.jpg";
import blogers4 from "../components/images/blogers4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../pages/Home.css"

function Work() {

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
                    slidesToShow: 1, // Show 1.5 cards (partially visible)
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
        <Container>
            <Carousel interval={10000} indicators={false} className="outer-carousel">
                {/* Project 1 */}
                <Carousel.Item>
                    <Card className="rounded-4 mb-5 project-card">
                        <Card.Body>
                            <Card.Title as="h2" className="text-center mb-4">Demo-App</Card.Title>
                            <hr />
                            <Card.Text className="text-center">A demo project that acts as a test-bed for any new techniques I learn.</Card.Text>
                            <hr />
                            <Row>
                                <Col>
                                    <Card className=" project-card-l mt-2"  >
                                        <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                        <hr />
                                        <ul>
                                            <li>Facilitates User Registration and sign in</li>
                                            <li>Allows user to like and submit artwork</li>
                                            <li>Allows user to view and edit their profile</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className=" project-card-r mt-2" >
                                        <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                        <hr />
                                        <ul>
                                            <li><FaReact /> React</li>
                                            <li><FaPython /> Flask Debug</li>
                                            <li>Axios</li>
                                            <li>Cloudinary</li>
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>
                            
                            <Card className="rounded-4 project-card mt-4">
                                <Carousel className="inner-carousel">
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image" src={image1} alt="Demo Screenshot 1" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image" src={image3} alt="Demo Screenshot 2" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card>
                            <br />
                            <Row>
                                <Card.Text as="h5" className="text-center">
                                    <FaGithub /> Github Links : 
                                    <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end">  Frontend</Card.Link>
                                    <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link>
                                    <hr />
                                </Card.Text>
                            </Row>
                            
                            <Button variant="" href="https://demo-project-f-end.vercel.app/" className="button visit">Visit</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* Project 2 */}
                <Carousel.Item>
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
                                    <Card className=" project-card-l mt-2"  >
                                        <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                        <hr />
                                        <ul>
                                            <li>Facilitates User Registration and sign in</li>
                                            <li>Allows user to like and submit blogs</li>
                                            <li>Allows user to view and edit their profile</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className=" project-card-r mt-2" >
                                        <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                        <hr />
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
                           
                            <Card className="rounded-4 project-card mt-4">
                                <Carousel className="inner-carousel">
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image " src={blogers} alt="Demo Screenshot 1" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image " src={blogers2} alt="Demo Screenshot 2" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image " src={blogers3} alt="Demo Screenshot 2" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image " src={blogers4} alt="Demo Screenshot 2" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card>
                            <br />
                             <Row>
                                <Card.Text as="h5" className="text-center">
                                    <FaGithub /> Github Links : 
                                    <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end"> Frontend</Card.Link>
                                    <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link>
                                    <hr />
                                </Card.Text>
                            </Row>
                            
                            <Button variant="" href="https://blogers-front-end-srpb.vercel.app/" className="button visit">Visit</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* Project 3 */}
                <Carousel.Item>
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
                                    <Card className=" project-card-l mt-2"  >
                                        <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                        <hr />
                                        <ul>
                                            <li>Facilitates User Registration and sign in</li>
                                            <li>Allows user to like and submit artwork</li>
                                            <li>Allows user to view and edit their profile</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className=" project-card-r mt-2" >
                                        <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                        <hr />
                                        <ul>
                                            <li><FaReact /> React</li>
                                            <li><FaPython /> Flask Debug</li>
                                            <li>Axios</li>
                                            <li>Cloudinary</li>
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>
                            
                            <Card className="rounded-4 project-card mt-4">
                                <Carousel className="inner-carousel">
                                    <Carousel.Item>
                                        <img className="d-block w-100  rounded-4 carousel-image" src={readfinder1} alt="Demo Screenshot 1" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-100 rounded-4 carousel-image" src={readfinder2} alt="Demo Screenshot 2" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card>
                            <br />
                            <Row>
                                <Card.Text as="h5" className="text-center">
                                    <FaGithub /> Github Links : 
                                    <Card.Link href="https://github.com/Riob-a/ReadFinder"> Frontend</Card.Link>
                                    <Card.Link href="https://github.com/Riob-a/ReadFinder">Backend</Card.Link>
                                    <hr />
                                </Card.Text>
                            </Row>
                            <Button variant="" href="https://read-finder.vercel.app/" className="button visit">Visit</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

                {/* Project 4 */}
                <Carousel.Item>
                    <Card className="rounded-4 mb-5 project-card">
                        <Card.Body>
                            <Card.Title as="h2" className="text-center mb-4">Admin for Demo-App</Card.Title>
                            <hr />
                            <Card.Text className="text-center">Admin app for the "demo-app".</Card.Text>
                            <hr />
                            <Row>
                                <Col>
                                    <Card className=" project-card-l mt-2"  >
                                        <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                        <hr />
                                        <ul>
                                            <li>Facilitates User Registration and sign in</li>
                                            <li>Allows Admin to delete likes and  artwork</li>
                                            <li>Allows Admin to view and manage profiles</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className=" project-card-r mt-2" >
                                        <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                        <hr />
                                        <ul>
                                            <li><FaReact /> React</li>
                                            <li><FaPython /> Flask Debug</li>
                                            <li>Axios</li>
                                            <li>Cloudinary</li>
                                        </ul>
                                    </Card>
                                </Col>
                            </Row>
                            
                            <Card className="rounded-4 project-card mt-4">
                                <Carousel className="inner-carousel">
                                    <Carousel.Item>
                                        <img className=" d-block w-100 rounded-4 carousel-image" src={image1} alt="Demo Screenshot 1" />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className=" d-block w-100 rounded-4 carousel-image" src="" alt="Demo Screenshot 2" />
                                    </Carousel.Item>
                                </Carousel>
                            </Card>
                            <br />
                            <Row>
                                <Card.Text as="h5" className="text-center">
                                    <FaGithub /> Github Links : 
                                    <Card.Link href="https://github.com/Riob-a/Demo-Project-F-end"> Frontend</Card.Link>
                                    <Card.Link href="https://github.com/Riob-a/Demo-Project-Backend">Backend</Card.Link> 
                                    <hr />
                                </Card.Text>
                            </Row>
                            <Button variant="" href="https://demo-project-admin-wheat.vercel.app/" className="button visit">Visit</Button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>

            </Carousel>
        </Container>
    )
}
export default Work;