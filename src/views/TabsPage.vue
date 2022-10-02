<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
        </ion-tab-button>
          
        <ion-tab-button tab="tab2" href="/tabs/search">
          <ion-icon :icon="searchOutline" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab3" href="/tabs/menu">
          <ion-label>MENU</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/profile">
          <ion-icon :icon="personOutline" />
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/cart">
          <ion-badge color="primary">11</ion-badge>
          <ion-icon :icon="cartOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonBadge, } from '@ionic/vue';
import { searchOutline, homeOutline, personOutline, cartOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet, IonBadge, },
  setup() {
    return {
      searchOutline, 
      homeOutline,
      personOutline, 
      cartOutline,
    }
  }
});
</script>

<style scoped>
ion-badge {
  top: 7px;
  left: calc(50% + 1px);
  font-size: 9px;
  font-weight: 500;
  border-radius: 10px;
  padding: 2px 2px 2px;
  min-height: 18px;
  min-width: 18px;
  line-height: 14px;
}

ion-tab-bar {
  --background: #9c6e57;
  --color: #f4f0ee;
}

.tab-selected {
  color: #121212;
}

</style>
