<template>
    <q-page>
      <div class="q-pa-md text-h4 bg-blue-grey-14 text-weight-bold text-white">
        Register Page
      </div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-pa-md q-mr-xl"
    >
      <q-input
        filled
        v-model="username"
        label="Your username *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your username']"
      />

      <q-input
        filled
        v-model="name"
        label="Your name *"
        lazy-rules
        :rules="[val => val !== null && val.length > 0 || 'Please type your name']"
      />
      <q-input
        filled
        v-model="phonenumber"
        label="Your phone number *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your phone number']"
      />
      <q-input
        filled
        v-model="address"
        label="Your address*"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type your address']"
      />
      <q-input
        filled
        v-model="email"
        label="Your email *"
        lazy-rules
        :rules="[val => val !== null && val.length > 0 || 'Please type your email']"
      />

      <q-input
        filled
        type="Password"
        v-model="password"
        label="Your password *"
        lazy-rules
        :rules="[
          val => val !== null && val.length > 0 || 'Please type your password'
        ]"
      />
      <div>
        <q-btn label="Register" type="submit" color="primary"/>
        <q-btn label="Login" to="/" flat color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      name: null,
      username: null,
      password: null,
      email: null,
      phonenumber: null,
      address: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/register', {
        username: this.username,
        name: this.name,
        address: this.address,
        phonenumber: this.phonenumber,
        password: this.password,
        email: this.email
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positif',
            message: res.data.pesan
          })
          this.$router.push({ name: 'login' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.name = null
      this.username = null
      this.password = null
      this.email = null
      this.phonenumber = null
      this.address = null
    }
  }
}
</script>
