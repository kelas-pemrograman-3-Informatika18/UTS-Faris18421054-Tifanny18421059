<template>
    <q-page>
     Register Page
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-pa-md"
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
      </div>
    </q-form>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      Name: null,
      Username: null,
      Password: null,
      email: null,
      phonenumber: null,
      address: null
    }
  },
  methods: {
    onSubmit () {
      console.log('this is submit')
    },
    onReset () {
      this.username = null
      this.password = null
    }
  }
}
</script>
