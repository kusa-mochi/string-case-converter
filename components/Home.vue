<template>
    <div>
        <textarea v-model="inputStrings" placeholder="input here the original strings"></textarea>
    </div>
    <div>
        <div>This is ...</div>
        <div>
            <input type="radio" name="input_case" value="snake" />snake_case<br />
            <input type="radio" name="input_case" value="kebab" />kebab-case<br />
            <input type="radio" name="input_case" value="camel" />camelCase<br />
            <input type="radio" name="input_case" value="pascal" />PascalCase<br />
        </div>
    </div>
    <div>
        <div>Convert to ...</div>
        <div>
            <input type="radio" name="output_case" value="snake" />snake_case<br />
            <input type="radio" name="output_case" value="kebab" />kebab-case<br />
            <input type="radio" name="output_case" value="camel" />camelCase<br />
            <input type="radio" name="output_case" value="pascal" />PascalCase<br />
        </div>
    </div>
    <div>
        <textarea v-model="outputStrings" readonly></textarea>
    </div>
</template>

<script setup>
const inputStrings = defineModel()
inputStrings.value = "abcde"
const outputStrings = computed(() => {
    return "hoge: " + inputStrings.value
})
</script>

<style scoped>
</style>
