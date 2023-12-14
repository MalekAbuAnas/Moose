import "./ImageGen.css";
//import { DefaultImage } from "../../assets";

export default function ImageGen() {
  return (
    <div className="ai-img-gen d-flex flex-column m-auto align-items-center mt-5 mb-2 gap-3">
      <header className="fs-1 fw-bold pb-2 ">
        <div className="img-loading">
          <h1>What Are You Thinking About?</h1>
          <div className="default-image bg-light">
            <i className="fa-regular fa-image text-secondary"></i>
          </div>
        </div>
      </header>
    </div>
  );
}
