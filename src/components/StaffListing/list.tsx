import React from "react";
import StaffListingComponent from ".";

const StaffListingsComponent = () => {
  const image1 =
    "https://cdn.themix.org.uk/uploads/2016/04/chris_martin-copy-768x768.jpg";
  const image2 = "https://cdn.themix.org.uk/uploads/2016/02/Zoe.jpg";
  const image3 =
    "https://cdn.themix.org.uk/uploads/2020/04/Neighbours0035-150x150.jpg";

  return (
    <div>
      <div className="border-below mb-6 mt-10">
        <h2 className="pb-1">Senior Management Team</h2>
      </div>
      <div className="grid grid-flow-col grid-cols-3 gap-5">
        <StaffListingComponent
          name="Chris Martin (he/him)"
          image={image1}
          title="Chief Executive Officer"
          bio="Passionate about digital for social good. Leader of the amazing team growing our ecosystem of information, support & community tools for young people. Gadget lover, trustee of the Harrow Club W10 & fellow of the RSA."
        />
        <StaffListingComponent
          name="Zoë Bailie (she/her)"
          image={image2}
          title="Deputy CEO/Chief Executive Officer"
          bio="Excited to be at The Mix every day. Inspired by wonderful young people & amazing supporters. Loves daydreaming, people watching, clothes, cocktails, running, friends and family."
        />
        <StaffListingComponent
          name="Cara Evans (she/her)"
          image={image3}
          title="Chief Operating Officer"
          bio="Passionate advocate of the charity sector.  Cara is an organiser at heart and loves a problem to solve. Which is why she is ideally suited to looking at the background systems to make the Mix more efficient and effective. Relaxing involves looking after the family and singing with her local community choir."
        />
      </div>
    </div>
  );
};

export default StaffListingsComponent;
