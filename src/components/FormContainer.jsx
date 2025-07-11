import FormHeader from "./FormHeader";
import FormBody from "./FormBody";
import formDetails from "../data/form-details";
import { useState } from "react";

export default function FormContainer({ formResult, setFormResult }) {
  const [formSection, setFormSection] = useState(0);

  return (
    <div className="my-4 w-full">
      <FormHeader
        formDetails={formDetails}
        formSection={formSection}
        setFormSection={setFormSection}
      />
      <FormBody
        formDetails={formDetails}
        formSection={formSection}
        formResult={formResult}
        setFormResult={setFormResult}
      />
    </div>
  );
}
