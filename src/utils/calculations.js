export const formatCurrency = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'USD'
});

const tax = 21;
let a = 0
let weekNet = 0;
let fortNightNet = 0;
let monthNet = 0;
let yearNet = 0;
let fortNightlyGross = 0;
let monthlyGross = 0;
let yearGross = 0;

export const Calculations = (
  setGross,
  setNet,
  setTax,
  amount,
  frequency,
  incomeType,

) => {
  a = amount;
  fortNightlyGross = a * 2;
  monthlyGross = a * 4.33;
  yearGross = a * 52;
  weekNet =  a - ((a * tax) / 100);
  fortNightNet= weekNet * 2;
  monthNet = weekNet * 4.33;
  yearNet = weekNet * 52;

  switch (incomeType) {
    case 'gross':
     
      if (frequency === 'weekly') {
       
        setGross({
          weekly: a,
          fortnightly: fortNightlyGross,
          monthly: monthlyGross,
          annually: yearGross,
        })
        
        
        setNet({
          weekly: weekNet ,
          fortnightly: fortNightNet,
          monthly: monthNet,
          annually: yearNet,
        });
        setTax({
          weekly: a - weekNet,
          fortnightly: fortNightlyGross  - fortNightNet,
          monthly: monthlyGross -  monthNet,
          annually: yearGross - yearNet,
        });
      } else if (frequency === 'fortnightly') {
        setGross({
          weekly: a / 2,
          fortnightly: a,
          monthly: a * 2,
          annually: a * 24,
        });
        setNet({
          weekly: (a / 2) - (((a/2) * tax) / 100),
          fortnightly: a - ((a * tax) / 100),
          monthly: (a * 2) - ((a * 2 * tax) / 100),
          annually: (a * 24) - ((a * 24 * tax) / 100),
        });
        setTax({
          weekly: ((a / 2) * tax) / 100,
          fortnightly: (a * tax) / 100,
          monthly: (a * 2 * tax) / 100,
          annually: (a * 24 * tax) / 100,
        });
      } else if (frequency === 'monthly') {
        setGross({
          weekly: a / 4.33,
          fortnightly: a / 2,
          monthly: a,
          annually: a * 12,
        });
        setNet({
          weekly: (a / 4.33) - (((a / 4.33) * tax) / 100),
          fortnightly: (a / 2) - (((a / 2) * tax) / 100),
          monthly: a - ((a * tax) / 100),
          annually: (a * 12) - (((a * 12) * tax) / 100),
        });
        setTax({
          weekly: ((a / 4.33) * tax) / 100,
          fortnightly: ((a / 2) * tax) / 100,
          monthly: (a * tax) / 100,
          annually: (a * 12 * tax) / 100,
        });
      } else if (frequency === 'annually') {
        setGross({
          weekly: a / 52,
          fortnightly: a / 24,
          monthly: a / 12,
          annually: a,
        });
        setNet({
          weekly: (a / 52) - (((a / 52) * tax) / 100),
          fortnightly: (a / 24) - (((a / 24) * tax) / 100),
          monthly: (a / 12) - (((a / 12) * tax) / 100),
          annually: a - ((a  * tax) / 100),
        });
        setTax({
          weekly: ((a / 52) * tax) / 100,
          fortnightly: ((a / 24) * tax) / 100,
          monthly: ((a / 12) * tax) / 100,
          annually: (a * tax) / 100,
        });
      }
      break;
    case 'net':
      if (frequency === 'weekly') {
        setNet({
          weekly: a,
          fortnightly: a * 2,
          monthly: a * 4.33,
          annually: a * 52,
        });
        setGross({
          weekly: a * 1.21,
          fortnightly: (a * 2) * 1.21,
          monthly: (a * 4.33) * 1.21,
          annually: (a * 52) * 1.21,
        });
        setTax({
          weekly: (a * tax) / 100,
          fortnightly: (a * 2 * tax) / 100,
          monthly: (a * 4.33 * tax) / 100,
          annually: (a * 52 * tax) / 100,
        });
      } else if (frequency === 'fortnightly') {
        setNet({
          weekly: a / 2,
          fortnightly: a,
          monthly: a * 2,
          annually: a * 24,
        });
        setGross({
          weekly: (a / 2) * 1.21,
          fortnightly: a * 1.21,
          monthly: (a * 2) * 1.21,
          annually: (a * 24) * 1.21,
        });
        setTax({
          weekly: ((a / 2) * tax) / 100,
          fortnightly: (a * tax) / 100,
          monthly: (a * 2 * tax) / 100,
          annually: (a * 24 * tax) / 100,
        });
      } else if (frequency === 'monthly') {
        setNet({
          weekly: a / 4.33,
          fortnightly: a / 2,
          monthly: a,
          annually: amount * 12,
        });
        setGross({
          weekly: (amount / 4.33) * 1.21,
          fortnightly: (amount / 2) * 1.21,
          monthly: amount * 1.21,
          annually: amount * 12 * 1.21,
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
          weekly: (amount / 52) * 1.21,
          fortnightly: (amount / 24) * 1.21,
          monthly: (amount / 12) * 1.21,
          annually: amount * 1.21,
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
