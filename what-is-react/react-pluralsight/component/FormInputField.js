import React
    from "react";

export default function FormInputField(props) {
    return (
        <input
            className="px-2 mt-2 mb-2 ms-1"
            value={props.value}
            type="text"
            onChange={props.onChange}
            placeholder="Ingresar nueva tarea"
        />
    );
}