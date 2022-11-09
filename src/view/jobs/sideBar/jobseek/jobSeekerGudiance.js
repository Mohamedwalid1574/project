import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import "../es_jobs.css";
import YoutubeEmbed from '../video';
function JobSeekerfirst() {
    return (
        <>
            <div className='d-flex '>
                <div className='d-flex es_div1_job'>
                <img alt='' className='es_img2' src={"data:image/png;base64,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"}/>
                <h6 className='es_font5'>L E A R N I N G</h6></div>
            </div>
            {/* <div> */}
                <div className='es_div2_job'>
                <h2>Esraa, we’re here to help you land your next job</h2>
                <p>Let industry experts guide you with concrete steps you can take to land your next job.</p>
                <div className='d-flex'>
                    <img alt='' className='es_img4' src='https://static-exp1.licdn.com/sc/h/c6jthr2qabqnubzowrdxg1e6k' />
                    <p>Millions of people are learning on LinkedIn Learning</p>
                </div>
                </div>
                <div className='d-flex es_cards_job'>
                    <div className='es_div5_job'>
                        <div className='card es_card_job es_btn'><a href='/first' className='es_link'>1. I want to improve my resume</a></div>
                        <div className='card es_card_job'><a href='/second' className='es_link1'>2. I want to inprove my linkedin profile page</a></div>
                        <div className='card es_card_job'><a href='/third' className='es_link1'>3. I want to get a referral</a></div>
                        <div className='card es_card_job'><a href='/forth' className='es_link1'>4. I want to use linkedin to network to find a job</a></div>
                        <div className='card es_card_job'><a href='/check' className='es_link1'>5. Checklist of best practices for getting a job</a></div>
                    </div>
                    <div>
                    <div className='es_div3_job card'>
                        <h4>I want to improve my resume</h4>
                        <p className='es_font4 es_font3'>Learn from our resume industry expert, whose videos have been watched by <b>over 400,000 </b>job seekers and helped them land a job</p>
                        <div>
      <YoutubeEmbed embedId="rokGy0huYEA" />
    </div>
    <h5>The fundamentals of an awesome resume (10min)</h5>
    <p>From the course: <a href='#' className='es_link'> Resume Makeover</a></p>
    <p>Key takeaways</p>
    <ul>
        <li className='es_font4 es_font3'>Your resume is a compelling marketing document, not an autobiography.</li>
        <li className='es_font4 es_font3'>Make your resume unique by using your own voice, so you can stand out in the sea of resumes.</li>
        <li className='es_font4 es_font3'>Make the words earn their spot - say what you need to without being too brief or too wordy.</li>
    </ul>
                    </div>
                    <div className='card es_div3_job ' >
                        <div className='d-flex'>
<img alt='' className='es_img5' src={"data:image/png;base64,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"}/>
                <p className='es_font2'> L E A R N I N G</p>
                        </div>
                        <h6>Get LinkedIn Learning with Premium</h6>
                        <div className='d-flex '>
                        <ul>
        <li className='es_font4 es_font3'>Candidates with Premium get hired twice as fast on average.</li>
        <li className='es_font4 es_font3'>Reach out directly to any recruiters with 3 InMail credits.</li>
        <li className='es_font4 es_font3'>Get access to over 17,000 courses taught by industry experts.</li>
    </ul>
    <a href='#' className='es_div4_job'> <div className='btn btn-primary'>Start my free manth</div></a>
    </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default JobSeekerfirst;