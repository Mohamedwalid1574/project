import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import "./es_jobs.css"
function ResumeBuilder() {
  return (
    <>
    <div class="container mt-3">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
  </button>
</div>
      <div variant="light" className='modal ' id='myModal'>
      <div className="modal-dialog" style={{marginLeft:"300px"}}>
    <div className="modal-content es_alart2">
      <div className="modal-header d-block">
        <h5 className='es_font'>Select a resume</h5>
        <p className='es_font2'>Get insights for formatting issues, keywords, and more.</p>
      </div>
      <div className="modal-body">
        <div className='es_div_res'>
            <div className="alert alert-secondary es_font2" role="alert">
            Supported upload formats: 5MB max in .DOCX or .PDF
</div>
<div className='es_font3 es_div2_res'>
Resumes you build on LinkedIn will appear here.
</div>
        
    </div>
        <div className="modal-footer d-flex justify-content-end">
            <div className="es_button1">
            <a href='/profile' className='es_link'>
            <span className="es_font1">Create from profile</span></a>
            </div>
        <form>
        <label class="custom-file-upload2">
    <input type="file"/>
 Upload resume
</label>
            </form>

      </div>
      </div>
        <hr />
        </div>
        </div>
        </div>
      
    </>
  );
}

export default ResumeBuilder;