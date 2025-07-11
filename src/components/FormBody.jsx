import SimpleForm from "./SimpleForm";
import AdvancedForm from "./AdvancedForm";
import "../styles/FormBody.css";

export default function FormBody(props) {
  return props.formSection === 0 || props.formSection === 1 ? (
    <SimpleForm {...props} className="form-body" />
  ) : (
    <AdvancedForm {...props} className="form-body" />
  );
}
