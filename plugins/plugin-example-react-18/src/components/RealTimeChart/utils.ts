export const transformedData = (data: { timestamp: string; value: number }[]) =>
  data.map((item: { timestamp: string; value: number }) => {
    const date = new Date(item.timestamp);
    date.setHours(date.getHours() + 2); // Добавляем 2 часа
    const timeString = date.toISOString().slice(11, 19);

    return {
      name: timeString,
      value: item.value
    };
  });
