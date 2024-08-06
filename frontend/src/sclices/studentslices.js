import { STUDENT_URL } from "../constant";

import { apiSlice } from "./apislices";

export const  StudnetApiSclice = apiSclice.injectEndpoints({
    endpoints : (builder) =>({
        getStudents: builder.query({
            query:() =>({
                url: STUDENT_URL,
                method: 'GET'
            })
        })
    })
});