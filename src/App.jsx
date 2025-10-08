import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      {/* Left section */}
      <div className="left">
        <h1 className="name">San Pashtoon</h1>
        <h2 className="title">Software Engineer</h2>
        <h2 className="title">MCS Student</h2>

        <div className="links">
          <a href="https://www.linkedin.com/in/sanpasht/">LinkedIn</a>
          <a href="https://github.com/sanpasht">GitHub</a>
          <a href="https://sanpasht.github.io/san-portfolio/SanPashtoonCv.pdf" target="_blank" rel="noopener noreferrer">
          View CV
          </a>
          <p>sspashto@uci.edu</p>
        </div>
      </div>

      {/* Right section */}
      <div className="right">
        <section className="about">
          <h2>About</h2>
          <p>
            I'm a software engineer and computer science graduate passionate about
            creating intelligent systems and clean, efficient code. My interests
            lie at the intersection of data, design, and performance — crafting
            tools that are both technically sound and intuitively elegant.
          </p>
        </section>

        <section className="projects">
          <h2>Project Blog</h2>

          <div className="project">
            <h3>License Plate Recognition System</h3>
            <p>
              Designed and implemented an OCR-based system to detect and extract
              license plate numbers from images. Combined image processing techniques
              (grayscale conversion, contour detection, thresholding) with Tesseract OCR
              for character recognition. Optimized detection accuracy under varying
              lighting and angle conditions using preprocessing pipelines in OpenCV.
            </p>
          </div>

          <div className="project">
            <h3>Facial Emotion Detector</h3>
            <p>
              Developed a deep learning model using convolutional neural networks (CNNs)
              to classify facial expressions (e.g., happy, sad, angry, surprised) with high
              accuracy. Preprocessed image datasets with OpenCV (grayscale conversion,
              normalization, augmentation) to improve model robustness.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

/*
For new projects use the following format
<div className="project">
            <h3>Name</h3>
            <p>
              Paragraph description
            </p>
          </div>
*/
