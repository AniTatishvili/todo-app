import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageLayout } from "../../entities/layouts/PageLayout/PageLayout";
import { Home } from "../../pages/home/home";
import { Edit } from "../../pages/edit/edit";

export function RoutesConfig() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="edit" element={<Edit />} />
      </Route>
    </Routes>
  );
}
