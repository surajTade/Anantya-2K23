import React from 'react'
import './Webbit.css'
import Navbar from '../Navbar'

const eventRegister = () => {


  function HandleEventClick(e) {
    const formEle = document.getElementById("form");
    const formDatab = new FormData(formEle);
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbwB8Chnrvv4YWELc4l-hsEMmQQS8uJG2K6BmlfjgHn7NOis_r3_riQpvSke-L2WR2sh/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => {
      // console.log("Response status:", res.status);
      alert('Successfully submitted');
      document.getElementById("form").reset();
    })
    .catch((error) => {
      console.log(error);
    });

   

  }



  return (
    <>

        <Navbar/>
       
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        
       <div className='col-lg-7 col-md-12 col-12 form-step'>
        

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2 className="font-normal">BABYCONN</h2>
        <div id="personalInfo">
                            <h1 id="personal-info" >Personal Information</h1>
                        </div>
        </div>
                   
                       
                       <form action="" className='reg-form' onSubmit={(e) => HandleEventClick(e)} id="form">

                       

                    
                       
                       <label id='lable-tag' for="name">Name </label>
                       <input className="column" type="text" name="name" id="registeration-input" placeholder="Same as to be printed on Certificates" required/>
                     
                        
                        <label id="lable-tag" className="" for="email" >Email   </label>
                        <input type="email" className="column" name="email" id="registeration-input" placeholder="Preferred official email address" required></input>
                   
                
                        <label id="lable-tag" className="" for="contact">Contact   </label>
                        <input type="tel" className="column" name="contact" id="registeration-input" placeholder="Active whatsapp Number" required></input>

                        
                        <label id="lable-tag" className="" for="college_name">College Name  </label>
                        <input type="tel" className="column" name="college_name" id="registeration-input" placeholder="Enter Your College Name" required ></input>

                        <label id="lable-tag" className="" for="college_name">Department  </label>
                        <input type="tel" className="column" name="dept" id="registeration-input" placeholder="Enter Your Department" required ></input>


                        <label id="lable-tag" className="" for="college_name">Roll Number  </label>
                        <input type="tel" className="column" name="roll_no" id="registeration-input" placeholder="Ex: TYCOC233" required ></input>

                        
                        <label id="lable-tag" className="" for="academic_year">Academic Year   </label>
                        <input type="tel" className="column" name="academic_year" id="registeration-input" placeholder="Eg. FE/SE/TE/BE" required></input>
                      

                        <label id="lable-tag" className="" for="" >Enter Your PRN</label>
                        <p className='p-tag'>*Note: If you are from Other College Please Pay registration fee  And Add transaction ID otherwise registration will be rejected.</p>

                        <input type="text" className="column" name="PRN" id="registeration-input" placeholder="PRN or Transaction ID" required></input>
                        <label id="lable-tag" className="" for="UPI ID" >UPI ID:</label>


                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                         
                         <button name="Name" type="submit" className='pulse'>Submit</button>
                      </div>

                      
                       </form>
                       </div>
                   
       </div>
                    

         
    </>
  )
}

export default eventRegister