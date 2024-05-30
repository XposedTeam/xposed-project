<template>
	<!-- Navbar start -->
	<navbar-element></navbar-element>
	<!-- Navbar end -->

	<!-- Rendered view start -->
	<router-view></router-view>
	<!-- Rendered view end -->

	<!-- Footer start -->
	<footer-element></footer-element>
	<!-- Footer end -->
</template>

<script>
import NavbarElement from '@/components/NavbarElement.vue';
import FooterElement from '@/components/FooterElement.vue';


export default {
	components: {
		FooterElement,
		NavbarElement
	}
}
</script>

<style>

@keyframes fadeIn {
    0%{
       opacity: 0;
       transform: translateZ(0);
    }
    100%{
       opacity: 1;
       transform: translateZ(100%)
    }
}

.checkFade {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
}

.animated{
  -webkit-animation-duration: 0.6s;
  animation-duration: 0.6s;
}
</style>
