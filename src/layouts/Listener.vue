<template>
  <q-layout view="lHh lpr lFf" style="height: 100%" class="shadow-2 rounded-borders">
    <q-header class="bg-white">
      <q-bar class="q-electron-drag bg-white">
        <div style="padding-left: 100px">
          <div style="color: rgba(28, 31, 62, 100);font-size: 12px;font-family: SourceHanSansSC-bold;font-style: italic">
            <q-icon name="img:owl.png"/>
            暴雪大神守望复盘工具
          </div>
        </div>
        <q-space />

        <q-btn dense flat icon="minimize" color="grey-9" @click="minimize" />
        <q-btn dense flat icon="close" color="grey-9" @click="closeApp" />
      </q-bar>
    </q-header>
  </q-layout>
</template>

<script>
var listentick
export default {
  name: 'Ready',
  data () {
    return {
    }
  },
  methods: {
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },
    closeApp () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close()
      }
    },
    workListen() {
      console.log(this.$q.localStorage.getItem('workmode'))
      if(this.$q.localStorage.getItem('workmode') === "video"){
        this.$router.push('/replay')
        clearInterval(listentick)
      }
      if(this.$q.localStorage.getItem('workmode') === "game"){
        this.$router.push('/game')
        clearInterval(listentick)
      }
    }
  },
  mounted() {
    // 监听自己要跳转的路由
    listentick=setInterval(this.workListen,500)
  }
}
</script>
