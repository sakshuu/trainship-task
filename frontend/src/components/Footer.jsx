import React from 'react'
import "./../assets/css/footer.css";
import "./../assets/css/about.css";

const Footer = () => {
  return <>
      {/* <footer class="text-muted py-5">
        <div class="container">
          <p class="float-end mb-1">
            <a href="#">Back to top</a>
          </p>
          <p class="mb-1">
            Album example is &copy; Bootstrap, but please download and customize
            it for yourself!
          </p>
          <p class="mb-0">
            New to Bootstrap? <a href="/">Visit the homepage</a> or read our
            <a href="../getting-started/introduction/">getting started guide</a>.
          </p>
        </div>
      </footer> */}
  

  <div className='mainfooter'>
<div className="row">
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
    <h6>
        <i class="bi bi-house-add-fill p-2"></i> Home</h6>
    <h6><i class="bi bi-file-earmark-person p-2"></i> about</h6>
    <h6><i class="bi bi-person p-2"></i> SignUp</h6>
    <h6><i class="bi bi-person p-2"></i> Login</h6>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
       <h6>
    <i class="bi bi-house-add-fill p-2"></i> Home</h6>
    <h6><i class="bi bi-file-earmark-person p-2"></i> about</h6>
    <h6> <i class="bi bi-person p-2"></i> SignUp</h6>
    <h6> <i class="bi bi-person p-2"></i> Login</h6>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
       <h6>
    <i class="bi bi-house-add-fill p-2"></i> Home</h6>
    <h6><i class="bi bi-file-earmark-person p-2"></i> about</h6>
    <h6> <i class="bi bi-person p-2"></i> SignUp</h6>
    <h6> <i class="bi bi-person p-2"></i> Login</h6>
    </div>
    <div className="col-md-3 col-sm-6 col-xs-12 mb-4">
        <h6>
    <i class="bi bi-house-add-fill p-2"></i> Home</h6>
    <h6><i class="bi bi-file-earmark-person p-2"></i> about</h6>
    <h6> <i class="bi bi-person p-2"></i> SignUp</h6>
    <h6> <i class="bi bi-person p-2"></i> Login</h6>
    </div>
</div>
<p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero minus voluptatum laudantium commodi, cumque ex mollitia pariatur fugiat quidem vero accusamus architecto? Hic impedit inventore placeat debitis, magni harum!lore-sm- lore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero minus voluptatum laudantium commodi, cumque ex mollitia pariatur fugiat quidem vero accusamus architecto? Hic impedit inventore placeat debitis, magni harum!lore-sm- lore</p>
<div className='contactsection'>

<h5>Contact with us</h5>
<div>
<span><i class="bi bi-envelope-at-fill p-2"></i></span>
<span>sakshissachin.120@gmail.com</span>
</div>
<div className='mt-2'>
<span><i class="bi bi-person-rolodex p-2"></i></span>
<span>8787878776</span>

</div>
</div>
  </div>
  </>
}

export default Footer