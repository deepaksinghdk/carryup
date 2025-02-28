'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        '**********', //YOUR_SERVICE_ID
        '**********', //YOUR_TEMPLATE_ID
        form.current,
        '**********', //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === 'OK') {
            toast.success('Massage Sent Successfully!');
            form.current[0].value = '';
            form.current[1].value = '';
            form.current[2].value = '';
            form.current[3].value = '';
          }
        },
        (error) => {
          if (error.text !== 'OK') {
            toast.success('Massage Not Sent!');
          }
        },
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <>
        {/* contact area start */}
        <div className="contact-area pd-top-120 pd-bottom-120">
          <div className="container">
            <div className="contact-page-inner bg-gray">
              <div className="section-title mb-4 pb-2">
                <h2 className="title">Direct contact us? </h2>
                <p className="content mb-0">
                  For your car we will do everything advice, repairs and
                  maintenance. We are the some preferred choice by many car
                  owners because our experience and knowledge is selfe
                  vident.For your car we will do som everything.
                </p>
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Enter Your Name."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="Enter Your Email."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-input-inner">
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter Your Subject."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input-inner">
                      <textarea
                        name="message"
                        id="massage"
                        cols="1"
                        rows="5"
                        placeholder="Enter Your Massage ..."
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-base border-radius-5"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* contact area end */}
        {/* contact list start */}
         
        {/* map end */}
      </>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
