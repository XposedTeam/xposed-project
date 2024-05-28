<template>
    <!-- Main section start -->
	<section class="h-screen bg">
		<div class="h-screen px-5 lg:px-20 py-16 lg:py-28 page-bg">
			<div class="w-full h-full">
				<div class="grid grid-cols-2">
					<div class="text-white text-[6	0px] lg:text-[130px] font-bold uppercase mt-16 md:w-1/2" style="font-family: Stick No Bills, sans-serif; line-height: 0.8;">Welcome to Xposed Unofficial</div>
					<div>
						<img src="../assets/xposedlogo.png" class="w-80 ml-80 mt-8 md:w-1/2" alt="">
					</div>
				</div>
			</div>
		</div>
		

	</section>
	<section class="h-[1700px] page2-bg">
		<div class="flex gap-8 flex-col md:flex-row items-center">
            <h1 class="mt-32 ml-32">
                <img src="../assets/dice.png" class="min-w-[600px]" alt="">
            </h1>
            <p class="mt-32 text-white text-5xl font-bold mr-32 uppercase " style="font-family: Saira Condensed, sans-serif;">
                if you plan to gamble money you can afford to lose, go to roobet.com/xposed
            </p>
        </div>
		<div class="flex gap-8 flex-col md:flex-row items-center">
			<div>
				<p class="text-white text-5xl font-bold ml-32 uppercase " style="font-family: Saira Condensed, sans-serif;">
					Where High Stakes Meet High Entertainment
				</p>
				<p class="text-white text-lg font-light ml-32 mt-2" style="font-family: Saira Condensed, sans-serif;">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, dolorum doloribus unde labore, 
					minus accusamus facere, sapiente necessitatibus mollitia et tenetur velit ut esse corporis ullam tempore asperiores in vitae?
				</p>
			</div>
            <h1 class="mt-10 mr-32">
                <img src="../assets/table.png" class="min-w-[600px]" alt="">
            </h1>
        </div>
		<div class="flex gap-8 flex-col md:flex-row items-center">
            <h1 class="mt-10 ml-32">
                <img src="../assets/dice.png" class="min-w-[600px]" alt="">
            </h1>
			<div>
				<p class="text-white text-lg font-light mr-32 mt-2" style="font-family: Saira Condensed, sans-serif;">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eveniet, 
					recusandae ad iste quam hic porro officiis unde accusantium ipsum, ullam, quidem quod. 
					Fugiat neque non facilis veniam. Quisquam, nisi qui rerum modi asperiores voluptatem sint, 
					perspiciatis nam vero vel explicabo dignissimos? Aspernatur dolor voluptas ut ab. Sit hic harum 
					cupiditate quis mollitia quas in nam, reprehenderit velit ipsum fugiat.
				</p>
			</div>
        </div>
	</section>
	<!-- <section class="h-screen">
		qeqqe
	</section> -->
	<!-- Main section end -->
</template>

<script>
export default {

}
</script>

<style scope>
.bg {
	background: linear-gradient(180deg, rgba(126, 0, 0, 0.86) 14%, rgba(56, 2, 209, 0.86) 98%);
	background-repeat: no-repeat;
	background-size: cover;
	left:0;right:0;bottom:0;
}

.page-bg {
	background-image: url('../assets/mainsection.png');
	background-repeat: no-repeat;
	background-size: cover;
	left:0;right:0;bottom:0;
}

.page2-bg {
	background: linear-gradient(180deg, 
    rgba(56, 2, 209, 0.86) 10%, 
    rgba(126, 0, 0, 0.86) 40%, 
    rgba(126, 0, 0, 0.86) 40%, 
    rgba(56, 2, 209, 0.86) 90%);
	left:0;right:0;bottom:0;
}

</style>