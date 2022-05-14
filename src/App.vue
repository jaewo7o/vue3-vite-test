<template>
    <div>{{ name }}</div>
    <button
        class="btn btn-primary"
        @click="onClickUpdate"
    >
        Click
    </button>
</template>

<script>
import { ref } from 'vue'

export default {
    setup () {
        const name = ref('Jaewoo')

        const greeting = (name) => {
            return `Hello World ${name}`
        }

        const onClickUpdate = () => {
            name.value = 'Jaewoo - Test'
        }

        return {
            name,
            greeting,
            onClickUpdate
        }
    }
}
</script>
