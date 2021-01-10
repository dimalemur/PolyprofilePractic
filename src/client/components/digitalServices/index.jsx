/* eslint-disable jsx-quotes */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './digitalservices.pcss';
import { Modalservices } from '../modalservices';
import Regnavbar from '../regnavbar';
import searchIcon from '../../../source/images/icons/search.png';

const Listitemsrt = (props) => (
  <div className="Listitemsrt">
    <span onClick={() => {
      props.setOpenDialog(true);
    }}
    >
      {props.name}
    </span>
  </div>
);

const srtlist = {
  it: ['Получение нового компьютерного оборудования',
    'Подключение компьютера, МФУ, телефона, WiFi',
    'Обслуживание принтеров, МФУ',
    'Вопрос по СЭД Directum и 1С',
    'Вопрос по Личному кабинету',
    'Прочее IT-обслуживание'],
  sert: [
    'Справка с места работы',
    'Справка на визу',
    'Справка о стаже работы',
    'Справка о количестве неиспользованных дней отпуска',
    'Справка о работе на условиях внешнего совместительства для внесения стажа в трудовую книжку',
    'Справка по форме 2-НДФЛ',
    'Справка о выплате (не выплате) единовременного пособия на рождение ребенка',
    'Справка об отпуске по уходу за ребенком до 1,5 и 3 лет',
    'Справка о ежемесячных выплатах сотрудника, находящегося в отпуске по уходу за ребенком (декрет)',
  ],
  cop: [
    'Копия трудовой книжки',
    'Копии документов из личного дела'],
};

export const DigitalServices = (props) => {
  const [isVisibleHistoryReq, setVisibleHistoryReq] = React.useState(false);
  const [isVisibleHelplist, setVisibleHelplist] = React.useState(false);
  const [isOpenDialog, setOpenDialog] = React.useState(false);
  return (
    <div className='Services'>
      <Regnavbar />
      <div className="Services-Inner">
        <div className="Services-Title Title">
          Цифровые сервисы
        </div>

        <div className="Services-Content Content_white ">

          <div className="ContentDS-Helpline Text_orange ContentDS-Header"
            onClick={() => {
              setVisibleHelplist(!isVisibleHelplist);
            }}
          >
            Как этим пользоваться?
          </div>

          <div className={`Services-Helplist Helplist-Isvisible_${isVisibleHelplist}`}>
            <div className="Helplist-Instruction">
              <div className='Helplist-Item'>1) Кликните на необходимый вид документа</div>
              <div className='Helplist-Item'>2) Заполните форму на сайте</div>
              <div className='Helplist-Item'>
                3) Отследите готовность документа в разделе “История запросов”. Средний срок готовности
                одного документа составляет 5-6 дней.</div>
            </div>
            <button className='Services-Button Button-White' onClick={() => {
              setVisibleHelplist(!isVisibleHelplist);
            }}
            >
              Мне все понятно!
            </button>
          </div>

          <form>
            <div className="Searchdoc Services-Searchdoc ContentDS-Header">
              <input className="Searchdoc-Inp" type="text" placeholder='Введите название документа или ключевые слова' />
              <button className="Searchdoc-Btn"><img src={searchIcon} alt="" /></button>
            </div>
          </form>
          <div className="Services-Cards">
            <div className="CardsDS-Rb DSBorder_yellow">
              <div className="CardsDS-Title DSBg_yellow">
                По вопросам IT-обслуживания
              </div>

              <div className="CardsDS-List">

                {srtlist.it.map((el, i) => (
                  <Listitemsrt key={i} name={el} setOpenDialog={setOpenDialog} />
                ))}
              </div>
            </div>
            <div className="CardsDS-Rb DSBorder_lightgreen">
              <div className="CardsDS-Title DSBg_lightgreen">
                Получение справок
              </div>
              <div className="CardsDS-List">
                {srtlist.sert.map((el, i) => (
                  <Listitemsrt key={i} name={el} setOpenDialog={setOpenDialog} />
                ))}
              </div>
            </div>

            <div className="CardsDS-Rb DSBorder_lightblue">
              <div className="CardsDS-Title DSBg_lightblue">
                Получение копий
              </div>
              <div className="CardsDS-List">
                {srtlist.cop.map((el, i) => (
                  <Listitemsrt key={i} name={el} setOpenDialog={setOpenDialog} />
                ))}
              </div>
            </div>


          </div>

          <div className="ContentDS-Helpline Text_blue ContentDS-Header" onClick={() => { setVisibleHistoryReq(!isVisibleHistoryReq); }}>
            История запросов
          </div>

          <div className={`ContentDS-Table TableDS-Isvisible_${isVisibleHistoryReq}`}>

            <div className="HistoryCardDS">
              <div className="History-Date">
                12.03.2020 13:41
              </div>
              <div className="History-Titles">
                <p>Номер заявки:</p>
                <p>Тема обращения:</p>
                <p>Текст заявки:</p>
                <p>Подразделение:</p>
              </div>
              <div className="History-Info">
                <p>1742</p>
                <p>Справка с места работы</p>
                <p>
                  Подразделение: Центр разработки и поддержки информационных систем <br />
                  Должность: начальник центра <br />
                  Моб. телефон: +7 (969) 343-99-77 <br />
                  Площадка: Б. Семёновская, д. 38 <br />
                  Номер аудитории: A-424 <br />
                  Заявка: Хочу получить справку для личных нужд <br />
                  Способ получения: МФЦ Большая Семеновская, 38, ауд.В107 <br />
                </p>
                <p>Отдел кадров, вн.тел 1130</p>
              </div>
            </div>

          </div>

        </div>

        <Modalservices isOpenDialog={isOpenDialog} setOpenDialog={setOpenDialog} />

      </div >
    </div >
  );
};
