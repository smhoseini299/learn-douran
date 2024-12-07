import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function Profile() {

  const [login, setLogin] = useState(true)
  const [showSkils, setShowSkils] = useState(true)

  const user = {
    name: 'Ali',
    Surname: 'Amiri',
    age: 19,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&s',
    skils: [
      'react', 'java', 'HTML'
    ]
  }

  return (
    <>
      <div className='bg-primary p-4 text-white d-flex flex-row justify-content-between align-items-center'>
        <h5>Customer Info Page</h5>
        <Button className='m-lg-2' onClick={() => setLogin(!login)}>{login ? "Logout" : "Login"}</Button>
      </div>

      {
        login ? (
          <div className='d-flex flex-row justify-content-center mt-4'>
            <div>
              <img src={user.img} alt='user pic'></img>
            </div>
            <div className='mt-4'>
              <h6>Name : {user.name}</h6>
              <h6>Surname : {user.Surname}</h6>
              <h6>Full name : {user.name + ' ' + user.Surname}</h6>
              <h6>Age : {user.age} </h6>
              <h6 className='text-danger'>State : {user.age < 20 ? "Client is inavtive" : "Client is inavtive"}</h6>
              <h6>Skils :</h6>
              <ui>
                {user.skils.map((skill, index) => (
                  showSkils ? (<li key={index}>{skill}</li>) : ""
                ))}
              </ui>
              <div className='mt-2'>
                <Button variant='warning' onClick={() => setShowSkils(!showSkils)}>{showSkils ? "Hidden Skils" : 'Show Skils'}</Button>

              </div>
            </div>
          </div>
        ) : (
          <div className='m-auto mt-3'>
            <h4>Please login.</h4>
          </div>
        )
      }

    </>

  )
}
