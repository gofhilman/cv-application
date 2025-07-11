import email from "../assets/email-outline.svg";
import phone from "../assets/phone-outline.svg";
import location from "../assets/map-marker-outline.svg";
import web from "../assets/web.svg";
import "../styles/Letter.css";
import { useRef } from "react";
import html2pdf from "html2pdf.js";


export default function Letter({ formResult }) {
  const contentRef = useRef(null);

  const downloadPDF = () => {
    const element = contentRef.current;
    const options = {
      margin: 10,
      filename: "generated-cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download as PDF</button>
      <article ref={contentRef} className="h-[424px] w-[300px] border border-gray-300 p-4">
        <header className="grid grid-cols-[3fr_2fr] gap-x-4">
          <div>
            <h1 className="text-[15px]/5 font-bold text-[var(--theme-color)]">
              {formResult["First name"]} {formResult["Last name"]}
            </h1>
            <h2 className="text-[12px]/4 font-medium text-[var(--theme-color)]">
              {formResult["Professional title"]}
            </h2>
            <p className="text-[6px] my-0.5">{formResult["Summary"]}</p>
          </div>
          <div className="contact self-center text-[6px]">
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
                  {list["Starting year"]}-{list["Graduating year"]}
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
                  {list["Starting year"]}-{list["End year"]}
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
