import profile from "../assets/account-box.svg";
import contact from "../assets/phone.svg";
import education from "../assets/school.svg";
import experience from "../assets/briefcase-variant.svg";

const formDetails = [
  {
    id: 0,
    icon: profile,
    header: "Profile",
    body: [
      { text: "First name", type: "text" },
      { text: "Last name", type: "text" },
      { text: "Professional title", type: "text" },
      { text: "Summary", type: "textarea" },
    ],
  },
  {
    id: 1,
    icon: contact,
    header: "Contact",
    body: [
      { text: "Email", type: "email" },
      { text: "Phone number", type: "tel" },
      { text: "Location", type: "text" },
      { text: "Website", type: "text" },
    ],
  },
  {
    id: 2,
    icon: education,
    header: "Education",
    body: [
      { text: "School", type: "text", required: true },
      { text: "Course", type: "text" },
      { text: "Starting year", type: "tel", required: true },
      { text: "Graduating year", type: "tel", required: true },
      { text: "On-going", type: "checkbox" },
      { text: "GPA", type: "number" },
      { text: "Additional details", type: "textarea" },
      { text: "Add", type: "button" },
    ],
  },
  {
    id: 3,
    icon: experience,
    header: "Experience",
    body: [
      { text: "Position", type: "text", required: true },
      { text: "Workplace", type: "text" },
      { text: "Starting year", type: "tel", required: true },
      { text: "End year", type: "tel", required: true },
      { text: "On-going", type: "checkbox" },
      { text: "Job responsibilities", type: "textarea" },
      { text: "Add", type: "button" },
    ],
  },
];

export default formDetails.map((detail) => {
  detail.body.map((body) => {
    body.id = crypto.randomUUID();
    return body;
  });
  return detail;
});
