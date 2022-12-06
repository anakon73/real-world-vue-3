<script setup lang="ts"></script>

<template>
  <div class="text-center color-slate-700 font-sans p-2">
    <nav class="p-[30px]">
      <router-link
        class="font-bold text-slate-700"
        active-class="text-emerald-400"
        to="/"
        >Home</router-link
      >
      |
      <router-link
        class="font-bold text-slate-700"
        active-class="text-emerald-400"
        to="/about"
        >About</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
