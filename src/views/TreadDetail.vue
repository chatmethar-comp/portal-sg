<template>
  <div
    class="
      container
      translate-y-28
      md:translate-y-4
      mx-auto
      flex flex-col
      lg:max-w-screen-lg
    "
  >
    <div
      @click="gotoDetail"
      class="
        w-full
        flex flex-col
        bg-white
        p-4
        border-b border-primary
        rounded-t-md
      "
    >
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
            เพราะบอกเลยว่าจะได้รับอะไรหลายๆอย่างกลับไปอย่างแน่นอน สิทธิประโยชน์
            ✨ ที่เพื่อนจะได้รับนั้น เราสรุปมาให้ถึง 6 อย่างคร่าวๆ
            แต่ความจริงแล้วเพื่อนๆจะได้รับคุณประโยชน์มากกว่านี้แน่นอน!
            รีบสมัครกันเข้ามานะะ 😋 ​ 📍Apply now เปิดรับสมัครตั้งแต่วันที่ 31
            Oct – 18 Nov 2022 สแกน QR code เพื่อกรอกใบสมัครได้เลยหรือกดผ่าน Link
            https://88innovbiz.wixsite.com/88innovbiz/apply
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        w-full
        flex
        items-center
        justify-around
        md:justify-center md:gap-20
        bg-white
        p-2
      "
    >
      <i
        class="fa-solid fa-heart text-primary hover:text-secondary text-xl"
      ></i>
      <i
        class="fa-solid fa-share text-primary text-xl hover:text-secondary"
      ></i>

      <i
        class="
          fa-solid fa-share-nodes
          text-primary text-xl
          hover:text-secondary
        "
      ></i>
      <i class="fa-solid fa-plus text-primary text-xl hover:text-secondary"></i>
    </div>
    <div
      @click="gotoDetail"
      class="
        w-full
        flex flex-col
        bg-white
        p-4
        mt-2
        border-b border-primary border-opacity-50
        rounded-t-md
      "
    >
      <!-- head -->
      <div class="flex justify-between items-center w-full">
        <div class="flex gap-3">
          <div class="w-10 h-10 rounded-full bg-primary"></div>
          <div class="flex flex-col">
            <h1 class="text-sm font-semibold hover:underline">Chamel</h1>
            <p class="text-xs">23 Apr 2023</p>
          </div>
        </div>
      </div>
      <div class="my-3 flex flex-col">
        <h1 class="text-xl font-bold">Portal idea จากทีม Single Gimmick! ✨</h1>
        <div class="flex">
          <img
            src="../assets/image-post-innov-3.jpeg"
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
            Portal มาในสาย Edtech
            แอพที่ช่วยรวบรวมกิจกรรมและสะสมผลงานเพื่อช่วยในการทำ Portfolio,
            Resume, CV เป็นไอเดียที่น่าสนใจมากๆครับ ไม่ได้ใช้ได้แค่กับเด็กมัธยม
            คนทำงานและคนทั่วไปก็ยังสามารถใช้ได้อีกด้วย เป็นประโยชน์มากครับ รอฟัง
            pitch ทีมนี้อยู่เลยครับ สู้ๆคร้าบบ
          </p>
        </div>
      </div>
    </div>
    <div
      @click="gotoDetail"
      class="
        w-full
        flex flex-col
        bg-white
        p-4
        border-b border-primary border-opacity-50
        rounded-t-md
      "
    >
      <!-- head -->
      <div class="flex justify-between items-center w-full">
        <div class="flex gap-3">
          <div class="w-10 h-10 rounded-full bg-primary"></div>
          <div class="flex flex-col">
            <h1 class="text-sm font-semibold hover:underline">Chamel</h1>
            <p class="text-xs">23 Apr 2023</p>
          </div>
        </div>
      </div>
      <div class="my-3 flex flex-col">
        <h1 class="text-xl font-bold">เปิดให้จองที่นั่ง! ✨</h1>
        <div class="flex">
          <img
            src="../assets/image-post-innov-1.jpeg"
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
            เปิดให้จองที่นั่ง! ✨ กับ 88Innovbiz event ขอเชิญร่วมสนุกกับการรับชม
            Panel talk 🎙️ ในหัวข้อ 🌏 ‘Better life, Better society’
            เจาะลึกทุกมิติ เปลี่ยนสังคมให้ดี ด้วยนวัตกรรม
            ไปกับเหล่าผู้เชี่ยวชาญในวงการ Start up ทั้ง 4 ท่าน
            พร้อมร่วมลุ้นไปกับการ Final pitching 😝
            ของเหล่าทีมดาวรุ่งพุ่งแรงในการแข่งขัน Start up 88Innovbiz2022 🦄⭐️
            โดยงานในครั้งนี้จัดในวันที่ 4 ธ.ค. 2022 เวลา 12:00 - 16:00 ณ Concert
            Hall, สวนป๋วย 100 ปี มหาวิทยาลัยธรรมศาสตร์ รังสิต
          </p>
        </div>
      </div>
    </div>
    <div
      @click="gotoDetail"
      class="
        w-full
        flex flex-col
        bg-white
        p-4
        border-b border-primary border-opacity-50
        rounded-t-md
      "
    >
      <!-- head -->
      <div class="flex justify-between items-center w-full">
        <div class="flex gap-3">
          <div class="w-10 h-10 rounded-full bg-primary"></div>
          <div class="flex flex-col">
            <h1 class="text-sm font-semibold hover:underline">Zizzer</h1>
            <p class="text-xs">24 Apr 2023</p>
          </div>
        </div>
      </div>
      <div class="my-3 flex flex-col">
        <h1 class="text-xl font-bold">1 Hour Left! ✨</h1>
        <div class="flex">
          <img
            src="../assets/image-post-innov-2.jpeg"
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
            Attention! 🚨✨ ​ ⭐️ เหลือเวลาสมัครอีกเพียง 1 ชั่วโมงเท่านั้น
            กับการแข่งขัน 88Innovbiz 2022 ใครยังไม่ได้ส่ง Pitch deck
            ต้องเร่งแล้วนะ!!! 🔥🔥🔥 ​ 📍Apply now เปิดรับสมัครตั้งแต่วันที่ 31
            Oct – 18 Nov 2022 สแกน QR code เพื่อกรอกใบสมัครได้เลยหรือกดผ่าน Link
            https://88innovbiz.wixsite.com/88innovbiz/apply ​
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
