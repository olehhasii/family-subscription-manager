const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export const getClosestNextMonth = () => {
  const currentDate = new Date();

  const firstDateOfNextMonth = currentDate.setMonth(currentDate.getMonth() + 1, 1);

  return new Date(firstDateOfNextMonth).toISOString().slice(0, 10);
};

export const getFormattedDate = (date: Date) => {
  return dateFormatter.format(date);
};

export const checkDateStatus = (paidUntillDate: Date) => {
  const currentDate = new Date();

  const differenceInDates = paidUntillDate.getTime() - currentDate.getTime();

  const oneDayInMs = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round(differenceInDates / oneDayInMs);

  if (diffInDays <= 0) {
    return { label: 'Payment is overdue', variant: 'danger' };
  }

  if (diffInDays <= 7) {
    return { label: 'Due soon', variant: 'due' };
  }

  return { label: 'Up to date', variant: 'success' };
};
