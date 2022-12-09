export const tax = 21;

export const Calculations = (
  setGross,
  setNet,
  setTax,
  amount,
  frequency,
  incomeType,
) => {
  switch (incomeType) {
    case 'gross':
      if (frequency === 'weekly') {
        setGross({
          weekly: amount,
          fortnightly: amount * 2,
          monthly: amount * 4.33,
          annually: amount * 52,
        });
        setNet({
          weekly: amount / 1.26,
          fortnightly: (amount * 2) / 1.26,
          monthly: (amount * 4, 33) / 1.26,
          annually: (amount * 52) / 1.26,
        });
        setTax({
          weekly: (amount * tax) / 100,
          fortnightly: (amount * 2 * tax) / 100,
          monthly: (amount * 4.33 * tax) / 100,
          annually: (amount * 52 * tax) / 100,
        });
      } else if (frequency === 'fortnightly') {
        setGross({
          weekly: amount / 2,
          fortnightly: amount,
          monthly: amount * 2,
          annually: amount * 24,
        });
        setNet({
          weekly: amount / 2 / 1.26,
          fortnightly: amount / 1.26,
          monthly: (amount * 2) / 1.26,
          annually: (amount * 24) / 1.26,
        });
        setTax({
          weekly: ((amount / 2) * tax) / 100,
          fortnightly: (amount * tax) / 100,
          monthly: (amount * 2 * tax) / 100,
          annually: (amount * 24 * tax) / 100,
        });
      } else if (frequency === 'monthly') {
        setGross({
          weekly: amount / 4.33,
          fortnightly: amount / 2,
          monthly: amount,
          annually: amount * 12,
        });
        setNet({
          weekly: amount / 4 / 1.26,
          fortnightly: amount / 2 / 1.26,
          monthly: amount / 1.26,
          annually: (amount * 12) / 1.26,
        });
        setTax({
          weekly: ((amount / 4) * tax) / 100,
          fortnightly: ((amount / 2) * tax) / 100,
          monthly: (amount * tax) / 100,
          annually: (amount * 12 * tax) / 100,
        });
      } else if (frequency === 'annually') {
        setGross({
          weekly: amount / 52,
          fortnightly: amount / 24,
          monthly: amount / 12,
          annually: amount,
        });
        setNet({
          weekly: amount / 52 / 1.26,
          fortnightly: amount / 24 / 1.26,
          monthly: amount / 12 / 1.26,
          annually: amount / 1.26,
        });
        setTax({
          weekly: ((amount / 52) * tax) / 100,
          fortnightly: ((amount / 24) * tax) / 100,
          monthly: ((amount / 12) * tax) / 100,
          annually: (amount * tax) / 100,
        });
      }
      break;
    case 'net':
      if (frequency === 'weekly') {
        setNet({
          weekly: amount,
          fortnightly: amount * 2,
          monthly: amount * 4.33,
          annually: amount * 52,
        });
        setGross({
          weekly: amount * 1.2,
          fortnightly: amount * 2 * 1.26,
          monthly: amount * 4.33 * 1.2,
          annually: amount * 52 * 1.2,
        });
        setTax({
          weekly: (amount * tax) / 100,
          fortnightly: (amount * 2 * tax) / 100,
          monthly: (amount * 4.33 * tax) / 100,
          annually: (amount * 52 * tax) / 100,
        });
      } else if (frequency === 'fortnightly') {
        setNet({
          weekly: amount / 2,
          fortnightly: amount,
          monthly: amount * 2,
          annually: amount * 24,
        });
        setGross({
          weekly: (amount / 2) * 1.26,
          fortnightly: amount * 1.26,
          monthly: amount * 2 * 1.26,
          annually: amount * 24 * 1.26,
        });
        setTax({
          weekly: ((amount / 2) * tax) / 100,
          fortnightly: (amount * tax) / 100,
          monthly: (amount * 2 * tax) / 100,
          annually: (amount * 24 * tax) / 100,
        });
      } else if (frequency === 'monthly') {
        setNet({
          weekly: amount / 4.33,
          fortnightly: amount / 2,
          monthly: amount,
          annually: amount * 12,
        });
        setGross({
          weekly: (amount / 4.33) * 1.26,
          fortnightly: (amount / 2) * 1.26,
          monthly: amount * 1.26,
          annually: amount * 12 * 1.26,
        });
        setTax({
          weekly: ((amount / 4.33) * tax) / 100,
          fortnightly: ((amount / 2) * tax) / 100,
          monthly: (amount * tax) / 100,
          annually: (amount * 12 * tax) / 100,
        });
      } else if (frequency === 'annually') {
        setNet({
          weekly: amount / 52,
          fortnightly: amount / 24,
          monthly: amount / 12,
          annually: amount,
        });
        setGross({
          weekly: (amount / 52) * 1.26,
          fortnightly: (amount / 24) * 1.26,
          monthly: (amount / 12) * 1.26,
          annually: amount * 1.26,
        });
        setTax({
          weekly: ((amount / 52) * tax) / 100,
          fortnightly: ((amount / 24) * tax) / 100,
          monthly: ((amount / 12) * tax) / 100,
          annually: (amount * tax) / 100,
        });
      }
      break;
    default:
  }
};
