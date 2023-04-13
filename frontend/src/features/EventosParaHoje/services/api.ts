import api from "../../../services/api";

export const getEventosParaHoje = (Headers: {}) => {
    return api
        .get("/evento/meusEventosHoje", { headers: Headers })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};
