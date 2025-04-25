<template>
    <div class="relative w-full max-w-md mx-auto">
      <!-- Image display -->
      <div class="overflow-hidden rounded-lg">
        <img
          :src="images[currentIndex]"
          alt="Carousel Image"
          class="w-full h-auto object-cover"
        />
      </div>
  
      <!-- Navigation Buttons -->
      <button
        @click="prev"
        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
      >
        ‹
      </button>
      <button
        @click="next"
        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
      >
        ›
      </button>
  
    <!-- Improved Indicators with Limited Display -->
    <div class="flex justify-center mt-4 space-x-1 overflow-x-auto scrollbar-hide">
      <span
        v-for="(img, idx) in visibleIndicators"
        :key="idx"
        @click="goTo(idx + startIndex)"
        :class="[
        'w-6 h-6 flex items-center justify-center rounded-full cursor-pointer border',
        currentIndex === (idx + startIndex) ? 'bg-pink-600 text-white border-pink-600' : 'bg-gray-200 text-gray-600 border-gray-300'
        ]"
      >
        {{ idx + startIndex + 1 }}
      </span>
    </div>
    </div>
  </template>
  
<script setup>
import { ref } from 'vue'
import a1 from '@/assets/images/a1.jpeg'
import a2 from '@/assets/images/a2.jpeg'
import a3 from '@/assets/images/a3.jpeg'
import a4 from '@/assets/images/a4.jpeg'
import a5 from '@/assets/images/a5.jpeg'
import a6 from '@/assets/images/a6.jpeg'
import a7 from '@/assets/images/a7.jpeg'
import a8 from '@/assets/images/a8.jpeg'
import a9 from '@/assets/images/a9.jpeg'
import a10 from '@/assets/images/a10.jpeg'
import a11 from '@/assets/images/a11.jpeg'
import a12 from '@/assets/images/a12.jpeg'
import a13 from '@/assets/images/a13.jpeg'
import a14 from '@/assets/images/a14.jpeg'
import a15 from '@/assets/images/a15.jpeg'
import a16 from '@/assets/images/a16.jpeg'
import a17 from '@/assets/images/a17.jpeg'
import a18 from '@/assets/images/a18.jpeg'
import a19 from '@/assets/images/a19.jpeg'
import a20 from '@/assets/images/a20.jpeg'
import a21 from '@/assets/images/a21.jpeg'
import a22 from '@/assets/images/a22.jpeg'
import a23 from '@/assets/images/a23.jpeg'
import a24 from '@/assets/images/a24.jpeg'
import a25 from '@/assets/images/a25.jpeg'
import a26 from '@/assets/images/a26.jpeg'

const props = defineProps({
images: {
    type: Array,
    default: () => [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26],
},
})

// Reactive index for current image
const currentIndex = ref(0)

// Navigate to next image
function next() {
currentIndex.value = (currentIndex.value + 1) % props.images.length
}

// Navigate to previous image
function prev() {
currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length
}

// Jump to a specific image index
function goTo(index) {
currentIndex.value = index
}
</script>

<style scoped>
button:focus {
outline: none;
}
</style>
