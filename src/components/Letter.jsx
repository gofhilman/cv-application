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
        {formResult["Education"].length > 0 && <h3>Education</h3>}
        {formResult["Education"].map((list) => (
          <article key={list.id}>
            <h4>{list["School"]}</h4>
            <h5>{list["Course"]}</h5>
            <p>
              {list["Starting year"]}-{list["Graduating year"]}
            </p>
            {list["GPA"] && <p>GPA: {list["GPA"]}</p>}
            <ul>
              {list["Additional details"].map((detail) => (
                <li key={detail.id}>{detail.description}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section>
        {formResult["Experience"].length > 0 && <h3>Experience</h3>}
        {formResult["Experience"].map((list) => (
          <article key={list.id}>
            <h4>{list["Position"]}</h4>
            <h5>{list["Workplace"]}</h5>
            <p>
              {list["Starting year"]}-{list["End year"]}
            </p>
            <ul>
              {list["Job responsibilities"].map((detail) => (
                <li key={detail.id}>{detail.description}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </article>
  );
}
