<template>
    <section class="h-screen main-bg">
		<div class="h-screen px-5 lg:px-20 py-16 lg:py-28 page-bg">
			<div class="w-full h-full">
				<div data-aos="flip-up" class="grid grid-cols-2">
					<div class="text-white text-[60px] lg:text-[130px] font-bold uppercase mt-24 md:w-1/2" style="font-family: Stick No Bills, sans-serif; line-height: 0.8;">Leaderboard</div>
					<div>
						<img src="../assets/xposedlogo2.png" class="w-80 ml-80 mt-8 md:w-1/2" alt="">
					</div>
				</div>
			</div>
		</div>
	</section>

    <!-- Leaderboard Section -->
	<section class="h-[1300px] leaderboard-bg p-32">
		<div data-aos="zoom-in-down" class="h-[1000px] leaderboard-card rounded-xl mt-10">
			<img src="../assets/leaderboard.png" alt="image" class="block mx-auto w-[500px] lead-img">
			<div class="flex flex-row justify-center">
				<div data-aos="flip-left" class="mt-60 text-center">
					<img src="../assets/silvertrophy.png" alt="Image 1">
					<p class="text-white text-3xl font-bold" style="font-family: Saira Condensed, sans-serif;">#Player202</p>
				</div>
				<div data-aos="zoom-in" class="mt-36 text-center">
					<img src="../assets/goldtrophy.png" alt="Image 2">
					<p class="text-white text-3xl font-bold" style="font-family: Saira Condensed, sans-serif;">#Player201</p>
				</div>
				<div data-aos="flip-right" class="mt-60 text-center">
					<img src="../assets/bronzetrophy.png"  alt="Image 3">
					<p class="text-white text-3xl font-bold" style="font-family: Saira Condensed, sans-serif;">#Player203</p>
				</div>
			</div>
			<div class="flex justify-center mt-6" style="font-family: Saira Condensed, sans-serif;">
				<table>
					<tr>
						<th class="px-32 py-8 text-white text-2xl font-bold">User</th>
						<th class="px-32 py-8 text-white text-2xl font-bold">Amount</th>
						<th class="px-32 py-8 text-white text-2xl font-bold">Price</th>
					</tr>
					<tr>
						<td class="px-32 py-3 text-white font-semibold">ski*******</td>
						<td class="px-32 py-3 text-white font-semibold">$ 1,706,033</td>
						<td class="px-32 py-3 text-red-600 font-semibold">$ 15,000</td>
					</tr>
					<tr>
						<td class="px-32 py-3 text-white font-semibold">ski*******</td>
						<td class="px-32 py-3 text-white font-semibold">$ 1,706,033</td>
						<td class="px-32 py-3 text-red-600 font-semibold">$ 15,000</td>
					</tr>
					<tr>
						<td class="px-32 py-3 text-white font-semibold">ski*******</td>
						<td class="px-32 py-3 text-white font-semibold">$ 1,706,033</td>
						<td class="px-32 py-3 text-red-600 font-semibold">$ 15,000</td>
					</tr>
					<tr>
						<td class="px-32 py-3 text-white font-semibold">ski*******</td>
						<td class="px-32 py-3 text-white font-semibold">$ 1,706,033</td>
						<td class="px-32 py-3 text-red-600 font-semibold">$ 15,000</td>
					</tr>
					<tr>
						<td class="px-32 py-3 text-white font-semibold">ski*******</td>
						<td class="px-32 py-3 text-white font-semibold">$ 1,706,033</td>
						<td class="px-32 py-3 text-red-600 font-semibold">$ 15,000</td>
					</tr>
					<tr>
						<td class="px-32 py-3 text-white font-semibold">ski*******</td>
						<td class="px-32 py-3 text-white font-semibold">$ 1,706,033</td>
						<td class="px-32 py-3 text-red-600 font-semibold">$ 15,000</td>
					</tr>
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
	left:0;right:0;bottom:0;
}

.leaderboard-bg {
	background: linear-gradient(180deg, rgba(255, 0, 0, 0.86) 40%, rgba(0, 0, 0, 0.86) 80%);
}

.leaderboard-card {
	background: linear-gradient(180deg, rgba(153, 0, 0, 0.86) 50%, rgba(0, 0, 0, 0.86) 80%);
	position: relative;
}

.leaderboard-card .lead-img {
	position: absolute;
	top: -80px;
	left: 50.5%;
	transform: translateX(-50%);
}
</style>
