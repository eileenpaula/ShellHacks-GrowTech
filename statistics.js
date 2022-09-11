'use strict';
var xValues = ["White", "Black", "Asian", "Hispanic", "Other", "Mixed Race"];
var yValues = [68, 7, 14, 8, 1, 1];
var colors = [
  "rgb(8, 8, 98)",
  "rgb(31, 72, 183)",
  "rgb(8, 38, 121)",
  "rgb(71, 105, 199)",
  "rgb(11, 72, 239)",
  "rgb(126, 191, 237)"
];

new Chart("demoChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: colors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "U.S. Diversity Statistics for Tech"
    }
  }
});