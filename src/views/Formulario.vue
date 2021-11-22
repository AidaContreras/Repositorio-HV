<template>
  <div class="formulario">
    <RegistrarForm></RegistrarForm>
    <router-view/>
  </div>
</template>


<script>
import RegistrarForm from '@/components/layouts/RegistrarForm.vue'

export default {
  components: {
    RegistrarForm
  }
}
</script>