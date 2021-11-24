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
        output: `background-image: url("$CMS_REF(media:"my_file", abs: 2)$")`
    }
]