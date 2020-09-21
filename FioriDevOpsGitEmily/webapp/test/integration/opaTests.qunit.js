/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/merry/com/FioriDevOpsGitEmily/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
