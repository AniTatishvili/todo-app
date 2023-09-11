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

import { Formik } from "formik";

import { userFieldValues, userSchema } from "../../edit-user/lib";

import { EditUserFields } from "../../edit-user/edit-user-fields";

export const DashboardModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data] = useAddUserDashboardDataMutation();
  console.log(data);

  const onSubmitAddForm = async (values: any) => {
    console.log("add", values);

    const fd = new FormData();
    for (let i in values) {
      fd.append(i, values[i]);
    }

    try {
      await data(values).unwrap();
      console.log(await data(values).unwrap(), 99);
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
              onSubmit={onSubmitAddForm}
            >
              {(formik) => {
                // console.log("formik", formik);
                return <EditUserFields />;
              }}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
