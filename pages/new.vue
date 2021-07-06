<template>
  <div id="new">
    <div id="key">
      <div id="box2">
        <img src="/save.png" class="save" @click="save()" title="Save as code" />
        <img src="/saveText.png" class="saveAsText" @click="save(true)" title="Save as Text" />
      </div>
    </div>
    <div id="linenos">&gt;</div>
    <textarea v-model="value" spellcheck="false" autofocus></textarea>
    <div class="madeby">Made with &hearts; by <a href="https://dynafools.live">ItsMeRomian</a></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.$toast.success('press esc to go back.')
    window.addEventListener('keydown', (key) => {
      if (key.code === 'Escape') {
        this.$router.push('/new')
      }
    })
  },

  methods: {
    async save(text = false) {
      const { data, error } = await this.$supabase.from('paste').insert([{ value: this.value, isText: text }])
      console.log(data, error)
      if (!error) {
        this.$toast.success('making new pasta 🍝...')
        this.$router.push('/' + data[0].id)
      }
    },
    async openNew() {},
  },
}
</script>
