import { parseISO, format } from 'date-fns';

const DATE_FORMAT = 'MMM. do, yyyy';

export const normalizeDate = (date) => {
  if (date instanceof Date) {
    return date;
  }

  if (typeof date === 'number') {
    return new Date(date);
  }

  if (typeof date === 'string') {
    const parsedDate = parseISO(date);

    if (Number.isNaN(parsedDate) || parsedDate.toString() === 'Invalid Date') {
      return null;
    }

    return parsedDate;
  }

  return null;
};

export const formatDate = (date) => {
  const normalizedDate = normalizeDate(date);

  if (!normalizedDate) {
    return null;
  }

  return format(normalizedDate, DATE_FORMAT);
};
