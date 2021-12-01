/**
 * axios封装
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'

const TOKEN_ERROR = 'TOKEN认证失败，请重新登录'
const NETWORK_ERROR = '网络错误'

const baseURL = 'https://www.fastmock.site/mock/966b6ca30ce9c90ada40a2e05131eb8d/test'
const service = axios.create({
  baseURL: baseURL,
  timeout: 8000
})

service.interceptors.request.use((req) => {
  const headers: any = req.headers
  if (!headers.Authorization) {
    headers.Authorization = 'Fan Gua'
    return req
  }
})

service.interceptors.response.use((res) => {
  const {
    code,
    data,
    msg
  } = res.data
  if (code === 200) {
    return data
  } else if (code === 401) {
    ElMessage.error(TOKEN_ERROR)
    setTimeout(() => {
      router.push('/login')
    }, 6000)
    return Promise.reject(TOKEN_ERROR)
  } else {
    ElMessage.error(msg || NETWORK_ERROR)
    return Promise.reject(msg || NETWORK_ERROR)
  }
})
const request = (options: any) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  return service(options)
}

export default request
