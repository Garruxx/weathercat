import { errorMessage } from "../models";

const defaultAlert: errorMessage = {
	message: null,
	deniedButton: "Cancelar",
	okButton: "Aceptar",
	label: "",
};
export const alerts = ({
	callback,
	deniedButton,
	label,
	message,
	okButton,
}: errorMessage = defaultAlert) => {
	const alertContainer = document.getElementById("alert") as HTMLElement;
	const htmlMessage = document.getElementById("errorMessage") as HTMLElement;
	const htmlLabel = document.getElementById("errorLabel") as HTMLElement;
	const okBtn = document.getElementById("okbtn") as HTMLInputElement;
	const deniedBtn = document.getElementById("deniedbtn") as HTMLInputElement;

	htmlMessage!.textContent = message;
	if (label) htmlLabel!.textContent = label;
	okBtn.value = okButton || "Aceptar";
	deniedBtn.value = deniedButton || "Cancelar";
	alertContainer.setAttribute("class", "visible");

	okBtn.onclick = () => {
		alertContainer.removeAttribute("class");
		if (callback) callback(true);
	};

	deniedBtn.onclick = () => {
		alertContainer.removeAttribute("class");
		if (callback) callback(false);
	};
};
