import EventItem from "./Components/EventItem";
import data from "../../data/events.json";

const {  _embedded: { events }} = data; //object destructuring
const Events = () => {
  const eventsComponent = events.map((eventItem) => (
    <EventItem
      key={`event-item-${eventItem.id}`}
      name={eventItem.name}
      info={eventItem.info}
      image={eventItem.images[0].url}
    />
  ));
  return (
    <div>
      Eventos
      {eventsComponent}
    </div>
  );
};

export default Events;
