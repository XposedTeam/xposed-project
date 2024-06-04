<template>
    <!-- Main Section -->
		<section class="h-screen main-bg relative">
			<div class="h-screen px-5 lg:px-20 py-16 lg:py-28 page-bg">
				<div class="w-full h-full checkFade animated">
					<div class="grid grid-cols-1 lg:grid-cols-2 md:px-0">
						<div class="text-white text-[55px] md:text-[100px] lg:text-[120px] font-bold uppercase mt-24 md:px-0 md:ml-6 lg:ml-0 md:mt-24 lg:mt-16 md:w-[1000px]" style="font-family: Stick No Bills, sans-serif; line-height: 0.8; max-width: 20ch;">
							Leaderboard
						</div>
						<div data-aos="fade">
							<img src="../assets/xposedlogo2.png" class="w-80 lg:ml-80 mt-8 md:mt-14 md:ml-4 md:w-[80%] lg:mt-0 lg:w-1/2" alt="logo">
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Leaderboard Section -->
		<section class="leaderboard-bg p-8 md:p-16 lg:p-32 relative">
			<div class="absolute inset-0 -z-20 flex justify-center items-center opacity-50">
				<img src="../assets/xposedlogo3.png" class="w-full h-full object-contain" alt="token">
			</div>
			<div class="leaderboard-card rounded-xl mt-10 h-full lg:h-[1000px] relative z-10">
				<img src="../assets/leaderboard.png" alt="image" class="block mx-auto w-[200px] lg:w-[380px] lead-img">
				<div class="flex flex-row lg:flex-row justify-center items-center">
					<div class="mt-14 lg:mt-52 text-center lg:w-auto lg:px-4">
						<img src="../assets/silvertrophy.png" alt="Image 1" class="mx-auto w-24 md:w-36 lg:w-48">
						<p class="text-white text-xl md:text-3xl font-bold" style="font-family: Saira Condensed, sans-serif;">#Player202</p>
					</div>
					<div class="mt-10 lg:mt-48 text-center lg:w-auto lg:px-4 lg:relative lg:bottom-20">
						<img src="../assets/goldtrophy.png" alt="Image 2" class="mx-auto w-24 md:w-36 lg:w-48">
						<p class="text-white text-xl md:text-3xl font-bold" style="font-family: Saira Condensed, sans-serif;">#Player201</p>
					</div>
					<div class="mt-14 lg:mt-52 text-center lg:w-auto lg:px-4">
						<img src="../assets/bronzetrophy.png" alt="Image 3" class="mx-auto w-24 md:w-36 lg:w-48">
						<p class="text-white text-xl md:text-3xl font-bold" style="font-family: Saira Condensed, sans-serif;">#Player203</p>
					</div>
				</div>
				<div class="flex justify-center mt-6" style="font-family: Saira Condensed, sans-serif;">
					<table class="w-full lg:w-auto">
						<thead>
							<tr>
								<th class="px-2 md:px-8 lg:px-32 py-2 md:py-8 text-white text-base md:text-2xl font-bold">User</th>
								<th class="px-2 md:px-8 lg:px-32 py-2 md:py-8 text-white text-base md:text-2xl font-bold">Amount</th>
								<th class="px-2 md:px-8 lg:px-32 py-2 md:py-8 text-white text-base md:text-2xl font-bold">Price</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">ski*******</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">$ 1,706,033</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-red-600 font-semibold">$ 15,000</td>
							</tr>
							<tr>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">ski*******</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">$ 1,706,033</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-red-600 font-semibold">$ 15,000</td>
							</tr>
							<tr>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">ski*******</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">$ 1,706,033</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-red-600 font-semibold">$ 15,000</td>
							</tr>
							<tr>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">ski*******</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">$ 1,706,033</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-red-600 font-semibold">$ 15,000</td>
							</tr>
							<tr>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">ski*******</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">$ 1,706,033</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-red-600 font-semibold">$ 15,000</td>
							</tr>
							<tr>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">ski*******</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-white font-semibold">$ 1,706,033</td>
								<td class="px-2 md:px-[85px] lg:px-32 py-2 md:py-3 whitespace-nowrap text-red-600 font-semibold">$ 15,000</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.main-bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.86) -0.15%, rgba(255, 0, 0, 0.86) 49.85%);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
}

.leaderboard-bg {
    background: linear-gradient(180deg, rgba(255, 0, 0, 0) 0%, rgba(255, 0, 0, 0.86) 0%, rgba(0, 0, 0, 0.86) 50%, rgba(255, 0, 0, 0.86) 100%, rgba(255, 0, 0, 0.86) 100%);
    position: relative;
}

.leaderboard-card {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.70) 50%, rgba(153, 0, 0, 0.86) 80%);
    position: relative;
}

.leaderboard-card .lead-img {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
}

/* Additional styling for absolute positioning of background image */
.absolute-bg {
    position: absolute;
    inset: 0;
    opacity: 0.5;
}

.absolute-bg img {
    width: 100%;
    height: 100%;
}

</style>
