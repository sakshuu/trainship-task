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

  <table class="table table-dark table-striped table-hover">
    <thead>
      <tr>
        <th scope="col">sr.no</th>
        <th scope="col">Name</th>
        <th scope="col">Gmail</th>
      </tr>
    </thead>
    <tbody>
        {
            dataSignup?.map((item,i) => <tr>
        <th scope="row">{i+1}</th>
        <td>{item?.name}</td>
        <td>{item?.email}</td>
      </tr>)
        }
    </tbody>
  </table>
  </div>
  </>
}

export default Home