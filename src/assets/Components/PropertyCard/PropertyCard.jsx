import React from "react";
import Button1 from "../Buttons/Button1";
import { Link } from "react-router-dom";

const PropertyCard = ({
  property: { title, location, agent, beds, baths, size, price, image, id },
}) => {
  return (
    <div className="bg-white p-6  rounded-xl border border-gray-200 hover:border-orange-500 transition-all duration-300">
      <div className="flex justify-between mb-4 ">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 256 256"
          >
            <path
              fill="#000"
              d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24m0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.2 254.2 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.2 254.2 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88m0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118"
            />
          </svg>
          <p>{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#000" strokeWidth="1.5">
              <circle cx="12" cy="6" r="4" />
              <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" />
            </g>
          </svg>
          <p>{agent}</p>
        </div>
      </div>
      <div>
        <img
          className="w-full max-h-120  object-cover  rounded-xl mb-8"
          src={image}
          alt=""
        />
      </div>
      <h3 className="text-3xl font-semibold mb-4 hover:text-orange-500 transition">
        <Link to={`properties/${id}`}>{title}</Link>
      </h3>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 border-r w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M6.75 4h10.5a2.75 2.75 0 0 1 2.745 2.582L20 6.75v3.354a2.75 2.75 0 0 1 1.994 2.459l.006.187v7.5a.75.75 0 0 1-1.493.102l-.007-.102V18h-17v2.25a.75.75 0 0 1-.648.743L2.75 21a.75.75 0 0 1-.743-.648L2 20.25v-7.5c0-1.259.846-2.32 2-2.647V6.75a2.75 2.75 0 0 1 2.582-2.745zm12.5 7.5H4.75a1.25 1.25 0 0 0-1.244 1.122l-.006.128v3.75h17v-3.75a1.25 1.25 0 0 0-1.122-1.243zm-2-6H6.75a1.25 1.25 0 0 0-1.244 1.122L5.5 6.75V10H7a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L11 10h2a1 1 0 0 1 1-1h2a1 1 0 0 1 .993.883L17 10h1.5V6.75a1.25 1.25 0 0 0-1.122-1.244z"
            />
          </svg>
          <p className=" text-[18px]">{beds} Bed</p>
        </div>

        <div className="flex items-center gap-2 border-r w-full justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                stroke="#000"
                stroke-width="1.5"
                d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148c0 .395 0 .593-.014.815c-.209 3.287-3.003 6.189-6.28 6.52c-.221.023-.35.028-.608.038A57 57 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044c-.258-.01-.387-.015-.607-.037c-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z"
              />
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-width="1.5"
                d="m6 20l-1 2m13-2l1 2M2 12h20"
              />
              <path
                fill="#000"
                d="M2.25 13a.75.75 0 0 0 1.5 0zM7.6 3.5l.696-.28zm.379.947l.328.674zM6.362 6.192l.695.283zm4.215-1.814l-.295.69zM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413zm5.96-2.567l.297.69a.75.75 0 0 0 .401-.964zM3.75 13V4.385h-1.5V13zM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971zM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385zm3.153-.607l.38.948l1.392-.557l-.379-.948zm.14 4.689a2.68 2.68 0 0 1 .014-1.992l-1.39-.565a4.18 4.18 0 0 0-.02 3.107zm4.967-2.98L6.049 8.053l.593 1.377l5.96-2.566zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.97 3.97 0 0 0-2.132-2.212zM7.057 6.476a2.57 2.57 0 0 1 1.25-1.354l-.656-1.348A4.07 4.07 0 0 0 5.667 5.91zm1.25-1.354a2.36 2.36 0 0 1 1.975-.053l.59-1.38a3.86 3.86 0 0 0-3.221.085z"
              />
            </g>
          </svg>
          <p className=" text-[18px]">{baths} bath</p>
        </div>
        <div className="flex items-center gap-2 w-full justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#000" stroke-width="1.5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20 4l-6 6m0 0h3.75M14 10V6.25M4 20l6-6m0 0H6.25M10 14v3.75"
              />
              <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
            </g>
          </svg>
          <p className=" text-[18px]">{size} sqft</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div>
          <p className="text-3xl font-bold">
            ${price}{" "}
            <span className="text-2xl font-normal text-black">USD</span>
          </p>
        </div>
        <div>
          <Button1 to={`properties/${id}`} text={"view"}></Button1>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
