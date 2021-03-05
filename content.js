function getColumnIndices(total) {
	let indices = [];
	//7 because number of column is 7
	for (let index = 0; index < total; index += 7) {
		indices.push(index);
	}
	return indices;
}

function getRowsFromTableUI() {
	const allColumns = document.getElementsByClassName('rt-td');
	const indices = getColumnIndices(allColumns.length);
	const rows = indices.map((index) => allColumns[index]);

	return rows;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.message === 'clicked_browser_action') {
		const rows = getRowsFromTableUI();

		const evt = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: 20,
			ctrlKey: true,
		});
		rows.forEach((el) => el.dispatchEvent(evt));
	}
});
