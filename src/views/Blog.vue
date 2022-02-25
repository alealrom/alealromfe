<template>
  <div id="blogs" class="container-fluid">
    <h3 class="subtitulos">BLOG</h3>
    <div class="sections">
      <div v-for="(section, index) in Object.keys(entries)" :key="index" class="group">
        <h5 class="center">{{section}}</h5>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <span id="tblog" @click="$router.push({name: entry.id})">
              {{entry.title}}
              <p id="tblog" class="subtitle">{{entry.date}}</p>
            </span>
            <p id="textblog">{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/data/blogs.json'

export default {
  name: 'blogs',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}
</script>

<style lang="scss" scoped>
#blogs {
  margin: 25px 0px 0px 0px;
  padding: 0px 10px 0px 10px;
}

h5 {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 0px 0px 3px 25px;
}

#tblog {
  font-family: "Brawler", serif;
  font-weight: bold;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 0px 5px 25px;
}

#textblog {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 25px 15px 25px;
}
</style>