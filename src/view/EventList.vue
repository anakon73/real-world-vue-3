<script setup lang="ts"></script>

<template>
  <h1 class="mb-[18px] text-[32px] font-bold">Events For Good</h1>
  <div class="flex flex-col items-center">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
