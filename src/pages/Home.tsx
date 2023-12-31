import CardContainer from '../components/CardContainer';
import CreateTodoForm from '../components/CreateTodoForm';
import Modal from '../components/Modal';
import Navbar from '../components/Navbar';
import { useModal } from '../hooks/useModal';
import DeleteTodoAlert from '../components/DeleteTodoAlert';
import Options from '../components/Options';
import Filters from '../components/Filters';

export default function Home() {
  const { createTodoModal, deleteTodoModal, filtersModal } = useModal();

  return (
    <>
      <Navbar />
      <Options />
      <main className="flex justify-center py-4">
        <CardContainer />
      </main>
      <Modal modal={createTodoModal} title="Create TO-DO">
        <CreateTodoForm />
      </Modal>
      <Modal modal={deleteTodoModal} title="Delete TO-DO">
        <DeleteTodoAlert />
      </Modal>
      <Modal modal={filtersModal} title="Filters">
        <Filters />
      </Modal>
    </>
  );
}
