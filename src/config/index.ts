/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/966b6ca30ce9c90ada40a2e05131eb8d/test/login'
  },
  test: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/966b6ca30ce9c90ada40a2e05131eb8d/test/login'
  },
  prod: {
    baseApi: '/',
    mockApi: 'https://www.fastmock.site/mock/966b6ca30ce9c90ada40a2e05131eb8d/test/login'
  }
}
export default {
  env,
  mock: true,
  ...EnvConfig[env]
}
