<template>
    <q-page class="bg-green-2">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
          <div class="q-pa-md text-h4 bg-blue-grey-14 text-weight-bold text-white">
            LOGIN PAGE
          </div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-pa-md"
    >
      <q-input
        filled
        v-model="username"
        label="Your Username *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type username']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[
          val => val !== null && val.length > 0 || 'Please type your password'
        ]"
      />
      <div class="q-pa-md">
        <q-btn label="Login" type="submit" color="primary"/>
        <q-btn label="Register" to="/Register" flat color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </q-card>
      </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$q.localStorage.set('dataUser', res.data.data)
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'home' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>
