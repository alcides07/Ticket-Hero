import api from "../../../services/api";

export const getEventosPopulares = (Headers: {}) => {
    return api
        .get("/evento/eventosPopulares", { headers: Headers })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};
