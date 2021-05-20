import axios from 'axios'
import React from 'react'

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
    'API-KEY': '664b36ce-5bbb-4afc-9ef0-ebea28b98d90',
  },
  })

export const usersAPI = {
  getUsers (currentPage  = 1, pageSize = 10 ) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
     .then(response => {
      return response.data;
     })
   }
}


export const followAPI = {
  setFollow (id: number, toFollow?: boolean) {
    return  instance[toFollow ? 'post' : 'delete'](
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`).then(response => {
        return response.data;
    })
  }
}

