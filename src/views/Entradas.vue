<template>
  <div id="entradas" class="container-fluid">
    <router-view />
    <a href="/" class="back">-VOLVER-</a>
  </div>
</template>

<style>
#entradas {
  width: 100%;
  margin: 30px auto;
  max-width: 1024px;
  text-align: justify;
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
  margin: 0px 0px 0px 15px;
}

.back:hover {
  background-color:#cf7500;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  color: #ffffff;
}
</style>