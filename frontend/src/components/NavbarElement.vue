<template>
    <!-- Navbar start -->
    <nav :class="{ 'bg-black shadow-md transition-opacity': isScrolled, 'bg-transparent': !isScrolled }" class="w-screen fixed p-4 lg:px-10	 flex justify-between z-50 transition-all">
		<!-- Logo start -->
		<div class="h-full flex flex-row justify-center items-center">
			<img src="@/assets/xposedlogo.png" alt="logo" class="w-24">
			<div class="inline text-6xl text-white" style="font-family: Saira Condensed, sans-serif; font-weight: 700; line-height: 90px;">POSED</div>
		</div>
		<!-- Logo end -->

		<!-- Toggler start -->
		<button role="menubar" class="lg:hidden" @click="navToggle()">
			<i class="fa-solid fa-bars text-2xl"></i>
		</button>
		<!-- Toggler end -->

		<!-- Menu content start -->
		<div :class="{ 'bg-opacity-90': isScrolled, 'bg-opacity-0': !isScrolled }" class="absolute left-0 right-0 translate-y-16 bg-white md:bg-none md:bg-opacity-0 shadow hidden sm:hidden md:hidden lg:flex flex-col gap-4 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0" role="menu" aria-expanded="false">
			<!-- Links start -->
			<div class="flex gap-[35px] justify-evenly uppercase whitespace-nowrap text-lg text-white" style="font-family: Saira Condensed, sans-serif; font-weight: 700; line-height: 17.6px">
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Leaderboard
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Bonus Hunts
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Challenges
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Giveaways
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Survivor
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Vip Free spin
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Tournament
				</router-link>
				<router-link to="/" role="menuitem" class="px-4 py-2 routerBtn transition-colors">
					Login
				</router-link>
			</div>
			
		</div>
		<!-- Menu content end -->
	</nav>
    <!-- Navbar end -->
</template>

<script>
export default {
    data() {
        return {
            isScrolled: false
        };
    },
    methods: {
        // Toggle navbar mode 
        navToggle() {
			let menu = document.querySelector("[role='menu']");
			let isExpanded = menu.getAttribute('aria-expanded');
			menu.setAttribute('aria-expanded', !isExpanded);
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		},
        handleScroll() {
            this.isScrolled = window.scrollY > 0;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
/* Add your additional styles here */
</style>