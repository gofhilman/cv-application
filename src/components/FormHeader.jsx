export default function FormHeader({
  formDetails,
  formSection,
  setFormSection,
}) {
  return (
    <div className="flex divide-x-2 divide-white">
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
  const roundedMap = {
    0: " rounded-tl-lg",
    3: " rounded-tr-lg",
  };
  const rounded = roundedMap[id] || "";
  return (
    <button
      onClick={() => setFormSection(id)}
      className={
        "flex items-center px-2" +
        (id === formSection
          ? " flex-1 bg-[var(--theme-color)]"
          : " bg-gray-300") +
        rounded
      }
    >
      <img src={icon} alt="Icon" className="w-6 brightness-0 invert" />
      <h2 className="ml-2 text-xl font-semibold text-white">
        {id === formSection && header}
      </h2>
    </button>
  );
}
