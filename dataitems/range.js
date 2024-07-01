/*
 * Display the current (ideal) range of the vehicle
 *
 * Created by Matt Dyson
 * Adapted from original code by Adrian Chrysanthou
 */
rDataItemProvider.register("range", {
  icon: '<span class="zmdi zmdi-gas-station zmdi-hc-fw"></span>',
  field: "Range",

  onDataUpdate(data) {
    const batteryRange = parseFloat(data.battery_range);
    if (isNaN(batteryRange)) {
      this.value = "Invalid data";
      return;
    }
    this.value = this.context.convertDistance(data.battery_range);
  }
});

/*
 * Display the current estimated range of the vehicle, based off recent performance
 *
 * Created by Matt Dyson
 * Adapted from original code by Adrian Chrysanthou
 */
rDataItemProvider.register("range-estimated", {
  icon: '<span class="zmdi zmdi-gas-station zmdi-hc-fw"></span>',
  field: "Range",

  onDataUpdate(data) {
    const estBatteryRange = parseFloat(data.est_battery_range);
    if (isNaN(estBatteryRange)) {
      this.value = "Invalid data";
      return;
    }
    this.value = this.context.convertDistance(data.est_battery_range);
    this.value += " (estimated)";
  }
});
