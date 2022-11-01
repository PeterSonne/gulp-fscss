module.exports = [
    {
        // nothing should happen here, since we currently don't support hostnames
        input: `background-image: url("https://local.test/img/space/my-file.jpg")`,
        options: {abs: 2},
        output: `background-image: url("https://local.test/img/space/my-file.jpg")`
    },
    {
        // should work well - let's see...
        input: `background-image: url("/local.test/img/space/my-file.jpg")`,
        options: {abs: 2},
        output: `background-image: url("$CMS_REF(media:"my_file", abs:2)$")`
    },
    {
        // should work well - let's see...
        input: `background-image: url("/local.test/img/space/my-file.jpg")`,
        options: {abs: 2, index: 3},
        output: `background-image: url("$CMS_REF(media:"my_file", abs:2, index:3)$")`
    },
    {
        // should work well - let's see...
        input: `background-image: url("/local.test/img/space/my-file.jpg")`,
        options: {abs: 2, lang: "EN", version: 1},
        output: `background-image: url("$CMS_REF(media:"my_file", abs:2, lang:"EN", version:1)$")`
    },
    {
        // should work well - let's see...
        input: `background-image: url("/local.test/img/space/My-file.jpg")`,
        options: {abs: 2, lang: "EN", version: 1},
        output: `background-image: url("$CMS_REF(media:"my_file", abs:2, lang:"EN", version:1)$")`
    },
]