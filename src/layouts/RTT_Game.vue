<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="q-electron-drag">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'rttgame',
  data () {
    return {
    }
  },created() {
    this.$router.push('/game')
  }
}
</script>
