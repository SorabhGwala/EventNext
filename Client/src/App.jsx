import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EventDetails from "./pages/EventsDetails";
import NotFound from "./pages/NotFound";
import EventsCategoryPage from "./pages/EvantCatagoryPage";
import EventsPage from "./pages/EventPage";

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/events" element={<EventsPage />} />
    <Route path="/events/:id" element={<EventDetails />} />
    <Route path="/events/:category" element={<EventsCategoryPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>

 
);

export default App;
