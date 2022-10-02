<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button>
            <ion-icon slot="icon-only" :icon="menuOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <h1>Hello World</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonContent, IonButtons, IonButton, IonIcon, } from '@ionic/vue';
import { menuOutline } from 'ionicons/icons';

export default  defineComponent({
  name: 'HomePage',
  components: { IonHeader, IonToolbar, IonContent, IonPage, IonButtons, IonButton, IonIcon, },

  setup() {
    return {
      menuOutline,
    }
  }

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
