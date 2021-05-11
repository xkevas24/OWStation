<template>
  <q-page>
    <div>
      <div class="aligncenter" style="width:160px;height:220px;background-image: url('start.png');background-size: cover;margin-top: 250px"></div>
    </div>
    <div class="row">
      <p class="aligncenter start-text">{{NowText}}</p>
    </div>
    <div class="row">
      <p class="aligncenter last-text">{{LastText}}</p>
    </div>

  </q-page>
</template>

<script>
var sec = 0
var tick
export default {
  name: 'start',
  data() {
    return {
      NowText: "正在检查更新...",
      LastText: "欢迎使用暴雪大神守望复盘工具",
    }
  },
  mounted() {
    tick = setInterval(this.ticktock,1000)
  },
  methods: {
    TextChange(text){
      this.LastText = this.NowText
      this.NowText = text
    },
    generateRdStr() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
    ticktock(){
      sec++
      if(sec === 2){
        this.TextChange('正在验证程序...')
      }
      if(sec === 3){
        this.TextChange('正在检查组件...')
      }
      if(sec > 4){
        this.TextChange('正在启动中...')
        clearInterval(tick)
        // 页面跳转
        if (this.$q.electron.remote.getCurrentWindow().windowTag() === 'mainWindow'){
          this.$router.push('/ready')
        }
        if (this.$q.electron.remote.getCurrentWindow().windowTag() === 'replayWindow'){
          this.$router.push('/replay')
        }
        if (this.$q.electron.remote.getCurrentWindow().windowTag() === 'gameWindow'){
          this.$router.push('/game')
        }

        /*var query = window.location.search.substring(1)
        if(query==="window=ready"){
          this.$router.push('/ready')
        }
        if(query==="window=replay"){
          this.$router.push('/replay')
        }
        if(query==="window=game"){
          this.$router.push('/game')
        }
        if(query==="window=map"){
          this.$router.push('/map')
        }*/
      }
    }
  }
}
</script>
