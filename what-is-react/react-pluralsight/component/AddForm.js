import { useState } from "react"
import FormInputButton from "./FormInputButton";
import FormInputField from "./FormInputField";

export default function AddForm({ addTask }) {

    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.length > 0) {
            addTask(userInput);
        }
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-7">
                    <FormInputField value={userInput} onChange={handleChange} />
                </div>
                <div className="col-5">
                    <FormInputButton />
                </div>
            </div>
        </form>
    )
}