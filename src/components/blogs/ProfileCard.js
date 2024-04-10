import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="author-wrap text-center bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
      <Image
        width={120}
        height={120}
        src="/logoColor.png"
        alt="author"
        className="img-fluid shadow-sm rounded-circle"
      />
      <div className="author-info my-4">
        <h5 className="mb-0">Red de Abusos Eclesiasticos de Venezuela</h5>
        <span className="small"></span>
      </div>
      <p>
      Somos una red, sin fines de lucro, de venezolanos que hemos 
      sufrido abuso sexual, unidos para concientizar a la sociedad 
      de la realidad de las victimas de abuso.
      </p>
      <ul className="list-unstyled author-social-list list-inline mt-3 mb-0">
        <li className="list-inline-item">
          <Link href="#!" passHref>
            <a className="fab">
              <FaLinkedinIn />
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#!" passHref>
            <a className="fab">
              <FaTwitter />
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#!" passHref>
            <a className="fab">
              {' '}
              <FaGithub />
            </a>
          </Link>
        </li>
        <li className="list-inline-item">
          <Link href="#!" passHref>
            <a className="fab">
              <FaFacebookF />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ProfileCard), { ssr: false });
