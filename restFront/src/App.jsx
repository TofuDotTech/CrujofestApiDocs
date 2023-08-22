import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  const url =
    "https://raw.githubusercontent.com/TofuDotTech/CrujofestApiDocs/main/apiSpec/bundled.yml";
  return <SwaggerUI url={url} />;
}

export default App;
