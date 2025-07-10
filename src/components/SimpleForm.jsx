export default function SimpleForm({
  formDetails,
  formSection,
  formResult,
  setFormResult,
}) {
  const formBody = formDetails.find((detail) => detail.id === formSection).body;
  const handleForm = (event, elementText) => {
    setFormResult({ ...formResult, [elementText]: event.target.value });
  };
  return (
    <div>
      {formBody.map((element) => {
        return (
          <div key={element.id}>
            <label htmlFor={element.id}>{element.text}</label>
            {element.type === "textarea" ? (
              <textarea
                id={element.id}
                value={formResult[element.text]}
                onChange={(event) => handleForm(event, element.text)}
              />
            ) : (
              <input
                id={element.id}
                type={element.type}
                value={formResult[element.text]}
                onChange={(event) => handleForm(event, element.text)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
