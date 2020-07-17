import React from 'react';
import './timetableteacher.pcss';
import { connect } from 'react-redux';
import Select from 'react-select';
import Regnavbar from '../regnavbar';
import { Pagetitle } from '../pagetitle';

// ---------Заглушка для курсов ---------------//
const courses = [1, 2, 3, 4, 5, 6, 7, 8];

const coursesText = courses.map((course, i) => (
  { value: course, label: `${course} семестр` }
));
coursesText.push({ value: 0, label: 'Все' });

const Timetableteacher = (props) => {
  const [selectedMode, setSelectedMode] = React.useState(1);
  const [changedSemester, setChangedSemester] = React.useState(0);

  const handleChangeCourse = (event) => {
    if (changedSemester !== event.value) {
      setChangedSemester(event.value);
    }
  };
  return (
    <div className='Timetableteacher'>
      <Regnavbar />

      <div className='Timetableteacher-Content'>
        <Pagetitle name={'Расписания'} />

        <div className='Uptable Timetableteacher-Uptable'>
          <div className='Uptable-Changemode'>
            <div className='Changemode-Text'>
              Вы выбрали:
            </div>
            <div className='Changemode-Inp_lh'>
              <Select
                onChange={handleChangeCourse}
                options={coursesText}
                styles={{
                  valueContainer: (base) => ({
                    ...base,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }),
                  indicatorsContainer: () => ({
                    padding: '0',
                  }),
                  indicatorSeparator: () => ({}),
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: '#F79329',
                    '&:hover': {
                      color: '#F79329',
                    },
                  }),
                  control: (base) => ({
                    ...base,
                    borderColor: 'gray',
                    height: '25px',
                    'min-height': '25px',

                    '&:hover': {},
                  }),
                }}
                value={coursesText[changedSemester - 1]}
                isSearchable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Timetableteach = connect((state) => ({}), (dispatch) => ({}))(Timetableteacher);
