import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiOutlineX } from 'react-icons/hi';

import OffCanvasMenu from './OffCanvasMenu';
import {
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
} from '../../utils/data';
import dynamic from 'next/dynamic';

import { BsInstagram, BsWhatsapp, BsFillTelephoneFill, BsMailbox2, BsFillCartCheckFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

const Navbar = ({ navDark, insurance, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector('.main-header');
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`main-header ${
        navDark ? 'position-absolute' : ''
      } w-100 ${classOption} ${
        insurance && 'ins-header main-header w-100 z-10'
      }`}
    >
      <nav
        className={`navbar navbar-expand-xl z-50 ${
          navDark ? 'navbar-dark' : 'navbar-light'
        } sticky-header ${scroll > headerTop ? 'affix' : ''}`}
      >
        <div className="container d-flex align-items-center justify-content-lg-between position-relative">
          <Link href="/">
            <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
              {scroll > headerTop || !navDark ? (
                <Image
                  width={53}
                  height={56}
                  src="/logoColor.png"
                  alt="logo"
                  className="img-fluid logo-color"
                />
              ) : (
                <Image
                  width={53}
                  height={56}
                  src="/logoBlanco.png"
                  alt="logo"
                  className="img-fluid logo-white"
                />
              )}
            </a>
          </Link>
          <button
            className="navbar-toggler position-absolute right-0 border-0"
            id="#offcanvasWithBackdrop"
            role="button"
          >
            <span
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            >
              <HiMenu />
            </span>
          </button>
          <div className="clearfix"></div>
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="nav col-12 col-md-auto justify-content-center main-menu">
             
              <li>
                <Link href="/">
                  <a className="nav-link">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/conocenos">
                  <a className="nav-link">Conocenos</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a className="nav-link">Blog</a>
                </Link>
              </li>

              <li>
                <Link href="/contacto">
                  <a className="nav-link">Contactanos</a>
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="action-btns text-end  d-none d-md-block d-lg-block">
         
            <Link href="">
              <a className=" btn-link text-decoration-none ">
                 <BsWhatsapp /> 
              </a>
            </Link>

            <Link href="">
              <a className="btn btn-link text-decoration-none ">
                <BsInstagram className='inline'/> 
              </a>
            </Link>

            <Link href="">
              <a className=" btn-link text-decoration-none me-2">
                 <BsMailbox2 className='inline'/> 
              </a>
            </Link>

            <Link href="">
              <a className="btn btn-link text-decoration-none me-2">
                 <BsTwitterX className='inline'/> 
              </a>
            </Link>

                           
            {/* 
              <Link href="request-demo">
                <a
                  className={
                    insurance ? 'ins-btn ins-primary-btn' : 'btn btn-primary'
                  }
                >
                  Get Started
                </a>
              </Link>
            */}
          </div>

          <div
            className="offcanvas offcanvas-end d-xl-none"
            tabIndex="-1"
            id="offcanvasWithBackdrop"
          >
            <div className="offcanvas-header d-flex align-items-center mt-4">
              <Link href="/">
                <a className="d-flex align-items-center mb-md-0 text-decoration-none">
                  <Image
                    width={80}
                    height={80}
                    src="/logoColor.png"
                    alt="logo"
                    className="img-fluid ps-2"
                  />
                </a>
              </Link>
              <button
                type="button"
                className="close-btn text-danger me-20"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <HiOutlineX />
              </button>
            </div>

            <OffCanvasMenu />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
