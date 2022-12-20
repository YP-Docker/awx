const bysetposOptions = [
  { value: '', key: 'none', label: 'None' },
  { value: 1, key: 'first', label: t`First` },
  {
    value: 2,
    key: 'second',
    label: t`Second`,
  },
  { value: 3, key: 'third', label: t`Third` },
  {
    value: 4,
    key: 'fourth',
    label: t`Fourth`,
  },
  { value: 5, key: 'fifth', label: t`Fifth` },
  { value: -1, key: 'last', label: t`Last` },
];

const monthOptions = [
  {
    key: 'january',
    value: 1,
    label: t`January`,
  },
  {
    key: 'february',
    value: 2,
    label: t`February`,
  },
  {
    key: 'march',
    value: 3,
    label: t`March`,
  },
  {
    key: 'april',
    value: 4,
    label: t`April`,
  },
  {
    key: 'may',
    value: 5,
    label: t`May`,
  },
  {
    key: 'june',
    value: 6,
    label: t`June`,
  },
  {
    key: 'july',
    value: 7,
    label: t`July`,
  },
  {
    key: 'august',
    value: 8,
    label: t`August`,
  },
  {
    key: 'september',
    value: 9,
    label: t`September`,
  },
  {
    key: 'october',
    value: 10,
    label: t`October`,
  },
  {
    key: 'november',
    value: 11,
    label: t`November`,
  },
  {
    key: 'december',
    value: 12,
    label: t`December`,
  },
];

const weekdayOptions = [
  { value: '', key: 'none', label: 'None' },
  {
    value: RRule.SU,
    key: 'sunday',
    label: t`Sunday`,
  },
  {
    value: RRule.MO,
    key: 'monday',
    label: t`Monday`,
  },
  {
    value: RRule.TU,
    key: 'tuesday',
    label: t`Tuesday`,
  },
  {
    value: RRule.WE,
    key: 'wednesday',
    label: t`Wednesday`,
  },
  {
    value: RRule.TH,
    key: 'thursday',
    label: t`Thursday`,
  },
  {
    value: RRule.FR,
    key: 'friday',
    label: t`Friday`,
  },
  {
    value: RRule.SA,
    key: 'saturday',
    label: t`Saturday`,
  },
];

const FREQUENCIESCONSTANTS = {
  minute: RRule.MINUTELY,
  hour: RRule.HOURLY,
  day: RRule.DAILY,
  week: RRule.WEEKLY,
  month: RRule.MONTHLY,
  year: RRule.YEARLY,
};
export {
  monthOptions,
  weekdayOptions,
  bysetposOptions,
  validateSchedule,
  FREQUENCIESCONSTANTS,
};
