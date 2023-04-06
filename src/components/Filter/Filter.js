import { useDispatch, useSelector } from "react-redux";
import { FormField } from "components/ContactForm/ContactForm.styled";
import { Input } from "./Filter.styled";
import { handleFilter } from "redux/filtersSlice";
import { selectFilter } from "redux/selectors";


export const Filter = () => {
const dispatch = useDispatch();
    const filter = useSelector(selectFilter);
    
    
   

    return (
        <FormField>
            Find contacts by name
            <Input type="text" value={filter} onChange={(e) => dispatch(handleFilter(e.target.value))}></Input>
        </FormField>
    )
}

