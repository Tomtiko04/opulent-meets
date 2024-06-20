import {PropTypes} from "prop-types"
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

SortBy.propTypes = {
	options: PropTypes.any,
};
export default function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";
      function handleChange(e) {
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams)
      }
  return (
    <Select onChange={handleChange} value={sortBy} options={options} type="white"></Select>
  )
}


