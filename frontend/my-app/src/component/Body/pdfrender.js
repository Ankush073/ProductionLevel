import React from "react";

export default function PDFRender({ pdfUrl, title }) {
  return (
    <div className="w-full min-h-screen bg-[#FBF8F1] dark:bg-[#0F1923] p-6">
      <div className="max-w-7xl mx-auto">
        
        <h1
          className="text-2xl mb-4 text-[#1C2B39] dark:text-[#E8E2D4]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {title}
        </h1>

        <div className="w-full h-[80vh] border border-[#D9C08C]/40 rounded-sm overflow-hidden">
          <iframe
            src={pdfUrl}
            title={title}
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
}