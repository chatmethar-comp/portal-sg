<template>
  <div>
    <div>Event</div>
    <div class="container grid sm:grid-cols-1 gap-3">
      <div
        v-for="i in [...Array(5).keys()]"
        :key="i"
        class="rounded-lg border border-backgroundDarkerSecondary h-24"
      ></div>
    </div>
  </div>
</template>

<script setup>
</script>
