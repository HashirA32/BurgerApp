import React from 'react'


export default function LogInPage() {
  return (
    <>
      <div className="LoginCSS Container">       
        <form>
          <div className="mb-3 ">
            <input type="email" className="form-control" placeholder='Email address' id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="mb-3">
            
            <input type="password" className="form-control" placeholder='Password' id="exampleInputPassword1"/>
          </div>
          <div className='Log-Submit'>
           <p>SUBMIT</p>
          </div>
        </form>
      </div>
    </>
  )
}
