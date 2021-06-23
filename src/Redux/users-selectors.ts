import React from 'react'
import { RootStateReduxType } from './redux-store'

export const getUsersPage = (state: RootStateReduxType) => {
   return state.usersPage
}

export const getPageSize = (state: RootStateReduxType) => {
   return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootStateReduxType) => {
   return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootStateReduxType) => {
   return state.usersPage.currentPage
}

export const getIsFetching = (state: RootStateReduxType) => {
   return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootStateReduxType) => {
   return state.usersPage.followingInProgress
}