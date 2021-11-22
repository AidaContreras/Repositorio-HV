<template>
    <b-card :title="product.title"
        :img-src="product.image"
        :img-alt="product.title"
        img-top
        class="h-100"
    >

    </b-card>
</template>

<script>
export default {
    name: "CandidatoItem",
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>