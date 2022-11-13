import React from 'react';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer data-theme="wireframe" className="footer footer-center fixed bottom-0 bg-black text-lime-100">
        <div className="flex justify-center items-center gap-3 mt-5">
          <h1 className="text-2xl text-center"> Visit Our Pages </h1>
          <a href="https://www.instagram.com/yumchadistrict"> 
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/YumChaDistrict">
            <i className="fa-brands fa-facebook text-2xl"></i>
          </a>
        </div>
        <div className="mb-5">
          <p className="text-lg">&copy; {year} - by Yum Cha District</p>
        </div>
    </footer>
  );
};

export default Footer;