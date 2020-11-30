import React, { useEffect, useState } from 'react';
import './profile.pcss';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar } from '../../components/sidebar';
import Menu from '../../components/menu';
import Grades from '../../components/grades';
import Visits from '../../components/visits';
import Faculties from '../../components/faculties';
import Profilecontent from '../../components/profileContent';
import Myfinances from '../../components/myfinances';
import Additionalcourses from '../../components/additional_courses';
import Timetable from '../../components/timetable';
import { MyMessages } from '../../components/messages';
import { Announcements } from '../../components/announcements';
import { Centers } from '../../components/centers';
import { Questionnaire } from '../../components/questionnaire';
import { FeedbackGen } from '../../components/feedbackGen';
import { Blanks } from '../../components/blanks';
import { Backgroundcontainer } from '../../components/backgroundcontainer';
import { Backgrounds } from '../../components/backgrounds';
import Settings from '../../components/settings';
import { Interships } from '../../components/internships';
import { Sertificates } from '../../components/sertificates';
import { DigitalServices } from '../../components/digitalservices';
import { WidthGetJobNews } from '../../highOrderComponents/asyncGetJobNews';
import { asyncGetUserData } from '../../store/middleware/asyncGetUser';
import { setMenuVisible, logOutPage } from '../../store/reducers/mainPageReducer';
import { logOutProfile } from '../../store/reducers/profilePageReducer';
import { logOutGrades } from '../../store/reducers/gradesPageReducer';
import { Timetableteach } from '../../components/timetableteacher';

const Profile = (props) => {
  useEffect(() => {
    props.asyncGetUserData(token, user); /* eslint no-use-before-define: "off" */
  }, []);

  const [fixPosition, setFixPosition] = useState(false);

  const token = window.localStorage.getItem('polyUser');
  const user = props.match.params.user; /* eslint prefer-destructuring:"off" */

  if (token === 'null' || token == null) {
    return <Redirect to='/' />;
  }
  // Если учитель
  if (props.isTeacher) {
    return (
      <div className={`Profile Profile_fixpos_${fixPosition} `}>
        {/* Сайдбар */}
        <Sidebar user={user}
          activateMenu={props.setMenuVisible}
        />

        {/* Боковое выпадающее меню */}
        <Menu state={props.state}
          activateMenu={props.setMenuVisible}
          user={user}
        />
        {/* Профиль */}
        <Route exact
          path='/:user'
          render={() => (
            <Backgroundcontainer
              page={Profilecontent}
              menuVisible={props.menuVisible}
              background={Backgrounds.GreenBlue}
              user={user}
            />
          )}
        />

        {/* Расписание преподавателя */}
        <Route exact
          path='/:user/timetable'
          render={() => (
            <Backgroundcontainer
              page={Timetableteach}
              menuVisible={props.menuVisible}
              background={Backgrounds.GreenBlue}
              user={user}
            />
          )}
        />

        {/* Настройки */}
        <Route exact
          path='/:user/settings'
          render={() => (
            <Backgroundcontainer
              page={Settings}
              menuVisible={props.menuVisible}
              background={Backgrounds.Blue}
              fixPosition={fixPosition}
              setFixPosition={setFixPosition}
            />
          )}
        />

        {/* Образовательные программы */}
        <Route exact
          path='/:user/faculties'
          render={() => (
            <Backgroundcontainer
              page={Faculties}
              menuVisible={props.menuVisible}
              background={Backgrounds.GreenBlue}
            />
          )}
        />

        {/* Анонсы научных мероприятий */}
        <Route exact
          path='/:user/announcements'
          render={() => (
            <Backgroundcontainer page={Announcements}
              menuVisible={props.menuVisible}
              background={Backgrounds.BlueBig}
            />
          )}
        />

        {/* Мои финансы */}
        < Route exact
          path='/:user/myfinances'
          render={() => (
            <Backgroundcontainer
              page={Myfinances}
              menuVisible={props.menuVisible}
              background={Backgrounds.Blue}
            />
          )}
        />

        {/* Сообщения */}
        <Route exact
          path='/:user/messages'
          render={() => (
            <Backgroundcontainer
              page={MyMessages}
              menuVisible={props.menuVisible}
              background={Backgrounds.GreenBlue}
            />
          )}
        />

        {/* Бланки документов */}
        <Route exact
          path='/:user/blanks'
          render={() => (
            <Backgroundcontainer
              page={Blanks}
              menuVisible={props.menuVisible}
              background={Backgrounds.BlueBig}
            />
          )}
        />

        {/* Цифровые сервисы */}
        <Route exact
          path='/:user/digitalservices'
          render={() => (
            <Backgroundcontainer
              page={DigitalServices}
              menuVisible={props.menuVisible}
              background={Backgrounds.Blue}
            />
          )}
        />

        {/* Форма обратной связи */}
        <Route exact
          path='/:user/feedback'
          render={() => (
            <Backgroundcontainer
              page={FeedbackGen}
              menuVisible={props.menuVisible}
              background={Backgrounds.BlueBig}
            />
          )}
        />
      </div>
    );
  }
  // Если ученик
  return (
    <div className={`Profile Profile_fixpos_${fixPosition} `}>
      {/* Сайдбар */}
      <Sidebar user={user}
        activateMenu={props.setMenuVisible}
      />

      {/* Боковое выпадающее меню */}
      <Menu state={props.state}
        activateMenu={props.setMenuVisible}
        user={user}
      />
      {/* Профиль */}
      <Route exact
        path='/:user'
        render={() => (
          <Backgroundcontainer
            page={Profilecontent}
            menuVisible={props.menuVisible}
            background={Backgrounds.BlueUp}
            user={user}
          />
        )}
      />
      {/* Настройки */}
      <Route exact
        path='/:user/settings'
        render={() => (
          <Backgroundcontainer
            page={Settings}
            menuVisible={props.menuVisible}
            background={Backgrounds.BlueUp}
            fixPosition={fixPosition}
            setFixPosition={setFixPosition}
          />
        )}
      />

      {/* Успеваемость */}
      <Route exact
        path='/:user/performance'
        render={() => (
          <Backgroundcontainer
            page={Grades}
            menuVisible={props.menuVisible}
            background={Backgrounds.BlueUp}
          />
        )}
      />

      {/* Расписание */}
      <Route exact
        path='/:user/timetable'
        render={() => (
          <Backgroundcontainer
            page={Timetable}
            menuVisible={props.menuVisible}
            background={Backgrounds.GreenBlue}
          />
        )}
      />

      {/* Посещения по физкультуре */}
      <Route exact
        path='/:user/visits'
        render={() => (
          <Backgroundcontainer
            page={Visits}
            menuVisible={props.menuVisible}
            background={Backgrounds.GreenBlue}
          />
        )}
      />

      {/* Образовательные программы */}
      <Route exact
        path='/:user/faculties'
        render={() => (
          <Backgroundcontainer
            page={Faculties}
            menuVisible={props.menuVisible}
            background={Backgrounds.GreenBlue}
          />
        )}
      />

      {/* Дополнительные курсы */}
      <Route exact
        path='/:user/additional_courses'
        render={() => (
          <Backgroundcontainer page={Additionalcourses}
            menuVisible={props.menuVisible}
            background={Backgrounds.YellowLightYellow}
            bgDefault='Darkblue'
          />
        )}
      />

      {/* Трудоустройство */}
      <Route exact
        path='/:user/practic'
        render={() => (
          <Backgroundcontainer
            page={WidthGetJobNews}
            menuVisible={props.menuVisible}
            background={Backgrounds.Blue}
          />
        )}
      />

      {/* Международные стажировки */}
      <Route exact
        path='/:user/internship'
        render={() => (
          <Backgroundcontainer
            page={Interships}
            menuVisible={props.menuVisible}
            background={Backgrounds.CurveOrange}
          />
        )}
      />

      {/* Мои финансы */}
      < Route exact
        path='/:user/myfinances'
        render={() => (
          <Backgroundcontainer
            page={Myfinances}
            menuVisible={props.menuVisible}
            background={Backgrounds.Blue}
          />
        )}
      />

      {/* Справки и заявления */}
      <Route exact
        path='/:user/certificates'
        render={() => (
          <Backgroundcontainer
            page={Sertificates}
            menuVisible={props.menuVisible}
            background={Backgrounds.Blue}
          />
        )}
      />

      {/* Сообщения */}
      <Route exact
        path='/:user/messages'
        render={() => (
          <Backgroundcontainer
            page={MyMessages}
            menuVisible={props.menuVisible}
            background={Backgrounds.GreenBlue}
          />
        )}
      />

      {/* Центры по работе со студентами */}
      <Route exact
        path='/:user/centers'
        render={() => (
          <Backgroundcontainer
            page={Centers}
            menuVisible={props.menuVisible}
            background={Backgrounds.BlueBig}
          />
        )}
      />

      {/* Анкета для оценки образовательного процесса */}
      <Route exact
        path='/:user/questionnaire'
        render={() => (
          <Backgroundcontainer
            page={Questionnaire}
            menuVisible={props.menuVisible}
            background={Backgrounds.Blue}
          />
        )}
      />

      {/* Форма обратной связи */}
      <Route exact
        path='/:user/feedback'
        render={() => (
          <Backgroundcontainer
            page={FeedbackGen}
            menuVisible={props.menuVisible}
            background={Backgrounds.BlueBig}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  state,
  menuVisible: state.mainPage.pagesState.menuVisible,
  login: state.mainPage.user.login,
  isTeacher: state.mainPage.user.isTeacher,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetUserData: (token, name) => {
    dispatch(asyncGetUserData(token, name));
  },
  setMenuVisible: () => {
    dispatch(setMenuVisible());
  },
  logOut: () => {
    dispatch(logOutProfile());
    dispatch(logOutPage());
    dispatch(logOutGrades());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
