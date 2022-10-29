import { HandleHandSeconds } from "../../models";
import { handRotationCalculator } from "../../utilities";

export const handleHandSeconds = ({ seconds, ms, axes }: HandleHandSeconds) => {
	const handSeconds = document.getElementById("handSeconds");
	const rotation = handRotationCalculator({
		currentValue: seconds + 1,
		maxValue: 60,
		timeDivider: 1000,
		timeFractions: ms,
	});
	handSeconds?.setAttribute(
		"transform",
		`rotate(${rotation} ${axes.x} ${axes.y})`
	);
};
