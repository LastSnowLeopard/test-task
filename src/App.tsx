import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
