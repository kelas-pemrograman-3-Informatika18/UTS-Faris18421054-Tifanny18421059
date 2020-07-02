<template>
  <q-page class="bg-cyan-2">

    <div class="q-px-xl q-pb-xl">
      <q-card>
        <q-card-section class="text-h5 text-weight-thin q-ml-md">
          CONTACT US
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-gutter-md">
          <q-input outlined dense v-model="name" label="Your Name" />
          <q-input outlined dense v-model="email" label="Your Email" />
          <q-input outlined dense v-model="subject" label="Subject" />
          <q-input outlined v-model="message" type="textarea" label="Your Message" />
          <div class="q-gutter-md">
            note: your message will be delivered to developer's email
          </div>
          <q-btn unelevated color="primary" label="send" />
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
