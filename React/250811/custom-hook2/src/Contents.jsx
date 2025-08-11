import useLang from "./Hook/useLang";

function Content() {
  const { greeting, description, title } = useLang().currentLanguage;
  return (
    <div>
      <h2>{title}</h2>
      <p>{greeting}</p>
      <p>{description}</p>
    </div>
  );
}

export default Content;
