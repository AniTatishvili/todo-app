import React from "react";
import { useAddUserDashboardDataMutation } from "../../../app/providers/store/api";

import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Formik, Form } from "formik";

import { userFieldValues, userSchema } from "../../edit-user/lib";

import { EditUserFields } from "../../edit-user/edit-user-fields";

export const DashboardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data] = useAddUserDashboardDataMutation();

  const onSubmitForm = async (values: any, { resetForm }: any) => {
    console.log("add", values);

    // const fd = new FormData();
    // for (let i in values) {
    //   fd.append(i, values[i]);
    // }
    // console.log(fd, "values");
    try {
      await data(values).unwrap();
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>Add New User</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"} isCentered>
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
                    <EditUserFields />
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
