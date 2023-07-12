<script setup lang="ts">
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

<div>
    <button @click="exportHtml">Export HTML</button>
        <EmailEditor
    
            ref="emailEditor"
            v-on:load="editorLoaded"
            v-on:ready="editorReady"
          />
</div>
</template>


<style scoped>

</style>