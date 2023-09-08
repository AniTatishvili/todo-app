import React from "react";

import { useAddUserDashboardDataMutation } from "../../app/providers/store/api";

import { Formik, Field, Form } from "formik";
import { userFieldValues, userSchema } from "./lib";

import { Button, Input, Select, Flex } from "@chakra-ui/react";

export const EditUserFields = () => {
  const [data] = useAddUserDashboardDataMutation();
  console.log(data);

  const onSubmitForm = async (values: any) => {
    console.log(values);

    const fd = new FormData();
    for (let i in values) {
      fd.append(i, values[i]);
    }

    try {
      await data(fd).unwrap();
      console.log(await data(1).unwrap());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={userFieldValues}
      validationSchema={userSchema}
      onSubmit={onSubmitForm}
    >
      {(formik) => {
        // console.log("formik", formik);
        return (
          <Form>
            <Flex flexDir={"column"} width={"50%"} mb={"20px"} gap={4}>
              <Flex flexDir={"column"} gap={4}>
                <label htmlFor="name">Name</label>
                <Input name="name" placeholder="Enter Name" />
              </Flex>
              <Flex flexDir={"column"} gap={4}>
                <label htmlFor="username">User Name</label>
                <Input name="username" placeholder="Enter User Name" />
              </Flex>
              <Flex flexDir={"column"} gap={4}>
                <label htmlFor="password">Password</label>
                <Input name="password" placeholder="Enter Password" />
              </Flex>
              <Flex flexDir={"column"} gap={4}>
                <label htmlFor="gender">Choose Gender</label>
                <Select name="gender">
                  <option>Female</option>
                  <option>Male</option>
                </Select>
              </Flex>
              <Flex flexDir={"column"} gap={4}>
                <label htmlFor="createdOn">Created Date</label>
                <Select name="createdOn">
                  <option>Female</option>
                  <option>Male</option>
                </Select>
              </Flex>
            </Flex>
            <Button type="submit">Save</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
