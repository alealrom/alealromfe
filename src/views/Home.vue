<template>
  <div class="home">
    <body>
      <div class="container-fluid">
        <div class="row">
          <SobreMi />
          <Habilidades />
          <Contacto />
        </div>
        <div class="linea"></div>
        <div class="row">
          <Blog />
          <Cita />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import SobreMi from "@/components/SobreMi";
import Habilidades from "@/components/Habilidades";
import Contacto from "@/components/Contacto";
import Blog from "@/components/Blog";
import Cita from "@/components/Cita";

export default {
  name: "Home",
  components: { SobreMi, Habilidades, Contacto, Blog, Cita },
  data: function () {},
  methods: {},
  created: function () {},
};
</script>

<style>
.curriculum {
  max-width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fcfcfa;
}

.subtitulos {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  margin: 10px 0px 10px 15px;
  padding: 0px 0px 0px 5px;
  text-align: left;
  border-radius: 3px;
  border-left: 5px solid #ffc600;
}
</style>
