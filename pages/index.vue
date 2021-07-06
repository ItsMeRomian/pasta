<template>
  <div class="main">
    <span class="emoji">🍝</span><br />
    <span>Press <span class="enter">enter</span> to make new pasta</span>
    <div class="made">Made with &hearts; by <a href="https://dynafools.live">ItsMeRomian</a></div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('keydown', (key) => {
      if (key.code === 'Enter' || key.code === 'NumpadEnter') {
        this.$router.push('/new')
      }
    })
  },
}
</script>

<style scoped>
.enter {
  background: gray;
  border-radius: 10%;
  padding: 0.1rem;
}
body {
  padding: 0px 0px !important;
  margin: 0 !important;
  overflow: hidden;
}
.main {
  text-align: center;
  height: 100%;
}
.emoji {
  font-size: 12rem;
}
span {
  font-size: 2rem;
  color: white;
}
.made {
  position: absolute;
  text-align: center;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
