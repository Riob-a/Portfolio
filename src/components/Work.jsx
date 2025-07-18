import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Carousel, Modal } from "react-bootstrap";
import { FaGithub, FaReact, FaPython } from "react-icons/fa";
import image1 from '../components/images/Derricks Demo 1.jpg';
import image3 from "../components/images/Derricks Demo 3.jpg";
import demo4 from "../components/images/Derricks Demo 4.jpg";
import demo5 from "../components/images/Derricks Demo 5.jpg";
import demo6 from "../components/images/Derricks Demo 6.jpg";
import demo61 from "../components/images/Derricks Demo 6.1.jpg";
import readfinder1 from "../components/images/readfinder1.jpg";
import readfinder2 from "../components/images/readfinder2.jpg";
import blogers from '../components/images/blogers.jpg';
import blogers2 from '../components/images/blogers2.jpg';
import blogers3 from "../components/images/blogers3.jpg";
import blogers4 from "../components/images/blogers4.jpg";
import Admin1 from "../components/images/demo Admin 1.jpg";
import Admin2 from "../components/images/demo Admin 2.jpg";
import Admin3 from "../components/images/demo Admin 3.jpg";
import Admin4 from "../components/images/demo Admin 4.jpg";
import Admin51 from "../components/images/demo Admin 5.1.jpg";
import Admin52 from "../components/images/demo Admin 5.2.jpg";
import Art1 from '../components/images/art-portfolio1.jpg';
import Art2 from '../components/images/art-portfolio2.jpg'; 
import Art3 from '../components/images/art-portfolio3.jpg';
import Art4 from '../components/images/art-portfolio4.jpg';

// import "../pages/Home.css"

function Work() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [carouselInterval, setCarouselInterval ] = useState(false);

    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    }

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
    useEffect(() => {
        const updateInterval = () => {
            if (window.innerWidth < 768) {
                setCarouselInterval(10000);
            }else {
                setCarouselInterval(20000);
            }
        }
        updateInterval();
        window.addEventListener('resize', updateInterval)

        return () => {
            window.removeEventListener('resize', updateInterval);
        };
    }, []);

    return (
        <Container>
            <div className="work">
                <Carousel interval={carouselInterval} indicators={false} className="outer-carousel">
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
                                            <ol>
                                                <li>Facilitates User Registration and sign in</li>
                                                <li>Allows user to like and submit artwork</li>
                                                <li>Allows user to view and edit their profile</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className=" project-card-r mt-2" >
                                            <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                            <hr />
                                            <ol>
                                                <li> React</li>
                                                <li> Flask Debug</li>
                                                <li>Axios</li>
                                                <li>Cloudinary</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card className="rounded-4 project-card mt-4">
                                    <Carousel className="inner-carousel">
                                        {[image1, demo4, demo5, demo6, demo61].map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img className="d-block w-100 rounded-4 carousel-image" src={image} alt={`Demo Screenshot ${index + 1}`} onClick={() => handleImageClick(image)} style={{ cursor: 'pointer' }} />
                                            </Carousel.Item>))}
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
                                            <ol>
                                                <li>Facilitates User Registration and sign in</li>
                                                <li>Allows user to like and submit blogs</li>
                                                <li>Allows user to view and edit their profile</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className=" project-card-r mt-2" >
                                            <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                            <hr />
                                            <ol>
                                                <li> React</li>
                                                <li> Flask Debug</li>
                                                <li>Axios</li>
                                                <li>Cloudinary</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                </Row>
                                <hr />

                                <Card className="rounded-4 project-card mt-4">
                                    <Carousel className="inner-carousel">
                                        {[blogers, blogers2, blogers3, blogers4].map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img className="d-block w-100 rounded-4 carousel-image" src={image} alt={`Blog Screenshot ${index + 1}`} onClick={() => handleImageClick(image)} style={{ cursor: 'pointer' }} />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </Card>
                                <br />
                                <Row>
                                    <Card.Text as="h5" className="text-center">
                                        <FaGithub /> Github Links :
                                        <Card.Link href="https://github.com/Riob-a/blogers-front-end"> Frontend</Card.Link>
                                        <Card.Link href="https://github.com/Riob-a/blogers-backend">Backend</Card.Link>
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
                                            <ol>
                                                <li>Facilitates User Registration and sign in</li>
                                                <li>Allows user to like and submit artwork</li>
                                                <li>Allows user to view and edit their profile</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className=" project-card-r mt-2" >
                                            <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                            <hr />
                                            <ol>
                                                <li> React</li>
                                                <li> Flask Debug</li>
                                                <li>Axios</li>
                                                <li>Cloudinary</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card className="rounded-4 project-card mt-4">
                                    <Carousel className="inner-carousel">
                                        {[readfinder1, readfinder2].map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img className="d-block w-100 rounded-4 carousel-image" src={image} alt={`Demo Screenshot ${index + 1}`} onClick={() => handleImageClick(image)} style={{ cursor: 'pointer' }} />
                                            </Carousel.Item>
                                        ))}
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
                                            <ol>
                                                <li>Facilitates User Registration and sign in</li>
                                                <li>Allows Admin to delete likes and  artwork</li>
                                                <li>Allows Admin to view and manage profiles</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className=" project-card-r mt-2" >
                                            <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                            <hr />
                                            <ol>
                                                <li> React</li>
                                                <li> Flask Debug</li>
                                                <li>Axios</li>
                                                <li>Cloudinary</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card className="rounded-4 project-card mt-4">
                                    <Carousel className="inner-carousel">
                                        {[Admin1, Admin2, Admin3, Admin4, Admin51, Admin52].map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img className="d-block w-100 rounded-4 carousel-image" src={image} alt={`Demo Screenshot ${index + 1}`} onClick={() => handleImageClick(image)} style={{ cursor: 'pointer' }} />
                                            </Carousel.Item>
                                        ))}

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

                    <Carousel.Item>
                        <Card className="rounded-4 mb-5 project-card">
                            <Card.Body>
                                <Card.Title as="h2" className="text-center mb-4">Art Portfolio</Card.Title>
                                <hr />
                                <Card.Text className="text-center">My Art Portfolio.</Card.Text>
                                <hr />
                                <Row>
                                    <Col>
                                        <Card className=" project-card-l mt-2"  >
                                            <Card.Text as="h5" className="text-center">Accomplishments</Card.Text>
                                            <hr />
                                            <ol>
                                                <li>Displays artwork and facilitates communication with potential clients through a contact form.</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card className=" project-card-r mt-2" >
                                            <Card.Text as="h5" className="text-center">Tools</Card.Text>
                                            <hr />
                                            <ol>
                                                <li> React</li>
                                                <li>Next.js</li>
                                                <li> Flask Debug/ Flask</li>
                                                <li> Axios</li>
                                            </ol>
                                        </Card>
                                    </Col>
                                </Row>

                                <Card className="rounded-4 project-card mt-4">
                                    <Carousel className="inner-carousel">
                                        {[Art1, Art2, Art3, Art4].map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img className="d-block w-100 rounded-4 carousel-image" src={image} alt={`Demo Screenshot ${index + 1}`} onClick={() => handleImageClick(image)} style={{ cursor: 'pointer' }} />
                                            </Carousel.Item>
                                        ))}

                                    </Carousel>
                                </Card>
                                <br />
                                <Row>
                                    <Card.Text as="h5" className="text-center">
                                        <FaGithub /> Github Links :
                                        <Card.Link href="https://github.com/Riob-a/Art-portfoilo"> Frontend</Card.Link>
                                        <Card.Link href="https://github.com/Riob-a/Art-portfoilo-backend">Backend</Card.Link>
                                        <hr />
                                    </Card.Text>
                                </Row>
                                <Button variant="" href="https://art-portfoilo.vercel.app/" className="button visit">Visit</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                </Carousel>

                {/* Modal for full image view */}
                <Modal show={showModal} onHide={handleCloseModal} centered size='lg' className="background" >
                    <Modal.Body className="p-1 rounded-5" >
                        <img src={selectedImage}
                            alt="Full View"
                            className="d-block w-100"
                            style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'cover',borderTopRightRadius:'0.5rem', borderTopLeftRadius:'0.5rem' }}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="" onClick={handleCloseModal} className="button visit">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Container>
    )
}
export default Work;