<template>
  <div class="home">
    <body>
      <div class="container-fluid">
        <div class="row">
          <SobreMi />
          <Blogs />
        </div>
        <div id="linea"></div>
        <div class="row">
          <Contacto />
          <Certificaciones />
          <Cita />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import SobreMi from "@/components/SobreMi";
import Blogs from "@/components/Blogs"
import Contacto from "@/components/Contacto";
import Certificaciones from "@/components/Certificaciones";
import Cita from "@/components/Cita";

export default {
  name: "Home",
  components: { SobreMi, Blogs, Contacto, Certificaciones, Cita },
};
</script>

<style>
.home {
  max-width: 1300px;
  margin: 0 auto;
  box-sizing: border-box;
  background: #f4f4f4;
}

.subtitulos {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  margin: 10px 0px 25px 15px;
  padding: 0px 0px 0px 5px;
  text-align: left;
  border-radius: 3px;
  border-left: 5px solid #f0a500;
}

#linea {
  border-bottom: 2px solid #000000;
  margin: 30px auto 0px auto;
}
</style>
