import React from "react";
import { useUpdateUserDashboardDataMutation } from "../../app/providers/store/api";

import { Formik, Form, ErrorMessage } from "formik";
import { userFieldValues, userSchema } from "../../widgets/edit-user/lib";

import { EditUserFields } from "../../widgets/edit-user";

export const EditUser = () => {
  const [data] = useUpdateUserDashboardDataMutation();
  console.log(data);

  const onSubmitForm = async (values: any) => {
    console.log(values, 34444);
    // const editUserFormData = {
    //   id: values.is,
    //   name: values.name,
    //   userName: values.username,
    //   gender: values.gender,
    //   ...values,
    // };

    // const fd = new FormData();

    // for (let i in editUserFormData) {
    //   fd.append(i, editUserFormData[i]);
    // }

    // console.log(editUserFormData, 333);
    try {
      await data(values).unwrap();
      console.log(await data(values).unwrap(), 333);
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
