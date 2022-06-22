import SummaryForm from "./SummaryForm";
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(()=>{
    render(<SummaryForm/>);
});

test('initial checkbox',()=>{
    const chkboxEle = screen.getByRole("checkbox",{name:/terms and conditions/i});
    expect(chkboxEle).not.toBeChecked();
    const buttonEle = screen.getByRole('button',{name:/Confirm Order/i});

    expect(buttonEle).toBeDisabled();
});

test('click to enable button',async ()=>{
    const user = userEvent.setup();

    const chkboxEle = screen.getByRole("checkbox");
    const buttonEle = screen.getByRole('button',{name:/Confirm Order/i});
    await user.click(chkboxEle);
    expect(chkboxEle).toBeChecked();
    expect(buttonEle).toBeEnabled();
    await user.click(chkboxEle);
    expect(chkboxEle).not.toBeChecked();
    expect(buttonEle).toBeDisabled();
});

test("popover on hover",async ()=>{
    const user = userEvent.setup();

    const popoverElpre = screen.queryByText(/no ice cream will actually be delivered/i);    
    expect(popoverElpre).not.toBeInTheDocument();

    const chkboxEle = screen.getByRole("checkbox",{name:/terms and conditions/i});
    await user.hover(chkboxEle);

    //const popoverEl = screen.getByTestId('termsandconditions-popover');    
    //const popoverEl = screen.getByRole("tooltip");
    const popoverEl = screen.getByText(/no ice cream will actually be delivered/i);     
    await waitFor(()=>expect(popoverEl).toBeInTheDocument());

    await user.unhover(chkboxEle);
    const popoverElagain = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popoverElagain).not.toBeInTheDocument();
    
});


