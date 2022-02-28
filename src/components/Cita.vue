<template>
  <div class="container-fluid col-lg-4 col-sm-12 col-md-12">
    <div id="cita">
      <p class="comillas">"</p>
      <p class="t-cita">
        El futuro pertenece a quienes creen en la belleza de los sueños.
      </p>
      <p class="t-autor">-ELEANOR ROOSEVELT-</p>
      <div class="base"></div>
    </div>
    <Curriculum />
  </div>
</template>

<script>
import Curriculum from "@/components/Curriculum";

export default {
  name: "Cita",
  components: { Curriculum}

};
</script>

<style>
#cita {
  background-color: #000000;
  border-radius: 10px;
  margin: 107px 0px 60px 0px;
  padding: 20px 10px;
}

.comillas {
  font-family: "Brawler", serif;
  font-size: 100pt;
  line-height: 50pt;
  color: #f0A500;
  text-align: right;
  margin: 25px 15px -20px 15px;
}

.t-cita {
  font-family: "Brawler", serif;
  font-size: 13pt;
  color: #fcfcfa;
  text-align: right;
  margin: 5px 20px 15px 15px;
}

.t-autor {
  font-family: "Brawler", serif;
  font-size: 14pt;
  font-weight: bold;
  color: #fcfcfa;
  text-align: right;
  margin: 5px 20px 5px 15px;
}
</style>