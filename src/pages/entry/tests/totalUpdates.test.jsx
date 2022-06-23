import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test('update scoop subtotal when scoops change',()=>{
    render(<Options optionType={"scoops"}/>);

    //subtotal start with 0
    const subTotal = screen.getByText(/Scoops total:/);
    expect(subTotal).toHaveTextContent("0.00");

    //increase vanilla scoop by 1
    const vanillaScoop = screen.getByRole('spinbutton',{name:'Vanilla'});
    userEvent.clear(vanillaScoop);
    userEvent.type(subTotal,"1");
    expect(subTotal).toHaveTextContent("2.00");

    //increase chocolate scoop by 2
    const chocoScoop = screen.getByRole('spinbutton',{name:'Chocolate'});
    userEvent.clear(chocoScoop);
    userEvent.type(chocoScoop,"2");
    expect(subTotal).toHaveTextContent("6.00");

});

