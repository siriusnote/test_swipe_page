<template>
  <w-app>
    <router-view/>
    <w-toolbar fixed bottom>
      <w-flex gap="0">
        <router-link to="/" class="w-flex"><div class="pa3 grow text-center">Operation</div></router-link>
        <router-link to="/setting" class="w-flex"><div class="pa3 grow text-center">Setting</div></router-link>
      </w-flex>
    </w-toolbar>
  </w-app>
</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "App",
  });
</script>

