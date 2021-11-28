import React from 'react';
import Grid from '@material-ui/core/Grid';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function DateFickerField() {
    const [date, setDate] = React.useState(new Date());//Date().toLocaleString()
    const handleChange = (newDate) => {
        console.log(newDate);
        setDate(newDate);
        //props.setDate(newDate);
    };
    return (//props -> 
        <div>
            <MuiPickersUtilsProvider utils={MomentUtils}>

                <DateTimePicker
                    label="DateTimePicker"
                    inputVariant="outlined"
                    value={date}
                    onChange={handleChange}
                />
            </MuiPickersUtilsProvider>
        </div>
    );
}
export default DateFickerField;