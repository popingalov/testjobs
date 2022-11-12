import { useParams } from 'react-router-dom';

export default function DetailsBord() {
  const { id } = useParams();
  console.log(id);

  return <h1>Work</h1>;
}
