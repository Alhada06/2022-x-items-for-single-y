import { ref } from "vue";
const allItems=ref([])
const itemsToCompare=ref([]);
const isFetching=ref(true);
export const useItemComparison = () => ({
    allItems,itemsToCompare,isFetching
})
