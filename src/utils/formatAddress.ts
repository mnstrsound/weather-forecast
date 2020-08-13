import { SearchResult } from '../types';

export const formatAddress = (search: SearchResult) => {
    let result = [];

    search.address.country && (result.push(search.address.country));
    search.address.state && (result.push(search.address.state));
    search.address.city && search.address.city !== search.address.state && (result.push(search.address.city));
    search.address.town && search.address.town !== search.address.city && (result.push(search.address.town));
    search.address.village && search.address.village !== search.address.town && (result.push(search.address.village));

    return result.join(', ');
};
