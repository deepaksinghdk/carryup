import Link from 'next/link';
import React from 'react';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaQuoteRight,
  FaTwitter,
  FaRegUser,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa';

const BlogDetailsArea = () => {
  return (
    <>
      {/* ==================== Blog Details Area start ====================*/}
      <div className="blog-area blog-area_details pd-top-120 pd-bottom-120">
        <div className="container">
          <div className=" ">
            <div className="col-lg-10 mx-auto">
              <div className="blog-details-page-content">
                <div className="single-blog-inner">
                  <div className="  col-lg-12">
                    <img className='col-12' src="assets/img/blog/1.png" alt="img" />
                  </div>
                  <div className="details mb-5">
                    
                    <p>
                      Cras varius. Donec vitae orci sed dolor rutrum auctor.
                      Fusce egestas elit eget lorem. Suspendisse nisl elit,
                      rhoncus eget elementum acondimentum eget, diam. Nam at
                      tortor in tellus interdum sagitliquam lobortis. Donec orci
                      lectus, aliquam ut, faucibus non, euismod id, nulla.
                      Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum
                      eu odio. Vivamus laoreet.
                    </p>
                    <p>
                      Lorem available market standard dummy text available
                      market industry Lorem Ipsum simply dummy text of free
                      available market.There are many variations of passages of
                      Lorem Ipsum available, but the majority have suffered
                      alteration in some form,
                    </p>
                     
                     
                  </div>
                </div>
                 
                
                
              </div>
            </div>
            
          </div>
        </div>
      </div>
      {/* ==================== Blog Details Area End ====================*/}
    </>
  );
};

export default BlogDetailsArea;
