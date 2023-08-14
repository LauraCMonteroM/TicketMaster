import { useParams } from "react-router-dom"

const Details = () => {

          const { eventId } = useParams();          

          console.log(eventId);
          return (
          <div>Detalles</div>
)}


export default Details