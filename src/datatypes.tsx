export type Pokemon = {
    name: string;
    url: string;
}
export type PokemonDetail = {
    number: number;
    name: string;
    imageUrl: string;
    species: string;
    stats: {
        baseStat: number;
        name: string;
    }[];
    moves: string[];
    types: string[];
    weight: number;
}
export interface PokemonItemProps {
    key: string;
    pokemon: Pokemon;
    getPokeUrl: any;
}
export interface PokemonDetailProps {
    url: string;
}