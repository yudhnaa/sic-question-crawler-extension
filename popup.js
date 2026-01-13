// Popup script for Chrome extension
document.addEventListener("DOMContentLoaded", function () {
	const crawlBtn = document.getElementById("crawl-btn");
	const exportBtn = document.getElementById("export-pdf-btn");
	const testBtn = document.getElementById("test-pdf-btn");
	const statusEl = document.getElementById("status");
	const countEl = document.getElementById("question-count");

	// Update status
	function updateStatus(message, type = "info") {
		statusEl.textContent = message;
		statusEl.className = `status-${type}`;
	}

	// Update question count
	function updateQuestionCount(count) {
		countEl.textContent = count || 0;
	}

	// Get current tab and send message to content script
	function sendMessageToContentScript(action, data = {}) {
		chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
			chrome.tabs.sendMessage(
				tabs[0].id,
				{ action, ...data },
				function (response) {
					if (chrome.runtime.lastError) {
						updateStatus("Error: " + chrome.runtime.lastError.message, "error");
						return;
					}

					if (response) {
						if (response.status) {
							updateStatus(response.message, response.status);
						}
						if (response.questionCount !== undefined) {
							updateQuestionCount(response.questionCount);
							exportBtn.disabled = response.questionCount === 0;
						}
					}
				}
			);
		});
	}

	// Event listeners
	crawlBtn.addEventListener("click", function () {
		updateStatus("Crawling questions...", "info");
		crawlBtn.disabled = true;
		sendMessageToContentScript("crawl");
		setTimeout(() => {
			crawlBtn.disabled = false;
		}, 2000);
	});

	exportBtn.addEventListener("click", function () {
		updateStatus("Exporting to PDF...", "info");
		exportBtn.disabled = true;
		sendMessageToContentScript("export");
		setTimeout(() => {
			exportBtn.disabled = false;
		}, 3000);
	});

	testBtn.addEventListener("click", function () {
		updateStatus("Testing PDF library...", "info");
		testBtn.disabled = true;
		sendMessageToContentScript("test");
		setTimeout(() => {
			testBtn.disabled = false;
		}, 2000);
	});

	// Initialize - check if questions are already crawled
	sendMessageToContentScript("getStatus");
});
