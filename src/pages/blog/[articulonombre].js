import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import NewsLetter from '@components/cta/NewsLetter';
import LatestBlog from '@components/blogs/LatestBlog';
import PageHeader from '@components/common/PageHeader';
import SupportOne from '@components/support/SupportOne';
import BlogSingleFeature from '@components/blogs/BlogSingleFeature';


const BlogSingle = ({articulo, nombre}) => {
 
    console.log(articulo)
    console.log(nombre)
 
    return (
    <Layout title="Blog Single" desc="This is blog single page">
      <Navbar classOption="navbar-light" />
      <PageHeader title={nombre} />
      <BlogSingleFeature articulo={articulo}  />
      <NewsLetter />
      
      <Footer footerLight />
    </Layout>
  );
};



export const getServerSideProps= async (context) => {
    
	var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic Y2tfMzQ1MTY4ZDVhY2UyNzliM2Y0ZGE0ZTYxYTcxZmIwYTgwN2U1ZWJiNDpjc19mZmQ5Yjk4NjQ0MmYzNDBmNTYxY2Y2NGRhYTU4NDdiMTliZTUxZjA5");
      
    var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

    const data = await fetch("https://fadimet.com.pa/red/wp-json/wp/v2/posts/?search=" + context.query.articulonombre + "", requestOptions);
    const result = await data.json();

	console.log(result)

	return {
      props: {
            articulo : result,
            nombre : context.query.articulonombre
            
		},
    };

};    

export default BlogSingle;
