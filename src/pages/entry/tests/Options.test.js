import {render, screen} from '@testing-library/react';

import Options from '../Options';

test('display images for each Scoop Options from server',()=>{
    render(<Options optionsType="scoops"/>);
    const scoopImg = screen.getAllByRole('img',{name:/scoop$/i});
    expect(scoopImg).toHaveLength(2);

    const altText = scoopImg.map((element)=>element.alt);
    expect(altText).toBeEqual(["Chocolate scoop","Vanilla scoop"]);
});