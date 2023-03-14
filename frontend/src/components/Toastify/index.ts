import { toast, TypeOptions } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
interface IToast {
    message: string;
    variant: TypeOptions;
};

export const notify = (toastInfo: IToast) => {
        toast(toastInfo.message, {
            position: toast.POSITION.TOP_LEFT,
            type: toastInfo.variant,
            autoClose: 15000,
        });

}