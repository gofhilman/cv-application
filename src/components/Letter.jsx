import email from "../assets/email-outline.svg";
import phone from "../assets/phone-outline.svg";
import location from "../assets/map-marker-outline.svg";
import web from "../assets/web.svg";
import "../styles/Letter.css";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Letter({ formResult }) {
  const contentRef = useRef(null);

  const downloadPDF = () => {
    const element = contentRef.current;
    if (!element) return;

    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("generated-cv.pdf");
    });
  };

  return (
    <div className="flex flex-col items-center">
      <button onClick={downloadPDF} className="rounded-t-lg px-3 py-1 font-medium">Download as PDF</button>
      <article
        ref={contentRef}
        className="h-[424px] w-[300px] border border-gray-300 p-4 lg:h-[636px] lg:w-[450px]"
      >
        <header className="grid grid-cols-[3fr_2fr] gap-x-4">
          <div>
            <h1 className="text-[15px]/5 lg:text-[23px]/6 font-bold text-[var(--theme-color)]">
              {formResult["First name"]} {formResult["Last name"]}
            </h1>
            <h2 className="text-[12px]/4 lg:text-[18px]/5 font-medium text-[var(--theme-color)]">
              {formResult["Professional title"]}
            </h2>
            <p className="my-0.5 text-[6px] lg:text-[9px]">{formResult["Summary"]}</p>
          </div>
          <div className="contact self-center text-[6px] lg:text-[9px]">
            <div>
              {formResult["Email"] && <img src={email} alt="Icon" />}
              <p>{formResult["Email"]}</p>
            </div>
            <div>
              {formResult["Phone number"] && <img src={phone} alt="Icon" />}
              <p>{formResult["Phone number"]}</p>
            </div>
            <div>
              {formResult["Location"] && <img src={location} alt="Icon" />}
              <p>{formResult["Location"]}</p>
            </div>
            <div>
              {formResult["Website"] && <img src={web} alt="Icon" />}
              <p>{formResult["Website"]}</p>
            </div>
          </div>
        </header>
        <section className="section">
          {formResult["Education"].length > 0 && <h3>EDUCATION</h3>}
          {formResult["Education"].map((list) => (
            <article key={list.id}>
              <div>
                <h4>{list["School"]}</h4>
                <h5>{list["Course"]}</h5>
                <p>
                  {list["Starting year"]}
                  {list["Graduating year"] && "-" + list["Graduating year"]}
                </p>
              </div>
              {list["GPA"] && <p>GPA: {list["GPA"]}</p>}
              <ul>
                {list["Additional details"].map((detail) => (
                  <li key={detail.id}>{detail.description}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section className="section">
          {formResult["Experience"].length > 0 && <h3>WORK EXPERIENCE</h3>}
          {formResult["Experience"].map((list) => (
            <article key={list.id}>
              <div>
                <h4>{list["Position"]}</h4>
                <h5>{list["Workplace"]}</h5>
                <p>
                  {list["Starting year"]}
                  {list["End year"] && "-" + list["End year"]}
                </p>
              </div>
              <ul>
                {list["Job responsibilities"].map((detail) => (
                  <li key={detail.id}>{detail.description}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </article>
    </div>
  );
}
