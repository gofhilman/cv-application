import { useState } from "react";
import plusCircle from "../assets/plus-circle.svg";
import minusCircle from "../assets/minus-circle.svg";
import edit from "../assets/pencil.svg";
import remove from "../assets/trash-can.svg";

export default function AdvancedForm({
  formDetails,
  formSection,
  formResult,
  setFormResult,
  className,
}) {
  const [formAddContent, setFormAddContent] = useState({
    "Additional details": [],
    "Job responsibilities": [],
  });
  const [descList, setDescList] = useState("");
  const section = formDetails.find((detail) => detail.id === formSection);
  const descArray =
    formSection === 2
      ? formAddContent["Additional details"]
      : formAddContent["Job responsibilities"];

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

  const removeDesc = (removedId, elementText) => {
    setFormAddContent({
      ...formAddContent,
      [elementText]: formAddContent[elementText].filter(
        (item) => item.id !== removedId,
      ),
    });
  };

  return (
    <div className={className}>
      <FormList
        formSection={formSection}
        formResult={formResult}
        setFormResult={setFormResult}
        formAddContent={formAddContent}
        setFormAddContent={setFormAddContent}
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
              <div key={element.id} className="form-element">
                <label
                  htmlFor={element.id}
                  className={element.type === "checkbox" ? "inline" : ""}
                >
                  {element.text}
                </label>
                {element.type === "textarea" ? (
                  <div>
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
                    <div>
                      {descArray.map((desc) => (
                        <div key={desc.id}>
                          <p>{desc.description}</p>
                          <img
                            src={minusCircle}
                            alt="Remove button"
                            onClick={() => removeDesc(desc.id, element.text)}
                            className="w-5"
                          />
                        </div>
                      ))}
                    </div>
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
                    className={
                      element.type === "checkbox"
                        ? "mx-2 w-max align-middle"
                        : ""
                    }
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

function FormList({
  formSection,
  formResult,
  setFormResult,
  formAddContent,
  setFormAddContent,
}) {
  const sectionList =
    formSection === 2
      ? ["Education", "School", "Course"]
      : ["Experience", "Position", "Workplace"];

  const removeList = (section, removedId) => {
    setFormResult({
      ...formResult,
      [section]: formResult[section].filter((item) => item.id !== removedId),
    });
  };

  return (
    <div>
      {formResult[sectionList[0]].map((list) => (
        <div key={list.id}>
          <p>
            {list[sectionList[1]]}
            {list[sectionList[2]] && " | " + list[sectionList[2]]}
          </p>
          <img src={edit} alt="Edit button" className="w-8" />
          <img
            src={remove}
            alt="Remove button"
            onClick={() => removeList(sectionList[0], list.id)}
            className="w-8"
          />
        </div>
      ))}
    </div>
  );
}
