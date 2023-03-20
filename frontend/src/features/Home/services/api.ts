import api from "../../../services/api";

export const GetEvents = () => {
    return api
        .get("/evento/meusEventos")
        .then((response) => {

        })
        .catch(() => {

        });
};