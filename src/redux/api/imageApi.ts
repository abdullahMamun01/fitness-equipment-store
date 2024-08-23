

import { baseAPi } from "./baseApi";



  const imageApi = baseAPi.injectEndpoints({
    endpoints: (build) => ({
        imageUpload: build.mutation<string[], FormData>({
            query: (imageFile) => {
                return {
                    url: '/image/upload',
                    method: "POST",
                    body: imageFile,
                    endpoint: "admin"
                }
            },
            transformResponse: (response: {
                success: boolean;
                statusCode: number;
                data: string[];
              }) => response.data,
        }),
        
    }),
});


export const { useImageUploadMutation} = imageApi