<template>
  <div class="main">
    🍝<br />
    <span>Press enter to make new pasta</span>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('keydown', (key) => {
      if (key.code === 'Enter') {
        this.$router.push('/new')
      }
    })
  },
}
</script>

<style scoped>
.main {
  text-align: center;
  font-size: 12rem;
}
span {
  font-size: 2rem;
  color: white;
}
</style>
