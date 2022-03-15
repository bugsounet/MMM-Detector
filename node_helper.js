const NodeHelper = require('node_helper')

module.exports = NodeHelper.create({
  socketNotificationReceived: function (notification, payload) {
    switch(notification) {
      case "INIT":
        this.initialize()
        break
    }
  },

  initialize: async function() {
    console.error("[DETECTOR] Initialize... failed!")
    console.error("[DETECTOR] This module is now  in end of live.")
    console.error("[DETECTOR] Read `README.md` file in MMM-Detector directory for more informations")
  }
});
