export interface Pokemon {

    name: string;
    order: number;
    species: Species;
}

export interface Species {
    name: string;
    url: string;
}