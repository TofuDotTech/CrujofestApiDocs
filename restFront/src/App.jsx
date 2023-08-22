import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function App() {
  const url = "http://52.43.69.219:3000/static/bundled.yml";
  return <SwaggerUI url={url} />;
}

export default App;
