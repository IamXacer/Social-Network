import axios from "axios";

export type GetUsersType = {
    pageSize:number
    currentPage: number;
}
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials:true,
    headers:{
        'API-KEY':'9eab0888-bbf6-4f8b-9d11-2c9027933f53'
    }
})

export const userAPI = {
    GetUsers (currentPage =1,pageSize = 10)  {
        return   instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response =>response.data)
    }
}

export const GetUsers = (currentPage =1,pageSize = 10) => {
  return   instance.get(`/users?page=${currentPage}&count=${pageSize}`)
      .then(response =>response.data)
}

export const LoginMe = () => {
  return   instance.get
  ( `/auth/me`,).then(response =>response.data)
}

/*
export const Follow = (id:string) => {
    instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,)
        .then(response =>response.data)
}
*/
