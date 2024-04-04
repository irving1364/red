import React from "react";
import Link from "next/link";
import {
  navCompanyLinks,
  navCompanyPage,
  offcanvasMenuData,
} from "../../utils/data";


import { BsInstagram, BsWhatsapp, BsFillTelephoneFill, BsMailbox2, BsFillCartCheckFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";


const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
       
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/">
            <a className="nav-link">Inicio</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/conocenos">
            <a className="nav-link">Conocenos</a>
          </Link>
        </li>
        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="/blogs">
            <a className="nav-link">Blog</a>
          </Link>
        </li>

        <li data-bs-dismiss="offcanvas" aria-label="Close">
          <Link href="contacto">
            <a className="nav-link">Contáctanos</a>
          </Link>
        </li>
        
      </ul>
      <div className="action-btns mt-4 ps-3">
        
        
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
      </div>
    </div>
  );
};

export default OffCanvasMenu;
