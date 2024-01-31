import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const BookTicketModal = ({ openModal, setOpenModal, showData }) => {
  const { register, handleSubmit, reset } = useForm();
  const [bookedShow, setBookedShow] = useState({});

  useEffect(() => {
    localStorage.setItem('bookedShow', JSON.stringify(bookedShow));
  }, [bookedShow]);

  const handleBooking = data => {
    setBookedShow(data);
    reset();
    setOpenModal(false);
    toast.success(`Show booked successfully`);
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Book '{showData?.name}' Ticket</Modal.Header>
      <Modal.Body>
        <form action="" onSubmit={handleSubmit(handleBooking)}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              {...register('name')}
              type="text"
              placeholder="Full name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="movie" value="Movie name" />
            </div>
            <TextInput
              {...register('movie')}
              type="text"
              value={showData?.name}
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="day" value="Choose day" />
            </div>
            <Select {...register('day')}>
              {showData?.schedule?.days?.map(day => (
                <option value={day} key={day}>
                  {day}
                </option>
              ))}
            </Select>
          </div>
          <div className="mt-2 ">
            <Button type="submit">Book</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default BookTicketModal;
