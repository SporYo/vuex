<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>{{ counter }} ({{ doubleCounter }}) </h2>
      <button class="btn primary" @click="add">+ 1</button>
      <button class="btn danger" @click="incrementAsync({value: 10, delay: 300})">+ 10</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import TheNavbar from './TheNavbar'

export default {
  computed: {
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations('count', {add: 'increment'}),
    ...mapActions('count', ['incrementAsync']),
  },
  components: {TheNavbar}
}
</script>
