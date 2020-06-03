const p1 = Promise.resolve(1);
const p2 = Promise.reject("my error");
const p3 = Promise.resolve(1);
(async () => {
    const result = await Promise.allSettled([p1, p2, p3])
    console.log(result);
})()

