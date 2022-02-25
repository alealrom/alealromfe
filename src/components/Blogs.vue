<template>
  <div id="blogs" class="container-fluid col-lg-8 col-sm-12 col-md-12">
    <h3 class="subtitulos">BLOG</h3>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <h5>{{ section }}</h5>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <span id="tblogs" @click="$router.push({ name: entry.id })">
              {{ entry.title }}
              <p id="tblogs" class="subtitle">{{ entry.date }}</p>
            </span>
            <div class="row">
              <img class="imgblog col-12 col-lg-4" :src="`${ entry.img }`" alt="">
              <div class="col-12 col-lg-8">
                <p id="textblog">{{ entry.description }}</p>
              </div>
            </div>
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
  margin: 25px 0px 20px 0px;
}

h5 {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 0px 0px 3px 25px;
}

#tblogs {
  font-family: "Brawler", serif;
  font-weight: bold;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 0px 5px 25px;
}

.imgblog {
  max-width: 25%;
  margin: 0px -40px 0px 25px;
  
}

#textblog {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 0px 20px 25px;
}
</style>
