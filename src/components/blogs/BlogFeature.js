/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { blogFeatureData } from '../../utils/data';

const BlogFeature = () => {
  
  const [allBlog, setBlogHome] = useState([]);
   
  useEffect(() => {
    obtenerDatos();
    
    
  }, []);

  const obtenerDatos = async () => {

    
    const data = await fetch("https://fadimet.com.pa/red//wp-json/wp/v2/posts");
    const result = await data.json();
    console.log(result)
    setBlogHome(result)

  
 }

  return (
    <section className="masonary-blog-section ptb-120">
      <div className="container">
        
        <div className="row">
          {allBlog.map((blog, i) => (
            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="single-article rounded-custom my-3">
                <Link href={`blog/${blog.title.rendered}`}>
                  <a className="article-img">
                    <img
                      width={414}
                      height={224}
                      src={blog.featured_media_src_url}
                      alt="article"
                    />
                  </a>
                </Link>
                <div className="article-content p-4">
                  <div className="article-category mb-4 d-block">
                    <a
                     href={`blog/${blog.title.rendered}`}
                      className={`d-inline-block text-dark badge ${blog.class}`}
                    >
                      Articulo
                    </a>
                  </div>
                  <Link href={`blog/${blog.title.rendered}`}>
                    <a>
                      <h2 className="h5 article-title limit-2-line-text">
                        {blog.title.rendered}
                      </h2>
                    </a>
                  </Link>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
          {/* 
        <div className="row justify-content-center align-items-center mt-5">
          <div className="col-auto my-1">
            <a href="#!" className="btn btn-soft-primary btn-sm">
              Previous
            </a>
          </div>
          <div className="col-auto my-1">
            <nav>
              <ul className="pagination rounded mb-0">
                <li className="page-item">
                  <a className="page-link" href="#!">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#!">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#!">
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-auto my-1">
            <a href="#!" className="btn btn-soft-primary btn-sm">
              Next
            </a>
          </div>
        </div>
      */}


      </div>
    </section>
  );
};

export default BlogFeature;
