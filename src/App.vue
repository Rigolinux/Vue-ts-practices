<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import  { EmailEditor } from 'vue-email-editor';

import { ref } from 'vue';

interface EmailEditorValue {
  editor: any; // Reemplaza 'any' con el tipo adecuado para el objeto editor
}
const emailEditor = ref<EmailEditorValue | null>(null);
const editorLoaded = () => {
  console.log('editorLoaded');
}

const editorReady = () => {
  console.log('editorReady');
}



const exportHtml = () => {

  if (emailEditor.value && emailEditor.value.editor) {
  console.log(emailEditor.value);
  emailEditor.value.editor.exportHtml((data: string) => {
    // Aquí puedes trabajar con la variable 'data'
    console.log('exportHtml', data);
  });
}else {
    console.log('El objeto es undefined');
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> 
      
   
      <button @click="exportHtml">Export HTML</button>
      
    </div>
  </header>
  
  <EmailEditor
        
        ref="emailEditor"
        v-on:load="editorLoaded"
        v-on:ready="editorReady"
      />
  
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
