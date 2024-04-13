<template>
    <div>
        <!-- <textarea v-model="inputStrings" placeholder="input here the original strings"></textarea> -->
        <v-textarea label="strings to convert" v-model="inputStrings" rows="10" variant="outlined" clearable></v-textarea>
    </div>
    <div>
        <div>This is ...</div>
        <!-- <div>
            <input type="radio" name="input_case" value="snake" />snake_case<br />
            <input type="radio" name="input_case" value="kebab" />kebab-case<br />
            <input type="radio" name="input_case" value="camel" />camelCase<br />
            <input type="radio" name="input_case" value="pascal" />PascalCase<br />
        </div> -->
        <v-radio-group v-model="inputCase" @click="changeInputCase($event, '')">
            <v-radio label="snake_case" value="snake"></v-radio>
            <v-radio label="kebab-case" value="kebab"></v-radio>
            <v-radio label="camelCase" value="camel"></v-radio>
            <v-radio label="PascalCase" value="pascal"></v-radio>
        </v-radio-group>
    </div>
    <div>
        <div>Convert to ...</div>
        <!-- <div>
            <input type="radio" name="output_case" value="snake" />snake_case<br />
            <input type="radio" name="output_case" value="kebab" />kebab-case<br />
            <input type="radio" name="output_case" value="camel" />camelCase<br />
            <input type="radio" name="output_case" value="pascal" />PascalCase<br />
        </div> -->
        <v-radio-group v-model="outputCase">
            <v-radio label="snake_case" value="snake"></v-radio>
            <v-radio label="kebab-case" value="kebab"></v-radio>
            <v-radio label="camelCase" value="camel"></v-radio>
            <v-radio label="PascalCase" value="pascal"></v-radio>
        </v-radio-group>
    </div>
    <div>
        <!-- <textarea v-model="outputStrings" readonly></textarea> -->
        <v-textarea label="conversion result" v-model="outputStrings" rows="10" variant="outlined" readonly></v-textarea>
    </div>
</template>

<script lang="ts" setup>
const convertLine = (str: string, caseFrom: string, caseTo: string): string => {
    // let validCharacters: string = ""
    const separator: string = " "
    let strArr: string[] = []   // ex. ["aaa", "bbb", "ccc", "9dd"]
    switch (caseFrom) {
        case "snake":
            strArr = str
                        .trim()
                        .split("_")
            break
        case "kebab":
            strArr = str
                        .trim()
                        .split("-")
            break
        case "camel":
            strArr = str
                        .replace(/[A-Z][a-z]/g, (match) => separator + match)
                        .replace(/[A-Z]+$/g, (match) => separator + match)
                        .trim()
                        .split(" ")
            break
        case "pascal":
            strArr = str
                        .replace(/[A-Z][a-z]/g, (match) => separator + match)
                        .replace(/[A-Z]+$/g, (match) => separator + match)
                        .trim()
                        .split(" ")
            break
        default:
            throw new Error("invalid radio selection for input case")
    }

    switch (caseTo) {
        case "snake":
            // TODO
            break;
        case "kebab":
            // TODO
            break;
        case "camel":
            // TODO
            break;
        case "pascal":
            // TODO
            break;
        default:
            throw new Error("invalid radio selection for output case");            
    }
}
const convert = (str: string, caseFrom: string, caseTo: string): string => {
    // const strArr: string[] = str.split(/\n/)
    return str
            .split(/\n/)
            .map(line => convertLine(line))
            .join("\n")
}
const inputStrings = ref<string>("aaa_bbb\nccc_ddd\neee_fff")
const inputCase = ref<string>("snake")
// inputStrings.value = "abcde"
// inputCase.value = "kebab"
const outputStrings = computed(() => {
    return convert(inputStrings.value, inputCase, outputCase)
})
const outputCase = ref<string>("snake")
</script>

<style scoped>
</style>
