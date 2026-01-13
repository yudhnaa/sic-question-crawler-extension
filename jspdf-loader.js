// Simple jsPDF loader for Chrome extension
(function () {
	"use strict";

	// If jsPDF is already available globally, return early
	if (typeof window.jsPDF !== "undefined") {
		return;
	}

	// If jspdf namespace exists, expose jsPDF from it
	if (typeof window.jspdf !== "undefined" && window.jspdf.jsPDF) {
		window.jsPDF = window.jspdf.jsPDF;
		return;
	}

	// Look for jsPDF in the global scope
	if (typeof jsPDF !== "undefined") {
		window.jsPDF = jsPDF;
		return;
	}

	console.warn("jsPDF not found in expected locations");
})();
