<script setup>
import { ref, watch } from 'vue';
import { IonContent, IonPage, IonSpinner, IonButton } from '@ionic/vue';
import { Geolocation } from '@capacitor/geolocation';

const weatherIcon = ref('Sunny');
const city = ref('Rome');
const address = ref('Via del Corso, 123');
const currentLocation = ref({latitude: 41.9, longitude: 12.5});
const loading = ref(true);
const error = ref(null);

const getLocation = async () => {
  let coords;
  try {
    coords = (await Geolocation.getCurrentPosition()).coords;
    currentLocation.value = {
      latitude: coords.latitude,
      longitude: coords.longitude
    };
  }
  catch (error) {
    error.value = error;
  }
  loading.value = false;
};
try {
  Geolocation.checkPermissions().then((result) => {
    if (result.location === 'granted') {
      getLocation();
    }
    else if (result.location === 'prompt') {
      Geolocation.requestPermissions().then((result) => {
        if (result.location === 'granted') {
          getLocation();
        }
        else {
          console.error('Location permission denied');
        }
      });
    }
  });
} catch (error) {
  console.error('Error getting location', error);
}

const getAddress = async () => {
 const url = 'https://api.geocodify.com/v2/reverse?api_key=' + import.meta.env.VITE_GEO_API_KEY + '&lat=' + currentLocation.value.latitude + '&lng=' + currentLocation.value.longitude;
  const response = await fetch(url);
  const data = (await response.json()).response;
  if (data.error) {
    console.error(data.error);
    return;
  }
  console.log(data.features[0].properties.street + ', ' + data.features[0].properties.housenumber);
  address.value = data.features[0].properties.street + ', ' + data.features[0].properties.housenumber;
  city.value = data.features[0].properties.locality;
};
const getWeather = async () => {
  const url = '';
}
// Disable during development
// watch(loading, (value) => {
//   if (value === false) {
//     getAddress();
//   };
// }); 
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <span class="absolute">{{ currentLocation.latitude }}, {{currentLocation.longitude}}</span>
      <div class="h-screen w-screen p-4">
        <ion-spinner v-if="loading" name="crescent" class="absolute left-1/2 transform -translate-x-1/2" />
        <div class="flex flex-col text-center">
          <div class="flex *:text-4xl mt-36 justify-center">
            <span class="material-symbols-outlined">{{ weatherIcon }}</span>
            <span>{{ city }}</span>
          </div>
          <span>{{ address }}</span>
          <!-- Development only -->
          <ion-button :disabled="loading" @click="getAddress" class="mt-4">Get Weather</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>
