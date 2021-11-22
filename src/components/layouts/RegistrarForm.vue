<template>
  <div>
    <center><h1>Registrar Información del Candidato</h1></center>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
 
        <b-form-group id="input-group-2" label="Identificación:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.identificacion"
          placeholder="Identificacion"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
      <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.nombre"
          placeholder="Nombre"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
      <b-form-group id="input-group-2" label="Apellido:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.apellido"
          placeholder="Apellido"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
      <b-form-group
        id="input-group-1"
        label="Correo electronico:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.correo"
          type="email"
          placeholder="Correo"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
        <b-form-group id="input-group-2" label="Celular:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.telefono"
          placeholder="Telefono"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
        <b-form-group id="input-group-2" label="Direccion:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.direccion"
          placeholder="Direccion"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
        <b-form-group id="input-group-2" label="Fecha de Nacimiento:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.fechaNa"
          placeholder="Fecha Nacimiento"
          required
        ></b-form-input>
      </b-form-group>
        <br/>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          correo: '',
          nombre: '',
          checked: []
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.correo = ''
        this.form.nombre = ''
        this.form.apellido = ''
        this.form.telefono = ''
        this.form.direccion = ''
        this.form.fechaNa = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>