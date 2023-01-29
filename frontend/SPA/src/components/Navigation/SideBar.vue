<template>
	<aside :class="`${is_expanded ? 'is-expanded' : ''}`">
		<h3>Menu</h3>
		<div class="menu">
			<router-link to="/home" class="button">
				<span class="text">Home</span>
			</router-link>
			<router-link to="/expenses" class="button">
				<span class="text text-align-center ">Expenses</span>
			</router-link>
			<router-link to="/webscraper" class="button">
				<span class="text">Webscraper</span>
			</router-link>
			<router-link to="/strava" class="button">
				<span class="text">Strava</span>
			</router-link>
			<router-link to="/duolingo" class="button">
				<span class="text">duolingo</span>
			</router-link>
		</div>
	</aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
// const ToggleMenu = () => {
// 	is_expanded.value = !is_expanded.value
// 	localStorage.setItem("is_expanded", is_expanded.value)
// }
</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: #d3d3de !important;
	overflow: hidden;
	min-height: 85vh;
	transition: 0.2s ease-in-out;
	.flex {
		flex: 1 1 0%;
	}
	.logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}
	.menu-toggle-wrap {
		display: flex;
		justify-content: flex-end;
		margin-bottom: 1rem;
		position: relative;
		top: 0;
		transition: 0.2s ease-in-out;
		.menu-toggle {
			transition: 0.2s ease-in-out;
			.material-icons {
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;
			}
			
			&:hover {
				.material-icons {
					color: var(--primary);
					transform: translateX(0.5rem);
				}
			}
		}
	}
	.menu {
		margin: 0 -1rem;
		.button {
			display: flex;
			border-radius: 10px;
			overflow:hidden;
			font-size: large;
			text-decoration: none;
			transition: 0.2s ease-in-out;
			padding: 0.5rem 1rem;
			color: #d3d3de !important;
			&:hover {
				background-color: #3c3c3c;
			}
			&.router-link-exact-active {
				background-color: #3c3c3c;
				border-right: 5px solid var(--primary);
			}
		}
	}
	.footer {
		opacity: 0;
		transition: opacity 0.3s ease-in-out;
		p {
			font-size: 0.875rem;
			color: var(--grey);
		}
	}
	&.is-expanded {
		width: var(--sidebar-width);
		.menu-toggle-wrap {
			top: -3rem;
			
			.menu-toggle {
				transform: rotate(-180deg);
			}
		}
		h3, .button .text {
			opacity: 1;
		}
		.button {
			.material-icons {
				margin-right: 1rem;
			}
		}
		.footer {
			opacity: 0;
		}
	}
	@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}
}
</style>