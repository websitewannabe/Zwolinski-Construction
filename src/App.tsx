import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'; // Added import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./components/Error";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Accessibility from "./pages/Accessibility";
import Privacy from "./pages/Privacy";
import CityPage from "./pages/CityPage"; // Assuming you have this component
import CitiesIndex from "./pages/CitiesIndex"; // Assuming you have this component
import Sitemap from "./pages/Sitemap";
import BasementRemodeling from "./pages/BasementRemodeling";
import BathroomRemodeling from "./pages/BathroomRemodeling";
import KitchenRemodeling from "./pages/KitchenRemodeling";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <ScrollToTop />
    <Navbar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/services",
    element: (
      <Layout>
        <Services />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/services/basement-remodeling",
    element: (
      <Layout>
        <BasementRemodeling />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/services/bathroom-remodeling",
    element: (
      <Layout>
        <BathroomRemodeling />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/services/kitchen-remodeling",
    element: (
      <Layout>
        <KitchenRemodeling />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/gallery",
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/reviews",
    element: (
      <Layout>
        <Reviews />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/accessibility",
    element: (
      <Layout>
        <Accessibility />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/privacy",
    element: (
      <Layout>
        <Privacy />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/cities",
    element: (
      <Layout>
        <CitiesIndex />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/cities/:cityId",
    element: (
      <Layout>
        <CityPage />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/sitemap.xml",
    element: <Sitemap />,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;