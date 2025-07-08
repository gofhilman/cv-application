import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import formDetails from "../data/form-details";
import { useState } from "react";

export default function FormContainer() {
  const [formSection, setFormSection] = useState(0);

  return (
    <div className="w-full">
      <FormHeader
        formDetails={formDetails}
        formSection={formSection}
        setFormSection={setFormSection}
      />
      <FormBody formDetails={formDetails} formSection={formSection} />
    </div>
  );
}
