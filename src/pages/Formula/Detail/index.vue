<template>
  <div class="empty-items">
    FORMÜLLERİMİZ ve İSPATLAR HENÜZ BUZDOLABINDA 
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
    ...mapActions(['getFormula'])
  },
  mounted() {
    this.getFormula(this.$route.params.id)
  }
}
</script>
