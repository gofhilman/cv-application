export default function FormBody({ formDetails, formSection }) {
  const formBody = formDetails.find((detail) => detail.id === formSection).body;
  return (
    <div>
      {formBody.map((element) => {
        if (element.type === "button") {
          return <button key={element.id}>{element.text}</button>;
        } else {
          return (
            <div key={element.id}>
              <label htmlFor={element.id}>{element.text}</label>
              {element.type === "textarea" ? (
                <textarea id={element.id} />
              ) : (
                <input id={element.id} type={element.type} />
              )}
            </div>
          );
        }
      })}
    </div>
  );
}
