<template>
  <div class="container-fluid col-lg-8 col-sm-12 col-md-12">
    <div id="blog">
      <h3 class="subtitulos">BLOG</h3>
      <h5>Lorem Impsum</h5>
      <h6>Neque porro quisquam est qui dolorem ipsum quia</h6>
        <div class="row">
          <div class=" imgblog col-12 col-lg-4 border bg-light">Imagen</div>
          <div class="col-12 col-lg-4">
            <p class="tblog">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullam.
            </p>
          </div>
          <div class="col-12 col-lg-4">
            <p class="tblog">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
            <br />
            <a class="button1" href="#">-LEER MÁS-</a>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script>
export default {
  name: "Blog",

  data: function () {},

  methods: {},

  created: function () {},
};
</script>

<style>
#blog {
  margin: 25px 0px 0px 0px;
  padding: 0px 10px 25px 10px;
  border: solid 1px black;
}

h5 {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 0px 0px 3px 15px;
}

h6 {
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-align: left;
  margin: 0px 0px 15px 15px;
}

.imgblog {
  width: 250px;
  margin: 0px 5px 0px 25px;
}

.tblog {
  font-family: "Brawler", serif;
  font-size: 12.5pt;
  color: #000000;
  text-align: justify;
  margin: 0px 0px 0px 0px;
}

.button1 {
  background-color: #ffc600;
  border-radius: 5px;
  font-family: "Cutive Mono", monospace;
  font-weight: bold;
  color: #000000;
  text-decoration: none;
  font-size: 25px;
  padding: 5px 5px 5px 5px;
  margin: 0px 0px 0px 50px;
}
</style>