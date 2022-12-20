import React from 'react';
import { t } from '@lingui/macro';
import { Checkbox as _Checkbox, FormGroup } from '@patternfly/react-core';
import { useField } from 'formik';
import { RRule } from 'rrule';
import styled from 'styled-components';
import AnsibleSelect from 'components/AnsibleSelect';
import { weekdayOptions } from './scheduleFormHelpers';

const Checkbox = styled(_Checkbox)`
  :not(:last-of-type) {
    margin-right: 10px;
  }
`;
const GroupWrapper = styled(FormGroup)`
  && .pf-c-form__group-control {
    display: flex;
    padding-top: 10px;
  }
  && .pf-c-form__group-label {
    padding-top: 20px;
  }
`;

function WeekdayForm({ id }) {
  const [daysOfWeek, daysOfWeekMeta, daysOfWeekHelpers] = useField('byweekday');
  const [weekStartDay, , weekStartDayHelpers] = useField('wkst');
  const updateDaysOfWeek = (day, checked) => {
    const newDaysOfWeek = daysOfWeek.value ? [...daysOfWeek.value] : [];
    daysOfWeekHelpers.setTouched(true);

    if (checked) {
      newDaysOfWeek.push(day);
      daysOfWeekHelpers.setValue(newDaysOfWeek);
    } else {
      daysOfWeekHelpers.setValue(
        newDaysOfWeek.filter((selectedDay) => selectedDay !== day)
      );
    }
  };
  return (
    <>
      <GroupWrapper
        name="wkst"
        label={<b>{t`Select the first day of the week`}</b>}
      >
        <AnsibleSelect
          id={`schedule-run-on-the-day-${id}`}
          data={weekdayOptions}
          onChange={(e, v) => {
            weekStartDayHelpers.setValue(v);
          }}
          {...weekStartDay}
        />
      </GroupWrapper>
      <GroupWrapper
        name="byweekday"
        fieldId={`schedule-days-of-week-${id}`}
        helperTextInvalid={daysOfWeekMeta.error}
        validated={
          !daysOfWeekMeta.touched || !daysOfWeekMeta.error ? 'default' : 'error'
        }
        label={<b>{t`On selected day(s) of the week`}</b>}
      >
        <Checkbox
          label={t`Sun`}
          isChecked={daysOfWeek.value?.includes(RRule.SU)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.SU, checked);
          }}
          aria-label={t`Sunday`}
          id={`schedule-days-of-week-sun-${id}`}
          ouiaId={`schedule-days-of-week-sun-${id}`}
          name="daysOfWeek"
        />
        <Checkbox
          label={t`Mon`}
          isChecked={daysOfWeek.value?.includes(RRule.MO)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.MO, checked);
          }}
          aria-label={t`Monday`}
          id={`schedule-days-of-week-mon-${id}`}
          ouiaId={`schedule-days-of-week-mon-${id}`}
          name="daysOfWeek"
        />
        <Checkbox
          label={t`Tue`}
          isChecked={daysOfWeek.value?.includes(RRule.TU)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.TU, checked);
          }}
          aria-label={t`Tuesday`}
          id={`schedule-days-of-week-tue-${id}`}
          ouiaId={`schedule-days-of-week-tue-${id}`}
          name="daysOfWeek"
        />
        <Checkbox
          label={t`Wed`}
          isChecked={daysOfWeek.value?.includes(RRule.WE)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.WE, checked);
          }}
          aria-label={t`Wednesday`}
          id={`schedule-days-of-week-wed-${id}`}
          ouiaId={`schedule-days-of-week-wed-${id}`}
          name="daysOfWeek"
        />
        <Checkbox
          label={t`Thu`}
          isChecked={daysOfWeek.value?.includes(RRule.TH)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.TH, checked);
          }}
          aria-label={t`Thursday`}
          id={`schedule-days-of-week-thu-${id}`}
          ouiaId={`schedule-days-of-week-thu-${id}`}
          name="daysOfWeek"
        />
        <Checkbox
          label={t`Fri`}
          isChecked={daysOfWeek.value?.includes(RRule.FR)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.FR, checked);
          }}
          aria-label={t`Friday`}
          id={`schedule-days-of-week-fri-${id}`}
          ouiaId={`schedule-days-of-week-fri-${id}`}
          name="daysOfWeek"
        />
        <Checkbox
          label={t`Sat`}
          isChecked={daysOfWeek.value?.includes(RRule.SA)}
          onChange={(checked) => {
            updateDaysOfWeek(RRule.SA, checked);
          }}
          aria-label={t`Saturday`}
          id={`schedule-days-of-week-sat-${id}`}
          ouiaId={`schedule-days-of-week-sat-${id}`}
          name="daysOfWeek"
        />
      </GroupWrapper>
    </>
  );
}
export default WeekdayForm;
