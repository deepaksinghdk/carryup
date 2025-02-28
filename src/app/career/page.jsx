import Breadcrumb from '@/components/Breadcrumb'
import React from 'react'

const page = () => {
  return (
    <>

<Breadcrumb img="./assets/img/banner06.avif"  title="Career  "  />



<div>
<div class="container text-center my-5">
  <div class="row justify-content-center">
    <div class="col-lg-8 col-md-10 col-sm-12">
      <h2 class="fw-bold text-primary">We Are Hiring! Join Our Team!</h2>
      <p class=" fs-5 mt-4">
        We’re looking for talented individuals to join our team! If you’re passionate about 
        <strong> web development, Shopify, and front-end technologies</strong>, this is your chance to grow with us.
      </p>
      <p class=" fw-semibold">📢 Open Positions Available!   <br></br>     💼 Explore opportunities & apply now!</p>
      <a href="https://www.linkedin.com/in/carryup" target="_blank" class="btn btn-primary">
        🔗 Check out the latest job openings on LinkedIn
      </a>
      <p class="mt-3">Let’s build something amazing together! 💡✨</p>
    </div>
  </div>
</div>

</div>



    </>
  )
}

export default page