import React from 'react';
import Image from 'next/image';

import ProfileCard from './ProfileCard';

const BlogSingleFeature = ({ articulo }) => {
  
  console.log(articulo)
  
  return (
    <>
      <section className="blog-details ptb-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 pe-5">
              <div className="blog-details-wrap">
                
                <div
                  dangerouslySetInnerHTML={{
                    __html: articulo[0].content.rendered
                  }}
                >
                </div>
                
                
              </div>
            </div>
            <div className="col-lg-4">
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingleFeature;
