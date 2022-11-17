<script>
import Filter from "../components/Filter.vue";
export default {
  methods: {
    toAddAct() {
      this.$router.push({ name: "add-activity" });
    },
  },
};
</script>

<template>
  <main
    class="
      container
      translate-y-28
      md:translate-y-0 md:mt-8
      flex flex-col
      mx-auto
    "
  >
    <div
      class="
        flex flex-col
        md:flex-row
        gap-2
        md:gap-6
        items-center
        min-w-[95%]
        mx-auto
        md:justify-start
      "
    >
      <div class="w-full">
        <label for="" class="font-semibold text-sm">Activity</label>

        <input
          type="text"
          name=""
          class="self-end px-8 py-2 text-sm rounded-md w-full"
          placeholder="Search here"
          id=""
        />
      </div>

      <div class="flex gap-6">
        <div class="flex flex-col space-y-1">
          <label for="" class="font-semibold text-sm">Activity's type</label>
          <select class="text-sm px-8 py-2 rounded-md" name="" id="">
            <option value="">Camp</option>
            <option value="">Competition</option>
            <option value="">Contest</option>
            <option value="">Program</option>
            <option value="">Workshop</option>
            <option value="">Open house</option>
          </select>
        </div>
        <div class="flex flex-col space-y-1">
          <label for="" class="font-semibold text-sm">Field</label>
          <select class="text-sm px-8 py-2 rounded-md" name="" id="">
            <option value="">Science</option>
            <option value="">Technology</option>
            <option value="">Business</option>
            <option value="">Art</option>
            <option value="">Medical</option>
            <option value="">Language</option>
          </select>
        </div>
      </div>

      <button
        class="
          mt-1
          w-full
          md:mt-0
          self-center
          md:self-end
          px-2
          py-1
          bg-primary
          rounded-md
        "
      >
        Search
      </button>
    </div>
    <!-- Query -->
    <div class="mt-4 flex flex-col space-y-4 min-w-[90%] mx-auto">
      <div class="w-full flex flex-col rounded-lg h-72 bg-white p-4">
        <!-- head -->
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-full bg-primary"></div>
            <div class="flex flex-col">
              <h1 class="text-sm font-semibold hover:underline">
                Chatmethar Chantawibool
              </h1>
              <p class="text-xs">22 Apr 2023</p>
            </div>
          </div>

          <div class="">
            <span class="bg-primary rounded-full">&#9733;</span>star
          </div>
        </div>
        <div class="my-3 flex flex-col">
          <h1 class="text-xl font-bold">88innobiz Hackathon</h1>
          <div class="flex">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="
                object-cover
                w-24
                h-24
                lg:w-full lg:h-40
                rounded-md
                my-2
                mr-4
              "
            />

            <p class="mt-2 text-xs md:text-base lg:text-lg">
              สมัครแข่งขันกับ 88Innovbiz ได้อะไรบ้าง!? 🧐 ​
              ขอเชิญชวนเพื่อนๆมาร่วมกันสมัครเข้าแข่งขัน Startup ครั้งนี้กัน
              เพราะบอกเลยว่าจะได้รับอะไรหลายๆอย่างกลับไปอย่างแน่นอน
              สิทธิประโยชน์ ✨ ที่เพื่อนจะได้รับนั้น เราสรุปมาให้ถึง 6
              อย่างคร่าวๆ
              แต่ความจริงแล้วเพื่อนๆจะได้รับคุณประโยชน์มากกว่านี้แน่นอน!
              รีบสมัครกันเข้ามานะะ 😋 ​ 📍Apply now เปิดรับสมัครตั้งแต่วันที่ 31
              Oct – 18 Nov 2022 สแกน QR code เพื่อกรอกใบสมัครได้เลยหรือกดผ่าน
              Link https://88innovbiz.wixsite.com/88innovbiz/apply
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col rounded-lg h-72 bg-white p-4">
        <!-- head -->
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-full bg-primary"></div>
            <div class="flex flex-col">
              <h1 class="text-sm font-semibold hover:underline">
                42Bankok<span class="text-sm ml-1 bg-primary rounded-full px-2"
                  >&#10003; Origanizer</span
                >
              </h1>
              <p class="text-xs">15 NOV 2022</p>
            </div>
          </div>

          <div class="">
            <span class="bg-primary rounded-full">&#9733;</span>star
          </div>
        </div>
        <div class="my-3 flex flex-col">
          <h1 class="text-xl font-bold">Mini workshop in digital design</h1>
          <div class="flex">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt=""
              class="
                object-cover
                w-24
                h-24
                rounded-md
                lg:w-full lg:h-40
                my-2
                mr-4
              "
            />

            <p class="mt-2 text-xs md:text-base lg:text-lg">
              Who wants to learn the UX / UI ? 🖥 Let's get to know more about
              the digital design field 42 Bangkok Company Talk with Sand Studio
              & Co. Mini workshop in Digital Design 🧑🏻‍💻 Date & Time on Tuesday
              15 November 2022, 1:30 pm - 2:30 pm Venue On-site at 42 Bangkok
              Only Registration now only 30 seats available
              https://forms.gle/N2bbKe6xUbFdchVK9 #42Bangkok
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col rounded-lg h-72 bg-white p-4">
        <!-- head -->
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-full bg-primary"></div>
            <div class="flex flex-col">
              <h1 class="text-sm font-semibold hover:underline">
                Chatmethar Chantawibool
              </h1>
              <p class="text-xs">22 Apr 2023</p>
            </div>
          </div>

          <div class="">
            <span class="bg-primary rounded-full">&#9733;</span>star
          </div>
        </div>
        <div class="my-3 flex flex-col">
          <h1 class="text-xl font-bold">88innobiz Hackathon</h1>
          <div class="flex">
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
              class="
                object-cover
                w-24
                h-24
                lg:w-full lg:h-40
                rounded-md
                my-2
                mr-4
              "
            />

            <p class="mt-2 text-xs md:text-base lg:text-lg">
              สมัครแข่งขันกับ 88Innovbiz ได้อะไรบ้าง!? 🧐 ​
              ขอเชิญชวนเพื่อนๆมาร่วมกันสมัครเข้าแข่งขัน Startup ครั้งนี้กัน
              เพราะบอกเลยว่าจะได้รับอะไรหลายๆอย่างกลับไปอย่างแน่นอน
              สิทธิประโยชน์ ✨ ที่เพื่อนจะได้รับนั้น เราสรุปมาให้ถึง 6
              อย่างคร่าวๆ
              แต่ความจริงแล้วเพื่อนๆจะได้รับคุณประโยชน์มากกว่านี้แน่นอน!
              รีบสมัครกันเข้ามานะะ 😋 ​ 📍Apply now เปิดรับสมัครตั้งแต่วันที่ 31
              Oct – 18 Nov 2022 สแกน QR code เพื่อกรอกใบสมัครได้เลยหรือกดผ่าน
              Link https://88innovbiz.wixsite.com/88innovbiz/apply
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col rounded-lg h-72 bg-white p-4">
        <!-- head -->
        <div class="flex justify-between items-center w-full">
          <div class="flex gap-3">
            <div class="w-10 h-10 rounded-full bg-primary"></div>
            <div class="flex flex-col">
              <h1 class="text-sm font-semibold hover:underline">
                42Bankok<span class="text-sm ml-1 bg-primary rounded-full px-2"
                  >&#10003; Origanizer</span
                >
              </h1>
              <p class="text-xs">15 NOV 2022</p>
            </div>
          </div>

          <div class="">
            <span class="bg-primary rounded-full">&#9733;</span>star
          </div>
        </div>
        <div class="my-3 flex flex-col">
          <h1 class="text-xl font-bold">Mini workshop in digital design</h1>
          <div class="flex">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt=""
              class="
                object-cover
                w-24
                h-24
                rounded-md
                lg:w-full lg:h-40
                my-2
                mr-4
              "
            />

            <p class="mt-2 text-xs md:text-base lg:text-lg">
              Who wants to learn the UX / UI ? 🖥 Let's get to know more about
              the digital design field 42 Bangkok Company Talk with Sand Studio
              & Co. Mini workshop in Digital Design 🧑🏻‍💻 Date & Time on Tuesday
              15 November 2022, 1:30 pm - 2:30 pm Venue On-site at 42 Bangkok
              Only Registration now only 30 seats available
              https://forms.gle/N2bbKe6xUbFdchVK9 #42Bangkok
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- add button -->
  <div>
    <button
      class="
        fixed
        w-14
        h-14
        lg:w-20 lg:h-20
        m-6
        flex
        items-center
        justify-center
        rounded-full
        text-4xl text-white
        bg-primary
        bottom-0
        right-0
        md:right-12
        lg:right-20
        shadow-xl
      "
      @click="toAddAct"
    >
      <p class="align-baseline">+</p>
    </button>
  </div>
</template>
