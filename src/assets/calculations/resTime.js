export const calcClosingTime = (closesAt) => {
	const currentTime = new Date(Date.now());
	const timeDiff = closesAt - currentTime.getHours();

	if (timeDiff >= 2) {
		return true;
	} else {
		return false;
	}
};
