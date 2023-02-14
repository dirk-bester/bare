<script lang="ts" context="module">
	// export let top = 0;
	// export let bottom = 0;
	// export let left = 0;
	// export let right = 0;

	let element: HTMLElement;

	let characters = [
		'🥳',
		'🪅',
		'🎉',
		'🎊',
		'✨',
		'🎭',
		'🤩',
		'🫧',
		'🥳',
		'🥰',
		'❤️‍🔥',
		'🎁',
		'💫',
		'🐣',
		'🌟',
		'🌜',
		'🌛',
		'🌝',
		'⚡'
	];

	export let confetti = new Array(97)
		.fill('🥳')
		.map((_, i) => {
			return {
				character: characters[i % characters.length],
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1.5,
				d: 'emoj' + i,
				e: null as any
			};
		})
		.sort((a, b) => a.r - b.r);

	// async function getPlanet() {
	// 	let frame: number;

	function preCelebration() {
		confetti = confetti.map((emoji) => {
			var d = document.getElementById(emoji.d);
			emoji.e = d;
			return emoji;
		});
	}

	let janitorial = false;
	let frame: number;
	export function startCelebration() {
		if (!janitorial) {
			preCelebration();
			janitorial = true;
		}
		let done = false;
		let start: DOMHighResTimeStamp, previousTimeStamp: DOMHighResTimeStamp;
		function loop(timestamp: DOMHighResTimeStamp) {
			if (start === undefined) {
				start = timestamp;
			}
			const elapsed = timestamp - start;

			if (previousTimeStamp !== timestamp) {
				confetti = confetti.map((emoji) => {
					emoji.y += 0.4 * emoji.r;
					if (emoji.y > 120) {
						emoji.x = Math.random() * 100;
						emoji.y = -20;
						emoji.e.style.left = emoji.x + '%';
					}
					emoji.e.style.top = emoji.y + '%';
					return emoji;
				});
			}
			if (elapsed < 20000) {
				// Stop the animation after 2 seconds
				previousTimeStamp = timestamp;
				if (!done) {
					frame = window.requestAnimationFrame(loop);
				}
			} else {
				done = true;
				cancelAnimationFrame(frame);
				console.log('done');
			}
		}
		window.requestAnimationFrame(loop);
	}

	export function endCelebration() {
		cancelAnimationFrame(frame);
	}
</script>

<div bind:this={element}>
	<slot>
		{#each confetti as c}
			<span id={c.d} style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
		{/each}
	</slot>
</div>

<style>
	:global(body) {
		overflow: hidden;
	}
	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>
