<script setup lang="ts">

import { users } from '@/helpers/Personas';
import { DxColumn,DxDataGrid, DxPaging, } from 'devextreme-vue/data-grid';





</script>

<template>

    
    <DxDataGrid
    :data-source="users"
    :remote-operations="false"
    :allow-column-reordering="true"
    :row-alternation-enabled="true"
    :show-borders="true"
    
    >
    <DxColumn data-field="id" caption="ID" :width="50"></DxColumn>
    <DxColumn data-field="nombre" caption="First Name"></DxColumn>
    <DxColumn data-field="correo" caption="correo"></DxColumn>
    <DxColumn data-field="telefono" caption="telefono"></DxColumn>
    <DxColumn data-field="direccion" caption="direccion"></DxColumn>
    <DxColumn data-field="fecha" caption="Fecha de nacimiento"></DxColumn>
    <DxColumn data-field="edad" caption="Edad"></DxColumn>
    <DxColumn data-field="comentarios" caption="Comentarios"></DxColumn>

    <DxPaging :enabled="true"
    :default-page-size="5"
    ></DxPaging>
    </DxDataGrid>

</template>

<style scoped>

</style>



