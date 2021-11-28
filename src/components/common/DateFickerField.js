import React from 'react';

function DateFickerField() {
    const [date, setDate] = React.useState(new Date());//Date().toLocaleString()
    const handleChange = (newDate) => {
        console.log(newDate);
        setDate(newDate);
        //props.setDate(newDate);
    };
    return (//props -> 
        <div>
            
        </div>
    );
}
export default DateFickerField;