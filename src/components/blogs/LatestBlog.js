/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SectionTitle from '../common/SectionTitle';
import { blogFeatureData } from '../../utils/data';

import { useEffect, useState } from "react";

const LatestBlog = () => {

  const [allBlog, setBlogHome] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
   
  useEffect(() => {
    obtenerDatos();
    
    
  }, []);

  const obtenerDatos = async () => {

    
    const data = await fetch("https://fadimet.com.pa/red//wp-json/wp/v2/posts");
    const result = await data.json();
    console.log(result)
    setBlogHome(result)

    let home = result.filter(blog => blog.acf.home == 'si');
    setFiltrados(home)
    console.log(home)
  
 }

  return (
    <section className="related-blog-list ptb-120 ">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-12">
            <SectionTitle
              subtitle="Blog"
              title="Consulte nuestras últimas noticias y actualizaciones"
            />
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="text-start text-lg-end mb-4 mb-lg-0 mb-xl-0">
              <Link href="/blogs">
                <a className="btn btn-primary"> Ver todos los Articulos</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">

       
          {filtrados.map((blog, i) => (

            

            <div key={i + 1} className="col-lg-4 col-md-6">
              <div className="single-article rounded-custom mb-4 mb-lg-0">
                <Link  href={`blog/${blog.title.rendered}`}>
                  <a className="article-img">
                    
                    <img
                          src={blog.featured_media_src_url}
                          width="40"
                        />
                  </a>
                </Link>
                <div className="article-content p-4">
                 
                  <Link href="/blog-single">
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
      </div>
    </section>
  );
};

export default LatestBlog;
