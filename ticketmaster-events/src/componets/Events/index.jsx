import EventItem from "./Components/EventItem";
import { useState } from "react";
import eventsJSON from "../../data/events.json";

const Events = ({ searchValue }) => {
  const [data] = useState(eventsJSON);
  const {
    _embedded: { events },
  } = data; //object destructuring

  const handleEventItemClick = (id) => {
    console.log("evento clickeado:", id);
  };

  const renderEvents = () => {
          let eventsFiltered = events;

          if (searchValue.length > 0){
                    eventsFiltered = eventsFiltered.filter((item) => item.name.toLocaleLowerCase().includes(searchValue));
          }
    return eventsFiltered.map((eventItem) => (
      <EventItem
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        id={eventItem.id}
      />
    ));
  };

  return (
    <div>
      Eventos
      {renderEvents()}
    </div>
  );
};

export default Events;
