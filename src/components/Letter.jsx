import email from "../assets/email-outline.svg";
import phone from "../assets/phone-outline.svg";
import location from "../assets/map-marker-outline.svg";
import web from "../assets/web.svg";

export default function Letter({ formResult }) {
  return (
    <article>
      <header>
        <div>
          <h1>
            {formResult["First name"]} {formResult["Last name"]}
          </h1>
          <h2>{formResult["Professional title"]}</h2>
          <p>{formResult["Summary"]}</p>
        </div>
        <div>
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
      <section>
        <h3>Education</h3>       
      </section>
      <section></section>
    </article>
  );
}
