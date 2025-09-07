import React from "react";
import { useLoaderData } from "react-router-dom";
import SubHeading from "../../SubHeading/SubHeading";
import star from "../../../images/Star 2.svg";
import bg from "../../../images/pro-bg.png";
import SectionHeading from "../../SectionHeading/SectionHeading";
const PropertyDetails = () => {
  const { title, location, agent, beds, baths, size, price, image, description } =
    useLoaderData();

  console.log(title);

  return (
    <>
      <div
        className="bg-orange-50 relative min-h-[350px] bg-contain bg-right bg-no-repeat "
        style={{ backgroundImage: `URL(${bg})` }}
      >
        <img className="absolute top-20 left-6 rotate" src={star} alt="" />
        <div className="container mx-auto pt-28 flex flex-col items-center gap-6">
          <SubHeading
            text={"Property Details"}
            extraClass={"bg-white center border-orange-500"}
          ></SubHeading>
          <h1 className="text-6xl font-bold">{title}</h1>
          
        </div>
      </div>
      <div className="max-w-[1200px] py-20 flex gap-8 mx-auto items-center">
        <div className="w-3/5">
            <img className="mx-auto w-full max-h-[400px] object-cover rounded-2xl " src={image} alt="" />
        </div>
        <div className="w-2/5">
            <h2 className="text-3xl font-bold mb-6">More Details </h2>
            <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-2xl">
                <h3>Location:</h3> {location}
            </div>
            <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-2xl">
                <h3>Size:</h3> {size} sqft
            </div>
            <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-2xl">
                <h3>Beds:</h3> {beds} 
            </div>
            <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-2xl">
                <h3>Bath:</h3> {baths} 
            </div>
            <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-2xl">
                <h3>Agent:</h3> {agent}
            </div>
            <div className="flex justify-between border-b border-b-orange-500 mb-3 pb-2 text-2xl">
                <h3>Price:</h3> {price} USD
            </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto text-xl pb-28">
        <p className="mb-8">{description}</p>
        <div className="w-full h-100 rounded-2xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.550538393003!2d91.80497527603983!3d22.483518436227943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd73b69c76fcd%3A0x3bc834fd695ca9b4!2sShahadat%20Rafi!5e0!3m2!1sen!2sbd!4v1757278474921!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

      </div>
    </>
  );
};

export default PropertyDetails;
