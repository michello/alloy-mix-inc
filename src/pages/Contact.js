import React from 'react';
import Hero from "../components/Hero";
import { Button } from "shards-react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import ContactHeroImage from "../img/contact-us.jpg";
import { FormspreeProvider, ValidationError, useForm } from '@formspree/react';

import { FaPhoneSquare, FaLinkedinIn, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

import '../styles/Contact.css';

const Contact = () => {
    const [state, handleSubmit] = useForm('mbjpnldn');
    const socialMedia = [
        {
            link: 'tel:917-803-9999',
            icon: <FaPhoneSquare/>,
            text: '917-803-9999',
        },
        {
            link: 'https://www.linkedin.com/in/henry-lam-a2b7b879/',
            icon: <FaLinkedinIn/>,
            text: 'LinkedIn'
        },
        {
            link: 'mailto:alloymixinc@gmail.com',
            icon: <FaEnvelope/>,
            text: 'alloymixinc@gmail.com'
        },
        {
            link: 'https://www.google.com/maps/dir//4401+1st+Ave,+Brooklyn,+NY+11232/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c25abb01ed0787:0x42057045a68cd997?sa=X&ved=2ahUKEwiNnvz65KHvAhXnEVkFHbw8BE0QwwUwAHoECAMQAw',
            icon: <FaMapMarkedAlt/>,
            text: '4401 1st Avenue Brooklyn, NY 11232'
        }
    ]

    function ContactForm() {
        return(
            <FormspreeProvider project="mbjpnldn">
                <Form onSubmit={handleSubmit}>
                    <Form.Row controlId="formBasicEmail">
                        <Col>
                            <Form.Label
                                htmlFor="email"
                            >
                                Email
                            </Form.Label>
                        </Col>
                        <Col xs={9}>
                            <Form.Control
                                sm="10"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter email." 
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col/>
                        <Col xs={9}>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Col>
                    </Form.Row>
                    <Form.Row controlId="exampleForm.ControlTextarea1">
                        <Col>
                            <Form.Label style={{textAlign: 'left'}}>
                                Enter your inquiry here
                            </Form.Label>
                        </Col>
                        <Col xs={9}>
                            <Form.Control
                                id="inquiry"
                                type="inquiry"
                                name="inquiry"
                                as="textarea"
                                placeholder="Enter inquiry." 
                                rows={3} />
                        </Col>
                    </Form.Row>
                    <Form.Row style={{paddingTop: '1em',}}>
                        <Col/>
                        <Col xs={9}>
                            <Button 
                                type="submit"
                                disabled={state.submitting}>
                                Contact Us
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
            </FormspreeProvider>
        )

    }

    function SocialMediaLinks({links}) {
        
        return(
            <ul className="social-media-links">
                {links.map(({link, icon, text}) => {{
                        return(
                            <li>
                                <div className="icon">
                                    {icon}
                                </div>
                                <div className="link">
                                    <a
                                        className="social-media-link"
                                        style={{color:'#5a6169',}}
                                        target="_blank"
                                        href={link}>
                                        {text}
                                    </a>
                                </div>
                                
                            </li>
                        )}
                    }
                )}
            </ul>
        )
    }

    return(
        <>
        <Hero
            backgroundImageUrl={ContactHeroImage}
            title="Contact"
            headerStyle={{color: '#fff', borderLeft: 'none'}}
        />
        <div className="container lead">
            <div className="row alloy-row">
                <div className="col-md-4 alloy-content" style={{marginBottom:'4em'}}>
                    <p className="title" style={{color: '#212529', marginBottom: '0'}}>
                        Stay connected with us:
                    </p>
                    <SocialMediaLinks links={socialMedia}/>
                </div>
                <div className="col-md-8 alloy-content">
                    <h1 style={{borderLeft: 0,paddingLeft:0}}>
                        We'd love to hear from you.
                    </h1>
                    <p className="title" style={{color: '#212529'}}>
                        Please contact us with your questions and requests!
                    </p>
                    {state.succeeded
                        ? <>Thanks for reaching out! We'll get back to you soon.</>
                        : <ContactForm/>
                    } 
                </div>
            </div>
        </div>
    </>)
}
export default Contact;