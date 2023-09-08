import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";

export const DashboardTableHeader = () => {
  const navigate = useNavigate();

  const addNewUser = () => {
    navigate("/edit");
  };

  return (
    <>
      <div>dashboard-table-header</div>
      <Button onClick={addNewUser}>Add New User</Button>
    </>
  );
};
