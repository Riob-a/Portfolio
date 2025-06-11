import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card, Image, Tabs, Tab } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import svg from "../components/images/coding-terminal-svgrepo-com.svg"

import About from "../components/About";
import Resume from "../components/Resume";
import Work from "../components/Work";

import { FaUser, FaFileAlt, FaPen } from "react-icons/fa";
import { ThemeContext } from "../components/ThemeContenxt";

import "./Home.css"
// import './reference.css';

function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="code-body mb-5">
            {/* header */}
            {/* <Container> */}
            <Container fluid className="header-container">
                <hr />
                <Row className="page-top ">
                    <div className="header">
                        <div className="page-top-left">
                            <img src={svg} className="svg" /> Derrick R Ongwae</div>
                        <div className="page-top-right">Portfolio</div>
                    </div>
                </Row>
                <hr />
            </Container>
            <Row className="header-section mb-5 mt-5 flex-nowrap">
                <Col xs='auto' className="header-text" data-aos="fade-up" data-aos-duration="800" data-aos-delay="">
                    <Card className="intro-sidebar">
                        <Card.Text as="h1" className="sidebar-text" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" > PORTFOLIO</Card.Text>
                    </Card>
                </Col>

                <Col className="header-image" xs={10}>
                    <Card className="rounded-5  d-flex justify-content-center align-items-center position-relative" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" >
                        <Card.Text as="h1" className="portfolio-title" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" > PORTFOLIO</Card.Text>
                        <div className="portfolio-footer small" data-aos="fade-in" data-aos-delay="600">2025</div>
                    </Card>
                </Col>

                <Col xs='auto' className="header-text" data-aos="fade-up" data-aos-duration="800" data-aos-delay="">
                    <Card className="intro-sidebar2">
                        <Card.Text as="h1" className="sidebar-text" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" > PORTFOLIO</Card.Text>
                    </Card>
                </Col>
            </Row>
            {/* </Container> */}
            <hr />

            {/* tabs */}
            <Tabs defaultActiveKey="about" id="portfolio-tabs" className="custom-tabs" variant="pills">
                <Tab eventKey="about"
                    title={
                        <span className="d-flex align-items-center gap-2 ">
                            <span className="tab-icon"><FaUser /></span> About me
                        </span>
                    }>
                    <hr />
                    {About()}
                </Tab>

                <Tab eventKey="resume"
                    title={
                        <span className="d-flex align-items-center gap-2">
                            <span className="tab-icon"><FaFileAlt /></span> Resume
                        </span>
                    }>
                    <hr />
                    {Resume()}
                </Tab>

                <Tab eventKey="work"
                    title={
                        <span className="d-flex align-items-center gap-2">
                            <span className="tab-icon"><FaPen /></span> Work
                        </span>
                    }>
                    <hr />
                    {Work()}
                </Tab>

            </Tabs>
            <br />
        </div>
    );
}
export default Home;