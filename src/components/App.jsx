import { Modal } from './Modal/Modal';

export const App = () => {
  return (
    <div>
      <Modal>
        <h2>Заголовок модалки</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          eligendi!
        </p>
        <button type="button">Закрити</button>
      </Modal>
    </div>
  );
};
