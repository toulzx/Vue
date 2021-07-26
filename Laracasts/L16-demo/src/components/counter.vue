<template>

    <div>
        
        <h2>The Count is : {{ counter }}</h2>

        <p>
            <button @click="counter += 1">Increment</button>
        </p>

    </div>
    
</template>

<script>

export default ({
    data() {
        return{
            counter: 0,
        }
    },
})
</script>

<style scoped>

</style>