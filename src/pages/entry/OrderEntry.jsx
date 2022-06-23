import Options from "./Options"

//previously, return div only as option test artificially pass optiontype props to option to test
export default function OrderEntry(){
    return <div>
        <Options optionType={"scoops"}/>
        <Options optionType={"toppings"}/>

    </div>
}