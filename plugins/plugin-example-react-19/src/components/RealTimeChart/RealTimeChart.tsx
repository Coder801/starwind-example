import { Card } from "react-bootstrap";

import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { transformedData, FormattedDataItem } from "./utils";

export const RealTimeChart = () => {
  const [data, setData] = useState<FormattedDataItem[] | null>(null);
  const fetchLink = "https://deploy-test-donischenko.netlify.app/api/get-stats";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(fetchLink);
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const dataJson = await response.json();
        if (dataJson.length) {
          const formatted = transformedData(dataJson);
          setData(formatted);
        }
      } catch (err) {
        console.error((err as Error).message);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card>
      <Card.Header>CPU Usage</Card.Header>
      <Card.Body>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={500}
            height={400}
            data={data || []}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              isAnimationActive={false}
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};
