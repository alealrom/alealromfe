<template>
  <div class="container-fluid col-12 col-lg-4">
    <div id="sobremi">
      <h4 class="sobre_mi">SOBRE MÍ</h4>
      <a>
        <img
          class="picture"
          v-bind:src="require('../assets/picture_ale.png')"
          alt="Foto Alejandra Álvarez Romero"
        />
      </a>
      <p class="texto-sobremi">
        Desarrolladora front-end con la capacidad de desarrollar y mantener aplicaciones web para optimizar la experiencia del usuario.
      </p>
      <br />
      <p class="texto-sobremi">
        Con conocimientos en HTML, CSS, JavaScript, Vue.js, Gtasby.js, GIT y su plataforma GitHub, metodología ágil SCRUM y herramientas de gestión proyectos como JIRA.
      </p>
      <br />
      <p class="texto-sobremi">
        Con amplia experiencia en comunicación y marketing digital, contenidos globales planificar, liderar y coordinar equipos.
      </p>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "SobreMi",
  data: function () {},
  methods: {},
  created: function () {},
};
</script>

<style>
#sobremi {
  background-color: #000000;
  border-radius: 10px;
  margin: 30px 0px 0px 0px;
}

.sobre_mi {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #fcfcfa;
  padding: 10px 0px 10px 10px;
  text-align: left;
}

.picture {
  display: block;
  margin: 10px auto 30px auto;
  height: 180px;
}

.texto-sobremi {
  font-family: "Brawler", serif;
  color: #fcfcfa;
  text-align: justify;
  margin: 0px 16px 0px 16px;
}
</style>
