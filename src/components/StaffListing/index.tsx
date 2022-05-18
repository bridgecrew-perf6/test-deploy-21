import React from "react";

// markup
const StaffListingComponent = ({ name, image, title, bio }) => {
  return (
    <div className="card w-92 bg-base-100 shadow-xl mb-5">
      <div className="credentials-wrapper">
        <figure className="overflow-hidden">
          <img src={image} alt="Profile Photo" className="image-hover" />
        </figure>
        <div className="bg-blue-teal text-white p-2 pl-3">
          <h3 className="mb-1">{name}</h3>
          <p>{title}</p>
        </div>
      </div>
      <div className="card-body p-4">
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default StaffListingComponent;
