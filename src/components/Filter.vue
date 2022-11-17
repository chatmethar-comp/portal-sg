<template>
  <div class="mx-auto py-6">
    <div class="container flex justify-center gap-24 mx-auto my-6">
      <div class="h-64 mb-12">
        <!-- Code block starts -->
        <div class="relative">
          <div
            class="
              bg-white
              flex
              justify-between
              border
              rounded
              w-40
              cursor-pointer
            "
            data-menu
          >
            <p
              class="
                px-3
                py-3
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                font-normal
              "
            >
              Activity's Type
            </p>
            <div
              class="
                bg-white
                items-center
                flex
                rounded-r
                border-gray-300 border-l
              "
            >
              <div class="cursor-pointer text-gray-600 dark:text-gray-400 mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-up"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden icon icon-tabler icon-tabler-chevron-up"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
          <ul
            class="
              visible
              transition
              duration-300
              opacity-100
              bg-white
              shadow
              rounded
              mt-2
              py-1
              w-48
              absolute
            "
          >
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
              "
            >
              <!-- <i class="fa-light fa-campground"></i> -->
              <span class="ml-2 font-normal">Camp</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
              "
            >
              <i class="fa-regular fa-swords"></i>
              <span class="ml-2 font-normal">Competition</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
              "
            >
              <span class="ml-2 font-normal">Contest</span>
            </li>

            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
                font-normal
              "
            >
              <span class="ml-2">Program</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
                font-normal
              "
            >
              <span class="ml-2">Open House</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
                font-normal
              "
            >
              <span class="ml-2">Workshop</span>
            </li>
          </ul>
        </div>
        <!-- Code block ends -->
      </div>
      <div class="h-64 mb-12">
        <!-- Code block starts -->
        <div class="relative">
          <div
            class="
              bg-white
              flex
              justify-between
              border
              rounded
              w-40
              cursor-pointer
            "
            data-menu
          >
            <p
              class="
                px-3
                py-3
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                font-normal
              "
            >
              Field
            </p>
            <div
              class="
                bg-white
                items-center
                flex
                rounded-r
                border-gray-300 border-l
              "
            >
              <div class="cursor-pointer text-gray-600 dark:text-gray-400 mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-up"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 15 12 9 18 15" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="hidden icon icon-tabler icon-tabler-chevron-up"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </div>
          <ul
            class="
              visible
              transition
              duration-300
              opacity-100
              bg-white
              shadow
              rounded
              mt-2
              py-1
              w-48
              absolute
            "
          >
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
              "
            >
              <!-- <i class="fa-light fa-campground"></i> -->
              <span class="ml-2 font-normal">Science</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
              "
            >
              <i class="fa-regular fa-swords"></i>
              <span class="ml-2 font-normal">Technology</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
              "
            >
              <span class="ml-2 font-normal">Business</span>
            </li>

            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
                font-normal
              "
            >
              <span class="ml-2">Art</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
                font-normal
              "
            >
              <span class="ml-2">Medical</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600
                dark:text-gray-400
                text-sm
                leading-3
                tracking-normal
                py-3
                hover:bg-gray-100
                px-3
                flex
                items-center
                font-normal
              "
            >
              <span class="ml-2">Design</span>
            </li>
          </ul>
        </div>
        <!-- Code block ends -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filter",
  mounted: function () {
    this.main();
  },
  methods: {
    main() {
      let elements = document.querySelectorAll("[data-menu]");
      for (let i = 0; i < elements.length; i++) {
        let main = elements[i];
        let andicators = main.querySelectorAll("svg");
        main.addEventListener("click", function () {
          let element = main.parentElement.parentElement;
          let child = element.querySelector("ul");
          if (child.classList.contains("opacity-0")) {
            child.classList.toggle("invisible");
            child.classList.toggle("visible");
            andicators[0].style.display = "block";
            andicators[1].style.display = "none";
          } else {
            setTimeout(function () {
              child.classList.toggle("invisible");
              child.classList.toggle("visible");
            }, 300);
            andicators[0].style.display = "none";
            andicators[1].style.display = "block";
          }
          child.classList.toggle("opacity-0");
          child.classList.toggle("opacity-100");
        });
      }
    },
  },
};
</script>
