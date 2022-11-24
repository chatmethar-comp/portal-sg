<template>
  <div class="w-full">
    <!-- Code block starts -->
    <nav
      role="navigation"
      class="md:px-6 px-4 w-full mx-auto hidden md:block bg-white shadow-md"
    >
      <div
        class="
          container
          bg-transparent
          justify-between
          py-4
          flex
          items-center
          md:items-stretch
          mx-auto
          border-b border-gray-200 border-opacity-20
        "
      >
        <div class="h-full flex items-center">
          <!-- Logo -->
          <router-link
            to="/"
            role="img"
            aria-label="logo"
            class="focus:outline-none mr-10 flex items-center"
          >
            <div class="flex gap-1 items-center">
              <!-- <div class="text-4xl text-black"></div> -->
              <div class="w-12 h-12">
                <img src="../assets/Portal.png" alt="" />
              </div>
              <div class="text-2xl text-primary font-bold">Portal</div>
            </div>
          </router-link>
        </div>
        <!-- End of Logo -->

        <!-- search bar -->
        <div class="h-full flex items-center justify-center lg:pr-40">
          <div class="relative">
            <!-- magnifier btn -->
            <div
              class="
                text-primary
                absolute
                ml-3
                inset-0
                m-auto
                lg:w-4 lg:h-4
                md:w-4 md:h-4
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
            <!-- end of magnifier btn -->

            <!-- searchbar -->
            <input
              class="
                hidden
                bg-lighter bg-opacity-50
                md:block
                focus:border-primary focus:outline-none
                lg:w-96
                w-72
                rounded
                text-sm text-black
                pl-8
                py-2
                placeholder-primary
              "
              type="text"
              placeholder="Search here"
            />
          </div>
        </div>
        <!-- end of searchbar -->

        <div class="md:flex items-center justify-end hidden">
          <div class="flex items-center">
            <div class="h-full flex items-center">
              <button
                aria-label="show notifications"
                class="
                  relative
                  focus:outline-none
                  hover:text-primary
                  focus:text-indigo-100
                  text-primary
                  mx-5
                  h-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bell"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path
                    d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
                  />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <div class="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                  <div
                    class="animate-ping w-2 h-2 rounded-full bg-blue-400"
                  ></div>
                </div>
              </button>
            </div>
            <!-- Profile cicle -->
            <div class="h-full flex items-center">
              <router-link
                to="/overview"
                aria-label="dropdown"
                class="
                  focus:outline-none focus:text-gray-900
                  text-gray-800
                  hover:text-gray-900
                  w-full
                  flex
                  items-center
                  justify-end
                  relative
                  cursor-pointer
                "
              >
                <img
                  class="rounded-full h-10 w-10 object-cover"
                  src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                  alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                />
              </router-link>
            </div>
            <!-- end of profile circle -->
          </div>
        </div>

        <!-- <div class="flex items-center md:hidden">
          <ul
            class="
              p-2
              border-r
              absolute
              rounded
              top-0
              left-0
              right-0
              shadow
              mt-16
              md:mt-16
              hidden
            "
          >
            <li
              class="
                flex
                md:hidden
                cursor-pointer
                text-indigo-600 text-sm
                leading-3
                tracking-normal
                mt-2
                py-2
                hover:text-primary
                focus:text-indigo-100 focus:outline-none
              "
            >
              <div class="flex items-center">
                <span class="ml-2 font-bold">Dashboard</span>
              </div>
            </li>
            <li
              class="
                flex
                md:hidden
                flex-col
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-primary
                focus:text-indigo-100 focus:outline-none
                justify-center
              "
            >
              <div class="flex items-center">
                <span class="ml-2 font-bold">Products</span>
              </div>
            </li>
            <li
              class="
                flex
                md:hidden
                flex-col
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-primary
                focus:text-indigo-100 focus:outline-none
                justify-center
              "
            >
              <div class="flex items-center">
                <span class="ml-2 font-bold">Performance</span>
              </div>
            </li>
            <li
              class="
                border-b border-gray-300
                md:hidden
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                pt-2
                pb-4
                hover:text-primary
                flex
                items-center
                focus:text-indigo-700 focus:outline-none
              "
            >
              <span class="ml-2 font-bold">Deliverables</span>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                mt-2
                py-2
                hover:text-indigo-700
                flex
                items-center
                focus:text-indigo-100 focus:outline-none
              "
            >
              <div class="flex items-center">
                <div
                  class="
                    w-12
                    cursor-pointer
                    flex
                    text-sm
                    border-2 border-transparent
                    rounded
                    focus:outline-none focus:border-white
                    transition
                    duration-150
                    ease-in-out
                  "
                >
                  <img
                    class="rounded h-10 w-10 object-cover"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png"
                    alt="logo"
                  />
                </div>
                <p class="text-sm ml-2 cursor-pointer">Jane Doe</p>
                <div class="sm:ml-2 text-gray-800 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="
                      icon icon-tabler icon-tabler-chevron-down
                      cursor-pointer
                    "
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z"></path>
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                py-2
                hover:text-indigo-700
                focus:text-indigo-700 focus:outline-none
              "
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-user"
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
                  <circle cx="12" cy="7" r="4" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                <span class="ml-2">Profile</span>
              </div>
            </li>
            <li
              class="
                cursor-pointer
                text-gray-600 text-sm
                leading-3
                tracking-normal
                mt-2
                py-2
                hover:text-indigo-700
                flex
                items-center
                focus:text-indigo-700 focus:outline-none
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-logout"
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
                <path
                  d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
              <span class="ml-2">Sign out</span>
            </li>
          </ul>
        </div> -->
      </div>
      <div
        class="
          container
          py-4
          justify-between
          flex
          items-center
          md:items-stretch
          mx-auto
        "
      >
        <div class="h-full flex items-center">
          <ul class="pr-12 md:flex items-center h-full hidden">
            <li>
              <a
                href="javascript:void(0)"
                class="
                  focus:outline-none
                  font-medium
                  cursor-pointer
                  h-full
                  flex
                  items-center
                  hover:text-primary
                  text-sm text-black
                  tracking-normal
                "
                >Dashboard</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  focus:outline-none
                  font-medium
                  cursor-pointer
                  h-full
                  flex
                  items-center
                  hover:text-primary
                  text-sm text-black
                  mx-6
                  tracking-normal
                "
                @click="
                  () => {
                    this.$router.push({ name: 'calendar' });
                  }
                "
                >Calendar</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  focus:outline-none
                  font-medium
                  cursor-pointer
                  h-full
                  flex
                  items-center
                  hover:text-primary
                  text-sm text-black
                  mr-6
                  tracking-normal
                "
                >Stats</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  focus:outline-none
                  font-medium
                  cursor-pointer
                  h-full
                  flex
                  items-center
                  hover:text-primary
                  text-sm text-black
                  mr-6
                  tracking-normal
                "
                >Partners</a
              >
            </li>
            <li>
              <a
                href="javascript:void(0)"
                class="
                  focus:outline-none
                  font-medium
                  cursor-pointer
                  h-full
                  flex
                  items-center
                  hover:text-primary
                  text-sm text-black
                  mr-6
                  tracking-normal
                "
                >Settings</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar Mobile -->
    <nav class="md:hidden">
      <div class="w-full shadow-md bg-white fixed top-0 z-40">
        <div class="w-full flex md:hidden">
          <div class="py-4 flex justify-between mx-4 items-center w-full">
            <router-link
              to="/"
              aria-label="logo"
              role="img"
              tabindex="0"
              class="flex focus:outline-none my-2 items-center gap-1"
            >
              <div class="w-12 h-12">
                <img src="../assets/Portal.png" alt="" />
              </div>
              <h1 class="text-xl text-primary font-bold">Portal</h1>
            </router-link>
            <div class="flex md:hidden items-center justify-end">
              <div class="flex items-center">
                <div class="h-full flex items-center">
                  <!-- notification icon -->

                  <button
                    aria-label="show notifications"
                    class="
                      relative
                      focus:outline-none focus:text-indigo-700
                      hover:text-indigo-700
                      focus:border-indigo-700
                      hover:border-indigo-700
                      h-full
                      flex
                      items-center
                      justify-center
                      text-gray-800
                      cursor-pointer
                    "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92475 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5"
                        stroke="#59C1BD"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                        stroke="#59C1BD"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                      <div
                        class="animate-ping w-2 h-2 rounded-full bg-blue-400"
                      ></div>
                    </div>
                  </button>
                  <!-- End of notification icon -->
                </div>

                <router-link to="/overview" class="h-full flex items-center">
                  <button
                    aria-label="dropdown"
                    class="
                      focus:outline-none
                      mx-4
                      focus:text-gray-900
                      text-gray-800
                      border-b-2 border-transparent
                      focus:border-gray-800
                      hover:text-gray-900
                      w-full
                      flex
                      items-center
                      justify-end
                      relative
                      cursor-pointer
                    "
                  >
                    <img
                      class="rounded-full h-10 w-10 object-cover"
                      src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                      alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                    />
                  </button>
                </router-link>
                <div class="h-full flex items-center">
                  <button
                    id="menu"
                    ref="menu"
                    aria-label="open menu"
                    class="
                      focus:outline-none focus:ring-2 focus:ring-gray-700
                      rounded-md
                      text-gray-800
                    "
                    @click="sidebarHandler(true)"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10H3"
                        stroke="#59C1BD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 6H3"
                        stroke="#59C1BD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 14H3"
                        stroke="#59C1BD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 18H3"
                        stroke="#59C1BD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Mobile responsive sidebar-->
      <div
        class="
          w-full
          h-full
          transform
          -translate-x-full
          z-40
          transition
          duration-700
          md:hidden
          fixed
        "
        ref="mobilenav"
        id="mobilenav"
      >
        <div
          class="
            w-full
            h-full
            shadow-lg
            z-40
            fixed
            overflow-y-auto
            top-0
            bg-white
            flex-col
            justify-between
            xl:hidden
            pb-4
            transition
            duration-500
            ease-in-out
          "
        >
          <div class="sm:px-6 px-4 h-full">
            <div class="flex flex-col justify-between h-full w-full">
              <div>
                <div class="mt-6 flex w-full items-center justify-between">
                  <div class="pb-4 flex items-center justify-between w-full">
                    <div
                      aria-label="logo"
                      role="img"
                      tabindex="0"
                      class="focus:outline-none"
                    >
                      <div class="flex gap-1 items-center">
                        <!-- <div class="text-4xl text-black"></div> -->
                        <div class="w-12 h-12">
                          <img src="../assets/Portal.png" alt="" />
                        </div>
                        <div class="text-2xl text-primary font-bold">
                          Portal
                        </div>
                      </div>
                    </div>
                    <!-- close btn -->
                    <button
                      ref="cross"
                      id="cross"
                      aria-label="close menu"
                      class="
                        focus:outline-none focus:ring-2
                        rounded-md
                        text-primary
                      "
                      @click="sidebarHandler(false)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-x"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <ul class="">
                  <div
                    class="
                      border-gray-200 border-b border-opacity-20
                      pb-5
                      md:pr-10
                      lg:pr-0
                      h-full
                      flex
                      items-center
                    "
                  >
                    <div class="relative w-full">
                      <div
                        class="
                          text-primary
                          absolute
                          ml-3
                          inset-0
                          m-auto
                          w-4
                          h-4
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-search"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <circle cx="10" cy="10" r="7" />
                          <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                      </div>
                      <input
                        class="
                          md:hidden
                          bg-indigo-50 bg-opacity-10
                          placeholder-primary
                          rounded
                          focus:outline-none focus:border-indigo-700
                          w-80
                          text-sm text-black
                          pl-12
                          py-2
                        "
                        type="text"
                        placeholder="Search here"
                      />
                    </div>
                  </div>
                  <li>
                    <a class="cursor-pointer">
                      <div class="text-gray-800 pt-5">
                        <div class="flex items-center">
                          <p
                            tabindex="0"
                            class="
                              hover:text-primary
                              text-black text-sm
                              font-medium
                            "
                          >
                            Dashboard
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li
                    @click="
                      () => {
                        this.$router.push({ name: 'calendar' });
                        sidebarHandler(false);
                      }
                    "
                  >
                    <a class="cursor-pointer">
                      <div class="text-gray-800 pt-8">
                        <div class="flex items-center justify-between">
                          <div class="flex items-center">
                            <p
                              tabindex="0"
                              class="
                                hover:text-primary
                                text-black text-sm
                                font-medium
                              "
                            >
                              Calendar
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="cursor-pointer">
                      <div class="text-gray-800 pt-8">
                        <div class="flex items-center">
                          <p
                            tabindex="0"
                            class="
                              hover:text-primary
                              text-black text-sm
                              font-medium
                            "
                          >
                            Stats
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="text-gray-800 pt-8 cursor-pointer">
                    <div class="flex items-center justify-between">
                      <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                        <p
                          tabindex="0"
                          class="
                            hover:text-primary
                            text-black text-sm
                            font-medium
                          "
                        >
                          Partners
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="text-gray-800 pt-8 cursor-pointer">
                    <div class="flex items-center justify-between">
                      <div class="w-6 h-6 md:w-8 md:h-8 text-gray-800">
                        <p
                          tabindex="0"
                          class="
                            hover:text-primary
                            text-black text-sm
                            font-medium
                          "
                        >
                          Settings
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Sidebar ends -->
    <!-- Code block ends -->
  </div>
</template>

<script >
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    sidebarHandler(check) {
      let sideBar = this.$refs.mobilenav;
      let menu = this.$refs.menu;
      let cross = this.$refs.cross;
      if (check) {
        sideBar.style.transform = "translateX(-0px)";
        menu.classList.add("hidden");
        cross.classList.remove("hidden");
      } else {
        sideBar.style.transform = "translateX(-100%)";
        menu.classList.remove("hidden");
        cross.classList.add("hidden");
      }
    },
  },
  components: {},
};
</script>
