import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import "./es_jobs.css"
function Alartjobs() {
  return (
    <>
    <div class="container mt-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>
      <div variant="light" className='modal ' id='myModal'>
      <div className="modal-dialog" style={{marginLeft:"300px"}}>
    <div className="modal-content es_alart">
      <div className="modal-header">
        <h5 className='es_font'>Job alarts</h5>
      </div>
      <div className="modal-body">
        <div className='es_div'>
            <div className=' es_div2'>
      <img className='es_img1' src={"https://static.vecteezy.com/system/resources/previews/002/828/322/non_2x/two-friends-on-video-meeting-video-call-concept-flat-illustration-vector.jpg"}/>
        <h5 className='es_font'>You have no job alerts yet</h5>
        <p className='es_font'>
        Flip the switch on a job search page to create a new alert.
        </p>
        <div>
            <button className="es_button1">
            <span className="es_font1">Search for jobs</span></button>
        </div>
        </div>
        <hr/>
        <div className='d-flex'>
        <div className='col-11'>
        <h6 className='es_font'>Job recommendations</h6>
        <p className='es_font'>Based on your job alerts, activity, and profile. <a href='#' className='es_link'>Learn more.</a></p>
        </div>
        <div >
        <label className="switch">

  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
        </div>
        </div>
    </div>
        <div className="modal-footer d-flex justify-content-end">
        <button className='es_button2' data-bs-dismiss="modal">
            Done
          </button>
      </div>
      </div>
        <hr />
        </div>
        </div>
        </div>
      
    </>
  );
}

export default Alartjobs;