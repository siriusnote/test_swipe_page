<template>
  <w-app>
    <!-- <w-flex wrap> -->
        <router-view/>
        <w-toolbar fixed bottom>
          <w-flex gap="0">
            <router-link to="/" class="w-flex"><div class="pa3 grow text-center">Operation</div></router-link>
            <router-link to="/setting" class="w-flex"><div class="pa3 grow text-center">Setting</div></router-link>
          </w-flex>
        </w-toolbar>
    <!--</w-flex> -->
  </w-app>
</template>

