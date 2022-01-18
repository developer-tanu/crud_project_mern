import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),

  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => {
         console.log('Delete ID=>', id);
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
    }),

    createUser: builder.mutation({
      query: (newUser) => {
        //console.log("user Created =>", newUser);
        return {
          url: `users`,
          method: "POST",
          body: newUser,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    getUserById: builder.query({
      query: (id) => {
        console.log("ID=>", id);
        return {
          url: `users/${id}`,
          method: "GET",
        };
      },
    }),

    // updateUser: builder.mutation({
    //   query: (updateUserData) => {
    //     console.log("Updated User => ", updateUserData);
    //     const {id, ...data } = updateUserData;
    //     console.log("Actual Updated Post", data);
    //     return {
    //       url: `users/${id}`,
    //       method: 'PUT',
    //       body: data,
    //       headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //       }
    //     }
    //   },
   // }),
  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useGetUserByIdQuery,
} = userApi;
