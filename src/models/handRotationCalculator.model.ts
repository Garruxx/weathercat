export interface HandRotationCalculator {
	/**
	 * This is the current value and based on this
	 * it will be rotated
	 */
	currentValue: number;
	/**
	 * This is the maximum value it will reach the current Value
	 */
	maxValue: number;

	/**
	 * This is the fraction of the time
	 * @example
	 *   const hour = 60;
	 *   const minutes = 30;
	 * const fraction = minutes;
	 *
	 * //minutes is the fraction in hour
	 */
	timeFractions: number;

	/**
	 * Time divider
	 * @example
	 * //An hour is divided into 60 minutes
	 * //A minute is divided into 60 seconds
	 * //A second is divided into 1000 milliseconds
	 */
	timeDivider: number;
}
