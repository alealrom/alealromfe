<template>
  <div id="blog" class="container-fluid col-lg-12 col-sm-12 col-md-12">
    <h3 class="subtitulos">BLOG</h3>
    <div class="sections">
      <div
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
        class="group"
      >
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <router-link class="ruta" :to="section + '/' + entry.id"></router-link>
              <h5>{{ entry.title }}</h5>
              <h6 class="subtitle">{{ entry.date }}</h6>
            <div class="row">
              <img
                style="aspect-ratio: 14/9"
                class="blogimg col-12"
                :src="`${entry.img}`"
                alt=""
              />
              <p id="textblog" class="col-9">{{ entry.description }}</p>
            </div>
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
    <router-view />
    <br/>
    <router-link to="/" class="back">-INICIO-</router-link>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'

export default {
  name: 'blog',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}
</script>

<style>
#blog {
  margin: 30px auto;
  max-width: 1024px;
  text-align: justify;
}

.blogimg {
  max-width: 20%;
  margin: 0px -25px 0px 25px;
  object-fit: cover;
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

#textblog {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 0px 15px 25px;
}

.line {
  border-bottom: 2px solid #f0a500;
  margin: 20px 0px 10px 0px;
}
</style>