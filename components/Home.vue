<template>
    <div>
        <v-textarea label="strings to convert" v-model="inputStrings" rows="10" variant="outlined" clearable></v-textarea>
    </div>
    <div>
        <div>This is ...</div>
        <v-radio-group v-model="inputCase">
            <v-radio label="snake_case" value="snake"></v-radio>
            <v-radio label="SNAKE_CASE" value="snake_upper"></v-radio>
            <v-radio label="kebab-case" value="kebab"></v-radio>
            <v-radio label="camelCase" value="camel"></v-radio>
            <v-radio label="PascalCase" value="pascal"></v-radio>
        </v-radio-group>
    </div>
    <div>
        <div>Convert to ...</div>
        <v-radio-group v-model="outputCase">
            <v-radio label="snake_case" value="snake"></v-radio>
            <v-radio label="SNAKE_CASE" value="snake_upper"></v-radio>
            <v-radio label="kebab-case" value="kebab"></v-radio>
            <v-radio label="camelCase" value="camel"></v-radio>
            <v-radio label="PascalCase" value="pascal"></v-radio>
        </v-radio-group>
    </div>
    <div>
        <v-textarea label="conversion result" v-model="outputStrings" rows="10" variant="outlined" readonly></v-textarea>
    </div>
</template>

<script lang="ts" setup>
const convertLine = (str: string, caseFrom: string, caseTo: string): string => {
    let ret: string = ""
    const separator: string = " "
    let strArr: string[] = []   // ex. ["aaa", "bbb", "ccc", "dd9"]
    switch (caseFrom) {
        case "snake":
            strArr = str
                        .trim()
                        .split("_")
            break
        case "snake_upper":
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
        case "pascal":
            strArr = str
                        .replace(/[A-Z][a-z0-9]/g, (match) => separator + match)
                        .replace(/[A-Z]+$/g, (match) => separator + match)
                        .trim()
                        .split(separator)
            break
        default:
            throw new Error(`invalid radio selection for input case:${caseFrom}`)
    }

    switch (caseTo) {
        case "snake":
            ret = strArr.join("_").toLowerCase()
            break
        case "snake_upper":
            ret = strArr.join("_").toUpperCase()
            break
        case "kebab":
            ret = strArr.join("-").toLowerCase()
            break
        case "camel":
            strArr = strArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            strArr[0] = strArr[0].toLowerCase()
            ret = strArr.join("")
            break
        case "pascal":
            strArr = strArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            ret = strArr.join("")
            break
        default:
            throw new Error(`invalid radio selection for output case:${caseTo}`)
    }

    return ret
}
const convert = (str: string, caseFrom: string, caseTo: string): string => {
    if (str === undefined || str === null || str === "") return ""
    if (caseFrom === undefined || caseFrom === null || caseFrom === "") return ""
    if (caseTo === undefined || caseTo === null || caseTo === "") return ""
    console.log(`str:${str}, caseFrom:${caseFrom}, caseTo:${caseTo}`)
    return str
            .split(/\n/)
            .map(line => convertLine(line, caseFrom, caseTo))
            .join("\n")
}
const inputStrings = ref<string>("aaaBbb\ncccDdd\neeeF64G3iABC")
const inputCase = ref<string>("camel")
const outputCase = ref<string>("snake")
const outputStrings = computed(() => {
    return convert(inputStrings.value, inputCase.value, outputCase.value)
})
</script>

<style scoped>
</style>
