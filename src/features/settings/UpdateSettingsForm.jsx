import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from "../../ui/Spinner";

import { useSettings } from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';


function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();
  const {breakfastPrice, maxBookingLength, maxGuestPerBooking, minBookingLength } = settings || {}
  const {isUpdating, updateSetting} = useUpdateSetting();

  function handleUpdate(e, field){
    const {value} = e.target;
    if(!value) return;
    updateSetting({[field]: value})
  }

  if(isLoading) return <Spinner />
  return (
		<Form>
			<FormRow label="Minimum booking period">
				<Input
					type="number"
					id="min-nights"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, "minBookingLength")}
					defaultValue={minBookingLength}
				/>
			</FormRow>

			<FormRow label="Maximum booking period">
				<Input
					type="number"
					id="max-nights"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, "maxBookingLength")}
					defaultValue={maxBookingLength}
				/>
			</FormRow>

			<FormRow label="Maximum attendees">
				{/* minimum */}
				<Input
					type="number"
					id="max-guests"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, "maxGuestPerBooking")}
					defaultValue={maxGuestPerBooking}
				/>
			</FormRow>

			<FormRow label="Refreshments">
				<Input
					type="number"
					id="breakfast-price"
					disabled={isUpdating}
					onBlur={(e) => handleUpdate(e, "breakfastPrice")}
					defaultValue={breakfastPrice}
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;
