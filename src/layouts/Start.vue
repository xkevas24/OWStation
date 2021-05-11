<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="q-electron-drag">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
    }
  },mounted() {
    document.title = "暴雪大神守望复盘工具"
    if(this.$q.localStorage.getItem('lang') === null){
      this.$q.localStorage.set('lang','zh')
    }
    if(this.$q.localStorage.getItem('teamA') === null){
      this.$q.localStorage.set('teamA','o3')
    }
    if(this.$q.localStorage.getItem('teamB') === null){
      this.$q.localStorage.set('teamB','o7')
    }
  }
}
</script>
