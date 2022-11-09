/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React from "react";
import './Prepage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Prepage() {

    return (
        <>


        <div className="maro_pre">
            <div className="maro_section1">
                <img alt="" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.png" className="maro_img1" />
                <a href="#" className="maro_link1"> Bake to linkedIn.com</a>
            </div>
            <hr></hr>
            <div className="maro_section2">
                <h1 className="maro_h1" >
                    Join the millions of LinkedIn members using Premium to get ahead.
                </h1>

                <div className="maro_h2">
                    <div className="maro_img_imp">
                        <img src="https://bareillycollege.org/wp-content/uploads/2022/07/elon-musk-773x1024.jpg" className="maro_img12" alt="" />
                        <img src="https://www.kibrispdr.org/data/782/mark-zuckerberg-profile-pic-5.jpg" className="maro_img22" alt="" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Diana%2C_Princess_of_Wales_1997_%282%29.jpg" className="maro_img32" alt="" />
                    </div>
                    <p>
                        Millions of members use Premium
                    </p>
                </div>
                <p className="maro_h3">
                    Start your free 1-month trial today. Cancel anytime. We’ll send you a reminder 7 days before your trial ends.

                </p>

            </div>
            <hr className="maro_hr_se2"></hr>

            <section className="maro_section3">
                <div className="maro_box">

                    <div className="maro_se3_head3">
                        <img src="https://scontent-hbe1-1.xx.fbcdn.net/v/t39.30808-6/307293360_192280709858285_1579025695482809774_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEsCJvH6GkIdtEXmYxRGdx16WySYHmLBn3pbJJgeYsGfXb50CP9R5JHghXFhnpYmfmVpAbfFbr2exKQkw6cZsIt&_nc_ohc=XGWUvi9WaM0AX-RcPXv&tn=KzFv3Z8VYTVh1m5a&_nc_ht=scontent-hbe1-1.xx&oh=00_AfD6SBTqiNHYWscGrj0hKHTStfxhn8UedwiD05Pog0kXjQ&oe=63604911" className="maro_se3_img1" alt="" />
                        <h1 className="maro_se3_h1">
                            marwa, how would you like Premium to help?
                        </h1>
                    </div>
                    <div className="maro_se3_h2">
                        <p>
                            We’ll recommend the right plan for you.
                        </p>
                    </div>

                    <div className="maro_se3_form3">
                        <Form>
                            {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`To job search with confidence and get hired `}
                                    />
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`To develop my professional skills`}
                                    />
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`To grow my network or manage my reputation `}
                                    />
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={` To find leads more effectively`}
                                    />
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={` To find and hire talent faster`}
                                    />

                                </div>
                            ))}
                        </Form>
                    </div>

                    <div className="maro_se3_error">

                        <div id="checkbox-form-component-premiumSurveyQuestion-1-error" className="maro_se3_red">
                            <div id="ember23" class="artdeco-inline-feedback artdeco-inline-feedback--error ember-view mt1" role="alert" data-test-form-element-error-messages="">    <li-icon aria-hidden="true" type="error-pebble-icon" class="artdeco-inline-feedback__icon" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                <path d="M10.8 1H5.2L1 5.2v5.6L5.2 15h5.6l4.2-4.2V5.2zM12 9H4V7h8z"></path>
                            </svg></li-icon>

                                <span class="artdeco-inline-feedback__message">

                                    Please select at least one option
                                </span>
                            </div>
                        </div>

                    </div>


                    <div className="maro_se3_note">
                        <p class="t-black--light text-body-small mt4 display-flex align-items-center maro_se3_gray">
                            <li-icon aria-hidden="true" type="locked" class="v-align-bottom" size="small"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                <path d="M12 6V5a4 4 0 00-8 0v1a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2V8a2 2 0 00-2-2zm-3 6H7V9h2zM6 6V5a2 2 0 014 0v1z"></path>
                            </svg></li-icon><span class="white-space-pre"> </span>Your response is confidential and will not be shared.
                        </p>
                    </div>

                    <hr></hr>

                    <div className="maro_se3_end">
                        <a href="#" className="maro_se3_link">See all plants </a>
                        <Button variant="primary" size="sm" active id="maro_se3_but">
                            Next
                        </Button>{' '}

                    </div>
                    <hr></hr>





                </div>
            </section>
            </div>
        </>
    )
}
export default Prepage;
