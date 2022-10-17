<script>
	import '../app.css';
	var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
</script>

<nav class="z-50 fixed w-screen bg-gold-500 shadow-lg shadow-black/20 top-0" id="navbar">
	<div
		id="nav-items"
		class="group hidden h-8 min-h-[4rem] items-start transition-[height] duration-[450ms] sm:grid-cols-[1.5fr_repeat(6,_1fr)] md:grid hover:md:h-32 lg:grid-cols-7 hover:lg:h-24"
	>
		<a href="/" data-chapter="1" class="my-6 flex flex-col justify-center pl-6">
			<div class="mb-2 flex h-5 flex-col items-center">
				<img src="..//logos/charlesvr-black.png" alt="Charles VR" class="max-h-full" />
			</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100 opacity-transition"
			>
				Introduction to Charles V|R
			</div>
		</a>
		<a
			href="/2"
			data-chapter="2"
			class="flex flex-col py-3 px-2 transition-colors hover:text-maroon"
		>
			<div class="text-center text-4xl font-bold">II</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
			>
				The Coronation in Context
			</div>
		</a>
		<a
			href="/3"
			data-chapter="3"
			class="flex flex-col py-3 px-2 transition-colors hover:text-maroon"
		>
			<div class="text-center text-4xl font-bold">III</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
			>
				Who Was Charles V?
			</div>
		</a>
		<a
			href="/4"
			data-chapter="4"
			class="flex flex-col py-3 px-2 transition-colors hover:text-maroon"
		>
			<div class="text-center text-4xl font-bold">IV</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
			>
				An Imperial Coronation in Bologna
			</div>
		</a>
		<a
			href="/5"
			data-chapter="5"
			class="flex flex-col py-3 px-2 transition-colors hover:text-maroon"
		>
			<div class="text-center text-4xl font-bold">V</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
			>
				A Focus on Music
			</div>
		</a>
		<a
			href="/6"
			data-chapter="6"
			class="flex flex-col py-3 px-2 transition-colors hover:text-maroon"
		>
			<div class="text-center text-4xl font-bold">VI</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
			>
				A Melancholy Mass
			</div>
		</a>
		<a
			href="/7"
			data-chapter="7"
			class="flex flex-col py-3 px-2 transition-colors hover:text-maroon"
		>
			<div class="text-center text-4xl font-bold">VII</div>
			<div
				class="h-0 text-center text-lg leading-none opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100"
			>
				The Charles V|R Experience
			</div>
		</a>
	</div>
	<div id="nav-mobile" class="flex h-16 items-center justify-between pl-4 md:hidden">
		<a href="/" class="flex h-full shrink py-5 pr-4">
			<img src="..//logos/charlesvr-black.png" alt="Charles VR" class=" h-full w-auto" />
		</a>
		<button id="nav-dropdown" class="p-4">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
			</svg>
		</button>
	</div>
	<div id="scroll-bar" class="flex h-3 w-screen items-center bg-maroon">
		<div id="progress-bar" class="h-[2px] w-full bg-gold-500" />
	</div>
</nav>
<div class="overflow-hidden">
	<slot />
</div>
<style>
#navbar {
	transition: top 0.5s;
}
</style>