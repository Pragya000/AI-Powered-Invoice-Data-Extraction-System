import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Lottie from "lottie-react";
import "bootstrap/dist/css/bootstrap.min.css";
import upload from "./Animations/upload";

const FileUpload = () => {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="shadow-lg d-flex justify-content-center align-items-center vh-80 shadow-lg">
      <div
        {...getRootProps()}
        className="p-4 border border-primary border-dashed roundedl text-center cursor-pointer bg-dark text-light w-20 shadow-lg"
        style={{ minHeight: "200px", borderRadius: "10px" }}
      >
        <input {...getInputProps()} />
        <p className="text-primary text-center  ">Drag & Drop files here</p>
        <div className="d-flex justify-content-center align-items-center" style={{ width: "30%" }}>
      <Lottie animationData={upload} />
    </div>
        <button type="button" className="btn btn-primary text-center"> SELECT FILES</button>
        <ul className="mt-4 list-group">
          {files.map((file, index) => (
            <li key={index} className="list-group-item list-group-item-dark rounded-pill">
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUpload;
