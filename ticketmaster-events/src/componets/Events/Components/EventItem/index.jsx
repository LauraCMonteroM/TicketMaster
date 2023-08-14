import styles from '../EventItem/EventItem.module.css'
const EventItem = ({ info, name, image, onEventClick, id }) => {
  //props dentro de llaves

  const handleSeeMoreClick = (evt) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div className={styles.eventItemContainer}>
      <img src={image} alt={name} width={200} height={200} />
      <div className={styles.eventInfoContainer}> 
        <h4 className={styles.eventIName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button onClick={handleSeeMoreClick} className={styles.seeMoreBtn}>Ver más</button>
      </div>     
    </div>
  );
};

export default EventItem;
