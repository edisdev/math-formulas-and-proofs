<template>
  <div class="empty-items">
    FORMÜLLERİMİZ HENÜZ BUZDOLABINDA 
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Formula',
  computed: {
    ...mapGetters(['Formulas'])
  },
  methods: {
    ...mapActions(['getFormulaList'])
  },
  mounted() {
    this.getFormulaList()
  }
}
</script>
