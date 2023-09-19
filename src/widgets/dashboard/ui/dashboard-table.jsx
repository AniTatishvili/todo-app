import React from "react";
import { useNavigate } from "react-router-dom";

import {
  userDataAPI,
  useGetUserDashboardDataQuery,
  useDeleteUserDashboardDataMutation,
} from "../../../app/providers/store/api";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Text,
} from "@chakra-ui/react";
import { userFieldValues } from "../../edit-user/lib";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export const DashboardTable = () => {
  const { data } = useGetUserDashboardDataQuery();
  const [getData] = userDataAPI.endpoints.getUserDashboardData.useLazyQuery();
  const [deleteUserInfo] = useDeleteUserDashboardDataMutation();
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState();

  React.useEffect(() => {
    getData()
      .unwrap()
      .then((res) => {
        console.log("res", res);
        setUserData(res);
      });
  }, []);

  const editUser = async (data) => {
    for (let i in userFieldValues) {
      userFieldValues[i] = data[i];
    }
    console.log(data, "data");
    navigate("/edit");
  };

  const deleteUser = async (userID) => {
    try {
      await deleteUserInfo(userID).unwrap();
      console.log("success");
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>User Name</Th>
            <Th>Password</Th>
            <Th>Gender</Th>
            <Th>Create Date</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData?.map((data) => {
            return (
              <Tr key={data.id}>
                <Td>{data.name}</Td>
                <Td>{data.username}</Td>
                <Td>{data.password}</Td>
                <Td>{data.gender}</Td>
                <Td>{data.createdOn}</Td>
                <Th>
                  <Button onClick={() => editUser(data)}>
                    <FiEdit />
                    <Text ms={1}>Edit</Text>
                  </Button>
                </Th>
                <Th>
                  <Button onClick={() => deleteUser(data.id)}>
                    <AiOutlineDelete />
                    <Text ms={1}>Delete</Text>
                  </Button>
                </Th>
                {console.log(data)}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
