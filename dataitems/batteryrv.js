/*
 * Display the current charge level (in percentage points) of the battery, and the
 * current charge limit set on the vehicle. Both values will be coloured according
 * to the `batteryDanger` and `batteryWarn` configuration values
 *
 * Created by Matt Dyson
 */
rDataItemProvider.register("batteryrv", {
  icon: '<span class="zmdi zmdi-battery zmdi-hc-fw"></span>',
  field: "Battery",

  onDataUpdate(data) {
    this.value = `<span class="battery-level-`;
    this.value += this.getBatteryLevelClass(data.battery_range);
    this.value += `">`;
    this.value += data.battery_level;
    this.value += `%</span> / <span class="battery-level-`;
    this.value += this.getBatteryLevelClass(data.charge_limit_soc);
    this.value += `">`;
    this.value += data.charge_limit_soc;
    this.value += `%</span>`;
  },

  getBatteryLevelClass: function (bl) {
    if (bl < this.config.batteryDanger) {
      return "danger";
    }
    if (bl < this.config.batteryWarning) {
      return "warning";
    }
    if (bl >= this.config.batteryDanger) {
      return "ok";
    }
  }
});
