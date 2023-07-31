<template>
  <div class="row">
    <div class="col-8">
      ... Instagram story!
      <div v-for="card in filteredCards" :key="card.url" class="card">
        <div class="card-header">{{ card.title }}</div>
        <div class="card-body">
          <img class="card-img-top" :src="card.url" alt="neka slika..." />
        </div>
        <div class="card-footer text-muted">
          {{ card.time }}
        </div>
        <div class="card-owner">
          <p>Ime: {{ card.owner.ime }}</p>
          <p>Prezime: {{ card.owner.prezime }}</p>
        </div>
      </div>
    </div>
    <div class="col-4"></div>
    Sidebar
  </div>
</template>

<script>
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store";

let cards = [];

cards = [
  {
    title: "Naslov 1",
    time: "an hour ago",
    url: "https://picsum.photos/id/1/400/400",
    owner: { ime: "Ivo", prezime: "Ivić" },
  },
  {
    title: "Naslov 2",
    time: "1 day ago",
    url: "https://picsum.photos/id/2/400/400",
    owner: { ime: "Marko", prezime: "Marković" },
  },
  {
    title: "Naslov 3",
    time: "2 days ago",
    url: "https://picsum.photos/id/3/400/400",
    owner: { ime: "Ana", prezime: "Anić" },
  },
  {
    title: "Naslov 4",
    time: "3 days ago",
    url: "https://picsum.photos/id/4/400/400",
    owner: { ime: "Petra", prezime: "Petrić" },
  },
];

export default {
  name: "home",
  data() {
    return {
      cards: cards,
      store,
    };
  },
  computed: {
    filteredCards() {
      //logika koja filtrira cards
      let searchTerm = this.store.searchTerm.toLowerCase();
      return this.cards.filter(
        (card) =>
          card.title.toLowerCase().indexOf(searchTerm) >= 0 ||
          (card.owner &&
            (card.owner.ime.toLowerCase().indexOf(searchTerm) >= 0 ||
              card.owner.prezime.toLowerCase().indexOf(searchTerm) >= 0))
      );
    },
  },
  components: {},
};
</script>

<style lang="scss">
.card {
  margin-bottom: 20px;
}
.card-owner {
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
