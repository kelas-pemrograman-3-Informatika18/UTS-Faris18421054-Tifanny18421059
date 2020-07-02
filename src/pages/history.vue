<template>
  <q-page class="bg-cyan-2">

    <div class="q-px-xl q-pb-xl">
      <q-card>
        <q-card-section class="text-h5 text-weight-thin q-ml-md">
          GENRE : HISTORY
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-gutter-md">

          <div class="q-pa-md row items-stretch justify-center q-gutter-md">

            <!--start content here-->
            <q-card class="content">
              <q-img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1437084512l/25614492.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="teal-14"
                  icon="bookmark_border"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 q-pt-md ellipsis">
                    Salt to the Sea
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  </div>
                </div>

                <q-rating v-model="book1" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1 ellipsis">
                  by Ruta Sepetys
                </div>
              </q-card-section>
            </q-card>
            <!--end content here-->

            <!--start content here-->
            <q-card class="content">
              <q-img src="https://images-na.ssl-images-amazon.com/images/I/81z1jYu6NqL.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="teal-14"
                  icon="bookmark_border"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 q-pt-md ellipsis">
                    Book of Five Rings
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  </div>
                </div>

                <q-rating v-model="book2" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1 ellipsis">
                  by Musashi Miyamoto
                </div>
              </q-card-section>
            </q-card>
            <!--end content here-->

            <!--start content here-->
            <q-card class="content">
              <q-img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1453417993l/10534._SY475_.jpg" />

              <q-card-section>
                <q-btn
                  fab
                  color="teal-14"
                  icon="bookmark_border"
                  class="absolute"
                  style="top: 0; right: 12px; transform: translateY(-50%);"
                />

                <div class="row no-wrap items-center">
                  <div class="col text-h6 q-pt-md ellipsis">
                    the Art of War
                  </div>
                  <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                  </div>
                </div>

                <q-rating v-model="book3" :max="5" size="32px" />
              </q-card-section>

              <q-card-section class="q-pt-none">
                <div class="text-subtitle1 ellipsis">
                  by Sun Tzu
                </div>
              </q-card-section>
            </q-card>
            <!--end content here-->
          </div>
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
.custom-caption
  font-family: 'century gothic'
  font-weight: bold
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .5)
.my-card
  font-family: 'century gothic'
  padding-right: 41rem
  padding-left: 5rem
.title
  font-family: 'century gothic'
  padding-left: 8rem
.content
  margin-left: 3.2rem
  font-family: 'century gothic'
  width: 100%
  max-width: 200px
  max-height: 500px
  overflow: hidden
.quotes
  font-family: 'century gothic'
  max-width: 70%
.helper
  width: 100%
  max-width: 200px
</style>

<script>
export default {
  data () {
    return {
      book1: 5,
      book2: 4,
      book3: 3
    }
  }
}
</script>
