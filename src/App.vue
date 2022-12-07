<script setup lang="ts"></script>

<template>
  <nav class="p-[30px]">
    <router-link
      class="font-bold text-slate-700"
      active-class="text-emerald-400"
      to="/"
      >Events</router-link
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
</template>
