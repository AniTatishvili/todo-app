import React from "react";

import { useUpdateUserDashboardDataMutation } from "../../app/providers/store/api";

import { Formik, Form, ErrorMessage } from "formik";
import { userFieldValues, userSchema } from "../../widgets/edit-user/lib";

import { EditUserFields } from "../../widgets/edit-user";

export const EditUser = () => {
  const [data] = useUpdateUserDashboardDataMutation();

  const onSubmitForm = async (values: any, { resetForm }: any) => {
    try {
      await data(values)
        .unwrap()
        .then((res) => {
          console.log(res, "res");
        });
      resetForm();
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
