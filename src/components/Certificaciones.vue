<template>
  <div class="container-fluid col-12 col-lg-4">
    <div id="certificaciones">
      <h3 class="subtitulos">CERTIFICACIONES</h3>
        <div class="col">
            <center><img id="img-certificacion"
              src="../assets/certificados/certificado_DMPC.png"
            /></center>
          </div>
        <div class="col container-fluid col-12">
        <center><router-link to="/certificaciones" tag="a" class="button-cer">-VER TODAS-</router-link></center>
      </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "Certificaciones",
}
</script>

<style>
#certificaciones {
  margin: 30px 0px 0px 0px;
}

#img-certificacion {
  border: 1px solid #cf7500;
  max-width: 356px;
  margin: 10px 0px 60px 27px;
}

.button-cer {
  background-color: #000000;
  border-radius: 5px;
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  font-size: 25px;
  padding: 12px 28px;
  transition-duration: 0.4s;
  margin: 0px 0px 0px 26px;
}

.button-cer:hover {
  background-color:#cf7500;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: #ffffff;
}
</style>
