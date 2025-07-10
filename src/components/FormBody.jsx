import SimpleForm from "./SimpleForm";
import AdvancedForm from "./AdvancedForm";

export default function FormBody(props) {
  return props.formSection === 0 || props.formSection === 1 ? (
    <SimpleForm {...props} />
  ) : (
    <AdvancedForm {...props} />
  );
}
