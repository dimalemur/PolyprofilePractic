import React from 'react';
import { connect } from 'react-redux';
import { Pagetitle } from '../pagetitle';
import { Myfinancesinfoblock } from '../myfinancesinfoblock';
import './myfinances.pcss';

const Changebaritem = (props) => {
  const { id } = props;
  const { name } = props;
  const { firstItem } = props;
  return (
    <div className={`Changebar-Item Changebar-Item_${(id === props.changededMode) ? 'active' : ''} Item_isfirst_${firstItem}`}
      onClick={(event) => { props.setChangededMode(id); }}
    >
      {name}
    </div>
  );
};

const list = [
  { name: 'Общежитие', firstItem: true },
  { name: 'Обучение', firstItem: false },
  { name: 'Бланки для заполнения', firstItem: false },
];

const Myfinances = (props) => {
  const { Regnavbar } = props;
  const [changededMode, setChangededMode] = React.useState(0);
  return (
    <div className='Myfinances'>
      <Regnavbar />

      <div className='Myfinances-Content'>

        <Pagetitle name='Сведения об оплатах' />

        <div className='Myfinances-Info'>
          <div className='Myfinances-Changebar Changebar'>
            {list.map((el, id) => (
              <Changebaritem key={id}
                id={id}
                name={el.name}
                firstItem={el.firstItem}
                setChangededMode={setChangededMode}
                changededMode={changededMode}
              />
            ))
            }
          </div>
        </div>

        <Myfinancesinfoblock changededMode={changededMode} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Myfinances);
