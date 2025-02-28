import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title,img }) => {
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className='container'>
          <div className='breadcrumb-inner'>
            <div className='   '>
              <div className='col-lg-6'>
                <h2 className='page-title'>{title}</h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
