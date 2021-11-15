<template>
	<section
		:class="[isOpen ? 'favorites-comic--open' : 'favorites-comic--close', 'favorites-comic']"
	>
		<div class="favorites-comic__title">
			{{ $t("main_texts.favorites_header") }}
			<font-awesome-icon class="favorites-comic__close" icon="times" @click="udpateIsOpen(false)" />
		</div>
		<div class="favorites-comic__content">
			<div v-for="(item, index) in comicsArray" :key="index" class="favorites-comic__item">
				<img :src="item.img" class="favorites-comic__miniature" />
				<div class="favorites-comic__description">
					<span class="favorites-comic__name">{{ item.title }}</span>
					<span class="favorites-comic__date">{{ comicDate(item) }}</span>
				</div>
				<font-awesome-icon
					class="favorites-comic__delete"
					icon="trash"
					@click="deleteItem(index)"
				/>
			</div>
		</div>
		<div class="favorites-comic__tab" @click="udpateIsOpen(true)">
			<font-awesome-icon class="favorities-tab__icon" icon="heart" />
			<span class="favorities-tab__count">{{ comicsArray.length }}</span>
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComicTypes from "@/constants/comics/types";

@Component({
	name: "Favorites",
})
export default class Favorities extends Vue {
	isOpen = false;

	get comicsArray() {
		return this.$store.state[ComicTypes.PATH].comics_array;
	}
	get comicDate() {
		return this.$store.getters[ComicTypes.getters.GET_COMIC_DATE];
	}

	deleteItem(index: number) {
		let comics = [...this.comicsArray];
		comics.splice(index, 1);
		this.$store.dispatch(ComicTypes.actions.UPDATE_COMICS_ARRAY, comics);
		localStorage.setItem("favorites_comics", JSON.stringify(comics));
	}
	udpateIsOpen(value: boolean) {
		this.isOpen = value;
	}

	mounted() {
		const favoritesComics = localStorage.getItem("favorites_comics") || "";

		this.$store.dispatch(ComicTypes.actions.UPDATE_COMICS_ARRAY, JSON.parse(favoritesComics));
	}
}
</script>
