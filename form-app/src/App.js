import React from 'react';
import './App.css';
const App = () => {
  return(
    <div>
      <form className='form-style'>
        <h3 className='title-text'>Form in React</h3>

        <label className='label-style'>First Name</label><br/>
        <input type='text' placeholder='Enter First Name' className='text-field-style' required></input><br/><p/>
        
        <label className='label-style'>Last Name</label><br/>
        <input type='text' placeholder='Enter Last Name' className='text-field-style' required></input><br/><p/>
        
        <label className='label-style'>Email</label><br/>
        <input type='text' placeholder='Enter Email' className='text-field-style' required></input><br/><p/>
        
        <label className='label-style'>Contact</label><br/>
        <input type='text' placeholder='Enter Mobile number' className='text-field-style' required></input><br/><p/>

        <label className='label-style'>Gender</label><br/>
        <input type='radio' className='radio-style' name="rb" value="Male"></input>
        <label>Male</label>
        <input type='radio' className='radio-style' name="rb" value="Female"></input>
        <label>Female</label><p/>
        
        <label className='label-style'>Upload Resume</label>
        <input type='file' className='radio-style'></input><p/>

        <label className='label-style'>Website</label><br/>
        <input type='text' className='text-field-style' placeholder='Enter URL'></input><p/>

        <label className='label-style'>How did you hear about this job?</label><br/>
        <select name="options" className='dropdown-style'>
          <option value="College">College</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Naukri">Naukri</option>
          <option value="Others">Others</option>
        </select><p/>

        <label className='label-style'>About</label><br/>
        <textarea className='textarea-style'></textarea><p/>

        <input type="submit" className='btn-style'></input>
      </form>
    </div>
    
  );
}

export default App;