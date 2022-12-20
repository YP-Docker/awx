import {
  Button,
  Switch,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from '@patternfly/react-core';
import { PencilAltIcon } from '@patternfly/react-icons';
import React, { useState } from 'react';
import { t } from '@lingui/macro';
import {
  TableComposable,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
} from '@patternfly/react-table';

import { useField } from 'formik';

function FrequenciesList({ openWizard }) {
  const [isShowingRules, setIsShowingRules] = useState(true);
  const [frequencies] = useField('frequencies');
  const list = (freq) => (
    <Tr>
      <Td>{freq.frequency}</Td>
      <Td>{freq.rrule}</Td>
      <Td>{t`End`}</Td>
      <Td>
        <Button
          variant="plain"
          aria-label={t`Click to toggle default value`}
          ouiaId={freq ? `${freq}-button` : 'new-freq-button'}
          onClick={() => {
            // open wizard with fields populated
          }}
        >
          <PencilAltIcon />
        </Button>
      </Td>
    </Tr>
  );
  return (
    <>
      <Toolbar>
        <ToolbarContent>
          <ToolbarItem>
            <Button
              onClick={() => {
                openWizard(true);
              }}
              variant="secondary"
            >
              {isShowingRules ? t`Add Occurances` : t`Add Exception`}
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Switch
              label={t`Occurances`}
              labelOff={t`Exceptions`}
              isChecked={isShowingRules}
              onChange={(isChecked) => {
                setIsShowingRules(isChecked);
              }}
            />
          </ToolbarItem>
        </ToolbarContent>
      </Toolbar>
      <div css="overflow: auto">
        <TableComposable aria-label={t`Frequencies`} ouiaId="frequencies-list">
          <Thead>
            <Tr>
              <Th>{t`Frequency`}</Th>
              <Th>{t`RRule`}</Th>
              <Th>{t`Ending`}</Th>
              <Th>{t`Actions`}</Th>
            </Tr>
          </Thead>
          <Tbody>{frequencies.value.map((freq, i) => list(freq, i))}</Tbody>
        </TableComposable>
      </div>
    </>
  );
}

export default FrequenciesList;
