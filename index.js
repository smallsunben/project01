let i = 1;
function mouseMove() {
    document.querySelector('.box').innerHTML = i++
}
// function throttle(fn, t) {
//     let timer = null;
//     return () => {
//         if (!timer) {
//             timer = setTimeout(function () {
//                 fn()
//                 timer = null;
//             }, t)
//         }
//     }
// }
// document.querySelector('.box').addEventListener('mousemove', throttle(mouseMove, 1000))

function debounce(fn, t) {
    let timer = null;
    return () => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function () {
            fn()
        }, t)
    }
}
document.querySelector('.box').addEventListener('mousemove', debounce(mouseMove, 1000))
const obj = {
    name: 'coco',
    age: 18,
    family: {
        father: 'father',
        mother: 'mother'
    }
}
function cloneDeep(obj) {
    const newObj = Array.isArray(obj ? [] : {});
}
cloneDeep(obj)