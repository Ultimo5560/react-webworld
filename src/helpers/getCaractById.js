import { cards } from "../data/cards";




export const getCaractById = (id) => {

    const validIds = ['ba-01', 'emp-02', 'pro-03'];

    if ( !validIds.includes(id)) {
        throw new Error(`${id} is not a valid id`);

    }
    return cards.filter(card => card.id === id);

}