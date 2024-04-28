import { useCities } from "../contexts";
import styles from "../styles/CityList.module.css";
import { CityItem } from "./CityItem";
import { Message } from "./Message";
import { Spinner } from "./Spinner";

export function CitiesList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
