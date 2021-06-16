import axios from 'axios';
import React from 'react'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '664b36ce-5bbb-4afc-9ef0-ebea28b98d90',
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      })
  },
  setFollow(id: number, toFollow?: boolean) {
    return instance[toFollow ? 'post' : 'delete'](
      `follow/${id}`).then(response => {
        return response.data;
      })
  },
  getProfile(userId: number) {
    console.warn('Obsolete method.Please use the profileAPI method')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status: status })
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe })
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}


