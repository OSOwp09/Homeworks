import React, { useState } from "react";

export const useForm = (initialState = {}) => {
	const [formState, setFormstate] = useState(initialState);

	const onInputChange = (evt) => {
		const { name, value } = evt.target;
		setFormstate({
			...formState,
			[name]: value,
		});
	};

    const onResetForm = () => {
        setFormstate(initialState)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
};
