import { HandleHandMinutes } from "../../models";
import { handRotationCalculator } from "../../utilities";

export const handleHandMinutes = ({
	seconds,
	minutes,
	axes,
}: HandleHandMinutes) => {
	const handMinute = document.getElementById("handMinute");
	const rotation = handRotationCalculator({
		currentValue: minutes + 1,
		maxValue: 60,
		timeDivider: 60,
		timeFractions: seconds,
	});

	handMinute?.setAttribute(
		"transform",
		`rotate(${rotation} ${axes.x} ${axes.y})`
	);
};
