<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
      title="Your Profile"
      :data="data"
      :columns="columns"
      row-key="name"
      />
      <div class="q-pa-sm q-gutter-sm">
        <q-btn icon="face" to="/" color="primary" label="Login" unelevated />
        <q-btn icon="create" color="positive" label="Edit" unelevated />
        <q-btn icon="delete" color="negative" label="Delete" unelevated />
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
      columns: [
        {
          name: 'username',
          required: true,
          label: 'Username',
          align: 'center',
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'name', align: 'center', label: 'Name', field: 'name' },
        { name: 'phonenumber', align: 'center', label: 'Phone Number', field: 'phonenumber' },
        { name: 'address', align: 'center', label: 'Address', field: 'address' },
        { name: 'email', align: 'center', label: 'Email', field: 'email' }
      ],
      data: [
        {
          username: 'tifanny',
          name: 'Tifanny Martavia',
          phonenumber: '0812xxxxxx',
          address: 'Jl. Kartini Bandar Lampung',
          email: 'tifanny.18421059@student.ubl.ac.id'
        }
      ]
    }
  }
}
</script>
