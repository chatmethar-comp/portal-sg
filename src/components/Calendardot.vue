
<template>
  <div
    class="
      border
      flex flex-col
      px-4
      py-2
      rounded-md
      border-backgroundDarkerSecondary
    "
  >
    <header class="flex gap-20 my-2">
      <p class="text-sm hidden xl:inline">MAY</p>
      <p class="text-sm hidden xl:inline">JUN</p>
      <p class="text-sm hidden md:inline">JUL</p>
      <p class="text-sm hidden md:inline">AUG</p>
      <p class="text-sm">SEP</p>
      <p class="text-sm">OCT</p>
      <p class="text-sm">NOV</p>
    </header>
    <div class="flex max-h-44">
      <div class="flex flex-col gap-1 flex-wrap">
        <div
          v-for="i in [...Array(95).keys()]"
          :key="i"
          class="w-5 h-5 rounded-md bg-backgroundSecondary"
        ></div>
        <div
          v-for="i in [...Array(48).keys()]"
          :key="i"
          class="
            hidden
            md:inline-block
            w-5
            h-5
            rounded-md
            bg-backgroundSecondary
          "
        ></div>
        <div class="w-5 h-5 rounded-md bg-cyan-400"></div>
        <div
          v-for="i in [...Array(30).keys()]"
          :key="i"
          class="
            hidden
            xl:inline-block
            w-5
            h-5
            rounded-md
            bg-backgroundSecondary
          "
        ></div>
        <div class="w-5 h-5 rounded-md bg-cyan-200"></div>
        <div
          v-for="i in [...Array(30).keys()]"
          :key="i"
          class="
            hidden
            xl:inline-block
            w-5
            h-5
            rounded-md
            bg-backgroundSecondary
          "
        ></div>
        <div class="w-5 h-5 rounded-md bg-cyan-200"></div>
        <div
          class="hidden xl:inline-block w-5 h-5 rounded-md bg-cyan-400"
        ></div>
        <div
          class="hidden xl:inline-block w-5 h-5 rounded-md bg-cyan-500"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>