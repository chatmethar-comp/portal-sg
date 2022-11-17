<template>
  <div
    class="
      container
      translate-y-24
      md:translate-y-0
      max-w-xl
      min-w-[300px]
      flex flex-col
      gap-3
      ml-8
      md:mx-auto
      my-6
    "
  >
    <h1 class="text-2xl font-bold text-center tracking-wide">Upload Port</h1>
    <!-- name -->
    <div class="flex flex-col space-y-1">
      <label for="" class="text-base font-semibold">Activity's Name</label>
      <input
        type="text"
        class="
          w-9/12
          md:w-full
          rounded-md
          text-base
          px-4
          py-2
          focus:outline-black
        "
        name=""
        id=""
      />
    </div>
    <!-- type & date -->
    <div class="flex flex-wrap items-end gap-6">
      <div class="flex flex-col space-y-1">
        <label for="" class="font-semibold text-md"> type</label>
        <select
          class="text-sm md:text-md px-6 md:px-8 py-2 rounded-md"
          name=""
          id=""
        >
          <option value="">Camp</option>
          <option value="">Competition</option>
          <option value="">Contest</option>
          <option value="">Program</option>
          <option value="">Workshop</option>
          <option value="">Open house</option>
        </select>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="" class="font-semibold text-md">Field</label>
        <select
          class="text-sm md:text-md px-6 md:px-8 py-2 rounded-md"
          name=""
          id=""
        >
          <option value="">Science</option>
          <option value="">Technology</option>
          <option value="">Business</option>
          <option value="">Art</option>
          <option value="">Medical</option>
          <option value="">Language</option>
          <option value="">Engineering</option>
          <option value="">Music</option>
          <option value="">Workout</option>
          <option value="">Life Skill</option>
        </select>
      </div>
      <div class="flex flex-col space-y-1">
        <label for="" class="font-semibold text-md">Time</label>
        <input type="date" class="px-6 py-2 rounded-md text-xs" name="" id="" />
      </div>
    </div>
    <div class="flex flex-col space-y-1">
      <label for="" class="text-base font-semibold">keywords tag</label>
      <input
        type="text"
        class="
          w-9/12
          md:w-full
          rounded-md
          text-base
          px-4
          py-2
          focus:outline-black
        "
        name=""
        id=""
      />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="" class="text-base font-semibold">Description</label>
      <textarea
        type="text"
        class="
          w-9/12
          md:w-full
          rounded-md
          text-base
          px-4
          py-2
          h-24
          focus:outline-black
        "
        name=""
        id=""
      ></textarea>
    </div>
    <div class="flex flex-col space-y-1">
      <label for="" class="text-base font-semibold">Contributions</label>
      <div
        class="
          flex
          w-9/12
          md:w-full
          h-32
          border-4 border-dashed
          bg-white
          border-gray-300
          items-center
          justify-center
          cursor-pointer
        "
        @click="upload()"
      >
        import Contributions, images, ...
      </div>
    </div>
    <div class="flex flex-col space-y-1">
      <label for="" class="text-base font-semibold">Organizer</label>
      <input
        type="text"
        class="
          w-9/12
          md:w-full
          rounded-md
          text-base
          px-4
          py-2
          focus:outline-black
        "
        name=""
        id=""
      />
    </div>
    <div class="flex self-start">
      <router-link
        to="/overview"
        class="mt-3 bg-primary text-white shadow-md px-4 py-2 rounded-md"
      >
        Add to your port
      </router-link>
    </div>
  </div>
</template>

<script setup>
const upload = () => alert(`Uploaded Successful`);
</script>

<style lang="scss" scoped>
</style>