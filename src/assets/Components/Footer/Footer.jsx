import React from "react";
import { Link } from "react-router-dom";
import SubscribeForm from "../SubscribeForm/SubscribeForm";



const Footer = () => {

  

  return (
    <div className="bg-black text-white pt-28 px-12">
      <div className="container mx-auto flex justify-between">
        <div>
          <h6 className="text-xl mb-6 font-semibold text-w">Quick Links</h6>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Home</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">About</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Properties</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Favorites</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Contact Us</p>
          </Link>
        </div>
        <div>
          <h6 className="text-xl mb-6 font-semibold text-w">Quick Links</h6>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Property Details</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Services</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Services Details</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Blog</p>
          </Link>
          <Link>
            <p className=" hover:text-orange-500 my-2 transition">Blog Details</p>
          </Link>
          
        </div>
        <div>
          <h6 className="text-xl mb-6 font-semibold text-w">Address</h6>
          <p className="my-2">1411 Chili Ave, Rochester<br></br>
Dakota, United States</p>
          <h6 className="text-xl my-3 font-semibold text-w">Contact</h6>
          <p className="my-2">+8801612345678</p>
          <p className="my-2">+8801812345678</p>
        </div>
        <div>
          <h6 className="text-xl mb-6 font-semibold text-w">Join Our Newsletter</h6>
          <SubscribeForm></SubscribeForm>
          <div className="flex gap-6">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M14.2 2.875A4.625 4.625 0 0 0 9.575 7.5v2.575H7.1c-.124 0-.225.1-.225.225v3.4c0 .124.1.225.225.225h2.475V20.9c0 .124.1.225.225.225h3.4c.124 0 .225-.1.225-.225v-6.975h2.497c.103 0 .193-.07.218-.17l.85-3.4a.225.225 0 0 0-.218-.28h-3.347V7.5a.775.775 0 0 1 .775-.775h2.6c.124 0 .225-.1.225-.225V3.1c0-.124-.1-.225-.225-.225z"
                ></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="m13.081 10.712l-4.786-6.71a.6.6 0 0 0-.489-.252H5.28a.6.6 0 0 0-.488.948l6.127 8.59m2.162-2.576l6.127 8.59a.6.6 0 0 1-.488.948h-2.526a.6.6 0 0 1-.489-.252l-4.786-6.71m2.162-2.576l5.842-6.962m-8.004 9.538L5.077 20.25"
                ></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="-2 -2 24 24"
              >
                <path
                  fill="#fff"
                  d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792M2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254z"
                ></path>
              </svg>
            </Link>
            <Link><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></path><path strokeLinecap="round" strokeLinejoin="round" d="m17.5 6.51l.01-.011"></path></g></svg></Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-8 border-t border-t-gray-700 mt-16 ">
        <p className="text-m text-center ">
          © 2025 Propify. Designed & developed by Shahadat Rafi.
        </p>
      </div>
    </div>
  );
};

export default Footer;
