<template>
    <q-page class="bg-green-2">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" flat>
          <q-card-section class="bg-blue-grey-14">
            <div class="text-h5 text-weight-bold text-white">LOGIN PAGE MEMBER</div>
            </q-card-section>
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
        v-model="membernumber"
        label="Your member number "
      />
      <q-input
        filled
        class="q-pt-md"
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
      password: null,
      membernumber: null
    }
  },
  methods: {
    onSubmit () {
      if (this.username === 'tifanny' && this.password === '112233') {
        this.$q.notify({
          type: 'positive',
          message: 'Congratulation your login allready succesful'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Sorry please correct your password or username'
        })
      }
    },
    onReset () {
      this.username = null
      this.membernumber = null
      this.password = null
    }
  }
}
</script>
