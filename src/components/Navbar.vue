<template>
	<section class="navbar">Nav</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ComicTypes from "@/constants/comics/types";

@Component({
	name: "Navbar",
})
export default class Navbar extends Vue {}
</script>
