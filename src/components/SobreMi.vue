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
        Comunicadora Social - Periodista con más de 4 años de experiencia en
        consolidar estrategias en el área de marketing, aplicando los últimos
        desarrollos tecnológico.
      </p>
      <br />
      <p class="texto-sobremi">
        Con conocimientos básicos en metodologías ágiles -SCRUM-, diseño de
        experiencia de usuario -UX- e interfaz de usuario -UI-.
      </p>
      <br />
      <p class="texto-sobremi">
        Con gran pasión por el diseño UX/UI y el aprendizaje autónomo.
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
}

.texto-sobremi {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #fcfcfa;
  text-align: justify;
  margin: 0px 25px 0px 25px;
}
</style>
