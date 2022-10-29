import { HandRotationCalculator } from "../models/handRotationCalculator.model";

export const handRotationCalculator = ({
	currentValue,
	maxValue,
	timeDivider,
	timeFractions,
}: HandRotationCalculator) => {
	const timeInFractions =
		(currentValue * timeDivider + timeFractions) / timeDivider;
	const timeAdvancePercent = (timeInFractions / maxValue) * 100;
	const rotation = (timeAdvancePercent / 100) * 360;
	return rotation;
};
