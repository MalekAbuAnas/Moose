/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./ImageGen.css";
import { Logo, Loading } from "../../assets";
import { useRef, useState } from "react";

export default function ImageGen() {
  const [image_url, setImage_url] = useState("/");
  const [loading, setLoading] = useState(false);

  let inputRef = useRef(null);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "1024x1024",
        }),
      }
    );
    let data = await response.json();
    let data_array = data.data;

    setImage_url(data_array[0].url);
  };

  return (
    <div className="ai-img-gen d-flex flex-column m-auto align-items-center mt-5 mb-2 gap-3 container">
      <header className="fs-1 fw-bold pb-2 w-100">
        <div className="img-loading">
          <div className="default-image">
            <img
              src={image_url === "/" ? (loading ? Loading : Logo) : image_url}
              alt="Default Image"
              className={image_url === "/" ? "w-75" : "w-100"}
            />
          </div>
          <div className="search-box w-100">
            <input
              type="text"
              className="search-input fs-6"
              placeholder="Unlock Your Inner Thoughts"
              ref={inputRef}
            />
            <button
              className="Button Button-primary"
              onClick={() => {
                imageGenerator();
                if (image_url === "/") {
                  setLoading(true);
                } else {
                  setImage_url("/");
                  setLoading(true);
                }
              }}
            >
              <div className="Button-cube">
                <span style={{ fontSize: "16px" }}>Generate</span>
                <span>
                  <i
                    className="fa-solid fa-wand-magic-sparkles"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
