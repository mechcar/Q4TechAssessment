var reportsWidget = {
	options: {
		containerSelector: ".reports",
		template:
			"{{#.}}" +
			'<article class="reports_item">' +
			'<a href="{{cover}}" target="_blank">' +
			'<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
			// File was missing a "+" before the closing </a> tag, now adheres to structure required by mustache templates
			"</a>" +
			'<footer class="reports_docs">' +
			"{{#documents}}" +
			'<h3 class="reports_title">' +
			'<a href="{{url}}" target="_blank">{{title}} ' +
			"<span>({{file_size}} {{file_type}})</span>" +
			"</a>" +
			"</h3>" +
			"{{/documents}}" +
			"</footer>" +
			"</article>" +
			"{{/.}}",
	},

	init: function () {
		this.renderReports(reportData || []);
	},

	renderReports: function (reports) {
		var inst = this,
			options = inst.options;

		$(options.containerSelector).html(
			Mustache.render(options.template, reports)
		);
	},
};

reportsWidget.init();
