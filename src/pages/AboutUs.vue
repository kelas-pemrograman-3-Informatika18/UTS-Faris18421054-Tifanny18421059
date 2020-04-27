<template>
  <q-page class="bg-cyan-2">

    <div class="q-px-xl q-pb-xl">
      <q-card>
        <q-card-section class="text-h5 text-weight-thin q-ml-md">
          ABOUT US
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div class="text-h6">Staffs</div>
          <div class="text-body1">Faris Al Chaula Billah [18421054]</div>
          <q-list dense bordered padding class="rounded-borders wrap">
            <q-item v-ripple>
              <q-item-section>
                Consept Designer
              </q-item-section>
            </q-item>

            <q-item v-ripple>
              <q-item-section>
                Web Developer 1
              </q-item-section>
            </q-item>

            <q-item v-ripple>
              <q-item-section>
                Editor
              </q-item-section>
            </q-item>
          </q-list>

          <div class="text-body1 q-pt-md">Tifanny Martavia [18421059]</div>
          <q-list dense bordered padding class="rounded-borders wrap">
            <q-item v-ripple>
              <q-item-section>
                Consept Producer
              </q-item-section>
            </q-item>

            <q-item v-ripple>
              <q-item-section>
                Web Developer 2 (Login, Register)
              </q-item-section>
            </q-item>
          </q-list>

        </q-card-section>
      </q-card>
    </div>

    <q-card class="bg-blue-grey-10 q-mt-xl">
      <q-card-section>
        <q-toolbar>
          <q-toolbar-title>
            <div class="q-pl-xl text-subtitle2 text-white">
              Faris Al Chaula B. | Tifanny Martavia<div class="text-blue-grey-8">@ 2020 copyright | privacy policy</div>
            </div>
          </q-toolbar-title>
          <div class="q-gutter-md">
            <q-btn class="bg-blue-grey-9 text-white" flat round icon="email" />
            <q-btn class="bg-blue-grey-9 text-white" flat round icon="call" />
            <q-btn class="bg-blue-grey-9 text-white" flat round icon="chat_bubble" />
          </div>
        </q-toolbar>
      </q-card-section>
    </q-card>

  </q-page>
</template>

<style lang="sass" scoped>
.wrap
  max-width: 200px
</style>

<script>
export default {
}
</script>
