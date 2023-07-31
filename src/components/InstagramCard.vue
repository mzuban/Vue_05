<template>
  <div class="card text-center">
    <div class="card-header">{{ info.description }}</div>
    <div class="card-body">
      <img class="card-img-top" :src="info.url" alt="neka slika..." />
    </div>
    <div class="card-footer text-muted">
      {{ info.time }}
    </div>
  </div>
</template>

<script>
//JS kod
export default {
  props: ["info"],
  name: "InstagramCard",
};
</script>
