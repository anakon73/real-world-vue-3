<script setup lang="ts">
const event = {
  id: 5928101,
  category: 'animal welfare',
  title: 'Cat Adoption Day',
  description: 'Find your new feline friend at this event.',
  location: 'Meow Town',
  date: 'January 28, 2022',
  time: '12:00',
  petsAllowed: true,
  organizer: 'Kat Laydee',
}
</script>

<template>
  <div
    class="p-5 w-[250px] cursor-pointer border border-slate-700 mb-[18px] hover:scale-[1.01] hover:shadow-[0_3px_12px_0_rgba(0,0,0,0.2)]"
  >
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <div class="text-base">
      {{ event.title }}
    </div>
  </div>
</template>
