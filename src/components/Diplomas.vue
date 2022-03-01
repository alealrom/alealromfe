<template>
  <div class="container-fluid col-12">
    <div id="certificados">
      <h3 class="subtitulos">CERTIFICACIONES</h3>
      <div id="dev-icons" class="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 rwo-cols-xs-1">
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_DMPC.png"
          />
           <p class="name-cer">CERTIFICACIÓN DMPC</p>
        </div>
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_practica_frontend.png"
          />
          <p class="name-cer">ROADMAP FRONTEND PRAGMA</p>
        </div>
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_roadmap_frontend.png"
          />
          <p class="name-cer">ROADMAP FRONTEND PRAGMA</p>
        </div>
      </div>

      <div id="dev-icons" class="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 rwo-cols-xs-1">
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_fundamentos.png"
          />
            <p class="name-cer">CERTIFICADO FUN. INGENIERÍA SOFTWARE</p>
        </div>
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_linea_comandos.png"
          />
          <p class="name-cer">CERTIFICADO INTRODUCCIÓN TERMINAL</p>
        </div>
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_git_github.png"
          />
          <p class="name-cer">CERTIFICADO GIT Y GITHUB</p>
        </div>
      </div>

      <div id="dev-icons" class="row row-cols-lg-3 row-cols-md-1 row-cols-sm-1 rwo-cols-xs-1">
        <div class="col">
          <img
            id="img-certificados"
            src="../assets/certificados/certificado_maekring_contenidos.png"
          />
          <p class="name-cer">CERTIFICADO MARKETING CONTENIDOS</p>
        </div>
        <div class="col">
          <img
            id="img-certificados"
            src=""
          />
        </div>
        <div class="col">
          <img
            id="img-certificados"
            src=""
          />
        </div>
      </div>
      <a href="/" class="back">-INICIO-</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Diplomas",
};
</script>

<style>
#certificados {
  margin: 30px auto;
  max-width: 1200px;
}

#img-certificados {
  max-width: 356px;
  margin: 10px 0px 0px 27px;
}

#img-certificados:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  color: #ffffff;
  opacity: 0.5;
}

.name-cer {
  margin: 10px -26px 30px 26px;
  font-size: 17PX;
  font-family: "Brawler", serif;
  font-weight: bold;
  color: #000000;
}

.back{
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

.back:hover {
  background-color:#cf7500;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: #ffffff;
}
</style>