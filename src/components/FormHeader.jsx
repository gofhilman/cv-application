export default function FormHeader({
  formDetails,
  formSection,
  setFormSection,
}) {
  return (
    <div>
      {formDetails.map((detail) => {
        return (
          <HeaderList
            key={detail.id}
            id={detail.id}
            icon={detail.icon}
            header={detail.header}
            formSection={formSection}
            setFormSection={setFormSection}
          />
        );
      })}
    </div>
  );
}

function HeaderList({ id, icon, header, formSection, setFormSection }) {
  return (
    <button onClick={() => setFormSection(id)}>
      <img src={icon} alt="Icon" />
      <h2>{header}</h2>
    </button>
  );
}
