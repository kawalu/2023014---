<template>
  <v-app>
    <v-app-bar style="background-color: aqua;">
      <v-container class="d-flex align-center" >
        <v-app-bar-title class="mt-3">トマトの時計</v-app-bar-title>
        <v-btn class="btn1" prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn class="btn2" prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn class="btn3" prepend-icon="mdi-cog" to="/settings">設定</v-btn>
      </v-container>
    </v-app-bar>
    <v-main class="main">
      <!-- Component 是目前頁面該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive 讓路由切換時不會銷毀元件，用 include 指定只有 Home 不會被銷毀 -->
        <!-- component 動態元件，顯示 is 綁定的元件 -->
        <keep-alive include="Home">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<style scoped>
.btn1,
.btn2,
.btn3 {
  background-color: white;
  border: none;
  color: #343a40;
  font-size: 20px;
  font-weight: bold;
}

.btn1:hover,
.btn2:hover,
.btn3:hover {
  border: none;
  border-bottom: 4px solid #000;
  border-radius: 0;
  padding-bottom: 0;
  background-color: white;
  color: #343a40;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0;
}

.main {
  background: url(./assets/001.jpg);
}
</style>

<script setup>
</script>
