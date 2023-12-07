import CardContainer from '../components/CardContainer';
import CreateTodoForm from '../components/CreateTodoForm';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import { useAlert } from '../hooks/useAlert';
import { useModal } from '../hooks/useModal';
import Alert from '../components/Alert';

export default function Home() {
  const { createTodoModal } = useModal();
  const { alert } = useAlert();
  const { show, message } = alert;

  return (
    <>
      <Navbar />
      <main className="flex justify-center py-4">
        <CardContainer />
      </main>
      <Modal modal={createTodoModal} title="Create TO-DO">
        <CreateTodoForm />
      </Modal>
      {show ? <Alert message={message} /> : null}
    </>
  );
}
