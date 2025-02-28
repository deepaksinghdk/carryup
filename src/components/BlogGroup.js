import Link from "next/link";
import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaChevronRight,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaPlus,
  FaTwitter,
  FaRegUser,
} from "react-icons/fa";

const BlogGroup = () => {
  return (
    <>
      {/* =============== Blog Group start ===============*/}
      <div className='blog-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 row'>
              <div className='single-blog-inner col-lg-6  col-sm-12'>
                <div className='thumb'>
                  <img src='assets/img/blog/1.png' alt='img' />
                  <span className='date'>15 DEC</span>
                </div>
                <div className='details'>
                  
                  <h3 className='title'>
                    <Link href='/blog-details'>
                      A Beginner's Guide to Running a Successful Agricultural
                    </Link>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <Link
                    className='btn btn-border-base mt-3'
                    href='/service-details'
                  >
                    Know More  
                  </Link>
                </div>
              </div>
              <div className='single-blog-inner  col-lg-6  col-sm-12'>
                <div className='thumb'>
                  <img src='assets/img/blog/2.png' alt='img' />
                  <span className='date'>15 DEC</span>
                </div>
                <div className='details'>
                  
                  <h3 className='title'>
                    <Link href='/blog-details'>
                      Successful Agricultural Guide to Running Beginner
                    </Link>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <Link
                    className='btn btn-border-base mt-3'
                    href='/service-details'
                  >
                    Know More  
                  </Link>
                </div>
              </div>
              <div className='single-blog-inner col-lg-6  col-sm-12'>
                <div className='thumb'>
                  <img src='assets/img/blog/3.png' alt='img' />
                  <span className='date'>15 DEC</span>
                </div>
                <div className='details'>
                  
                  <h3 className='title'>
                    <Link href='/blog-details'>
                      A Beginner's Guide to Running a Successful Agricultural
                    </Link>
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <Link
                    className='btn btn-border-base mt-3'
                    href='/service-details'
                  >
                    Know More  
                  </Link>
                </div>
              </div>
               
            </div>
             
          </div>
        </div>
      </div>
      {/* =============== Blog Group End ===============*/}
    </>
  );
};

export default BlogGroup;
