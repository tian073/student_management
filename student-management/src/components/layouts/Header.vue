<template>
  <div class="row">
    <div class="col-md-12">
      <ul class="nav nav-tabs">
        <li class="nav-item">
            <router-link
                tag="a"
                class="nav-link"
                :to="{name: 'home'}"
                active-class="active"
                exact
                >Home</router-link>
        </li>
        <li class="nav-item">
            <router-link 
                tag="a" 
                class="nav-link" 
                :to="{name: 'user'}" 
                active-class="active">User</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>