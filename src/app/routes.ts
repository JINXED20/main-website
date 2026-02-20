import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Carriers } from "./pages/Carriers";
import { Integrations } from "./pages/Integrations";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "features", Component: Features },
      { path: "carriers", Component: Carriers },
      { path: "integrations", Component: Integrations },
      { path: "pricing", Component: Pricing },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "*", Component: NotFound },
    ],
  },
]);
