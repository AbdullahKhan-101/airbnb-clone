import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  bg-gray-100 py-14 px-14 md:px-20 lg:px-28 xl:px-52  ">
      <div className="space-y-4 text-sm text-gray-800 mb-6">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800 mb-6">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Its a pretty awesome clone</p>
        <p>This is not a real site</p>
        <p>Refferal accepted</p>
        <p>Next js</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800 mb-6">
        <h5 className="font-bold">HOST</h5>
        <p>Azad chaiwala</p>
        <p>PIAIC</p>
        <p>Full stack developers</p>
        <p>Skills is matter</p>
        <p>Wat's going on</p>
      </div>

      <div className="space-y-4 text-sm text-gray-800 mb-6">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Saftey</p>
        <p>Say Hi </p>
        <p>Enjoy the life</p>
        <p>Helping others</p>
      </div>
    </div>
  );
};

export default Footer;
