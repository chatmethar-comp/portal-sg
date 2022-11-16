<template>
  <div
    class="
      container
      max-w-[90%]
      flex flex-col
      md:flex-row
      gap-6
      mx-auto
      pt-28
      md:pt-6
    "
  >
    <div>
      <div id="" class="flex flex-col md:flex-row gap-3">
        <div class="flex flex-row md:flex-col items-center">
          <div class="w-18 h-18 md:min-h-56 md:min-w-56 mb-4 mr-4">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/avatars/a_3_7.png"
              alt=""
              class="h-full w-full rounded-full overflow-hidden shadow"
            />
          </div>
          <div class="container max-w-2xl">
            <h1 class="text-2xl font-bold">Chamel</h1>
            <h3 class="text-xl font-normal">Chatmethar Chantawibool</h3>
          </div>
        </div>
      </div>
      <button
        class="
          w-full
          bg-backgroundSecondary
          py-0.5
          my-2
          rounded-md
          border border-gray-300
          hover:bg-backgroundDarkerSecondary hover hover:border-gray-500
          duration-150
        "
      >
        Edit Profile
      </button>
    </div>

    <!-- right -->
    <div class="flex flex-col gap-6 flex-1">
      <nav class="flex justify-between md:justify-start md:gap-12 items-center">
        <router-link to="/profile/overview" class="font-bold"
          >Overview</router-link
        >
        <router-link to="/" class="font-bold">Event</router-link>
        <router-link to="/" class="font-bold">Camp</router-link>
        <router-link to="/" class="font-bold">Stars</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
</script>
