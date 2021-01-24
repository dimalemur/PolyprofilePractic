import { setTimeTable } from '../reducers/timetablePageReducer';

const raspDmami = {
  "1": {
    "1": [{
      "sbj": "Математическая логика и теория алгоритмов в программировании",
      "teacher": "Набебин Алексей Александрович",
      "dts": "14 Сен - 17 Янв", "df": "2020-09-14",
      "dt": "2021-01-17",
      "auditories": [{ "title": "📷 Webinar", "color": "#00F" }],
      "type": "Лекция", "week": "", "fm": false, "sm": false, "no": true, "wl": null
    }],
    "2": [{
      "sbj": "Математическая логика и теория алгоритмов в программировании",
      "teacher": "Набебин Алексей Александрович",
      "dts": "14 Сен - 17 Янв",
      "df": "2020-09-14",
      "dt": "2021-01-17",
      "auditories": [{
        "title": "📷 Webinar", "color": "#00F"
      }],
      "type": "Практика", "week": "", "fm": false, "sm": false, "no": true, "wl": null
    }],
    "3": [
      {
        "sbj": "Информационная безопасность",
        "teacher": "Рагозин Юрий Николаевич",
        "dts": "14 Сен - 15 Ноя",
        "df": "2020-09-14",
        "dt": "2020-11-15",
        "auditories": [{ "title": "📷 Webinar", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      },
      {
        "sbj": "Информационная безопасность",
        "teacher": "Рагозин Юрий Николаевич",
        "dts": "16 Ноя - 17 Янв",
        "df": "2020-11-16",
        "dt": "2021-01-17",
        "auditories": [{ "title": "📷 Webinar", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": false, "sm": true, "no": false, "wl": null
      }],
    "4": [
      {
        "sbj": "Сетевое программирование",
        "teacher": "Жуплев Антон Сергеевич, Логачёв Максим Сергеевич",
        "dts": "14 Сен - 14 Ноя",
        "df": "2020-09-14",
        "dt": "2020-11-14",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }], "type": "Лекция", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Сетевое программирование", "teacher": "Жуплев Антон Сергеевич, Логачёв Максим Сергеевич", "dts": "16 Ноя - 17 Янв", "df": "2020-11-16", "dt": "2021-01-17", "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лекция", "week": "", "fm": false, "sm": true, "no": false, "wl": null
      }],
    "5": [],
    "6": [],
    "7": []
  },
  "2": {
    "1": [
      {
        "sbj": "Разработка технического задания",
        "teacher": "Кулибаба Ирина Викторовна, Смирнова Юлия Владимировна",
        "dts": "14 Сен - 29 Сен",
        "df": "2020-09-14",
        "dt": "2020-09-29",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лекция", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Разработка технического задания",
        "teacher": "Кулибаба Ирина Викторовна, Смирнова Юлия Владимировна",
        "dts": "01 Окт - 17 Янв",
        "df": "2020-10-01",
        "dt": "2021-01-17",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лекция", "week": "", "fm": false, "sm": true, "no": false, "wl": null
      }],
    "2": [
      {
        "sbj": "Требования ГОСТ в КИС",
        "teacher": "Чернова Вера Михайловна",
        "dts": "14 Сен - 17 Янв",
        "df": "2020-09-14",
        "dt": "2021-01-17",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лекция", "week": "", "fm": false, "sm": false, "no": true, "wl": null
      }],
    "3": [
      {
        "sbj": "Информационная безопасность",
        "teacher": "Рагозин Юрий Николаевич",
        "dts": "14 Сен - 17 Янв",
        "df": "2020-09-14",
        "dt": "2021-01-17",
        "auditories": [{ "title": "📷 Webinar", "color": "#00F" }],
        "type": "Лекция", "week": "", "fm": false, "sm": false, "no": true, "wl": null
      }],
    "4": [
      {
        "sbj": "Информационная безопасность",
        "teacher": "Рагозин Юрий Николаевич",
        "dts": "14 Сен - 15 Ноя",
        "df": "2020-09-14",
        "dt": "2020-11-15",
        "auditories": [{ "title": "📷 Webinar", "color": "#00F" }],
        "type": "Практика", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Информационная безопасность",
        "teacher": "Рагозин Юрий Николаевич",
        "dts": "16 Ноя - 17 Янв",
        "df": "2020-11-16",
        "dt": "2021-01-17",
        "auditories": [{ "title": "📷 Webinar", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": false, "sm": true, "no": false, "wl": null
      }],
    "5": [{
      "sbj": "Сетевое программирование",
      "teacher": "Жуплев Антон Сергеевич, Логачёв Максим Сергеевич",
      "dts": "14 Дек - 17 Янв",
      "df": "2020-12-14",
      "dt": "2021-01-17",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Лаб. работа", "week": "", "fm": false, "sm": true, "no": false, "wl": null
    }],
    "6": [],
    "7": []
  },
  "3": {
    "1": [
      {
        "sbj": "Разработка технического задания",
        "teacher": "Кулибаба Ирина Викторовна, Смирнова Юлия Владимировна",
        "dts": "14 Сен - 30 Сен",
        "df": "2020-09-14",
        "dt": "2020-09-30",
        "auditories": [{ "title": "💻 Webex", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Разработка технического задания",
        "teacher": "Кулибаба Ирина Викторовна, Смирнова Юлия Владимировна",
        "dts": "01 Окт - 17 Янв",
        "df": "2020-10-01",
        "dt": "2021-01-17",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": false, "sm": true, "no": false, "wl": null
      }],
    "2":
      [{
        "sbj": "Требования ГОСТ в КИС",
        "teacher": "Чернова Вера Михайловна",
        "dts": "14 Сен - 30 Сен",
        "df": "2020-09-14",
        "dt": "2020-09-30",
        "auditories": [{ "title": "💻 Webex", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Требования ГОСТ в КИС",
        "teacher": "Чернова Вера Михайловна",
        "dts": "01 Окт - 15 Ноя",
        "df": "2020-10-01",
        "dt": "2020-11-15",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": false, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Требования ГОСТ в КИС",
        "teacher": "Чернова Вера Михайловна",
        "dts": "16 Ноя - 17 Янв",
        "df": "2020-11-16",
        "dt": "2021-01-17",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Лаб. работа", "week": "", "fm": false, "sm": true, "no": false, "wl": null
      }],
    "3": [],
    "4": [{
      "sbj": "Элективные дисциплины по физической культуре и спорту",
      "teacher": "Румянцева Светлана Владимировна",
      "dts": "14 Сен - 30 Сен",
      "df": "2020-09-14",
      "dt": "2020-09-30",
      "auditories": [{ "title": "Зал 4", "color": "#b36666" }],
      "type": "Практика", "week": "", "fm": true, "sm": false, "no": false, "wl": null
    }, {
      "sbj": "Элективные дисциплины по физической культуре и спорту",
      "teacher": "Румянцева Светлана Владимировна",
      "dts": "01 Окт - 17 Янв",
      "df": "2020-10-01",
      "dt": "2021-01-17",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Практика", "week": "", "fm": false, "sm": true, "no": false, "wl": null
    }],
    "5": [],
    "6": [],
    "7": []
  },
  "4": {
    "1": [
      {
        "sbj": "Технический перевод",
        "teacher": "Молодцова Варвара Алексеевна, Баутина Екатерина Николаевна, Кульков Даниил Андреевич",
        "dts": "14 Сен - 30 Сен",
        "df": "2020-09-14",
        "dt": "2020-09-30",
        "auditories": [{ "title": "В406", "color": "#7aa0e7" }, { "title": "В502", "color": "#7aa0e7" }, { "title": "Н218", "color": "#7aa0e7" }],
        "type": "Практика", "week": "", "fm": true, "sm": false, "no": false, "wl": null
      }, {
        "sbj": "Технический перевод",
        "teacher": "Молодцова Варвара Алексеевна, Баутина Екатерина Николаевна, Кульков Даниил Андреевич",
        "dts": "01 Окт - 13 Дек",
        "df": "2020-10-01",
        "dt": "2020-12-13",
        "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
        "type": "Практика", "week": "", "fm": false, "sm": false, "no": false, "wl": null
      }],
    "2": [{
      "sbj": "Технический перевод",
      "teacher": "Молодцова Варвара Алексеевна, Баутина Екатерина Николаевна, Кульков Даниил Андреевич",
      "dts": "14 Сен - 30 Сен",
      "df": "2020-09-14",
      "dt": "2020-09-30",
      "auditories": [{ "title": "В406", "color": "#7aa0e7" }, { "title": "В501", "color": "#7aa0e7" }, { "title": "В502", "color": "#7aa0e7" }],
      "type": "Практика", "week": "", "fm": true, "sm": false, "no": false, "wl": null
    }, {
      "sbj": "Технический перевод",
      "teacher": "Молодцова Варвара Алексеевна, Баутина Екатерина Николаевна, Кульков Даниил Андреевич",
      "dts": "01 Окт - 13 Дек",
      "df": "2020-10-01",
      "dt": "2020-12-13",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Практика", "week": "", "fm": false, "sm": false, "no": false, "wl": null
    }],
    "3": [{
      "sbj": "Сетевое программирование",
      "teacher": "Жуплев Антон Сергеевич, Баринов Владимир Романович",
      "dts": "14 Сен - 30 Сен",
      "df": "2020-09-14",
      "dt": "2020-09-30",
      "auditories": [{ "title": "Н516", "color": "#7aa0e7" }],
      "type": "Лаб. работа", "week": "", "fm": true, "sm": false, "no": false, "wl": null
    }, {
      "sbj": "Сетевое программирование",
      "teacher": "Жуплев Антон Сергеевич, Баринов Владимир Романович",
      "dts": "01 Окт - 13 Дек",
      "df": "2020-10-01",
      "dt": "2020-12-13",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Лаб. работа", "week": "", "fm": false, "sm": false, "no": false, "wl": null
    }],
    "4": [],
    "5": [],
    "6": [],
    "7": []
  },
  "5": {
    "1": [],
    "2": [{
      "sbj": "Управление программными проектами",
      "teacher": "Жуплев Антон Сергеевич",
      "dts": "14 Сен - 15 Ноя",
      "df": "2020-09-14",
      "dt": "2020-11-15",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Лекция", "week": "", "fm": true, "sm": false, "no": false, "wl": null
    }],
    "3": [{
      "sbj": "Управление программными проектами",
      "teacher": "Жуплев Антон Сергеевич, Логачёв Максим Сергеевич",
      "dts": "14 Сен - 15 Ноя",
      "df": "2020-09-14",
      "dt": "2020-11-15",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Лаб. работа", "week": "", "fm": true, "sm": false, "no": false, "wl": null
    }],
    "4": [],
    "5": [],
    "6": [],
    "7": []
  },
  "6": {
    "1": [],
    "2": [],
    "3": [{
      "sbj": "Элективные дисциплины по физической культуре и спорту",
      "teacher": "Румянцева Светлана Владимировна",
      "dts": "14 Сен - 30 Сен",
      "df": "2020-09-14",
      "dt": "2020-09-30",
      "auditories": [{ "title": "Зал 4", "color": "#b36666" }],
      "type": "Практика", "week": "", "fm": true, "sm": false, "no": false, "wl": null
    }, {
      "sbj": "Элективные дисциплины по физической культуре и спорту",
      "teacher": "Румянцева Светлана Владимировна",
      "dts": "01 Окт - 17 Янв",
      "df": "2020-10-01",
      "dt": "2021-01-17",
      "auditories": [{ "title": "<a href=\"https://lms.mospolytech.ru/\" target=\"_blank\">🏠 Обучение в LMS</a>", "color": "#00F" }],
      "type": "Практика", "week": "", "fm": false, "sm": true, "no": false, "wl": null
    }],
    "4": [],
    "5": [],
    "6": [],
    "7": []
  }
}

export const asyncGetTimetable = (group) => (dispatch) => {
  dispatch(setTimeTable(raspDmami))
};
