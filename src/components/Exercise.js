import { Link } from 'react-router-dom';

const Exercise = (props) => {
  return (
    <tr>
      <td>{props.exercise.user}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.slice(0, 10)}</td>
      <td>
        <Link to={`/editExercise/${props.exercise._id}`}>edit</Link> |{' '}
        <a href="#/" onClick={() => props.delete(props.exercise._id)}>
          delete
        </a>
      </td>
    </tr>
  );
};

export default Exercise;
