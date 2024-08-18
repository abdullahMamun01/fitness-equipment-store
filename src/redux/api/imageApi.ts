

import { baseAPi } from "./baseApi";


interface TImageResponse {
    images : string [] | string
}
  const imageApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        imageUpload: build.mutation<TImageResponse, FormData>({
            query: (imageFile) => {
                return {
                    url: '/image/upload',
                    method: "POST",
                    body: imageFile,
                    endpoint: "admin"
                }
            }
        }),

    }),
});


export const { useImageUploadMutation} = imageApi