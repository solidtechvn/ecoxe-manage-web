import { CCard, CCardBody, CCardHeader, CCol, CMultiSelect, CRow } from '@coreui/react-pro';
import { Option } from '@coreui/react-pro/dist/components/multi-select/CMultiSelect';
import React from 'react';
import DocsExample from '../../../containers/DocsExample';

const options: Option[] = [
  {
    value: 0,
    text: 'Angular',
  },
  {
    value: 1,
    text: 'Bootstrap',
  },
  {
    value: 2,
    text: 'React.js',
  },
  {
    value: 3,
    text: 'Vue.js',
  },
  {
    text: 'backend',
    value: 'backend',
    label: 'backend',
    options: [
      {
        value: 4,
        text: 'Django',
      },
      {
        value: 5,
        text: 'Laravel',
      },
      {
        value: 6,
        text: 'Node.js',
      },
    ],
  },
];

const MultiSelect = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Multi Select</strong> <small>Default</small>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="forms/multi-select">
              <CMultiSelect options={options} />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MultiSelect;
