import scss from "./GetPet.module.scss";

export const GetPet = () => {
  return (
    <div>
      <p>
        <strong>Условия передачи питомца: </strong>
        <ul>
          <li className={scss.powListItem}>Договор о передаче животного</li>
          <li className={scss.powListItem}>
            Оплата дороги до СПБ при получении с хозяина(уточняйте)
          </li>
          <li className={scss.powListItem}>
            Предварительное общение с нашим кинологом Кинолог Вам подскажет и
            поможет понять подойдёт ли собачка в Вашу семью, а так же ответит на
            волнующие вопросы.
          </li>
        </ul>
      </p>
    </div>
  );
};
