<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="q-electron-drag">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'rttreplay',
  data () {
    return {
    }
  },created() {
    this.$router.push('/replay')
  }
}
</script>
