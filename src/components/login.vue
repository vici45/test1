<template>
  <h3>登录</h3>
  <el-button @click="goHome">主页</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import request from '@/utils/request'

export default defineComponent({
  name: 'Home',
  mounted () {
    request({
      method: 'get',
      url: 'login',
      data: {
        fN: 'fan',
        lN: 'xining'
      }
    }).then((res:any) => {
      console.log(res)
    })
  },
  setup () {
    const router1 = useRouter()
    const goHome = () => {
      router1.push('/welcome')
    }
    return {
      goHome
    }
  },
  components: {}
})
</script>
