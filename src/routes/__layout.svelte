<script>
	let y;
	import '../app.css';
</script>


<!-- {#if y < 50} -->
<nav class="fixed z-50 w-screen bg-maroon shadow-lg shadow-black/20 overflow-hidden h-max direction nav text-white">
	<div
		id="nav-items"
		class="group hidden h-8 min-h-[4rem] items-start transition-[height] duration-[600ms] sm:grid-cols-[1.5fr_repeat(6,_1fr)] md:grid hover:md:h-32 lg:grid-cols-7 hover:lg:h-28"
	>
		<a href="/" data-chapter="1" class="my-6 flex flex-col justify-center pl-6">
			<div class="mb-2 flex h-5 flex-col items-center">
				<img src="static/logos/charlesvr-lightgold.png" alt="Charles VR" class="max-h-full" />
			</div>
			<div
				class="h-0 delay-200 text-center text-lg leading-none hover:text-gold-500 opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				Introduction to Charles V|R
			</div>
		</a>
		<a
			href="/2"
			data-chapter="2"
			class="flex flex-col py-3 px-2 transition-colors hover:text-gold-500"
		>
			<div class="text-center text-4xl">II</div>
			<div
				class="h-0 text-center text-lg delay-200 leading-none opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				The Coronation in Context
			</div>
		</a>
		<a
			href="/3"
			data-chapter="3"
			class="flex flex-col py-3 px-2 transition-colors hover:text-gold-500"
		>
			<div class="text-center text-4xl">III</div>
			<div
				class="h-0 text-center delay-200 text-lg leading-none opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				Who Was Charles V?
			</div>
		</a>
		<a
			href="/4"
			data-chapter="4"
			class="flex flex-col py-3 px-2 transition-colors hover:text-gold-500"
		>
			<div class="text-center text-4xl">IV</div>
			<div
				class="h-0 text-center text-lg delay-200 leading-none opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				An Imperial Coronation in Bologna
			</div>
		</a>
		<a
			href="/5"
			data-chapter="5"
			class="flex flex-col py-3 px-2 transition-colors hover:text-gold-500"
		>
			<div class="text-center text-4xl">V</div>
			<div
				class="h-0 text-center text-lg delay-200 leading-none opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				A Focus on Music
			</div>
		</a>
		<a
			href="/6"
			data-chapter="6"
			class="flex flex-col py-3 px-2 transition-colors hover:text-gold-500"
		>
			<div class="text-center text-4xl">VI</div>
			<div
				class="h-0 text-center text-lg delay-200 leading-none opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				A Melancholy Mass
			</div>
		</a>
		<a
			href="/7"
			data-chapter="7"
			class="flex flex-col py-3 px-2 transition-colors hover:text-gold-500"
		>
			<div class="text-center text-4xl">VII</div>
			<div
				class="h-0 text-center text-lg delay-200 leading-none opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100"
			>
				The Charles V|R Experience
			</div>
		</a>
	</div>
	<div id="nav-mobile" class="flex h-16 items-center justify-between pl-4 md:hidden">
		<a href="/" class="flex h-full shrink py-5 pr-4">
			<img src="static/logos/charlesvr-lightgold.png" alt="Charles VR" class=" h-full w-auto" />
		</a>
		<div class="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label class="menu__btn" for="menu__toggle">
			  <span></span>
			</label>
			<ul class="menu__box">
				<li><img src="static/logos/charlesvr-lightgold.png" alt="Charles VR" class=" menu_icon" /></li>
				<li><a class="menu__item hover:bg-maroon" href="/">I: Introduction to Charles VR</a></li>
				<li><a class="menu__item hover:bg-maroon" href="/2">II: Coronation in Context</a></li>
				<li><a class="menu__item hover:bg-maroon" href="/3">III: Who was Charles VR</a></li>
				<li><a class="menu__item hover:bg-maroon" href="/4">IV: Focus on Music</a></li>
				<li><a class="menu__item hover:bg-maroon" href="/5">V: A Melancholy Mass</a></li>
				<li><a class="menu__item hover:bg-maroon" href="/6">VI: The Charles VR Experience</a></li>
			  </ul>
			</div>
	</div>
	<div id="scroll-bar" class="flex h-[12px] w-screen items-center ">
		<div id="progress-bar" class="h-[5px] w-full " />
	</div>
</nav>
<!-- {/if} -->
<div class="overflow-hidden">
	<slot />
</div>
<svelte:window bind:scrollY={y} />
<style>
	#menu__toggle {
  opacity: 0;
}
#menu__toggle:checked + .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
}
#menu__toggle:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  left: 0 !important;
}
.menu__btn {
  position: fixed;
  top: 30px;
  right: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fec755;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -8px;
}
.menu__btn > span::after {
  content: '';
  top: 8px;
}
.menu__box {
  display: block;
  position: fixed;
  top: 0;
  background-color:  #54172c;
  left: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 40px 0;
  list-style: none;
  box-shadow: 5px 0px 0px rgb(64 18 33);
  transition-duration: .25s;
}
.menu__item {
  display: block;
  padding: 25px 50px;
  color: #fec552;
  font-size: 20px;
  font-weight: 300;
  text-decoration: none;
  transition-duration: .25s;
}
nav {
	color: #fec755;
	background-color: #54172c;
}

#scroll-bar {
	border-top: #fec755 2px solid;
	border-bottom: #fec755 5px solid;
}

.menu_icon {
	padding: 25px 50px;
	width: 75%
}
</style>
