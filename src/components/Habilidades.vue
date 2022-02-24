<template>
  <div class="container-fluid col-12 col-lg-4">
    <div id="habilidades">
      <h3 class="subtitulos">HABILIDADES</h3>
      <p class="thabilidades">Illustrator | Photoshop | CSS</p>
      <p class="thabilidades">HTML | Python | Postman</p>
      <p class="thabilidades">Heroku | Apollo | VSCode</p>
      <p class="thabilidades">GIT | GitHub | Vue</p>
      <div id="dev-icons" class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="Illustrator">
            <img
              src="https://img.icons8.com/color/72/000000/adobe-illustrator--v1.png"
            />
          </div>
        </div>
        <div class="col">
          <div class="Photoshop">
            <img
              src="https://img.icons8.com/color/72/000000/adobe-photoshop--v1.png"
            />
          </div>
        </div>
        <div class="col">
          <div class="CSS">
            <img src="https://img.icons8.com/color/72/000000/css3.png" />
          </div>
        </div>
      </div>
      <div id="dev-icons" class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="HTML">
            <img src="https://img.icons8.com/color/72/000000/html-5--v1.png" />
          </div>
        </div>
        <div class="col">
          <div class="Python">
            <img src="https://img.icons8.com/color/72/000000/python--v1.png" />
          </div>
        </div>
        <div class="col">
          <div class="Postman">
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/72/000000/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png"
            />
          </div>
        </div>
      </div>
      <div id="dev-icons" class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="Heroku">
            <img src="https://img.icons8.com/color/64/000000/heroku.png" />
          </div>
        </div>
        <div class="col">
          <div class="Apollo">
            <img src="https://img.icons8.com/color/72/000000/apollo.png" />
          </div>
        </div>
        <div class="col">
          <div class="VSCode">
            <img
              src="https://img.icons8.com/color/72/000000/visual-studio-code-2019.png"
            />
          </div>
        </div>
      </div>
      <div id="dev-icons" class="row row-cols-3 row-cols-lg-3 g-2 g-lg-3">
        <div class="col">
          <div class="GIT">
            <img src="https://img.icons8.com/color/72/000000/git.png" />
          </div>
        </div>
        <div class="col">
          <div class="GitHub">
            <img src="https://img.icons8.com/glyph-neue/72/000000/github.png" />
          </div>
        </div>
        <div class="col">
          <div class="Vue.js">
            <img src="https://img.icons8.com/color/72/000000/vue-js.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Habilidades",

  data: function () {},

  methods: {},

  created: function () {},
};
</script>

<style>
#habilidades {
  margin: 25px 0px 25px 0px;
}

.thabilidades {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: center;
  line-height: 16pt;
  padding: 0px 10px 0px 10px;
}

#dev-icons {
  margin: 10px 0px 0px 20px;
  padding: 0px 0px 0px 0px;
}
</style>
