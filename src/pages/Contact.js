import React from 'react';
import { Redirect } from 'react-router';
import Hero from "../components/Hero";
import { Button } from "shards-react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

// import '../App.css'
import ContactHeroImage from "../img/contact-us.jpg";
import { FormspreeProvider, ValidationError, useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm('mbjpnldn');

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
                                placeholder="Enter email" 
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

    // function SocialMediaLinks(){
    //     return(

    //     )
    // }

    return(<>
        <Hero
            backgroundImageUrl={ContactHeroImage}
            title="Contact"
            headerStyle={{color: '#fff', borderLeft: 'none'}}
        />
        <div className="container lead">
            <div className="row alloy-row">
                <div className="col-md-4 alloy-content">
                    <h4 className="title" style={{color: '#212529'}}>
                        Stay connected with us:
                    </h4>
                    <ul>
                        <li>
                            Phone number: 917-803-9999
                        </li>
                        <li>
                            Email: alloymixinc@gmail.com
                        </li>
                        <li>
                            Address: 4401 1st Avenue Brooklyn, NY 11232
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 alloy-content">
                    <h1 style={{borderLeft: 0,paddingLeft:0}}>
                        We'd love to hear from you.
                    </h1>
                    <p className="title" style={{color: '#212529'}}>
                        Contact us to get a quota or answers to any questions you may have!
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