<script setup>
import { ref } from 'vue';
import { IonContent, IonPage, IonSpinner } from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';

const weatherIcon = ref('Sunny');
const city = ref('Rome');
const currentLocation = ref({latitude: 41.9, longitude: 12.5});
const loading = ref(true);

const getLocation = async () => {
  let coords = (await Geolocation.getCurrentPosition()).coords;
  currentLocation.value = {
    latitude: coords.latitude,
    longitude: coords.longitude
  };
  loading.value = false;
};
try {
  getLocation();
} catch (error) {
  console.error('Error getting location', error);
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="weather" v-if="loading">
        <div id="location">
          <ion-spinner name="crescent" />
          <span>Loading</span>
        </div>
      </div>
      <div id="weather" v-else>
        <div id="location">
          <span class="material-symbols-outlined">{{ weatherIcon }}</span>
          <span>{{ city }}</span>
        </div>
        <span id="coords">{{ `${currentLocation.latitude}, ${currentLocation.longitude}` }}</span>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
#weather {
  position: relative;
  top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  display: flex;
  flex-direction: column;
}
#location {
  display: flex;
  gap: 0.5rem;
  font-size: 1.5rem;
}
#coords {
  font-size: 0.75rem;
}
</style>
