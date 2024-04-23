<template>
  <el-avatar
    shape="square"
    :size="size"
    :src="src"
    class="avatar profile-avatar-image"
    :style="avatarStyle"
  >
    <div v-if="acronym" class="avatar__acronym unselectable">{{ acronym }}</div>
    <i v-else class="icon-user avatar__icon" />
  </el-avatar>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    size: {
      type: Number,
      default: 40,
    },
    src: {
      type: [String, null],
      default: null,
    },
    name: {
      type: [String, null],
      default: null,
    },
    withInitials: {
      type: [Boolean, null],
      default: null,
    },
  },
  computed: {
    fontSize() {
      if (this.withInitials) {
        return this.size / 2.5;
      }

      if (this.name) {
        return this.size / 1.5;
      }

      return this.size / 2;
    },
    avatarStyle() {
      return {
        "min-width": `${this.size}px`,
        "min-height": `${this.size}px`,
        "font-size": `${this.fontSize}px`,
      };
    },
    acronym() {
      if (this.withInitials) {
        return this.getInitials(this.name);
      }
      return this.name?.charAt(0).toUpperCase();
    },
  },
  methods: {
    getInitials(name) {
      const words = name.split(" ");
      const numberOfInitialsToShow = 2;

      return words
        .map((word) => word.charAt(0).toUpperCase())
        .slice(0, numberOfInitialsToShow)
        .join("");
    },
  },
};
</script>

<style scoped lang="scss">
.avatar {
  background: $--color-light-blue;
  border-radius: 0.5rem;

  &__acronym {
    color: $--color-primary;
    font-weight: bolder;
    cursor: default;
  }

  &__icon {
    color: $--color-primary;
    font-weight: normal;
  }
}

.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
