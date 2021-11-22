<template>
<div v-if="products.length">
    <h1>Candidatos</h1>
    <paginate name="products"
        :list="products"
        :per-page="perPage"
        class="row"
    >
        <b-col cols="4"
            v-for="item in paginated('products')"
            :key="item.id"
        >
            <CandidatoItem :product="item"></CandidatoItem>
        </b-col>
    </paginate>
</div>
<b-alert variant="primary" show v-else> No hay productos disponibles en la tienda </b-alert>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import CandidatoItem from '@/components/CandidatoItem.vue'
import { BPagination } from 'bootstrap-vue'

export default {
    name: "CandidatoList",
    data(){
        return {
            paginate: ['products'],
            perPage: 6
        }
    },
    components:{
        CandidatoItem
    },
    computed: {
        ...mapState('products', ['products'])
    },
    created(){
        this.fetchProducts();
    },
    methods: {
        ...mapActions('products', ['fetchProducts'])
    },
    components: {
        BPagination
    }
}
</script>