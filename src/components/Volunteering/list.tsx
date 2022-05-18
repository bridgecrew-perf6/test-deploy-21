import React from "react";
import VolunteeringComponent from ".";

const VolunteeringListComponent = () => {
    const image1 = "https://cdn.themix.org.uk/uploads/2020/07/shutterstock_569042266.jpg";
    const image2 = "https://cdn.themix.org.uk/uploads/2020/07/shutterstock_1382655365-1.jpg";

    return (
        <div>
            <div className="border-below mb-6 mt-10">
                <h2 className="pb-1">Volunteering</h2>
            </div>
            <div className="grid grid-flow-col grid-cols-2 gap-10">
                <VolunteeringComponent title="Tackling loneliness through peer-support" image={image1} link="#" registration="Registering Now" venue="Online"
                description="Become an online mebmber of our peer community and help us build a space for positive connections."/>
                <VolunteeringComponent title="Get invloved in Future Work with The Mix" image={image2} link="#" registration="Registering Now" venue="Online & in your team"
                description="If you are interested in taking part in workshops, co-design sessions or events with The Mix in the future, you can let us know here." />
            </div>
        </div>
    );
};

export default VolunteeringListComponent;
