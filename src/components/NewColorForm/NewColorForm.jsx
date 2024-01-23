import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './NewColorForm.css'

const NewColorForm = ({ addColor }) => {
    const navigateTo = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        value: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        console.log('Form submitted:', formData);
        navigateTo('/colors');
    };

    return (
        <div className='NewColorForm-Container'>
            <form onSubmit={handleSubmit}>
                <label>
                    Color Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Color Value:
                    <input
                        type="color"
                        name="value"
                        value={formData.value}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <button type="submit">Add color</button>
            </form>
        </div>
    );
};

export default NewColorForm;
