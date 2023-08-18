import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "./../assets/css/testinomial.css"

const Testinomial = () => {
  const reviewData = [
    {
      title:"Lorem ipsum dolor",
      subtitle:"Lorem ipsum dolor sit amet consectetur",
      img:"https://media.istockphoto.com/id/1325565779/photo/smiling-african-american-business-woman-wearing-stylish-eyeglasses-looking-at-camera-standing.jpg?s=612x612&w=0&k=20&c=wsNA_POOFtsKGjucqci4ndeSX-NWcT3hEt9E3a_oXpY=",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium?Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum.",
      id:"1"
    },
    {
 
      title:"Lorem ipsum dolor",
      subtitle:"Lorem ipsum dolor sit amet consectetur",
      img:"https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?s=612x612&w=0&k=20&c=BM3E3osJBZSukhs98G6vn7HXe8QQTExGaymi2a61T3E=",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium?",
      id:"2"
    },
    {
 
      title:"Lorem ipsum dolor",
      subtitle:"Lorem ipsum dolor sit amet consectetur",
      img:"https://media.istockphoto.com/id/1289220949/photo/successful-smiling-woman-wearing-eyeglasses-on-grey-wall.jpg?s=612x612&w=0&k=20&c=BjyPRn28F3mc6IiBCf4Ko-lFZisaNUYXBBnAcO47ZgE=",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium?",
      id:"3"
    },
    {
 
      title:"Lorem ipsum dolor",
      subtitle:"Lorem ipsum dolor sit amet consectetur",
      img:"https://media.istockphoto.com/id/1369508766/photo/beautiful-successful-latin-woman-smiling.jpg?s=612x612&w=0&k=20&c=LoznG6eGT42_rs9G1dOLumOTlAveLpuOi_U755l_fqI=",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur magnam, minima iure vitae qui modi ut error amet repellendus quod nihil voluptates ipsum architecto, quo, illum harum? Aperiam, praesentium?",
      id:"4"
    }
   
   ];
  return <>
<div id="app">

<Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          reviewData.map(item => <SwiperSlide key={item?.id} className='my-4'>
              <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <div className='center'>
                  <img src={item?.img} alt="" className='profile'/>
                  </div>
                  <h6 className="title center text">{item?.title}</h6>
                </div>
                <div className="col-md-9 col-sm-12">
                <div className="subtitle text">
      {item?.subtitle}
    </div>
    <div className='star'>
      <span><i className="bi bi-star-fill"></i></span>
      <span><i className="bi bi-star-fill"></i></span>
      <span><i className="bi bi-star-fill"></i></span>
      <span><i className="bi bi-star-fill"></i></span>
      <span><i className="bi bi-star"></i></span>
    </div>
    <div >
      <p>
  {item?.desc}
      </p>
    </div>
                </div>
              </div>
              </div>
          </SwiperSlide>
            )
        }
       
      </Swiper>    
          </div>
  </>
}

export default Testinomial