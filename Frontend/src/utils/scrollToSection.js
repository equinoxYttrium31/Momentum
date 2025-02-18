export const scrollToSection = (event, sectionId) => {
	event.preventDefault(); // Prevent default link behavior

	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({
			behavior: 'smooth', // Smooth scroll effect
			block: 'start', // Align to the top of the section
		});
	}
};
