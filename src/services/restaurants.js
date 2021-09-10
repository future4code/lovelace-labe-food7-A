import api from "../config/api";

export const getRestaurant = (id) => api.get(`/restaurants/${id}`);
