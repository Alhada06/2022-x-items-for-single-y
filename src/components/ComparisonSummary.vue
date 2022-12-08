<script setup>
import { computed } from 'vue';
import { useItemComparison } from '../composables/itemComparison';

const { itemsToCompare } = useItemComparison();
const sortedItems = computed(() => [...itemsToCompare.value].sort((i1, i2) => i2.price - i1.price))
const lowPriceItem = computed(() => sortedItems.value[1]);
const highPriceItem = computed(() => sortedItems.value[0]);
const isSameItem = computed(() => lowPriceItem.value.id === highPriceItem.value.id)
const numLowItems = computed(() =>
  Math.floor(highPriceItem.value.price / lowPriceItem.value.price)

)

</script>

<template>

  <p v-if="isSameItem" class="mx-5 text-center">The selected Items are the same</p>
  <p v-else class="mx-5 text-center">
    You can get <strong>{{ numLowItems }}</strong> x <em>{{ lowPriceItem.title }}</em> for about the same price as a
    single
    <em>{{ highPriceItem.title }}</em>
  </p>
</template>
