<template>
  <div class="container-fluid col-12 col-lg-4">
    <div id="contacto">
      <h3 class="subtitulos">CONTACTO</h3>
      <p class="cont-subtitulo">CELULAR</p>
      <p class="cont-info">+57 302 442 05 01</p>
      <p class="cont-subtitulo">EMAIL</p>
      <p class="cont-info">ale@alealrom.com</p>
      <br />
      <h3 class="subtitulos">REDES SOCIALES</h3>
      <p class="cont-subtitulo">LINKEDIN</p>
      <p class="cont-info"><a href="#">linkedin.com/in/alealrom/</a></p>
      <p class="cont-subtitulo">INSTAGRAM</p>
      <p class="cont-info"><a href="#">@alealrom</a></p>
      <p class="cont-subtitulo">TWITTER</p>
      <p class="cont-info"><a href="#">@alealrom</a></p>
      <p class="cont-subtitulo">GITHUB</p>
      <p class="cont-info"><a href="#">@alealrom</a></p>
      <br />
      <a class="button" href="#">-VER CURRICULUM-</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacto",

  data: function () {},

  methods: {},

  created: function () {},
};
</script>

<style>
#contacto {
  margin: 25px 0px 25px 0px;
}

.cont-subtitulo {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  font-weight: bold;
  color: #fd0054;;
  text-align: left;
  margin: 20px 5px 5px 15px;
}

.cont-info {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: right;
  margin: -10px 5px 5px 5px;
}

.button {
  background-color: #fd0054;;
  border-radius: 5px;
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  font-size: 25px;
  padding: 5px 5px 5px 5px;
  margin: 0px 0px 0px 80px;
}
</style>
