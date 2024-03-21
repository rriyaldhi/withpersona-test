<script lang="ts" setup>
// @ts-ignore
const client = new Persona.Client({
  templateId: 'itmpl_ZE25uAsxRgM4pfRpeGqcD4wMJ23V',
  environmentId: 'env_iztoV3oaqaQDQtBrz8FdwnCg',
  onReady: () => client.open(),
  onComplete: ({ inquiryId, status }: { inquiryId: string, status: string }) => {
    console.log(`Completed inquiry ${inquiryId} with status ${status}`);
  }
});
</script>
<template>
  <div>Persona</div>
</template>