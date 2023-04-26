import {api} from "../../../services/api";

export const getEventosPopulares = () => {
    return api
        .get("/evento/eventosPopulares")
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};
