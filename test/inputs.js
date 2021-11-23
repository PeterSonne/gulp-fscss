module.exports = [
    {
        input: `background-image: url("https://local.test/img/space/my-file.jpg")`,
        options: {abs: 2},
        output: `background-image: url($CMS_REF(media:"my-file", abs:2))`
    }
]