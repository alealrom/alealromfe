<template>
  <div id="blogs" class="container-fluid col-lg-8 col-sm-12 col-md-12">
    <h3 class="subtitulos">BLOG</h3>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <router-link class="ruta" :to="section + '/' + entry.id">
              <h5>
                {{ entry.title }}
              </h5>
            </router-link>
            <h6 class="subtitle">{{ entry.date }}</h6>
            <div class="row">
              <img style="aspect-ratio: 16/9" class="imgblog col-12" v-bind:src="`${entry.img}`" alt="" />
              <p id="textblog" class="col-lg-8 col-md-8 col-sm-12">{{ entry.description }}</p>
            </div>
            <div class="separador"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/data/blog.json";

export default {
  name: "blogs",
  computed: {
    entries() {
      return BLOGENTRIES;
    },
  },
};
</script>

<style>
#blogs {
  margin: 30px 0px 0px 0px;
}

.section {
  margin-top: 25px;
}

h5 {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 0px 0px 3px 25px;
}

h6 {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 0px 0px 15px 25px;
}

.imgblog {
  margin: 0px -25px 0px 25px;
  object-fit: fill;
}

.ruta {
  color:#000000;
}

#textblog {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 5px 10px 20px;
}

.separador {
  border-bottom: 2px solid #f0a500;
  margin: 30px 0px 0px 0px;
}
</style>
