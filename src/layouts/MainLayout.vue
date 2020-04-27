<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-blue-grey-10 " reveal elevated>
      <q-toolbar>
        <q-toolbar-title class="title">
          ARS Library
        </q-toolbar-title>
        <div align="left" class="button">
          <q-btn flat class="q-py-md" to="/home" color="text-white" label="Home"/>
          <q-btn flat class="q-py-md" to="/about" color="text-white" label="about us"/>
          <q-btn-dropdown flat class="q-py-md" color="dark text-white" label="Genre">
            <q-list>
              <q-item clickable v-close-popup to="/error">
                <q-item-section>
                  <q-item-label>Horror</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/error">
                <q-item-section>
                  <q-item-label>Fantasy</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup to="/error">
                <q-item-section>
                  <q-item-label>Sci-fi</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
          <q-btn flat class="q-py-md" to="/error" color="text-white" label="Contact"/>
        </div>
        <q-btn flat rounded class="q-ma-md" to="/profile" size="sm" label="profile" />
        <q-input icon="search" rounded outlined bg-color="white" v-model="text" dense>
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="sass" scoped>
  .title
    font-family: 'century gothic'
    padding-left: 15px
  .button
    margin-right: 12rem
</style>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      text: ''
    }
  }
}
</script>
