import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { Characters, Home, Error } from "./pages";
import SharedLayout from "./components/SharedLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.characters} element={<Characters />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
