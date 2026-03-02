import  { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAdmins, deleteAdmin } from '../../features/adminSlice';

const AdminList = () => {
  const dispatch = useDispatch();
  const admins = useSelector((state) => state.admin.admins);
  const adminStatus = useSelector((state) => state.admin.status);
  const error = useSelector((state) => state.admin.error);

  useEffect(() => {
    if (adminStatus === 'idle') {
      dispatch(fetchAdmins());
    }
  }, [adminStatus, dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteAdmin(id));
  };

  let content;

  if (adminStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (adminStatus === 'succeeded') {
    content = (
      <ul>
        {admins.map((admin) => (
          <li key={admin._id}>
            {admin.name} {admin.surname} - {admin.email}
            <button onClick={() => handleDelete(admin._id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  } else if (adminStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Admins</h2>
      {content}
    </section>
  );
};

export default AdminList;
