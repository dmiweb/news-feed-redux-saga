export const formatDate = (timestamp: number): { formattedDate: string; dateTime: string } => {
  const date = new Date(timestamp * 1000); 
  const now = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const monthNames = [
    "янв", "фев", "мар", "апр", "мая", "июн",
    "июл", "авг", "сен", "окт", "ноя", "дек"
  ];

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  const formattedDayMonth = `${day} ${monthNames[month]}`;

  let formattedDate: string;
  if (year === now.getFullYear()) {
    formattedDate = `${formattedDayMonth} в ${formattedTime}`;
  } else {
    formattedDate = `${formattedDayMonth} ${year} в ${formattedTime}`;
  }

  const dateTime = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  return { formattedDate, dateTime };
}