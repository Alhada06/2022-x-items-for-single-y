<script setup>
import { ref, watch } from 'vue'
import { useItemComparison } from '../composables/itemComparison'


const { isFetching, allItems, itemsToCompare } = useItemComparison();
const selected = ref();

watch(selected, (newI, oldI) => {
  itemsToCompare.value = itemsToCompare.value.filter(item => item.id != oldI?.id)
  itemsToCompare.value.push(newI)
})
</script>

<template>
  <p v-if="isFetching"></p>
  <select v-else v-model="selected" class="p-2 border-2 border-gray-dark w-full">
    <option disabled value="">Select an item</option>
    <option v-for="item in allItems" :key="item.id" :value="item">
      {{ item.title }} - ${{ item.price }}
    </option>
  </select>
</template>
