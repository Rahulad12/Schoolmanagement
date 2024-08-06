import { query } from "express";
import { TEACHERS_URL } from "../constant";

import { apiSlice } from "./apislices";

export const TeacherApiSclice  = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeacher: builder.query({
            query: () => ({
                url: TEACHERS_URL,
                method: 'GET'
            }),
            keepUnusedDataFor : 5
        }),
    }),
});

export const { useGetTeacherQuery } = TeacherApiSclice;

