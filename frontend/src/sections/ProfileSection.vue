<template>
    <section class="h-screen main-bg">
		<div class="h-screen px-5 lg:px-20 py-16 lg:py-28 page-bg">
			<div class="w-full h-full checkFade animated">
				<div class="grid grid-cols-1 md:grid-cols-2 md:px-0">
					<div class="text-white text-[60px] lg:text-[120px] font-bold uppercase mt-24 md:px-0 md:mt-16 md:w-[1000px]" style="font-family: Stick No Bills, sans-serif; line-height: 0.8; max-width: 20ch;">
						Profile
					</div>
					<div data-aos="fade">
						<img src="../assets/xposedlogo2.png" class="w-80 lg:ml-80 mt-8 md:w-1/2" alt="logo">
					</div>
				</div>
                <button @click="handleLogout" class="bg-red-500 hover:bg-red-700 py-2 px-5 rounded font-bold text-black"><i class="fa-solid fa-sign-out text-black"></i> Logout</button>
			</div>
		</div>
	</section>	
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        methods: {
            ...mapActions(['logout']),
            handleLogout() {
                this.logout()
                window.location.href = '/'
            }
        }
    }
</script>
<style scoped>
.main-bg {
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.86) -0.15%, rgba(255, 0, 0, 0.86) 49.85%);
	background-repeat: no-repeat;
	background-size: cover;
	left:0;right:0;bottom:0;
}
</style>
