<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Search</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'SearchPage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>

<style scoped>

ion-toolbar {
  --background: #9c6e57;
  --color: #f4f0ee;
}

ion-button {
  --background: #9c6e57;
  --color: #f4f0ee;
}

</style>