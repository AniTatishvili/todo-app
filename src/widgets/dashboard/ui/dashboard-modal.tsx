import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Select,
  Input,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { userFieldValues, userSchema } from "../../edit-user/lib";
import { useAddUserDashboardDataMutation } from "../../../app/providers/store/api";

export const DashboardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      console.log(await data(fd).unwrap(), 99);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Add New User</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
