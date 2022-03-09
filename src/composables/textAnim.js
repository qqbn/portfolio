import {ref} from "vue";
const textAnim = arr => {
    const counter1 = ref(0);
    const counter2 = ref(0);
    const counter3 = ref(0);
    const header = ref("");
    const par1 = ref("");
    const par2 = ref("");
    const loop = () => {
        if (counter1.value < arr[0].length) {
            header.value += arr[0].charAt(counter1.value);
            counter1.value += 1;
            setTimeout(loop, 500);
        } else if (counter2.value < arr[1].length) {
            par1.value += arr[1].charAt(counter2.value);
            counter2.value += 1;
            setTimeout(loop, 100);
        } else if (counter3.value < arr[2].length) {
            par2.value += arr[2].charAt(counter3.value);
            counter3.value += 1;
            setTimeout(loop, 100);
        }
    };
    return {loop, header, par1, par2};
};

export default textAnim;

// const textAnim = text => {
//     const lala = ref(0);
//     const header = ref("");
//     const loop = () => {
//         if (lala.value < text.length) {
//             header.value += text.charAt(lala.value);
//             lala.value += 1;
//             setTimeout(loop, 500);
//         }
//     };
//     return {loop, header};
// };
