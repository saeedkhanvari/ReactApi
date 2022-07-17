import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import "./App.css";
import { Navbar, Container, Stack , Nav ,NavbarBrand} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="navbar mb-5" bg="dark" variant="dark">
          <Container>
            <NavbarBrand href="/">
              خانه
            </NavbarBrand>
            <Stack direction="horizontal" gap={3}>
              <Link to="/page1" className="nav-link text-light ms-auto" >صفحه 1</Link>
              <Link to="/page2" className="nav-link text-light ms-auto">صفحه 2</Link>
              <Link to="/page3" className="nav-link text-light ms-auto" >صفحه 3</Link>
              <Link to="/page4" className="nav-link text-light ms-auto">صفحه 4</Link>
            </Stack>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
        </Routes>
      </BrowserRouter>
          <div>Api Project</div>
    </div>
  );
}

export default App;

