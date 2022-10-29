import { HandleHandHours } from "../../models";
import { handRotationCalculator } from "../../utilities";

export const handleHandHours = ({ axes, hours, minutes }: HandleHandHours) => {
	const handHour = document.getElementById("handHour");
	const rotation = handRotationCalculator({
		currentValue: hours,
		maxValue: 12,
		timeDivider: 60,
		timeFractions: minutes,
	});
	handHour?.setAttribute(
		"transform",
		`rotate(${rotation} ${axes.x} ${axes.y})`
	);
};
