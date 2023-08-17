<template>
  <div>
    <header>
      <NuxtLink to="/">
        <h1>Home</h1>
      </NuxtLink>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.home {
  width: fit-content;
}
</style>
