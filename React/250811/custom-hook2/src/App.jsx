import LanguageSelector from "./LangSelector.jsx";
import LanguageProvider from "./LanguageProvider.jsx";
import Content from "./Contents.jsx";

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <Content />
    </LanguageProvider>
  );
}

export default App;
