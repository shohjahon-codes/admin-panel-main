import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
import { categoryType } from "./Categorytype"


export const useGetCatalogs = () => {
    return useQuery({
        queryKey: ['category'],
        queryFn: () => request.get<categoryType>('/category/').then((res) => res.data)
    })
}
