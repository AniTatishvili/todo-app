import React from "react";

import { Field } from "formik";

// import DatePicker from "react-datepicker";

import { Button, Select, Flex } from "@chakra-ui/react";

import s from "./edit-user.module.scss";

export const EditUserFields = () => {
  return (
    <>
      <Flex flexDir={"column"} width={"50%"} mb={"20px"} gap={4}>
        <Flex flexDir={"column"} gap={4}>
          <label htmlFor="name">Name</label>
          <Field
            className={s.input_field}
            as="input"
            type="text"
            id="id"
            name="id"
            placeholder="Id"
            disabled
          />
        </Flex>
        <Flex flexDir={"column"} gap={4}>
          <label htmlFor="name">Name</label>
          <Field
            className={s.input_field}
            as="input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
          />
        </Flex>
        <Flex flexDir={"column"} gap={4}>
          <label htmlFor="username">User Name</label>
          <Field
            className={s.input_field}
            as="input"
            type="text"
            id="username"
            name="username"
            placeholder="Enter User Name"
          />
        </Flex>
        <Flex flexDir={"column"} gap={4}>
          <label htmlFor="password">Password</label>
          <Field
            className={s.input_field}
            as="input"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
          />
        </Flex>
        <Flex flexDir={"column"} gap={4}>
          <label htmlFor="gender">Choose Gender</label>
          <Select id="gender" name="gender">
            <option>Female</option>
            <option>Male</option>
          </Select>
        </Flex>
        <Flex>
          {/* <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
          /> */}
        </Flex>
      </Flex>
      <Button type="submit">Save</Button>
    </>
  );
};
