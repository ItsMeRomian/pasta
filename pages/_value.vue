<template>
  <div id="view">
    <div id="key">
      <div id="box2">
        <img src="/new.png" class="new" @click="openNew()" />
        <img src="/share.png" class="saveAsText" @click="copySomething('https://pasta.dyna.host/' + value)" />
      </div>
    </div>
    <pre v-if="code !== ''">
      <code v-highlight :class="{ 'no-highlight': isText}">{{code}}</code>
    </pre>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    const value = params.value
    return { value }
  },
  data() {
    return {
      code: '',
      isText: '',
    }
  },
  async mounted() {
    await this.getPasta()
  },
  methods: {
    async getPasta() {
      const { data, error } = await this.$supabase.from('paste').select().match({ id: this.value }).limit(1)
      if (!error) {
        this.code = data[0].value
        this.isText = data[0].isText
      } else {
        this.$toast.error('Pasta not found!')
        this.$toast.error(error)
      }
    },
    openNew() {
      this.$router.push('/new')
    },
    async copySomething(text) {
      try {
        await this.$copyText(text)
        this.$toast.success('Copied link :)')
      } catch (e) {
        this.$toast.error(e)
      }
    },
  },
}
</script>
<style scoped>
.hljs {
  white-space: pre;
  overflow-x: auto;
}
</style>
