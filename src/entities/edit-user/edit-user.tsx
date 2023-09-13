import React from "react";

import { useUpdateUserDashboardDataMutation } from "../../app/providers/store/api";

import { Formik, Form, ErrorMessage } from "formik";
import { userFieldValues, userSchema } from "../../widgets/edit-user/lib";

import { EditUserFields } from "../../widgets/edit-user";

export const EditUser = () => {
  const [data] = useUpdateUserDashboardDataMutation();
  console.log(data);

  const onSubmitForm = async (values: any, { resetForm }: any) => {
    console.log(values, 34444);
    const editUserFormData = {
      ...values,
    };

    const fd = new FormData();

    for (let i in editUserFormData) {
      fd.append(i, editUserFormData[i]);
      console.log(i, "res", editUserFormData[i]);
    }

    try {
      console.log(fd, 99999);
      await data(editUserFormData)
        .unwrap()
        .then((res) => {
          console.log(res, "res");
        });
      // resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={userFieldValues}
      // validationSchema={userSchema}
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
  );
};
