import { useState } from "react";
import plusCircle from "../assets/plus-circle.svg";

export default function AdvancedForm({
  formDetails,
  formSection,
  formResult,
  setFormResult,
}) {
  const [formAddContent, setFormAddContent] = useState({
    "Additional details": [],
    "Job responsibilities": [],
  });
  const [descList, setDescList] = useState("");
  const section = formDetails.find((detail) => detail.id === formSection);

  const handleDescAdd = (description, elementText) => {
    setFormAddContent({
      ...formAddContent,
      [elementText]: formAddContent[elementText].concat({
        description: description,
        id: crypto.randomUUID(),
      }),
    });
    setDescList("");
  };
  const handleForm = (event, elementText) => {
    setFormAddContent({
      ...formAddContent,
      [elementText]: event.target.value,
    });
  };
  const handleFormAdd = (section) => {
    setFormResult({
      ...formResult,
      [section.header]: formResult[section.header].concat({
        ...formAddContent,
        id: crypto.randomUUID(),
      }),
    });
    setFormAddContent({
      "Additional details": [],
      "Job responsibilities": [],
    });
  };

  return (
    <div>
      <FormList
        formSection={formSection}
        formResult={formResult}
        setFormResult={setFormResult}
      />
      <div>
        {section.body.map((element) => {
          if (element.type === "button") {
            return (
              <button key={element.id} onClick={() => handleFormAdd(section)}>
                {element.text}
              </button>
            );
          } else {
            return (
              <div key={element.id}>
                <label htmlFor={element.id}>{element.text}</label>
                {element.type === "textarea" ? (
                  <div>
                    <textarea
                      id={element.id}
                      value={descList}
                      onChange={(event) => setDescList(event.target.value)}
                    />
                    <img
                      src={plusCircle}
                      alt="Add button"
                      onClick={() => handleDescAdd(descList, element.text)}
                      className="w-8"
                    />
                  </div>
                ) : (
                  <input
                    id={element.id}
                    type={element.type}
                    value={
                      JSON.stringify(formAddContent) ===
                      '{"Additional details":[],"Job responsibilities":[]}'
                        ? ""
                        : formAddContent[element.text]
                    }
                    onChange={(event) => handleForm(event, element.text)}
                  />
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

function FormList({ formSection, formResult, setFormResult }) {
  if (formSection === 2) {
    return (
      <ul>
        {formResult.Education.map((list) => (
          <List
            formSection={formSection}
            formResult={formResult}
            setFormResult={setFormResult}
            key={list.id}
            first={list["School"]}
            second={list["Course"]}
          />
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {formResult.Experience.map((list) => (
          <List
            formSection={formSection}
            formResult={formResult}
            setFormResult={setFormResult}
            key={list.id}
            first={list["Position"]}
            second={list["Workplace"]}
          />
        ))}
      </ul>
    );
  }
}

function List({ formSection, formResult, setFormResult, first, second }) {
  return (
    <li>
      {first}
      {second && " | " + second}
    </li>
  );
}
