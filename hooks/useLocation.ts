import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default function useLocation() {
  const [location, setLocation] = useState<any>("");

  async function getLocation() {
    try {
      const result = await Location.requestForegroundPermissionsAsync();
      if (!result.granted) {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      setLocation({ latitude, longitude });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  return location;
}
