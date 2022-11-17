<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="i in [...Array(3).keys()]"
      :key="i"
      class="
        bg-primary
        w-full
        md:w-3/4
        h-60
        lg:h-72
        xl:h-80
        border-dashed border-primary border-4
        bg-opacity-30
        flex
        justify-center
        items-center
        text-primary text-4xl
      "
    >
      chamethar chantawibool
    </div>
  </div>
</template>

<script setup>
</script>