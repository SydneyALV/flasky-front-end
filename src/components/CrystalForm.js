import React from 'react'

function CrystalForm() {
    const [formFields, setFormFields] = React.useState({
        name: '',
        color: '',
        powers: '',
        charges: null
    })

    const handleChange = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        })
    }


    return (
        <form>
            <section>
                <h2>Add a Crystal</h2>
                <div className="new_crystal_fields"></div>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <input 
                        name="name" 
                        value={formFields.name} 
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor='color'>Color: </label>
                        <input 
                        name="color" 
                        value={formFields.color} 
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor='powers'>Powers: </label>
                        <input 
                        name="powers" 
                        value={formFields.powers} 
                        onChange={handleChange} 
                        />
                    </div>
                    <div>
                        <label htmlFor='charges'>Charges: </label>
                        <input 
                        name="charges" 
                        value={formFields.charges} 
                        onChange={handleChange} 
                        />
                    </div>
                    <button 
                    className="button new_crystal_submit" 
                    type="submit"
                    value="Add Crystal"
                    >
                        Add Crystal
                    </button>
            </section>
        </form>
    )
}

export default CrystalForm