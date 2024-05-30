<template>
    <!-- Navbar start -->
    <nav :class="{ 'bg-black shadow-md transition-opacity': isScrolled, 'bg-transparent': !isScrolled }" class="w-screen fixed p-4 lg:px-10 flex justify-between z-50 transition-all">
        <!-- Logo start -->
		
		<a href="/">
			<div @click="goToHome()" class="h-full flex flex-row justify-center items-center">
				<img src="@/assets/xposedlogo.png" alt="logo" class="w-24">
				<div class="inline text-6xl text-white" style="font-family: Saira Condensed, sans-serif; font-weight: 700; line-height: 90px;">POSED</div>
			</div>
		</a>
        <!-- Logo end -->

        <!-- Toggler start -->
        <button role="menubar" class="lg:hidden" @click="toggleMenu()">
            <i class="fa-solid fa-bars text-2xl text-white"></i>
        </button>
        <!-- Toggler end -->

        <!-- Menu content start -->
        <div :class="{ 'bg-opacity-90': isScrolled, 'bg-opacity-0': !isScrolled, 'hidden': !showMenu, 'flex': showMenu }" class="absolute left-0 right-0 translate-y-24 bg-black md:bg-none md:bg-opacity-0 shadow sm:hidden md:hidden lg:flex flex-col gap-4 items-start lg:item-center lg:mt-4 p-4 md:flex-row md:static md:shadow-none md:translate-y-0" role="menu" :aria-expanded="showMenu.toString()">
            <!-- Links start -->
            <div class="flex flex-col gap-[35px] lg:flex-row justify-evenly uppercase whitespace-nowrap text-lg text-white" style="font-family: Saira Condensed, sans-serif; font-weight: 700; line-height: 17.6px">
                <router-link @click="showMenu = false" to="/leaderboard" role="menuitem" class="px-4 py-2 routerBtn">
                    Leaderboard
                </router-link>
                <router-link @click="showMenu = false" to="/bonus-hunts" role="menuitem" class="px-4 py-2 routerBtn">
                    Bonus Hunts
                </router-link>
                <router-link @click="showMenu = false" to="/challenges" role="menuitem" class="px-4 py-2 routerBtn">
                    Challenges
                </router-link>
                <router-link @click="showMenu = false" to="/giveaways" role="menuitem" class="px-4 py-2 routerBtn">
                    Giveaways
                </router-link>
                <router-link @click="showMenu = false" to="/survivor" role="menuitem" class="px-4 py-2 routerBtn">
                    Survivor
                </router-link>
                <router-link @click="showMenu = false" to="/vip-freespin" role="menuitem" class="px-4 py-2 routerBtn">
                    Vip Free spin
                </router-link>
                <router-link @click="showMenu = false" to="/tournament" role="menuitem" class="px-4 py-2 routerBtn">
                    Tournament
                </router-link>
                <router-link @click="showMenu = false" to="/login" role="menuitem" class="px-4 py-2 routerBtn">
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
            isScrolled: false,
            showMenu: false
        };
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 0;

			if (this.showMenu && window.innerWidth < 768) {
                this.isScrolled = true;
            }
        },
		toggleMenu(){
			this.showMenu = !this.showMenu
			if (this.showMenu && window.innerWidth < 768) {
                this.isScrolled = true;
            }
		},
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