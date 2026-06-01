import React from "react";
import "./Resume.css";

const resumePdf = "/Akanksha_Upadhyay_Resume.pdf";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Akanksha_Upadhyay_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume animate-fadeIn">
      <div className="page-inner">

        <div className="resume-header">
          <h2 className="section-title">Resume</h2>

          <button
            className="resume-dl-btn-small"
            onClick={handleDownload}
          >
            Download PDF
          </button>
        </div>

        <div className="resume-preview">
          <img
            src="/resume-preview.png"
            alt="Resume"
            className="resume-image"
          />
        </div>

        <button
          className="resume-dl-btn"
          onClick={handleDownload}
        >
          ⬇ Download Resume
        </button>

      </div>
    </section>
  );
}