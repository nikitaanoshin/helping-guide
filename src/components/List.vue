<template>
  <div class="list">
    <div class="list__items">
      <ListItem
        v-for="item in items"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :item-data="item.items"
        :row="item.isRow"
      />
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem";
export default {
  name: "List",
  components: { ListItem },
  props: {
    items: Array,
  },
  created() {
    console.log(this.items);
  }
};
</script>
