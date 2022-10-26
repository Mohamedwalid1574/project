import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import "./es_jobs.css"

function AppSetting(){
    return (
        <div className='bg-light es_body_app2'>
        <div className='es_body_app'>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="#095bc7" className="es_icon bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
        <a href='#' className='es_link'>Back</a>
        <h4 className='es_header_app '>Job application settings</h4>
        <div className='card es_card'>
        <div className='d-flex'>
        <div className='col-11'>
        <h6>Save uploaded resumes and answers to application questions</h6>
        <p className='es_font2'>Allow LinkedIn to save your resumes and answers about your work experience and skills. You can always change your answers with each application.</p>
        </div>
        <div >
            <label className="switch">
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
        </div>
        <div className='es_div2_app'>
            <hr/>
        <h6>Manage your resumes</h6>
        <p className='es_font2'>You can submit the following resumes with your application.</p>
        <div >
        <form>
        <label class="custom-file-upload">
    <input type="file"/>
 Upload resume
</label>
            </form>
        </div>
        <p className='es_font3 es_font2'>DOC, DOCX, PDF(5MB)</p>
        </div>
        </div>
        <div className='d-flex'>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="es_icon bi bi-shield-exclamation" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
  <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z"/>
</svg><h6> Your privacy is important</h6>
</div>
<p className='es_font4'>We include a copy of your full profile with your application.</p>
<a href='#' className='es_link es_font4'>Learn </a>
<span className="es_font4"> about what we do with your resume.</span>
        </div>
        </div>
    )

}
export default AppSetting;