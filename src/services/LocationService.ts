import axios from 'axios';

export const LocationService = {
    getAddressBySearch(address: string) {
        return axios.get(`https://nominatim.openstreetmap.org/search?q=${address}&addressdetails=1&format=json`);
    },
    getAddressByCoordinates(lat: number, lon: number) {
        return axios.get(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&addressdetails=1&format=json`);
    },
};
