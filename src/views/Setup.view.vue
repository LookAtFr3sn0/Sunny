<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { IonList, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';

const apiName = ref('');
const apiKey = ref('');
</script>

<template>
    <div class="h-screen overflow-y-auto w-screen max-w-screen-lg p-4 mx-auto gap-12 flex flex-col place-items-center justify-center">
        <div class="flex flex-col place-items-center">
            <h1 class="text-2xl my-4">First time setup</h1>
            <p>It seems like this is your first time using this app.</p>
        </div>
        <ion-list class="w-full max-w-screen-sm py-4 px-2 rounded-md gap-2 flex flex-col">
            <ion-select value="pirateWeather" disabled="true" label-placement="floating" fill="outline" label="API service" ref="apiName" >
                <ion-select-option value="pirateWeather">
                    <ion-label>Pirate Weather</ion-label>
                </ion-select-option>
            </ion-select>

            <ion-input ref="apiKey" type="password" fill="outline" label="API key" label-placement="floating"></ion-input>
        </ion-list>
    </div>
</template>