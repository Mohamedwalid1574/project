import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import "../es_jobs.css";
import YoutubeEmbed from '../video';
function Checklist()
{
    return(
        <>
            <div className='d-flex '>
                <div className='d-flex es_div1_job'>
                <img className='es_img2' src={"data:image/png;base64,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"}/>
                <h6 className='es_font5'>L E A R N I N G</h6></div>
            </div>
            <div>
                <div className='es_div2_job'>
                <h2>Esraa, we’re here to help you land your next job</h2>
                <p>Let industry experts guide you with concrete steps you can take to land your next job.</p>
                <div className='d-flex'>
                    <img className='es_img4' src='https://static-exp1.licdn.com/sc/h/c6jthr2qabqnubzowrdxg1e6k'/>
                    <p>Millions of people are learning on LinkedIn Learning</p>
                </div>
                </div>
                <div className='d-flex es_cards_job'>
                    <div className='es_div5_job'>
                        <div  className='card es_card_job '><a href='/first' className='es_link1'>1. I want to improve my resume</a></div>
                        <div  className='card es_card_job'><a href='/second' className='es_link1'>2. I want to inprove my linkedin profile page</a></div>
                        <div  className='card es_card_job'><a href='/third' className='es_link1'>3. I want to get a referral</a></div>
                        <div  className='card es_card_job'><a href='/forth' className='es_link1'>4. I want to use linkedin to network to find a job</a></div>
                        <div  className='card es_card_job es_btn'><a href='/check' className='es_link'>5. Checklist of best practices for getting a job</a></div>
                    </div>
                    <div>
                    <div className='es_div3_job card'>
                        <h4>Checklist of best practices for getting a job</h4>
                        <p className='es_font4 es_font3'>These are the steps to finding the right job. Use this checklist to land your next opportunity</p>
    <h6 className='es_space'>Find the right job</h6>
    <div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Search for relevant jobs on LinkedIn</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label"><a href='#' className='es_link'>Set up job alerts</a>to ensure you’re receiving relevant job notifications for your job preferences</label>
</div>
<h6 className='es_space'>Apply and prepare for the job</h6>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Use to <a href='#' className='es_link'> Resume Assistant feature</a>in Microsoft Word to create your resume</label>
</div>
    <div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Upload a default resume to save up to four additional resume options for different job descriptions</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Use the<a href='#' className='es_link'> Interview Preparation feature</a></label>
</div>
<h6 className='es_space'>Update your LinkedIn profile</h6>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Add a recent <a href='#' className='es_link'> profile photo</a></label>
  <p className='es_font4 es_font3'>Having a photo can result in 21x more profile views</p>
</div>
    <div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Update your current location</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Update your education information</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Add contact information</label>
</div>
<h6 className='es_space'>Make your profile stand out</h6>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Update the summary on your profile</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label"> Enable the <a href='#' className='es_link'> #OpenToWork feature</a></label>
  <p className='es_font4 es_font3'>Members with an OpenToWork photo frame are on average receiving 40% more InMails from recruiters</p>
</div>
    <div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Ask connections to endorse your skills</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Ask your connections for recommendations</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Take <a href='#' className='es_link'>Skill Assessments </a>to validate your skills and receive a badge to show your proficiency</label>
</div>
<h6 className='es_space'>Expand your professional network</h6>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Connect with similar professionals</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Explore topics and conversations of interest in <a href='#' className='es_link'>LinkedIn Groups</a></label>
</div>
    <div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Request a referral
</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Contact the job poster</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Follow the company’s LinkedIn page</label>
</div>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Engage with the company’s content</label>
</div>
<h6 className='es_space'>Close your skills gap</h6>
<div class="form-check es_font4">
  <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
  <label class="form-check-label">Start learning and close your skill gaps with<a href='#' className='es_link'>LinkedIn Learning</a></label>
</div>
</div>
                    <div className='card es_div3_job '>
                        <div className='d-flex'>
<img className='es_img5' src={"data:image/png;base64,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"}/>
                <p className='es_font2'> L E A R N I N G</p>
                        </div>
                        <h6>Get LinkedIn Learning with Premium</h6>
                        <div className='d-flex '>
                        <ul>
        <li className='es_font4 es_font3'>Candidates with Premium get hired twice as fast on average.</li>
        <li className='es_font4 es_font3'>Reach out directly to any recruiters with 3 InMail credits.</li>
        <li className='es_font4 es_font3'>Get access to over 17,000 courses taught by industry experts.</li>
    </ul>
    <a href='#' className='es_div4_job'> <button className='btn btn-primary'>Start my free manth</button></a>
    </div>
                    </div>
                    

                </div>
                </div>
            </div>

        </>
    )
}
export default Checklist;