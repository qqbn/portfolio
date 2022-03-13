import {ref} from "vue";
import Swal from "sweetalert2";
import popup from "../style/popup.css";
const copyText = () => {
    const saveText = (text, id) => {
        navigator.clipboard.writeText(text);
        if (id === 1) {
            Swal.fire({
                title: "Hey you just copied to clipboard my contact email: " + text,
                buttonsStyling: false,
            });
        } else {
            Swal.fire({
                title: "Hey you just copied to clipboard my discord tag: " + text,
                buttonsStyling: false,
            });
        }
    };
    return {saveText};
};

export default copyText;
