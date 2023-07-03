import { useEffect, useContext } from "react";
import { DataContext } from '../context/DataProvider';

const CodePersistence = () => {
  const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

  // Load code from local storage on initial mount
  useEffect(() => {
    const storedHtml = localStorage.getItem("html");
    const storedCss = localStorage.getItem("css");
    const storedJs = localStorage.getItem("js");

    if (storedHtml) setHtml(storedHtml);
    if (storedCss) setCss(storedCss);
    if (storedJs) setJs(storedJs);
  }, [setHtml, setCss, setJs]); // Include the setHtml, setCss, and setJs dependencies

  // Save code to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
  }, [html, css, js]); // Include the html, css, and js dependencies

  return null; // No need to render anything for this component
}

export default CodePersistence;
