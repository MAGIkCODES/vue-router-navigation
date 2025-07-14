<template>
    <h2>Jobs</h2>
    <div v-for="job in jobs" :key="job.id" class="jobs">

        <!-- Dynamic route -->
        <router-link :to="{ name: 'JobsDetails', params: {id: job.id}}">
            <h2>{{ job.title }}</h2>
        </router-link>
       
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title: 'Ninja UX designer', id: 1, details: 'LOrem'},
                {title: 'Ninja UX web developer', id: 2, details: 'LOrem'},
                {title: 'Ninja vue developer', id: 3, details: 'LOrem'},
            ]
        }
    }
}
</script>

<style>
.jobs h2 {
    background-color: #f4f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}

.jobs h2:hover {
    background-color: #ddd;
    color: black;
}

.jobs a {
    text-decoration: none;
}
</style>