import { Card } from "react-bootstrap";
import { Chart } from "primereact/chart";

import { useState, useEffect } from "react";

import {
  transformedData,
  getRandomElementsByCount,
  FormattedDataItem,
} from "./utils";

export const RealTimeChart = () => {
  const [data, setData] = useState<FormattedDataItem[] | null>(null);
  const fetchLink = "https://deploy-test-donischenko.netlify.app/api/get-stats";
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchLink);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const dataJson = await response.json();
        if (dataJson.length) {
          const formatted = getRandomElementsByCount(
            transformedData(dataJson),
            4
          );
          setData(formatted);
        }
      } catch (err) {
        console.error((err as Error).message);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 200000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    console.log(data);
    const dataTemplate = {
      labels: ["Process 1", "Process 2", "Process 3", "Process 4"],
      datasets: [
        {
          label: "Proces loading",
          data: data && data.map((item) => item.value),
          backgroundColor: [
            "rgba(255, 159, 64, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgb(255, 159, 64)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
          ],
          borderWidth: 1,
        },
      ],
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    setChartData(dataTemplate);
    setChartOptions(options);
  }, [data]);

  return (
    <Card>
      <Card.Header>Processor Usage</Card.Header>
      <Card.Body>
        <div className="card">
          <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
      </Card.Body>
    </Card>
  );
};
