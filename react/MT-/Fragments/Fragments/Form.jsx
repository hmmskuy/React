import Input from "../componet/input";
import Label from "../componet/label";
export default function Form({label,input}) {
    return (
        <div className="">
        <Label label={label}/>
        <Input input={input}/>
        </div>
    )
}