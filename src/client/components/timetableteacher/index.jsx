import React from 'react';
import './timetableteacher.pcss';
import { connect } from 'react-redux';
import Select from 'react-select';
import Regnavbar from '../regnavbar';
import { Pagetitle } from '../pagetitle';

// ---------Заглушка для курсов ---------------//
const texts = ['Моё расписание', 'Расписание занятий', 'Расписание зачетов и экзаменов'];

const coursesText = texts.map((text, i) => (
  { value: i, label: text }
));

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
                  dropdownIndicator: (base) => ({
                    ...base,
                    color: '#F79329',
                    padding: '0',
                    '&:hover': {
                      color: '#F79329',
                    },
                  }),
                  indicatorsContainer: (base) => ({
                    padding: '0',
                  }),
                  control: (base) => ({
                    ...base,
                    borderColor: 'gray',
                    height: '30px',
                    width: '223px',
                    'min-height': '30px',

                    '&:hover': {},
                  }),
                }}
                value={coursesText[changedSemester]}
                isSearchable={false}
              />
            </div>
          </div>
          {/* --------------------------------------------------------------------------- */}
          <div className='Uptable-Table'>
            <div className='Cell Table-Cell_lightgray'></div>
            <div className='Cell Table-Cell_lightgreen'>
              Понедельник
            </div>
            <div className='Cell Table-Cell_lightgreen'>
              Вторник
            </div>
            <div className='Cell Table-Cell_lightgreen'>
              Среда
            </div>
            <div className='Cell Table-Cell_lightgreen'>
              Четверг
            </div>
            <div className='Cell Table-Cell_lightgreen'>
              Пятница
            </div>
            <div className='Cell Table-Cell_lightgreen'>
              Суббота
            </div>
            <div className='Cell Table-Cell_lightorange'>
              9:00 - 10:30
            </div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {/* --------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------- */}

            <div className='Cell Table-Cell_orange'>
              10:40 - 12:10
            </div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div></div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div></div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            {/* --------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------- */}

            <div className='Cell Table-Cell_lightorange'>
              12:20 - 13:50
            </div>
            <div></div>
            <div className='Cell Table-Cell_rose'>
              <div className='Cell-Title'>
                Алгоритмизация и программирование
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            {/* --------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------- */}

            <div className='Cell Table-Cell_orange'>
              14:30 - 16:00
            </div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div></div>
            <div className='Cell Table-Cell_lightblue'>
              <div className='Cell-Title'>
                Программная инженерия
              </div>
              <div className='Cell-Content'>
                Лаб. работа
                гр. 171-335
                ауд. Н-407
              </div>
              <div className='Cell-Date'>
                12 сен - 26 дек
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>

            {/* --------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------- */}

            <div className='Cell Table-Cell_lightorange'>
              16:10 - 17:40
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {/* --------------------------------------------------------------------------- */}

            {/* --------------------------------------------------------------------------- */}

            <div className='Cell Table-Cell_orange'>
              17:50 - 19:20
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            {/* --------------------------------------------------------------------------- */}
            {/* --------------------------------------------------------------------------- */}

            <div className='Cell Table-Cell_lightorange'>
              19:30 - 21:00
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Timetableteach = connect((state) => ({}), (dispatch) => ({}))(Timetableteacher);
