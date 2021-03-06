import { QueryConfig } from 'pg';

export const getBreedsQuery = (
    species: string,
    language: string
): QueryConfig => {
    const text = `
        SELECT
            id,
            abbreviation,
            translation as value
        FROM breed b
        LEFT JOIN (SELECT * FROM breed_translation WHERE language = $2) bt
            ON bt.breed = b.id
        WHERE species = $1;
    `;

    return {
        text,
        values: [ species, language ]
    };
};

export const getBreedQuery = (
    breed_id: string,
    language: string,
    defaultLanguage: string
): QueryConfig => {
    const text = `
        SELECT b.id, b.abbreviation, bt.translation as value
        FROM breed b
        LEFT JOIN breed_translation bt ON bt.breed = b.id
        WHERE bt.breed = $1
            AND bt.language IN ($2, $3)
        ORDER BY bt.language = $2 DESC
        LIMIT 1;
    `;

    return {
        text,
        values: [ breed_id, language, defaultLanguage ]
    }
};
