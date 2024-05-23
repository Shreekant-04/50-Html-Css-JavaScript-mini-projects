const ctx = document.querySelector(".myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "<1",
      "1-2 ",
      "3-4",
      "5-9",
      "10-14",
      "15-19",
      "20-24",
      "25-29",
      ">-29",
    ],

    datasets: [
      {
        label: "Employee",
        data: [12, 19, 3, 5, 2, 3, 8, 12, 15],
        borderWidth: 1,
      },
      {
        label: "Engineer",

        data: [12, 19, 3, 5, 2, 3, 5, 8, 6],
        borderWidth: 1,
      },
      {
        label: "Goverment",

        data: [12, 19, 3, 5, 2, 3, 8, 12, 15],
        borderWidth: 1,
      },
      {
        label: "political Parties",

        data: [12, 19, 3, 5, 2, 3, 5, 8, 6],
        borderWidth: 1,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },

    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true,
      },
    },
    responsive: true,
  },
});
