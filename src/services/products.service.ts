import { axiosApi } from "../config/axios";

const fetchPost = async () => {
  return await axiosApi.get(`/products`);
};
const AddPost = async (data:any) => {
  return await axiosApi.post(`/products/add`, data);
};

export { fetchPost,AddPost };
