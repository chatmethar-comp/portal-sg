<template>
  <div
    class="
      container
      flex flex-col
      max-w-[90%]
      md:flex-row
      lg:max-w-[80%]
      gap-6
      md:gap-12
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
          mt-2
          rounded-md
          border border-gray-300
          hover:bg-backgroundDarkerSecondary hover hover:border-gray-500
          duration-150
        "
      >
        Edit Profile
      </button>
      <button
        class="
          w-full
          bg-green-500
          py-3
          md:py-2
          my-2
          rounded-md
          border border-gray-300
          hover:bg-green-400 hover hover:border-gray-500
          duration-150
        "
        @click="newPort"
      >
        Upload New Contributions
      </button>
    </div>

    <!-- right -->
    <div class="flex flex-col flex-1">
      <nav
        class="
          flex
          justify-between
          text-sm
          md:text-md
          my-3
          md:justify-start md:gap-12
          items-center
          overflow-y-scroll
        "
      >
        <router-link
          to="/overview"
          class="
            font-bold
            px-2
            py-1
            rounded-md
            hover:bg-backgroundSecondary
            duration-150
          "
          >Overview</router-link
        >
        <router-link
          to="/event"
          class="
            font-bold
            px-2
            py-1
            rounded-md
            hover:bg-backgroundSecondary
            duration-150
          "
          >Competition</router-link
        >
        <router-link
          to="/event"
          class="
            font-bold
            px-2
            py-1
            rounded-md
            hover:bg-backgroundSecondary
            duration-150
          "
          >Projects</router-link
        >
        <router-link
          to="/"
          class="
            font-bold
            px-2
            py-1
            rounded-md
            hover:bg-backgroundSecondary
            duration-150
          "
          >Certificate</router-link
        >
        <router-link
          to="/"
          class="
            font-bold
            px-2
            py-1
            rounded-md
            hover:bg-backgroundSecondary
            duration-150
          "
          >Stars</router-link
        >
      </nav>
      <div class="mb-4 border-b-[1px] border-gray-500 shadow-xl"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    newPort() {
      this.$router.push({ name: "upload" });
    },
  },
};
</script>
