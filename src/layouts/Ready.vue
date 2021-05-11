<style>
body{
  border-color: #1A1B1C;
}
</style>
<template>
  <q-layout view="lHh lpr lFf" style="height: 100%" class="shadow-2 rounded-borders">
    <q-header class="bg-white">
      <q-bar class="q-electron-drag bg-white">
        <div style="padding-left: 100px">
          <div style="color: rgba(28, 31, 62, 100);font-size: 12px;font-family: SourceHanSansSC-bold;font-style: italic">
            <q-icon name="img:owl.png"/>
            {{g_title}}
          </div>
        </div>
        <q-space />

        <q-btn dense flat icon="minimize" color="grey-9" @click="minimize" />
        <q-btn dense flat icon="close" color="grey-9" @click="closeApp" />
      </q-bar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
var langListener
export default {
  name: 'Ready',
  data () {
    return {
      g_title: "",
      zh_title: "暴雪大神守望复盘工具",
      en_title: "Blizzard OWStation",
      kr_title: "Blizzard OWStation"
    }
  },
  mounted() {
    // 设置标题
    //document.title = this.g_title;
    langListener = setInterval(this.langListen,200)
    var lang = this.$q.localStorage.getItem('lang')
    if (lang === "zh") {
      this.g_title = this.zh_title
    }
    if (lang === "en") {
      this.g_title = this.en_title
    }
    if (lang === "kr") {
      this.g_title = this.kr_title
    }
    this.$q.electron.remote.BrowserWindow.getFocusedWindow().title = this.g_title
    document.title = "暴雪大神守望复盘工具";
  },
  methods: {
    minimize () {
      if (process.env.MODE === 'electron') {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize()
      }
    },
    closeApp () {
      if (process.env.MODE === 'electron') {
        var cp = require("child_process")
        cp.execFile('killruntime.bat', (error) => {
          console.log(error);
        });
        cp.execFile('kill.bat', (error) => {
          console.log(error);
        });
        //TASKKILL /F /IM owstation.exe /T
        //this.$q.electron.remote.app.quit()
        //this.$q.electron.remote.app.exit()
      }
    },
    langListen() {
      var lang = this.$q.localStorage.getItem('lang')
      if (lang === "zh") {
        this.g_title = this.zh_title
      }
      if (lang === "en") {
        this.g_title = this.en_title
      }
      if (lang === "kr") {
        this.g_title = this.kr_title
      }
      try {
        // this.$q.electron.remote.BrowserWindow.getFocusedWindow().title = this.g_title
      }catch (e) {

      }

    }
  },
}
</script>
