import {render, screen} from '@testing-library/react';

import Options from '../Options';

test('display images for each Scoop Options from server', async ()=>{
    render(<Options optionType="scoops"/>);
    const scoopImg = await screen.findAllByRole('img', { name: /scoop$/i });
    expect(scoopImg).toHaveLength(2);

    const altText = scoopImg.map((element)=>element.alt);
    expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('display images for each topping Options from server', async ()=>{
    render(<Options optionType="toppings"/>);
    const toppingImg = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImg).toHaveLength(3);

    const altText = toppingImg.map((element)=>element.alt);
    expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot Fudge topping']);
});


