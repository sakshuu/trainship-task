import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchregisterData } from '../redux/actions/authAction'

const Home = () => {
    const dispatch = useDispatch()
const {dataSignup} = useSelector(state  => state.auth)

useEffect(() => {
  dispatch(FetchregisterData())
}, [])

  return  <>
  {/* {JSON.stringify(dataSignup)} */}
  <div className="container mt-4">
<div className="row">
  <div className="col-md-8 col-sm-4 col-sm-2 ">
    <div>
      
    
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">sr.no</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
        {
            dataSignup?.map((item,i) => <tr>
        <th scope="row">{i+1}</th>
        <td>{item?.name}</td>
        <td>{item?.email}</td>
        <td><button type="button" class="btn btn-primary">Delete</button></td>
      </tr>)
        }
    </tbody>
  </table>
  </div>
  </div>
</div>
 
  </div>
  </>
}

export default Home