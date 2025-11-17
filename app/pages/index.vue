<script lang="ts" setup>
interface Test {
  id: number
  name: string
}

const example: Test = {
  id: 1,
  name: 'Example'
}
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <div>
      <p>This is the index page. {{ example.id }}</p>
    </div>
  </div>
</template>
