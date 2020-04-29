import *as axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '499cdb33-bd7a-4c5d-bfb2-5f0db71d2a51' },
})



export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }

}

export const loginAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login(formData) {
        return instance.post('auth/login', { formData } = formData).then(response => response.data)
    },
    logout() {
        return instance.delete('auth/login')
    }


}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)

    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }

}

