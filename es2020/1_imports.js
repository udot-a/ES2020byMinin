(async () => {
    const module = await import("./module.js");
    console.log(module);
    const { MAX } = module;
        console.log(MAX);
})()
