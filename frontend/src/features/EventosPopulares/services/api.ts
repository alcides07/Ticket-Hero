import {api, headers} from "../../../services/api";

export const getEventosPopulares = () => {
    return api
        .get("/evento/eventosPopulares", { headers: headers })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
};
