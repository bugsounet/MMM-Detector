Module.register("MMM-Detector", {
    notificationReceived: function (notification, payload) {
      switch(notification) {
        case "DOM_OBJECTS_CREATED":
          this.sendSocketNotification("INIT")
          this.sendNotification("SHOW_ALERT", {
            type: "notification",
            message: "[ERROR] This module is now  in end of live. Read `README.md` file in MMM-Detector directory for more informations",
            title: "MMM-Detector",
            timer: 24*60*60*1000
          })
          break
      }
    },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  }
});
