<template>
  <q-page class="bg-cyan-2">
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide :name="1" img-src="https://wallpaperaccess.com/full/253322.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">Welcome to the world of reading!</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" img-src="https://wallpaperaccess.com/full/253332.jpg">
        <div class="absolute-center custom-caption">
          <div class="text-h2">a gate to the vast experience</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" img-src="https://c0.wallpaperflare.com/preview/630/728/966/shelf-rack-bookcase-indoors.jpg" >
        <div class="absolute-center custom-caption">
          <div class="text-h2">Where art of literature gather</div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="4" img-src="https://www.wallpaperflare.com/static/986/714/494/book-table-sheets-pages-wallpaper.jpg" >
        <div class="absolute-center custom-caption">
          <div class="text-h2">Enjoy your stay!</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <q-card dark class="bg-teal-14">
      <q-card-section class="my-card">
        <div class="text-h5">Welcome {{ $q.localStorage.getItem('dataUser').username }}!</div>
        <div class="text-subtitle1">in this website you can wonder on many books as you wish,
          find your desired book and swim into the vast experience of literature</div>
      </q-card-section>
    </q-card>

    <div bg-color="black" class="q-pa-xl">
      <q-card elevated>
        <q-card-section class="text-h4 title">
          MOST POPULAR
        </q-card-section>

        <q-separator primary inset />

        <!--BOOK CONTENTS START FROM HERE-->

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
            <q-img src="https://m.media-amazon.com/images/I/41DCmaAKZ8L.jpg" />

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
                  The Strength In Our Scars
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>

              <q-rating v-model="book2" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1 ellipsis">
                by Bianca Sparacino
              </div>
            </q-card-section>
          </q-card>
          <!--end content here-->

          <!--start content here-->
          <q-card class="content">
            <q-img src="https://images.penguinrandomhouse.com/cover/9780143132295" />

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
                  Love for Imperfect Things
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>

              <q-rating v-model="book3" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1 ellipsis">
                by Haemin Sunim
              </div>
            </q-card-section>
          </q-card>
          <!--end content here-->

          <!--start content here-->
          <q-card class="content">
            <q-img src="https://images-na.ssl-images-amazon.com/images/I/41MkVPBdOOL._SX317_BO1,204,203,200_.jpg" />

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
                  The Little Prince
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>

              <q-rating v-model="book2" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1 ellipsis">
                by Antoine de Saint-Exupéry
              </div>
            </q-card-section>
          </q-card>
          <!--end content here-->

          <!--start content here-->
          <q-card class="content">
            <q-img src="https://s2.bukalapak.com/img/7257977331/w-1000/14512092_ee835ce2_0c9a_40d1_91c5_51b7bcb536f5_300_463.jpg" />

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
                  The Things You Can See Only When You Slow Down
                </div>
                <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                </div>
              </div>

              <q-rating v-model="book1" :max="5" size="32px" />
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div class="text-subtitle1 ellipsis">
                by Haemin Sunim
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
        <!--BOOK CONTENTS END FROM HERE-->

        <div class="text-center q-py-xl row justify-center">
          <q-card class="helper" flat>
            <div class="text-h5 text-weight-thin">Find latest book</div>
            <q-btn class="bg-teal-12 text-white q-mt-md" icon="search" flat round size="xl"/>
          </q-card>
          <q-card class="helper" flat>
            <div class="text-h5 text-weight-thin">Be a Writer</div>
            <q-btn class="bg-teal-12 text-white q-mt-md" icon="create" flat round size="xl"/>
          </q-card>
          <q-card class="helper" flat>
            <div class="text-h5 text-weight-thin">Give your request</div>
            <q-btn class="bg-teal-12 text-white q-mt-md" icon="input" flat round size="xl"/>
          </q-card>
          <q-card class="helper" flat>
            <div class="text-h5 text-weight-thin">Be Inovative</div>
            <q-btn class="bg-teal-12 text-white q-mt-md" icon="emoji_objects" flat round size="xl"/>
          </q-card>
        </div>

      </q-card>
    </div>

     <q-carousel
        v-model="slide2"
        transition-prev="fade"
        transition-next="fade"
        vertical
        animated
        control-color="white"
        padding
        arrows
        height="200px"
        class="bg-blue-grey-5  text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="text-subtitle1 text-center quotes text-grey-13">
            “All we have to decide is what to do with the time that is given us.”
          </div>
          <div class="q-pt-md text-h6 text-center text-weight-bold text-teal-13">
            J. R. R. TOLKEIN
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="text-subtitle1 text-center quotes text-grey-13">
            “It matters not what someone is born, but what they grow to be.”
          </div>
          <div class="q-pt-md text-h6 text-center text-weight-bold text-teal-13">
            J. K. ROWLING
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="text-subtitle1 text-center quotes text-grey-13">
           “We are such stuff as dreams are made on, and our little life is rounded with a sleep.”
          </div>
          <div class="q-pt-md text-h6 text-center text-weight-bold text-teal-13">
            WILLIAM SHAKESSPEARE
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <div class="text-subtitle1 text-center quotes text-grey-13">
            “You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.
            You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go…”
          </div>
          <div class="q-pt-md text-h6 text-center text-weight-bold text-teal-13">
            DR. SEUSS
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="navi" class="column no-wrap flex-center">
          <div class="text-subtitle1 text-center quotes text-grey-13">
            "When blinded by anger,we make choices we later regret.
            Leaving the room before the bridge is burned is a sign of maturity."
          </div>
          <div class="q-pt-md text-h6 text-center text-weight-bold text-teal-13">
            HAEMIN SUNIM
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="hell" class="column no-wrap flex-center">
          <div class="text-subtitle1 text-center quotes text-grey-13">
            "When your mind is joyful and compassionate, the world is, too.
            when your mind is filled with negative thoughts, the wrold appears
            negative too"
          </div>
          <div class="q-pt-md text-h6 text-center text-weight-bold text-teal-13">
            HAEMIN SUNIM
          </div>
        </q-carousel-slide>
      </q-carousel>

    <q-card class="bg-blue-grey-10">
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

<script lang="ts">
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        }
      ],
      data: [],
      slide: 1,
      slide2: 'style',
      book1: 5,
      book2: 4,
      book3: 3
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$q.localStorage.getItem('dataUser')
    }
  }
}
</script>
