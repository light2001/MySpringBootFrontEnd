import request from '@/utils/requestNew'
const baseurl = 'User/'

export function getUsers(token) {
  return request({
    url: baseurl + 'getUsers',
    method: 'get'
  })
}

export function getUser404(token) {
  return request({
    url: baseurl + 'getUsers11',
    method: 'get'
  })
}
