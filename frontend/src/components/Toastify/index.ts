import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { IToast } from '../../types/IToast';

export const notify = (toastInfo: IToast) => {
    toast(toastInfo.message, {
        position: toast.POSITION.TOP_LEFT,
        type: toastInfo.variant,
        autoClose: 15000,
    });
}