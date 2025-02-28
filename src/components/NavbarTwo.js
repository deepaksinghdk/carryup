"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import '../app/globals.scss'

const NavbarTwo = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation
  useEffect(() => {
    const items = document.querySelectorAll(".menu-item-has-children > a");

    const handleClick = (event) => {
      event.preventDefault(); // Prevent default link behavior
      const subMenu =
        event.currentTarget.parentElement.querySelector(".sub-menu");
      if (subMenu) {
        subMenu.classList.toggle("active");
        event.currentTarget.classList.toggle("open");
      }
    };

    items.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (
    <>
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id="body-overlay"
      ></div>
      {/* ==================== Navbar Two Start ====================*/}
      <nav className="navbar navbar-area navbar-area_2 navbar-area-2 navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link href="/">
              <img src="assets/img/carryupdark.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id="itech_main_menu"
          >
            <ul className="navbar-nav menu-open text-lg-end">
              <li className="menu-item-has-children">
                <Link href="#">What we do</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="#">Web Design</Link>
                  </li>
                  <li>
                    <Link href="#">Web Development</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Who we are</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/career">Career</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Knowledge Hub</Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/case-study">Case Study</Link>
                  </li>
                  <li>
                    <Link href="/blog-2">Blogs</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link href="#">Solutions</Link>
                <ul className="sub-menu ">
                  <li   >
                    <Link className="d-flex justify-content-between   text-decoration-none " href="https://www.toolup.in/" target="_blank" >
                      <div className="   " >toolup</div>
                      {/* <div  style={{ fontSize: "0.6rem !important;" }} > [Shopify Apps]</div> */}
                      <div  style={{ fontSize: "0.6rem !important;" }} >[Shopify Apps  ]</div>
                    </Link>
                  </li>

                  <li>
                    <Link className="d-flex justify-content-between text-decoration-none" href="#">
                      <div className=" "   >gridAI</div>
                      <div class="blinking-text" style={{ fontSize: "0.6rem !important;" }} >[Coming Soon]</div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* <div className="nav-right-part nav-right-part-desktop align-self-center">
            <Link className="btn btn-border-base" href="/about">
              Discover More
            </Link>
          </div> */}
        </div>
      </nav>

      {/* ==================== Navbar Two end ====================*/}
    </>
  );
};

export default NavbarTwo;
