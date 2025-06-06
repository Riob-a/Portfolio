import { Container, Row, Col, Card, Button} from "react-bootstrap";

function Resume() {
    return (
        <Container>
            <Row className="qualifications my-5">
                <Col className="expirience p-4" data-aos="fade-up" data-aos-duration="800" md={4}>
                    <h4 className="mb-4">Experience</h4>
                    <hr />
                    <Card className="rounded-5 gen-card">
                        <Card.Title>2024 - Present</Card.Title>
                        <strong className="card-p">Freelance</strong>
                        <p className="card-p"> Web Developer (Front and Backend)</p>
                    </Card>
                    <hr />

                    <Card className="rounded-5 gen-card">
                        <Card.Title>2022</Card.Title>
                        <strong className="card-p"> Kenyatta National Hospital</strong>
                        <p className="card-p">Industrial attache</p>
                    </Card>
                    <hr />

                    <Card className="rounded-5 gen-card">
                        <Card.Title>2021</Card.Title>
                        <strong className="card-p">Kenya Technical Trainers Institute</strong>
                        <p className="card-p">Industrial attache</p>
                    </Card>
                </Col>

                <Col className="expertise p-4" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" md={4}>
                    <h4 className="mb-4">Expertise</h4>
                    {/* <p>Logo, Brand Identity, Packaging, Poster & Editorial, Social Media Post, 3D & Motion Graphic</p> */}
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
                    <hr />
                    <Card className="rounded-5  gen-card">
                        <Card.Title>2024</Card.Title>
                        <Card.Text>Moringa</Card.Text>
                        <Card.Text>
                            <strong>Software-develpment</strong>
                            <p>Grade : ( A - Pass )</p>
                        </Card.Text>
                    </Card>
                    <hr />
                    <Card className="rounded-5 gen-card">
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
                    <Button variant="" href="/DERRICK RIOBA ONGWAE Software - engineer(C).pdf" download className="button visit  rounded-3 me-4 m-2">
                        Download C.V
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Resume;