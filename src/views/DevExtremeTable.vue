<script setup lang="ts">

import { users } from '@/helpers/Personas';
import { DxColumn,DxDataGrid, DxPaging,DxExport } from 'devextreme-vue/data-grid';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';
import { ref } from 'vue';



const dataGrid = ref<any>(null);

const onExporting = (e:any) => {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet('Users');
      console.log(e.component);
      exportDataGrid({
        component: e.component.instance,
        worksheet: worksheet,
        autoFilterEnabled: true
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Users.xlsx');
        });
      });
    };

const setExport = () => {
      onExporting({ component: dataGrid.value });
    };




</script>

<template>

    <h1>DevExtreme Table</h1>
    <button @click="setExport">Exportar</button>
    
    <DxDataGrid
    :data-source="users"
    :remote-operations="false"
    :allow-column-reordering="true"
    :row-alternation-enabled="true"
    :show-borders="true"
    @exporting="onExporting"
    ref="dataGrid"
    >
    <DxExport :enabled="true" />
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



