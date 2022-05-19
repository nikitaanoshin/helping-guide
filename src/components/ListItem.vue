<template>
  <div class="list-item">
    <p :id="title" class="list-item__title">
      {{ title }}
    </p>
    <div
            v-if="text"
            class="list-item__text"
    >
      {{ text }}
    </div>
    <div
            :class="[
              'list-item__content',
              { 'list-item__content_row': row }
              ]"
    >
      <div
              v-for="data in itemData"
              class="list-item__item"
              :key="data.id"
      >
        <p class="list-item__name">
          {{ data.id }}. {{ data.name }}
        </p>
        <p class="list-item__description">
          {{ data.description }}
        </p>
        <div class="list-item__links">
          <a
                  v-if="data.mainLink"
                  :href="data.mainLink"
                  class="list-item__link">
            Ссылка
          </a>
          <div
                  v-if="data.customLinks"
                  class="list-item__custom-links"
          >
            [
            <a
                    v-for="link in data.customLinks"
                    :key="link.customLink"
                    :href="link.customLink"
            >
              {{ link.customLinkText }}
            </a>
            ]
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    title: String,
    text: String,
    itemData: Array,
    row: Boolean
  },
};
</script>
