import React from "react";
import DownloadDocumentComponent from ".";

import ShareImg from "../../../static/icons/share-yellow.png";


const DownloadDocumentDisplayComponent = () => {
    const fileURL = ShareImg

    return (
        <div>
            <div className="border-below mb-6 mt-10">
                <h2 className="pb-1">Download Document</h2>
            </div>
            <DownloadDocumentComponent url={fileURL} fileName="share-yellow.png" />
        </div>
    );
};

export default DownloadDocumentDisplayComponent;
