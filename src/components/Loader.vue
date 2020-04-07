<template>
    <div class="loader-wrapper" v-if="isVisible" :class="position">
        <div class="loader"></div>
    </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        position: String, // left, right and center
        isVisible: Boolean // true/false
    }
}
</script>

<style lang="scss" scoped>

.loader-wrapper {
    display: flex;

    &.center {
        justify-content: center;
    }

    &.left {
        justify-content: flex-start;
    }

    &.right {
        justify-content: flex-end;
    }
}


.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #555; /* Dark grey */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>