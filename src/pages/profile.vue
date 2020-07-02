<template>
  <q-page>
    <div class="q-pa-md">
      <div>
         <q-form
          @submit="onSubmit"
          class="q-gutter-md">
          <q-input disable class="q-pt-md" label="Username" v-model="username" outlined
          :rules="[ val => val && val.length > 0 || 'Isi cuk']"/>
          <q-input label="Name" v-model="name" outlined
          :rules="[ val => val && val.length > 0 || 'Isi juga ini cuk']"/>
          <q-input label="Phone Number" v-model="phonenumber" outlined
          :rules="[ val => val && val.length > 0 || 'WOY ISI JUGA INI']"/>
          <q-input label="Address" v-model="address" outlined
          :rules="[ val => val && val.length > 0 || 'WOY ISI JUGA INI']"/>
          <q-input label="Email" v-model="email" outlined
          :rules="[ val => val && val.length > 0 || 'WOY ISI JUGA INI']"/>
          <q-btn icon="face" @click="logout()" color="primary" label="Log Out" unelevated />
          <q-btn icon="create" color="positive" type="submit" label="Edit" unelevated />
          <q-btn icon="delete" @click="confirm($q.localStorage.getItem('dataUser')._id)" color="negative" label="Delete" unelevated />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<style lang="sass" scoped>

</style>

<script>
export default {
  data () {
    return {
      username: null,
      name: null,
      phonenumber: null,
      address: null,
      email: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.username = this.$q.localStorage.getItem('dataUser').username
      this.name = this.$q.localStorage.getItem('dataUser').name
      this.phonenumber = this.$q.localStorage.getItem('dataUser').phonenumber
      this.address = this.$q.localStorage.getItem('dataUser').address
      this.email = this.$q.localStorage.getItem('dataUser').email
    },
    onSubmit () {
      this.$axios.put('user/edit/' + this.$q.localStorage.getItem('dataUser')._id, {
        name: this.name,
        phonenumber: this.phonenumber,
        address: this.address,
        email: this.email
      }).then(res => {
        if (res.data.sukses) {
          this.$q.localStorage.setItem('dataUser')
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'profile' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure you want to delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete('user/hapus/' + id)
          .then((res) => {
            if (res.data.sukses) {
              this.$q.localStorage.remove('dataUser')
              this.$q.notify({
                type: 'positive',
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
      }).onCancel(() => {
        console.log('Other Button has been pressed')
      })
    },
    logout () {
      this.$q.localStorage.remove('dataUser')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
