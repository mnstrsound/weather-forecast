export type SearchResult = {
    address: {
        country: string;
        country_code: string;
        house_number: string;
        postcode: string;
        region: string;
        road: string;
        state: string;
        state_district: string;
        suburb: string;
        city: string;
        town: string;
        village: string;
    },
    boundingbox: string[];
    class: string;
    display_name: string;
    icon: string;
    importance: number;
    lat: string;
    licence: string;
    lon: string;
    osm_id: number;
    osm_type: string;
    place_id: number;
    type: string;
}

export type SearchResults = SearchResult[];

export type WeatherResult = {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pop: number;
    pressure: number;
    temp: number;
    visibility: number;
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    wind_deg: number;
    wind_speed: number;
}

export type WeatherResults = WeatherResult[];

export type WeatherResultsResponse = {
    current: WeatherResult;
    hourly: WeatherResults;
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
}
