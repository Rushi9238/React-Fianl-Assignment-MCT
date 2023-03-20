import React, { useEffect, useState } from 'react'
import '../CSS_files/User.css'
import Radio from '@mui/material/Radio';
import { usersData } from '../Contstant/userDataAPI'

const User = () => {
  const [user, setUser] = useState([])
  const [gender, setGender] = useState("all")

// **************************************
  useEffect(() => {
    usersData(setUser,gender)
    
  }, [gender])
  
// **************************************

  const changeGender = (e) => {
    // console.log('hello',e.target);
    setGender(e.target.value)
  }
  // *********************************************************************
  return (
    <div className='user'>
      <div className="user-top_containe">
        <h1>User Details</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti nostrum saepe illum!
        Corporis atque possimus in quas minus deserunt. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, aut?
        Asperiores et sequi culpa, labore eius eum ipsam qui nostrum voluptatem modi quam deserunt nam eaque,
        nisi cum molestias aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, id.
      </div>
      <div className="user-show_containe">
        <div className="radio-btn">
          <div className="radio-all">
            <Radio
              value='all'
              checked={gender === 'all'}
              onChange={(e) => {
                changeGender(e)
              }}
            />
            <span>All</span>
          </div>
          <div className="radio-male">
            <Radio
              value='male'
              checked={gender === 'male'}
              onChange={(e) => {
                changeGender(e)
              }}
            />
            <span>Male</span>
          </div>
          <div className="radio-female">
            <Radio
              value='female'
              checked={gender === 'female'}
              onChange={(e) => {
                changeGender(e)
              }}
            />
            <span>Female</span>
          </div>
        </div>
        <div className="show-result">
          <div style={{
            
            width: '100%'
          }} >
            <table style={{ width: '100%' }}>
              <tbody >
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                </tr>
                {user.map((ele) => {
                  // console.log(ele);
                  return <>
                    <tr key={ele.id.value}  style={{ textAlign: 'center'}}>
                      <td><img src={ele.picture.large} alt="" /></td>
                      <td>{ele.name.first}</td>
                      <td>{ele.email}</td>
                      <td>{ele.gender}</td>
                    </tr>
                   
                  </>

                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  )
}

export default User