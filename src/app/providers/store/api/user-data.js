import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userDataAPI = createApi({
  reducerPath: "userDataAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({
    getUserDashboardData: build.query({
      query: () => "https://64bf80315ee688b6250d83db.mockapi.io/user",
    }),
    addUserDashboardData: build.mutation({
      query: (body) => ({
        url: "https://64bf80315ee688b6250d83db.mockapi.io/user",
        method: "POST",
        body,
      }),
    }),
    updateUserDashboardData: build.mutation({
      query: ({ id, data }) => ({
        url: `https://64bf80315ee688b6250d83db.mockapi.io/user/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteUserDashboardData: build.mutation({
      query: (id) => ({
        url: `https://64bf80315ee688b6250d83db.mockapi.io/user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUserDashboardDataQuery,
  useAddUserDashboardDataMutation,
  useUpdateUserDashboardDataMutation,
  useDeleteUserDashboardDataMutation,
} = userDataAPI;
