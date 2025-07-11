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
        setFormAddContent={setFormAddContent}
      />
      <div>
        {section.body.map((element) => {
          if (element.type === "button") {
            return (
              <button
                key={element.id}
                onClick={() => handleFormAdd(section)}
                className="mx-2 my-3 rounded-lg px-3 py-2 text-lg font-bold"
              >
                {element.text}
              </button>
            );
          } else {
            return (
              <div key={element.id} className="form-element">
                <label htmlFor={element.id}>{element.text}</label>
                {element.type === "textarea" ? (
                  <div>
                    <div className="relative">
                      <textarea
                        id={element.id}
                        value={descList}
                        onChange={(event) => setDescList(event.target.value)}
                      />
                      <img
                        src={plusCircle}
                        alt="Add button"
                        onClick={() => handleDescAdd(descList, element.text)}
                        className="absolute right-0 bottom-1 w-8"
                      />
                    </div>
                    <div>
                      {descArray.map((desc) => (
                        <div key={desc.id} className="py-1 flex gap-x-2 items-center">
                          <img
                            src={minusCircle}
                            alt="Remove button"
                            onClick={() => removeDesc(desc.id, element.text)}
                            className="w-5"
                          />
                          <p className="leading-4">{desc.description}</p>
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
  const editList = (section, editedId) => {
    setFormAddContent(formResult[section].find((item) => item.id === editedId));
    setFormResult({
      ...formResult,
      [section]: formResult[section].filter((item) => item.id !== editedId),
    });
  };

  return (
    <div className="my-2 flex flex-col gap-y-2.5">
      {formResult[sectionList[0]].map((list) => (
        <div
          className="flex items-stretch divide-x-2 divide-white rounded-lg bg-[var(--theme-color)]"
          key={list.id}
        >
          <p className="flex-1 px-3 py-2 text-white">
            <span className="font-medium">{list[sectionList[1]]}</span>
            {list[sectionList[2]] && " | " + list[sectionList[2]]}
          </p>
          <div
            onClick={() => editList(sectionList[0], list.id)}
            className="flex items-center bg-gray-400"
          >
            <img
              src={edit}
              alt="Edit icon"
              className="h-[40px] px-3 py-2 brightness-0 invert"
            />
          </div>
          <div
            onClick={() => removeList(sectionList[0], list.id)}
            className="flex items-center rounded-r-lg bg-red-900"
          >
            <img
              src={remove}
              alt="Remove icon"
              className="h-[40px] px-3 py-2 brightness-0 invert"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
