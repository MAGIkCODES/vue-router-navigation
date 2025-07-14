<template>
    <h1>Jobs details page</h1>
    <!-- Dynamic route -->
    <p>the job is  {{ id }}</p>
</template>

<script>
export default {
    props: ['id'],
}
// // export default {
// //     data() {
// //         return {
// //             id: this.$route.params.id
// //         }
// //     }
// }
</script>