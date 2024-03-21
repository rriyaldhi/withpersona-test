<script lang="ts" setup>
useServerHead({
  script: [{
    src: "https://cdn.withpersona.com/dist/persona-v4.11.0.js",
    type: "text/javascript",
  }],
});
</script>
<template>
  <div>Hello</div>
  <ClientOnly>
    <Persona />
  </ClientOnly>
</template>
