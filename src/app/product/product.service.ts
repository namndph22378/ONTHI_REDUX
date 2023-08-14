import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IProduct } from './product.interface';
export const productApi = createApi({
        reducerPath: 'productApi',
        baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/products'}),
        tagTypes: ['Product'],
        endpoints: (builder) =>({
            getProductList: builder.query({
                query: () =>``,
                providesTags: ['Product']
            }),

            deleteProduct: builder.mutation<IProduct[], IProduct>({
                query: ({id}) =>({
                    url: `/${id}`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['Product']
            }),

            addProduct: builder.mutation<IProduct[], IProduct>({
                query: (product) =>({
                    url: ``,
                    method: 'POST',
                    body: product
                }),
                invalidatesTags: ['Product']
            }),

            editProduct : builder.mutation<IProduct[], IProduct>({
                query: ({id,...product}) =>({
                  url: `/${id}`,
                  method: 'PUT',
                  body: product,
                  
                }),
                invalidatesTags: ['Product']
              }),

        })
})
export const {useGetProductListQuery, useDeleteProductMutation , useAddProductMutation, useEditProductMutation} = productApi