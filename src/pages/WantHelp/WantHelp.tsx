import { NavLink } from "react-router-dom";

export const WantHelp = () => {
  return (
    <div>
      <h1>Варианты помощи приюту «Тёплые лапки»</h1>
      <h2>Денежная помощь:</h2>
      <ul>
        <li>
          🌀 Карта Сбербанка 4276 6000 5520 4032 (Наталья Алексеевна Д.),
          привязанный номер телефона 8-981-895-66-52
        </li>
        <li>
          🌀 Для помощи из-за границы:{" "}
          <NavLink to="https://www.donationalerts.com/r/tioplyelapki_">
            donationalerts
          </NavLink>
        </li>
      </ul>
      <h2>Стать волонтером</h2>
      <h2>Взять на передержку</h2>
    </div>
  );
};
