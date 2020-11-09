/*
 * Display whether or not the vehicle is locked
 *
 * Created by Matt Dyson
 * Adapted from original code by Adrian Chrysanthou
 */

DataItemProvider.register("locked", {
  itemName: "locked",

  updateData(data) {
    if (data.locked) {
      this.icon = `<span class="zmdi zmdi-lock-outline zmdi-hc-fw"></span>`;
      this.field = "Locked";
    } else {
      this.icon = `<span class="zmdi zmdi-lock-open zmdi-hc-fw"></span>`;
      this.field = "Unlocked";
    }
  }
});

/*
 * Display the odometer value from the vehicle
 *
 * Created by Matt Dyson
 * Adapted from original code by Adrian Chrysanthou
 */
DataItemProvider.register("odometer", {
  itemName: "odometer",

  icon: `<span class="zmdi zmdi-globe zmdi-hc-fw"></span>`,
  field: "Odometer",

  updateData(data) {
    this.value = this.context.convertDistance(data.odometer);
  }
});

/*
 * Display the state of the vehicle (whether or not it is driving etc)
 *
 * Created by Matt Dyson
 * Adapted from original code by Justyn R
 */
DataItemProvider.register("state", {
  itemName: "state",

  field: "State",

  updateData(data) {
    this.value = data.carState;

    switch (data.carState) {
      case "Sentry":
        this.icon = `<span class="zmdi zmdi-hc-fw zmdi-dot-circle sentry"></span>`;
        break;

      case "Idling":
        this.icon = `<span class="zmdi zmdi-hc-fw zmdi-parking"></span>`;
        break;

      case "Driving":
        this.icon = `<span class="zmdi zmdi-hc-fw zmdi-car"></span>`;
        break;
    }
  }
});

/*
 * Display how long ago the currently loaded data was pulled by TeslaFi
 *
 * Created by Matt Dyson
 */
DataItemProvider.register("data-time", {
  itemName: "data-time",

  icon: `<span class="zmdi zmdi-time zmdi-hc-fw"></span>`,

  updateData(data) {
    this.field = moment(data.Date).fromNow();
  }
});
