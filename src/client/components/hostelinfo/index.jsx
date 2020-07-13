import React from 'react';
import './hostelinfo.pcss';
import { connect } from 'react-redux';
import qr from '../../../source/images/qr.png';
import { setPayments, setActiveMounth, setActiveDay } from '../../store/reducers/myfinancesPageReducer';
import { payments } from '../../../../preview/moks';

const Pymenttable = (props) => {
  const mounthsSset = new Set();
  const [activeY, setActiveY] = React.useState(null);
  const [activeM, setActiveM] = React.useState('');
  return (
    <div className='Pymenttable'>
      <div className='Pymenttable-Content'>
        <div className='Pymenttable-Table'>
          <div className='Pymenttable-Title'>
            <div className='Pymenttable-Item'>
              Дата оплаты
            </div>
            <div className='Pymenttable-Item'>
              Сумма оплаты
            </div>
            <div className='Pymenttable-Item'>
              Остаток долга
            </div>
          </div>

          <div className='Pymenttable-Payments'>

            {
              props.payments.map((el, i) => (
                <div key={i} className='Payments-Block'>
                  <div className='Block-Title'>
                    {el.year} г.
                  </div>
                  <div className='Block-Content'>
                    {
                      el.payment.map((element) => (
                        <div key={element.balance}
                          className={`Block-String Block-String_${element.isactive}`}
                          onClick={() => {
                            setActiveY(el.year);
                            setActiveM(element.mounth);
                            props.setActiveDay(element.balance);
                          }}
                        >
                          <div className='String-Item Item-Day'>
                            {`${element.day} ${element.mounth}`}
                          </div>
                          <div className='String-Item Item-Pay'>
                            {element.paid} руб.
                              </div>
                          <div className='String-Item Item-Balance'>
                            {element.balance} руб.
                              </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }

          </div>
        </div>
        <div className='Scrollbar Pymenttable-Scrollbar'>
          {
            props.payments.map((el, i) => {
              mounthsSset.clear();
              return (
                <div key={100 - i} className='Scrollbar-Block'>
                  <div className='Scrollbar-Year'>
                    {el.year}
                  </div>
                  {
                    el.payment.map((element) => {
                      if (!mounthsSset.has(element.mounth)) {
                        mounthsSset.add(element.mounth);
                        return (
                          <div key={element.balance - 1}
                            className={`Scrollbar-Mounth Scrollbar-Mounth_${(el.year === activeY && element.mounth === activeM) ? 'active' : ''}`}
                            onClick={() => {
                              props.setActiveMounth(el.year, element.mounth);
                              setActiveY(el.year);
                              setActiveM(element.mounth);
                            }}
                          >
                            {`${element.mounth[0]}${element.mounth[1]}${element.mounth[2]}`}
                          </div>
                        );
                      }
                      return '';
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

const Hostelinfo = (props) => {
  const [isVisibleQr, setVisibleQr] = React.useState(false);
  const { id } = props;
  React.useEffect(() => {
    props.setPayments(payments.reverse());
  }, []);
  return (id !== props.changededMode) ? '' : (
    <div className='Hostelinfo Payment-Content'>
      <div className='Hostelinfo-Title'>
        Договор найма <b>№456654</b> от 24.08.2018
      </div>
      <div className='Hostelinfo-Help'
        onClick={() => { setVisibleQr(!isVisibleQr); }}
      >
        Оплатить ЗАДОЛЖЕННОСТЬ ЧЕРЕЗ QR-CODE CБЕРБАНК.ОНЛАЙН
      </div>

      <div className={`Hostelinfo-Qr Hostelinfo-Qr_${isVisibleQr}`}>
        <img src={qr} alt='Наведите, чтобы оплатить' />
      </div>

      <Pymenttable
        setActiveMounth={props.setActiveMounth}
        setActiveDay={props.setActiveDay}
        payments={props.paymentsData}
      />

    </div>
  );
};

const mapStateToProps = (state) => ({
  paymentsData: state.myfinancesPage.payments,
});

const mapDispatchToProps = (dispatch) => ({
  setPayments: (payment) => {
    dispatch(setPayments(payment));
  },
  setActiveMounth: (year, mounth) => {
    dispatch(setActiveMounth(year, mounth));
  },
  setActiveDay: (balance) => {
    dispatch(setActiveDay(balance));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Hostelinfo);
