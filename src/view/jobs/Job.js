/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import './Job.css'
// eslint-disable-next-line no-unused-vars
import Button from 'react-bootstrap/Button';
// eslint-disable-next-line no-unused-vars
import ButtonGroup from 'react-bootstrap/ButtonGroup';
// eslint-disable-next-line no-unused-vars
import Dropdown from 'react-bootstrap/Dropdown';
// eslint-disable-next-line no-unused-vars
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
// eslint-disable-next-line no-unused-vars
import Form from 'react-bootstrap/Form';
// eslint-disable-next-line no-unused-vars
import Nav from 'react-bootstrap/Nav';
// eslint-disable-next-line no-unused-vars
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// eslint-disable-next-line no-unused-vars
import Card from 'react-bootstrap/Card';
// eslint-disable-next-line no-unused-vars
import ListGroup from 'react-bootstrap/ListGroup';
import HeaderAndMessage from '../headerAndMessage/HeaderAndMessage';
import { Link } from 'react-router-dom';

function Job() {
    return (
        <>
        <HeaderAndMessage/>
            <div className='maro_job'>
            <div className='container'>
                <div className='row'>
                <section className='maro_se1 col-3'>
                    
                    <div className='maro_se1_lf'>
                        <div className='maro_se1_lf1'>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M13 4a3 3 0 00-3-3H3v14l5-4.5 5 4.5z"></path>
</svg>
                            
                            <Link to='/' className='maro_se1_lk'>My job</Link>
                        </div>
                        <div className='maro_se1_lf1'>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M12.87 8H3.13l.49-3.21a4.43 4.43 0 018.76 0zM15 11.84a2.56 2.56 0 00-.5-1.51L13.5 9h-11l-1 1.33a2.56 2.56 0 00-.5 1.51V13h5.59a1.64 1.64 0 00-.09.5 1.5 1.5 0 003 0 1.64 1.64 0 00-.09-.5H15z"></path>
</svg>
                            <Link to='/' className='maro_se1_lk' >Job alerts</Link>
                        </div>

                        <div className='maro_se1_lf1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M12.57 2H15L6 15l-5-5 1.41-1.41 3.31 3.3z"></path>
</svg>
                            <Link to='/assessment' className='maro_se1_lk'>Skill Assessments</Link>
                        </div>

                        <div className='maro_se1_lf1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z"></path>
</svg>
                            <Link to='/interview' className='maro_se1_lk'>Interview prep</Link>
                        </div>

                        <div className='maro_se1_lf1'>
                            
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
<path d="M9.13 1H4a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V4.9zM11 13H5V3h3v3h3v7zM6 8h4v1H6V8zm0 2h3v1H6v-1z"></path>
</svg>
                            <Link to='/' className='maro_se1_lk'>Resume Builder</Link>
                        </div>

                        <div className='maro_se1_lf1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M3 3h8v10H3a2 2 0 01-2-2V5a2 2 0 012-2zm10.5 1l-1.5.75v6.5l1.5.75H15V4z"></path>
</svg>
                            <Link to='/first' className='maro_se1_lk'>Job seeker guidance</Link>
                        </div>

                        <div className='maro_se1_lf1'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M6 1L3 2.76 4 5.2l-.36.63L1 6.22v3.52l2.55.39.38.66L3 13.22 6 15l1.6-2h.76L10 15l3-1.76-.94-2.43.38-.65L15 9.78V6.26l-2.58-.4-.36-.62 1-2.46L10 1 8.37 3.08h-.71zm2 5a2 2 0 11-2 2 2 2 0 012-2z"></path>
</svg>
                            <Link to='/appliaction' className='maro_se1_lk' >Application settings</Link>
                        </div>
                        </div>


                    <div className='maro_se1_lf2 mt-4 '>
                        <div className='maro_se1_ic'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z"></path>
</svg>
                            </div>
                        
                            <a href='#' className='maro_se1_lk2'>post a free job</a>
                        
                    </div>





                
            </section>
                <section className='maro_se2 col-5'>
                <div className='maro_se2_mid'>
<p className='maro_se2_h1'>
All jobs
</p>
<p className='maro_se2_h2'>
Egypt
</p>

<div className='maro_se2_pt1'>
<img src='https://assets.jibecdn.com/prod/pepsico/0.22.199/assets/pepsico-og-logo.jpg' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>Sales CSR</a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '>pepsiCo</a>
</div>
<p className='maro_se2_lk3 '>
Egypt (Remote)
</p>

<div className='maro_se2_pt13 '>
    <div className='maro_se2_ic1 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
</svg>
</div>
<p className='maro_se2_lk4'>
    Actively recruiting
</p>
</div>
<div>


<a href='#' className='maro_se2_lk5 '>22 hours ago</a>
</div>
</div>

<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>








</div>
<div className='maro_se2_ln'></div>

<div className='maro_se2_pt2'>
<img src='https://assets.jibecdn.com/prod/pepsico/0.22.199/assets/pepsico-og-logo.jpg' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>Sales CSR</a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '>pepsiCo</a>
</div>
<p className='maro_se2_lk3 '>
Egypt (Remote)
</p>

<div className='maro_se2_pt13 '>
    <div className='maro_se2_ic1 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
</svg>
</div>
<p className='maro_se2_lk4'>
    Actively recruiting
</p>
</div>
<div>


<a href='#' className='maro_se2_lk5 '>23 hours ago</a>
</div>

</div>
<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>


</div>
<div className='maro_se2_ln'></div>

<div className='maro_se2_pt3'>
<img src='https://assets.jibecdn.com/prod/pepsico/0.22.199/assets/pepsico-og-logo.jpg' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1'>Audit Director</a>
</div>
<div>
<a href='#' className='maro_se2_lk2 '>pepsiCo</a>
</div>
<p className='maro_se2_lk3 '>
Egypt (Remote)
</p>

<div className='maro_se2_pt13 '>
    <div className='maro_se2_ic1 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
</svg>
</div>
<p className='maro_se2_lk4'>
    Actively recruiting
</p>
</div>
<div>


<a href='#' className='maro_se2_lk5 '>23 hours ago</a>
</div>

</div>
<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>


</div>
<div className='maro_se2_ln1'></div>

<div className='maro_se2_pt4'>
    <div>
<a href='#' className='maro_se2_1'>show all</a>
</div>
<div className='maro_se2_2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
<path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
</svg>
</div>
</div>


</div>





                <div className='maro_se2_mid2 mt-4 '>
                    <div className='maro_se2_sp'>
<div className='maro_se2_ptl'>
<img src='https://scontent.fcai20-4.fna.fbcdn.net/v/t39.30808-6/307293360_192280709858285_1579025695482809774_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEsCJvH6GkIdtEXmYxRGdx16WySYHmLBn3pbJJgeYsGfXb50CP9R5JHghXFhnpYmfmVpAbfFbr2exKQkw6cZsIt&_nc_ohc=JMerqqS65PcAX9o4b3B&tn=KzFv3Z8VYTVh1m5a&_nc_ht=scontent.fcai20-4.fna&oh=00_AfAiSBoj7QONUKVOOlktAPErnYS2i8sdH6d8Uz1uGOFXpg&oe=636637D1' className='maro_se2_ptimg'></img>
</div>
<div className='maro_se2_ptm'>
<div className='maro_se2_p1'>
    <p>
    Try Premium to see jobs where you would be a top applicant
    </p>
    </div>

<div className='maro_se2_p2'>
<img src="https://bareillycollege.org/wp-content/uploads/2022/07/elon-musk-773x1024.jpg" className="maro_se2_img12" />
<img src="https://www.kibrispdr.org/data/782/mark-zuckerberg-profile-pic-5.jpg" className="maro_se2_img22" />
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Diana%2C_Princess_of_Wales_1997_%282%29.jpg" className="maro_se2_img32" />
<p className='maro_se2_p21'>
Millions of members use Premium
</p>
</div>

<div className='maro_se2_p3'>
<button className='maro_se2_btn'>
    Try Free for 1 month
</button>
</div>

</div>
<div className='maro_se2_ptr'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z"></path>
</svg>
</div>
</div>
</div>







<div className='maro_se2_mid3'>
<p className='maro_se2_h1'>
Remote opportunities
</p>
<p className='maro_se2_h2'>
Because you expressed interest in remote work
</p>

<div className='maro_se2_pt1'>
<img src='https://media-exp1.licdn.com/dms/image/C4D0BAQGRO0GGz87wGQ/company-logo_100_100/0/1607525955872?e=1675296000&amp;v=beta&amp;t=mNaePoKC_qafahc35x2LZ5-PiDZf8K_FQh-4VxVxXP8' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>Telemarketing Representative </a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '>Proper Business Solutions </a>
</div>
<p className='maro_se2_lk3 '>
Cairo, Egypt (Remote)
</p>

<div className='maro_se2_pt13 '>
    <div className='maro_se2_ic1 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
</svg>
</div>
<p className='maro_se2_lk4'>
    Actively recruiting
</p>
</div>

<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>
</div>

<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>








</div>
<div className='maro_se2_ln'></div>

<div className='maro_se2_pt2'>
<img src='https://media-exp1.licdn.com/dms/image/C4D0BAQEK2IsMGrbjBw/company-logo_100_100/0/1656337333908?e=1675296000&amp;v=beta&amp;t=bezuP7FzN02cCrF1TpxSOrvzCrNnfJk9M7E5ZdePdhI' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>Animation Specialist (Paid Intership)</a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '>Vivolang</a>
</div>
<p className='maro_se2_lk3 '>
Egypt (Remote)
</p>

<div className='maro_se2_pt13 '>
    <div className='maro_se2_ic1 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
</svg>
</div>
<p className='maro_se2_lk4'>
    Actively recruiting
</p>
</div>
<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>

</div>
<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>


</div>
<div className='maro_se2_ln'></div>

<div className='maro_se2_pt3'>
<img src='https://media-exp1.licdn.com/dms/image/C4E0BAQFl_t5bHh2PtQ/company-logo_100_100/0/1646773171984?e=1675296000&amp;v=beta&amp;t=yMqC4pquWNW7Xu1uKtGdwhC7OD6xeee15yBLFyrfP6Q' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1'>Social Media Manager</a>
</div>
<div>
<a href='#' className='maro_se2_lk2 '>Taswiki</a>
</div>
<p className='maro_se2_lk3 '>
Cairo, Egypt (Remote)
</p>

<div className='maro_se2_pt13 '>
    <div className='maro_se2_ic1 '>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"></path>
</svg>
</div>
<p className='maro_se2_lk4'>
    Actively recruiting
</p>
</div>

<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>
</div>
<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>


</div>
<div className='maro_se2_ln1'></div>

<div className='maro_se2_pt4'>
    <div>
<a href='#' className='maro_se2_1'>show all</a>
</div>
<div className='maro_se2_2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
<path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
</svg>
</div>
</div>
</div>




<div className='maro_se2_mid4'>
<p className='maro_se2_h1'>
Hiring in your network
</p>
<p className='maro_se2_h2'>
Explore relevant jobs in your network
</p>

<div className='maro_se2_pt1'>
<img src='https://media-exp1.licdn.com/dms/image/C4E0BAQGSmp0ug3-Fxw/company-logo_100_100/0/1554371810147?e=1675296000&amp;v=beta&amp;t=1ffN3LfoD2grEeB536TlArc9roI4GMC3SJscxVC3i8w' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>ممثل خدمة العملاء </a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '>Xceed </a>
</div>
<p className='maro_se2_lk3 '>
Qesm El Maadi, Cairo, Egypt (On-site)
</p>



<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>
</div>

<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>








</div>
<div className='maro_se2_ln'></div>

<div className='maro_se2_pt2'>
<img src='https://media-exp1.licdn.com/dms/image/D4D0BAQGFncMgtp6phQ/company-logo_100_100/0/1665577107397?e=1675296000&amp;v=beta&amp;t=OV4atZgrLtN3xMMWjrTMOaPDLx0TBdkcuGgFU4CIGcU' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>Call Center Representative</a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '>Go Partners</a>
</div>
<p className='maro_se2_lk3 '>
Giza, Al Jizah, Egypt (On-site)
</p>


<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>

</div>
<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>


</div>
<div className='maro_se2_ln'></div>

<div className='maro_se2_pt3'>
<img src='https://media-exp1.licdn.com/dms/image/C4D0BAQEsjkFlVErqwA/company-logo_100_100/0/1631352503557?e=1675296000&amp;v=beta&amp;t=XXCV7Ojn_dVLpdUWIxzcrLDZWqTTsKRouYpMUuztN1M' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1'>Customer Service Advisor</a>
</div>
<div>
<a href='#' className='maro_se2_lk2 '>Etisalat Business Services UAE</a>
</div>
<p className='maro_se2_lk3 '>
Cairo, Egypt (On-site)
</p>



<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>
</div>
<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>


</div>
<div className='maro_se2_ln1'></div>

<div className='maro_se2_pt4'>
    <div>
<a href='#' className='maro_se2_1'>show all</a>
</div>
<div className='maro_se2_2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
<path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
</svg>
</div>
</div>
</div>



<div className='maro_se2_mid5'>
<p className='maro_se2_h1'>
Recommended for you
</p>
<p className='maro_se2_h2'>

Based on your profile and search history
</p>

<div className='maro_se2_pt1'>
<img src='https://media-exp1.licdn.com/dms/image/C4E0BAQG4sjUIOM611Q/company-logo_100_100/0/1596019871330?e=1675296000&amp;v=beta&amp;t=6XcMv1_F9VJ0gZIr_AXtA4Kq1jm_yLQLKFT5RE9qoSE' className='maro_se2_img1'/>

<div className='maro_se2_pt12'>

    <div>
<a href='#' className='maro_se2_lk1 '>Assistant</a>
</div>
<div>
<a href='#' className='maro_se2_lk2  '> TAQNOR </a>
</div>
<p className='maro_se2_lk3 '>
Cairo, Egypt (On-site)
</p>



<div className='maro_se2_1day'>
<a href='#' className='maro_se2_lkday'>1 day ago </a>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
<a href='#' className='maro_se2_lkday2'>Easy Apply</a>
</div>
</div>

<div className='maro_se2_pt14'>
    <div className='maro_se2_ic21'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" data-supported-dps="32x32" fill="currentColor" class="mercado-match" width="32" height="32" focusable="false">
<path d="M16 11.5a4.64 4.64 0 00-1.95.43l6 6A4.64 4.64 0 0020.5 16a4.42 4.42 0 00-4.5-4.5z"></path>
<path d="M16 9.5a6.52 6.52 0 015.54 9.92l3.05 3A15.47 15.47 0 0030 16a15 15 0 00-14-9 15.67 15.67 0 00-5.8 1.08l2.38 2.38A6.47 6.47 0 0116 9.5zM3 3.71L8.29 9A15.42 15.42 0 002 16a15 15 0 0014 9 15.45 15.45 0 006.79-1.51l5.5 5.51.71-.71L3.71 3zm8.05 8.05l1.43 1.42a4.49 4.49 0 00-1 2.82A4.42 4.42 0 0016 20.5a4.49 4.49 0 002.82-1l1.42 1.5a6.52 6.52 0 01-9.19-9.19z"></path>
</svg>
</div>
<div className='maro_se2_ic22'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
<path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22zm-3-1a1 1 0 011 1v12.51L12 13l-5 4.51V4z"></path>
</svg>
</div>
</div>
</div>

<div className='maro_se2_ln1'></div>
<div className='maro_se2_pt4'>
    <div>
<a href='#' className='maro_se2_1'>Search for more jobs</a>
</div>
<div className='maro_se2_2'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
<path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
</svg>
</div>
</div>



</div>


<div className='maro_s2_f'>
<button className='maro_se2_btnf'>
    Show more results
</button>
</div>
                </section>


            <section className='maro_se3 col-4'>
                <div className='maro_se3_rg'>

<div className='maro_se3_pt1'>

<p className='maro_se3_11'>
Job seeker guidance
</p>
<p className='maro_se3_12'>
Recommended based on your activity
</p>
</div>
<div className='maro_se3_x'>
<div className='maro_se3_pt2'>
<p className='maro_se3_21'>
I want to improve my resume
</p>
<img src='https://maarof.com/wp-content/uploads/2020/07/%D8%A8%D8%A7%D9%82%D8%A7%D8%AA-%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82-%D8%A7%D9%84%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9.jpg' className='maro_se3_22' ></img>
</div>
</div>
<div className='maro_se3_pt3'>
<p className='maro_se3_31'>
Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.
</p>
</div>

<div className='maro_se3_pt4'>
    
        <div>
<a href='#'className='maro_se3_41' >show more</a>
</div>
<div className='maro_se3_42'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="mercado-match" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
<path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
</svg>
</div>
</div>





                </div>


<div className='maro_se3_rg2  mt-4 ' > 
<div className='maro_se3_f1'>
    <div className='maro_se3_fx'>
<a href='#' className='maro_se3_lk'>About</a>
<a href='#'className='maro_se3_lk' >Accessibility</a>
<a href='#' className='maro_se3_lk'>Help Center</a>
</div>
<div className='maro_se3_fx'>
<a href='#'className='maro_se3_lk' > AdChoices</a>
{/* <a href='#' className='maro_se3_lk' >Privacy & Terms</a> */}
<Container fluid>
<NavDropdown title="Privacy & Terms" id="collasible-nav-dropdown" className='maro_se3_lk'>
<NavDropdown.Item eventKey="4.1" className='maro_se3_lk2'>Privacy Policy</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className='maro_se3_lk2' >User Agreement</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"className='maro_se3_lk2' >Cookie Policy</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className='maro_se3_lk2' >Copyright Policy</NavDropdown.Item>
        
        
</NavDropdown>
</Container>

</div>
<div className='maro_se3_fx'>
<a href='#'className='maro_se3_lk' >Advertising</a>
<Container fluid>
<NavDropdown title="Business Services" id="collasible-nav-dropdown" className='maro_se3_lk'>
<NavDropdown.Item eventKey="4.1" className='maro_se3_lk20'>Talent Solutions <a href='#' className='maro_se3_lk3'>Find, attract and recruit talent</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className='maro_se3_lk20' >Sales Solutions<a href='#'className='maro_se3_lk3'>Unlock sales opportunities</a> </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2"className='maro_se3_lk20' >Post a job for free  <a href='#' className='maro_se3_lk3'>Get your job in front of quality candidates</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className='maro_se3_lk20' >Marketig Solutions <a href='#' className='maro_se3_lk3'>Acquire customers and grow your business</a></NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className='maro_se3_lk20' >Learning Solutions <a href='#'className='maro_se3_lk3' >Develop talent across your organization</a></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2" className='maro_se3_lk20' >Creat a Company Page <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
<path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
</svg></NavDropdown.Item>
</NavDropdown>
</Container>
{/* <a href='#' className='maro_se3_lk'>Business Services</a> */}
</div>
<div className='maro_se3_fx'>
<a href='#' className='maro_se3_lk' >Get the LinkedIn app </a>

<a href='#' className='maro_se3_lk' >more</a>
</div>
</div>


<div className='maro_se3_endz'>
<p className='maro_se3_e1'> 
    LinkedIn
</p>
<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="mercado-match" width="16" height="16" focusable="false">
<path d="M15 2v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12a1 1 0 011 1zM5 6H3v7h2zm.25-2A1.25 1.25 0 104 5.25 1.25 1.25 0 005.25 4zM13 9.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 007.89 7V6H6v7h2V9.73a1.73 1.73 0 011.52-1.92h.14C10.82 7.8 11 8.94 11 9.73V13h2z" fill="#0a66c2"></path>
</svg>
</div>

<p className='maro_se3_e2'>
    LinkedIn Corporation 2022
</p>

</div>


</div>







            </section>
                </div>
            </div>
            </div>
        </>
    )
}

export default Job;