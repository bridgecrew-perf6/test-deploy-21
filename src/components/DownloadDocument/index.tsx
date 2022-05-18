import React from "react";
import axios from "axios";
import fileDownload from "js-file-download";
import { FaFileDownload } from "@react-icons/all-files/fa/FaFileDownload";

// markup
const DownloadDocumentComponent = ({ url, fileName }) => {
  const downloadDocument = (url, fileName) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res.data);
        if (window.FileReader && window.Blob) {
          // All the File APIs are supported.
          const mimeType = res.data.type;
          if (mimeType) {
            const extension = mimeType.split("/")[1];
            fileName = `${fileName}.${extension}`;
          }
        }
        fileDownload(res.data, fileName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mb-5">
      <button
        onClick={() => downloadDocument(url, fileName)}
        className="btn-default-mix text-white font-bold py-3 px-4 w-[500px] rounded inline-flex items-center justify-center button-hover"
      >
        <FaFileDownload className=" w-4 h-4 mr-2" />
        <span>Download document</span>
      </button>
    </div>
  );
};

export default DownloadDocumentComponent;
