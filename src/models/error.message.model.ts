export interface errorMessage {
	message: string | null;
	label?: string;
	okButton?: string;
	deniedButton?: string;
	callback?: (response: boolean) => void;
}
